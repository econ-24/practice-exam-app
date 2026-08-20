
// Pull out the topic name from every question, then throw away duplicates.
// A "Set" is a JS structure that automatically drops repeats — perfect for this.
let timerInterval = null

function getUniqueTopics(questionList) {
  const topicSet = new Set();
  questionList.forEach(q => topicSet.add(q.topic));
  return Array.from(topicSet); // turn the Set back into a normal array
}

// Take that list of topics and draw one checkbox per topic onto the page.
const MIDTERM_CUTOFF = 13;

function getLectureNumber(topic) {
  const match = topic.match(/^Lecture (\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function renderTopicCheckboxes(topics) {
  const container = document.getElementById('topics');
  container.innerHTML = '';

  const preMidterm = topics.filter(t => getLectureNumber(t) <= MIDTERM_CUTOFF);
  const postMidterm = topics.filter(t => getLectureNumber(t) > MIDTERM_CUTOFF);

  function renderGroup(title, topicGroup, groupClass) {
    if (topicGroup.length === 0) return;

    const heading = document.createElement('h2');
    heading.className = 'group-heading';
    heading.textContent = title;
    container.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'topic-grid';

    topicGroup.forEach(topic => {
      const wrapper = document.createElement('label');
      wrapper.className = `topic-card ${groupClass}`;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = topic;
      checkbox.className = 'topic-checkbox';

      const inner = document.createElement('div');
      inner.className = 'card-inner';

      const tfCount = questions.filter(q => q.topic === topic && q.type === 'true_false').length;
      const orCount = questions.filter(q => q.topic === topic && q.type === 'open_response').length;

     const front = document.createElement('div');
      front.className = 'card-face card-front';
      const lectureNumMatch = topic.match(/^(Lecture \d+)\s*-\s*(.+)$/);
      const lecturePart = lectureNumMatch ? lectureNumMatch[1] : topic;
      const titlePart = lectureNumMatch ? lectureNumMatch[2] : '';
      front.innerHTML = `<div class="card-title"><span class="card-lecture-num">${lecturePart}</span> - ${titlePart}</div><div class="card-badge">${tfCount} T/F &middot; ${orCount} OR</div>`;

      const back = document.createElement('div');
      back.className = 'card-face card-back';
      back.textContent = `${topic} — selected`;

      inner.appendChild(front);
      inner.appendChild(back);

      checkbox.addEventListener('change', () => {
        wrapper.classList.toggle('flipped', checkbox.checked);
        updateSelectionSummary(); // <-- new: live-updates the sticky bar
      });

      wrapper.appendChild(checkbox);
      wrapper.appendChild(inner);
      grid.appendChild(wrapper);
    });

    container.appendChild(grid);
  }

  renderGroup('Pre-Midterm', preMidterm, 'pre-midterm');
  renderGroup('Post-Midterm', postMidterm, 'post-midterm');
}

// Live-updates the sticky summary bar as checkboxes change
function updateSelectionSummary() {
  const checkedBoxes = document.querySelectorAll('.topic-checkbox:checked');
  const selectedTopics = Array.from(checkedBoxes).map(box => box.value);
  const summaryBar = document.getElementById('selection-summary');

  if (selectedTopics.length === 0) {
    summaryBar.textContent = 'No lectures selected yet';
    return;
  }

  const pool = questions.filter(q => selectedTopics.includes(q.topic));
  const totalMinutes = pool.reduce((sum, q) => sum + q.minutes, 0);
  const count = selectedTopics.length;

  summaryBar.textContent = `${count} lecture${count > 1 ? 's' : ''} selected · ~${Math.round(totalMinutes)} of 60 min available`;
}


// Run both functions immediately when the page loads.
const topics = getUniqueTopics(questions);
renderTopicCheckboxes(topics);

// Randomly shuffles an array without changing the original.
// (This is the standard algorithm — you don't need to invent this yourself.)
function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
document.getElementById('exam-output').addEventListener('click', (event) => {
  if (!event.target.classList.contains('answer-pill')) return;

  // Un-select this pill's sibling (so only True OR False is highlighted, never both)
  const pillGroup = event.target.parentElement;
  pillGroup.querySelectorAll('.answer-pill').forEach(pill => pill.classList.remove('selected'));

  // Select the one that was actually clicked
  event.target.classList.add('selected');
});

// The main algorithm: build one exam from the selected topics.
function generateExam(selectedTopics, allQuestions, targetMinutes = 60, maxOpenResponse = 4) {
  // Keep only questions whose topic was checked.
  const pool = allQuestions.filter(q => selectedTopics.includes(q.topic));

  // Split into two separately-shuffled piles so we can alternate between them.
  const trueFalse = shuffle(pool.filter(q => q.type === 'true_false'));
  const openResponse = shuffle(pool.filter(q => q.type === 'open_response'));

  const exam = [];
  let totalMinutes = 0;
  let tfIndex = 0;
  let orIndex = 0;

  // Keep adding one T/F, then one open-response, then repeat — until we hit ~60 min.
  while (totalMinutes < targetMinutes) {
    let addedSomething = false;

    if (tfIndex < trueFalse.length) {
      const q = trueFalse[tfIndex];
      if (totalMinutes + q.minutes <= targetMinutes + 3) {
        exam.push(q);
        totalMinutes += q.minutes;
        tfIndex++;
        addedSomething = true;
      }
    }

    if (totalMinutes < targetMinutes && orIndex < openResponse.length && orIndex < maxOpenResponse) {
      const q = openResponse[orIndex];
      if (totalMinutes + q.minutes <= targetMinutes + 3) {
        exam.push(q);
        totalMinutes += q.minutes;
        orIndex++;
        addedSomething = true;
      }
    }

    // If neither pile had anything left to add, stop — we've used everything available.
    if (!addedSomething) break;
  }

  // Did we run out of questions before reaching 60 minutes? That's Stage 5's flag.
const ranOutOfQuestions = (tfIndex >= trueFalse.length && (orIndex >= openResponse.length || orIndex >= maxOpenResponse));
  const ranShort = totalMinutes < targetMinutes && (tfIndex >= trueFalse.length || orIndex >= maxOpenResponse);

  return { exam, totalMinutes, ranShort };
}

// Wire it up: when the button is clicked, run the whole thing.
document.getElementById('generate-btn').addEventListener('click', () => {
  const checkedBoxes = document.querySelectorAll('.topic-checkbox:checked');
  const selectedTopics = Array.from(checkedBoxes).map(box => box.value);

  const result = generateExam(selectedTopics, questions);
  renderExam(result);
  startTimer(result.totalMinutes);

  // Swap views
  document.getElementById('selection-view').style.display = 'none';
  document.getElementById('exam-view').style.display = 'block';
  window.scrollTo(0, 0);
});

document.getElementById('back-btn').addEventListener('click', () => {
  stopTimer();
    document.getElementById('exam-view').style.display = 'none';
  document.getElementById('selection-view').style.display = 'block';
  window.scrollTo(0, 0);
});
// Generating a timer
function startTimer(minutes) {
  let secondsLeft = Math.round(minutes * 60);
  const timerDiv = document.getElementById('timer');

  function updateDisplay() {
    const mins = Math.floor(secondsLeft / 60);
    const secs = secondsLeft % 60;
    const secsPadded = secs < 10 ? '0' + secs : secs; // so it reads 12:05, not 12:5
    timerDiv.textContent = `Time remaining: ${mins}:${secsPadded}`;
  }

  updateDisplay(); // show the starting time immediately, don't wait a full second

  timerInterval = setInterval(() => {
    secondsLeft--;
    updateDisplay();

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      timerDiv.textContent = "Time's up!";
      timerDiv.style.color = 'red';
    }
  }, 1000); // runs once per second
}

function stopTimer() {
  clearInterval(timerInterval);
  document.getElementById('timer').style.color = ''; // reset color in case it turned red
}
// Add this near the top of app.js, with your other element references
// (You'll need to add these two elements to index.html — see below)

function renderExam(result) {
  const outputDiv = document.getElementById('exam-output');
  const warningDiv = document.getElementById('warning-banner');

  // Stage 5: show or hide the "not enough questions" warning
  if (result.ranShort) {
    warningDiv.style.display = 'block';
    warningDiv.textContent = `Only ~${result.totalMinutes} minutes of questions available for these topics — select more classes for a full-length 1 hour exam.`;
  } else {
    warningDiv.style.display = 'none';
  }

  // Stage 6: render the actual questions
  outputDiv.innerHTML = '';
  const trueFalseQuestions = result.exam.filter(q => q.type === 'true_false');
  const openResponseQuestions = result.exam.filter(q => q.type === 'open_response');

  const tfHeader = document.createElement('h2');
  tfHeader.textContent = 'True / False';
  outputDiv.appendChild(tfHeader);

  trueFalseQuestions.forEach((q, index) => {
    const qDiv = document.createElement('div');
    qDiv.className = 'question';
    const number = index + 1; 
    const formattedPrompt = q.prompt.replace(/\n/g, '<br><br>');
    qDiv.innerHTML = `<p><strong>${number}.</strong> ${formattedPrompt}</p>
      <div class="answer-pills">
         <span class="answer-pill">True</span>
        <span class="answer-pill false-pill">False</span>
      </div>`;
    outputDiv.appendChild(qDiv);
  });

  const orHeader = document.createElement('h2');
  orHeader.textContent = 'Open Response';
  outputDiv.appendChild(orHeader);

  openResponseQuestions.forEach((q, index) => {
    const qDiv = document.createElement('div');
    qDiv.className = 'question';
    const number = trueFalseQuestions.length + index + 1;
    const formattedPrompt = q.prompt.replace(/\n/g, '<br><br>');
    qDiv.innerHTML = `<p><strong>${number}.</strong> ${formattedPrompt}</p><br><br><br>`;
    outputDiv.appendChild(qDiv);
  });
}

// Update your existing click handler to call this instead of just console.log
document.getElementById('generate-btn').addEventListener('click', () => {
  const checkedBoxes = document.querySelectorAll('.topic-checkbox:checked');
  const selectedTopics = Array.from(checkedBoxes).map(box => box.value);

  const result = generateExam(selectedTopics, questions);
  renderExam(result); // <-- new
});