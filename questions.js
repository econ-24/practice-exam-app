// ============================================
// LECTURE 1 — Why poverty persists
// ============================================

const questions = [

{
  "id": "lc1-tf-01",
  "topic": "Lecture 1 - Why poverty persists",
  "type": "true_false",
  "prompt": "The World Bank is the largest provider of official development assistance in the world.",
  "minutes": 1.5
},

{
  "id": "lc1-tf-02",
  "topic": "Lecture 1 - Why poverty persists",
  "type": "true_false",
  "prompt": "Consider two countries of the same population that differ in their head count poverty rate and their poverty deficit.  A country with a lower head count and higher poverty deficit can have more poor people than a country with a higher head count and lower poverty deficit.",
  "minutes": 1.5
},

{
  "id": "lc1-tf-03",
  "topic": "Lecture 1 - Why poverty persists",
  "type": "true_false",
  "prompt": "There are approximately 800 million people living in extreme poverty today.",
  "minutes": 1.5
},

{
  "id": "lc1-tf-04",
  "topic": "Lecture 1 - Why poverty persists",
  "type": "true_false",
  "prompt": "Private flows from high income countries to low income countries exceed public (government) flows.",
  "minutes": 1.5
},

{
  "id": "lc1-tf-05",
  "topic": "Lecture 1 - Why poverty persists",
  "type": "true_false",
  "prompt": "A 'reversal of fortune' refers to the empirical pattern in which regions that were relatively richer (e.g., more urbanized) in 1500 tend to be relatively poorer today, which poses a challenge for theories that attribute persistent poverty purely to fixed geographic endowments.",
  "minutes": 1.5
},

{
  "id": "lc1-tf-06",
  "topic": "Lecture 1 - Why poverty persists",
  "type": "true_false",
  "prompt": "Purchasing Power Parity (PPP) adjustments are used because a dollar of income converted at market exchange rates typically buys more in a low-income country than in a high-income country, so using market exchange rates alone would understate real living standards in poor countries.",
  "minutes": 1.5
},

{
  "id": "lc1-tf-07",
  "topic": "Lecture 1 - Why poverty persists",
  "type": "true_false",
  "prompt": "Bilateral Official Development Assistance (ODA), which flows directly from one donor government to a recipient country, is substantially larger in total dollar terms than multilateral ODA channeled through institutions like the UN system or World Bank.",
  "minutes": 1.5
},

{
  "id": "lc1-tf-08",
  "topic": "Lecture 1 - Why poverty persists",
  "type": "true_false",
  "prompt": "In recent years, Foreign Direct Investment (FDI) flows to developing countries have generally exceeded Official Development Assistance (ODA) flows in dollar terms.",
  "minutes": 1.5
},
{
  "id": "lc1-tf-09",
  "topic": "Lecture 1 - Why poverty persists",
  "type": "true_false",
  "prompt": "Nongovernmental organizations (NGOs) / civil society organizations (CSOs) only receive ODA passively; they do not themselves act as channels through which donor-country ODA is disbursed to developing-country recipients.",
  "minutes": 1.5
},

{
  "id": "lc1-tf-10",
  "topic": "Lecture 1 - Why poverty persists",
  "type": "true_false",
  "prompt": "An NGO (non-governmental organization) is a private, non-profit organization that operates independently of government and is typically involved in development, humanitarian, or advocacy work.",
  "minutes": 1.5
},

{
  "id": "lc1-or-01",
  "topic": "Lecture 1 - Why poverty persists",
  "type": "open_response",
  "prompt": "Show that traditional methods of production and modern, technologically intensive means of production can co-exist in a modern economy without distortions.",
  "minutes": 10.5
},

{
  "id": "lc1-or-02",
  "topic": "Lecture 1 - Why poverty persists",
  "type": "open_response",
  "prompt": "Show that capital should flow from high income countries to poor countries absent any foreign aid or other forms of official development assistance.",
  "minutes": 10.5
},

{
  "id": "lc1-or-03",
  "topic": "Lecture 1 - Why poverty persists",
  "type": "open_response",
  "prompt": "Show that the least expensive way to reduce poverty head count rates is through transfers to the least poor.",
  "minutes": 10.5
},

{
  "id": "lc1-or-04",
  "topic": "Lecture 1 - Why poverty persists",
  "type": "open_response",
  "prompt": "Show that a government can decrease the poverty head count by distributing resources from the most poor to the barely poor.",
  "minutes": 10.5
},

{
  "id": "lc1-or-05",
  "topic": "Lecture 1 - Why poverty persists",
  "type": "open_response",
  "prompt": "Using the urbanization-in-1500-vs-GDP-per-capita-in-1995 relationship and the North/South Korea example, explain what a 'reversal of fortune' is and why it is a problem for theories that explain persistent poverty solely through fixed geographic endowments (e.g., climate, disease environment, natural resources).",
  "minutes": 10.5
},

{
  "id": "lc1-or-06",
  "topic": "Lecture 1 - Why poverty persists",
  "type": "open_response",
  "prompt": "Explain why economists compare living standards across countries using PPP-adjusted measures rather than converting local currency income into dollars at market exchange rates. Illustrate with a numerical example why using market exchange rates instead of PPP could distort a poverty headcount comparison between a rich and a poor country.",
  "minutes": 10.5
},

{
  "id": "lc1-or-07",
  "topic": "Lecture 1 - Why poverty persists",
  "type": "open_response",
  "prompt": "Distinguish bilateral from multilateral ODA and discuss at least two reasons donor countries might prefer giving aid bilaterally rather than channeling it through multilateral institutions such as the UN system or World Bank.",
  "minutes": 10.5
},

{
  "id": "lc1-or-08",
  "topic": "Lecture 1 - Why poverty persists",
  "type": "open_response",
  "prompt": "Using the convergence framework (Pf'(k)=(1+r)), explain why standard growth theory predicts that Foreign Direct Investment should flow from capital-rich to capital-poor countries, and describe the empirical anomalies (within-country variance in returns, coexistence of modern/traditional technologies) that complicate this prediction.",
  "minutes": 10.5
},

{
  "id": "lc1-or-09",
  "topic": "Lecture 1 - Why poverty persists",
  "type": "open_response",
  "prompt": "Discuss the growing role of NGOs/civil society organizations as both recipients and disbursing channels of ODA. Why might donor governments prefer to route aid through NGOs rather than directly to recipient-country governments, and what are the potential trade-offs of doing so?",
  "minutes": 10.5
},
 // ============================================
  // LECTURE 2 — Poverty traps
  // ============================================
{
  "id": "lc2-tf-01",
  "topic": "Lecture 2 - Poverty traps",
  "type": "true_false",
  "prompt": "The fact that there are economically inactive people in very poor environments shows that laziness is part of the development problem.",
  "minutes": 1.5
},

{
  "id": "lc2-tf-02",
  "topic": "Lecture 2 - Poverty traps",
  "type": "true_false",
  "prompt": "There is no such thing as unemployment: people willing to work at existing wages that cannot find work.",
  "minutes": 1.5
},

{
  "id": "lc2-tf-03",
  "topic": "Lecture 2 - Poverty traps",
  "type": "true_false",
  "prompt": "If you are born with assets, you have an advantage in employment compared to someone without assets even if you are not using those in your work.",
  "minutes": 1.5
},

{
  "id": "lc2-tf-04",
  "topic": "Lecture 2 - Poverty traps",
  "type": "true_false",
  "prompt": "Wasting reflects long-run nutritional deficiencies.",
  "minutes": 1.5
},

{
  "id": "lc2-tf-05",
  "topic": "Lecture 2 - Poverty traps",
  "type": "true_false",
  "prompt": "Comparison of cross-country estimates of malnutrition such as stunting is problematic when countries have different age compositions.",
  "minutes": 1.5
},

{
  "id": "lc2-tf-06",
  "topic": "Lecture 2 - Poverty traps",
  "type": "true_false",
  "prompt": "For poor households, roughly 70% of each additional dollar of income is spent on food.",
  "minutes": 1.5
},

{
  "id": "lc2-tf-07",
  "topic": "Lecture 2 - Poverty traps",
  "type": "true_false",
  "prompt": "Wasting is best understood as a measure of the prevalence of chronic malnutrition in a population, since it reflects the cumulative effect of poor nutrition and repeated illness over a child's life rather than a single recent shock. ",
  "minutes": 1.5
},

{
  "id": "lc2-tf-08",
  "topic": "Lecture 2 - Poverty traps",
  "type": "true_false",
  "prompt": "If a 5 percent increase in food prices raises the risk of wasting, as shown in the slide on food price shocks, this tells us that stunting prevalence — not just wasting — should rise sharply within the same year, since both measures capture a child's current nutritional status.",
  "minutes": 1.5
},

{
  "id": "lc2-or-01",
  "topic": "Lecture 2 - Poverty traps",
  "type": "open_response",
  "prompt": "Show that an agent with assets can cause an agent without assets to lose their job.",
  "minutes": 10.5
},

{
  "id": "lc2-or-02",
  "topic": "Lecture 2 - Poverty traps",
  "type": "open_response",
  "prompt": "Show that a fall in output prices for a good that is produced but not consumed domestically can create unemployment. \nBonus question to think about (not covered in class):  Why is it important that the good is not consumed domestically?",
  "minutes": 10.5
},

{
  "id": "lc2-or-03",
  "topic": "Lecture 2 - Poverty traps",
  "type": "open_response",
  "prompt": "Show that an increase in output prices for a good that is produced but not consumed domestically can eliminate unemployment. \nBonus question to think about (not covered in class):  Why is it important that the good is not consumed domestically?",
  "minutes": 10.5
},

{
  "id": "lc2-or-04",
  "topic": "Lecture 2 - Poverty traps",
  "type": "open_response",
  "prompt": "Consider the introduction of cheap, high calorie foods that can be quickly and easily converted into energy and therefore work capacity.  Under what conditions would this decrease wages, have no effect on wages, and increase wages?",
  "minutes": 10.5
},

  {
    id: "lc2-or-05",
    topic: "Lecture 2 - Poverty traps",
    type: "open_response",
    prompt: "In 2025, the US imposed a 35–37% tariff on Bangladeshi garment exports (versus 20% on Vietnam's), and buyers responded by cancelling orders and shifting sourcing elsewhere. Bangladesh's garment sector is overwhelmingly export-oriented. Show how this tariff shock can create involuntary unemployment among garment workers, even though none of them individually experienced any change in their own work capacity.",
    minutes: 10.5
  },

  {
    id: "lc2-or-06",
    topic: "Lecture 2 - Poverty traps",
    type: "open_response",
    prompt: "A country's currency appreciates sharply against the dollar, making its toy exports comparatively more expensive on world markets. Buyers respond by shifting their contracts to cheaper producers elsewhere — even though the factories haven't changed how they operate. Show how this exchange-rate shock, acting purely through the price foreign buyers pay, can create involuntary unemployment among the workers who make the toys.",
    minutes: 10.5
  },

  {
    id: "lc2-or-07",
    topic: "Lecture 2 - Poverty traps",
    type: "open_response",
    prompt: "Food prices have trended upward since 2000, with sharp spikes during the 2007–08, 2010–11, and 2021–22 crises. Show that a sustained rise in food prices can push wage-takers below the critical nutrition threshold — even though nothing about their bodies has changed.",
    minutes: 10.5
  },

  {
    id: "lc2-or-08",
    topic: "Lecture 2 - Poverty traps",
    type: "open_response",
    prompt: "Disrupted shipping through the Strait of Hormuz pushed oil past $100\narrel. Isolate just the energy-price channel: show how a pure rise in oil and shipping costs — with nothing biological changing for wage-takers — can still push them below the critical nutrition threshold, by tracing its effect through food prices to the nutrition a given wage can buy.",
    minutes: 10.5
  },

  {
    id: "lc2-or-09",
    topic: "Lecture 2 - Poverty traps",
    type: "open_response",
    prompt: "Suppose a sudden currency devaluation doubles the domestic price of imported staple grains, even though nothing changes about local agriculture, wages, or workers' health. Show algebraically that this pure rise in the cost of food can push wage-takers below the critical nutrition threshold.",
    minutes: 10.5
  },

  {
    id: "lc2-or-10",
    topic: "Lecture 2 - Poverty traps",
    type: "open_response",
    prompt: "The 2026 Strait of Hormuz energy shock also spiked nitrogen-fertilizer prices, since fertilizer production is natural-gas intensive — hitting Sudan, Somalia, Tanzania, and Mozambique hardest. If farmers respond by using less fertilizer, show how this affects the marginal product of farm labor — and therefore labor demand — when fertilizer and labor are complements in production. How does your answer change if they're substitutes instead?",
    minutes: 10.5
  },

  {
    id: "lc2-or-11",
    topic: "Lecture 2 - Poverty traps",
    type: "open_response",
    prompt: "Suppose a new regulation raises the minimum wage for farm workers. Show how this change in the cost of labor affects farms' demand for machinery and fertilizer — and therefore how much of each they buy — when labor and those inputs are complements in production. How does your answer change if they're substitutes instead?",
    minutes: 10.5
  },
  // ============================================
  // LECTURE 3 — Malnutrition
  // ============================================

  {
    id: "lc3-tf-01",
    topic: "Lecture 3 - Malnutrition",
    type: "true_false",
    prompt: "According to Engel's Law, as a household's income increases, the total amount it spends on food decreases.",
    minutes: 1.5
  },

  {
    id: "lc3-tf-02",
    topic: "Lecture 3 - Malnutrition",
    type: "true_false",
    prompt: "Inequality can worsen the nutritional outcomes of poor households even when those households' own incomes have not fallen.",
    minutes: 1.5
  },

  {
    id: "lc3-tf-03",
    topic: "Lecture 3 - Malnutrition",
    type: "true_false",
    prompt: "Luxury goods are perfectly inelastic with respect to income.",
    minutes: 1.5
  },

  {
    id: "lc3-tf-04",
    topic: "Lecture 3 - Malnutrition",
    type: "true_false",
    prompt: "A Giffen good must also be an inferior good.",
    minutes: 1.5
  },

  {
    id: "lc3-tf-05",
    topic: "Lecture 3 - Malnutrition",
    type: "true_false",
    prompt: "If the absolute amount spent on food increases, then the caloric intake of a household always increases.",
    minutes: 1.5
  },

  {
    id: "lc3-tf-06",
    topic: "Lecture 3 - Malnutrition",
    type: "true_false",
    prompt: "A household that meets necessary calories never has micronutrient deficiencies.",
    minutes: 1.5
  },

  {
    id: "lc3-tf-07",
    topic: "Lecture 3 - Malnutrition",
    type: "true_false",
    prompt: "We expect to see Giffen behavior in staple goods, because the income effect is the opposite sign of a normal good and large in magnitude compared to the usual substitution effect.",
    minutes: 1.5
  },

  {
    id: "lc3-tf-08",
    topic: "Lecture 3 - Malnutrition",
    type: "true_false",
    prompt: "Relative deprivation theory holds that an individual's well-being is affected by comparisons to others generally, regardless of whether those others are better or worse off.",
    minutes: 1.5
  },

  {
    id: "lc3-or-01",
    topic: "Lecture 3 - Malnutrition",
    type: "open_response",
    prompt: "Explain why we would expect Giffen behavior to disappear at very low income levels and at higher income levels, and why it might only emerge for households in an intermediate range of poverty.",
    minutes: 10.5
  },

  {
    id: "lc3-or-02",
    topic: "Lecture 3 - Malnutrition",
    type: "open_response",
    prompt: "A researcher observes that poor households in two regions consume different amounts of a staple food despite having similar incomes. Explain why this difference alone is insufficient to determine whether the staple is a Giffen good, a normal good, or an inferior good in either region.",
    minutes: 10.5
  },

  {
    id: "lc3-or-03",
    topic: "Lecture 3 - Malnutrition",
    type: "open_response",
    prompt: "Wheat is a dietary staple for many Pakistanis.  Half of all Pakistani wheat consumption came from imports of wheat from the Ukraine prior to the war.  As a result, wheat prices have increased substantially in Pakistan with the conflict (as they have everywhere), and these wheat price increases are a concern for the Pakistani government.  Suppose the government is considering subsidizing wheat prices to protect domestic food security.  What information do they need to have to determine whether such a subsidy will help protect the health and nutrition of its population?",
    minutes: 10.5
  },

  {
    id: "lc3-or-04",
    topic: "Lecture 3 - Malnutrition",
    type: "open_response",
    prompt: "On April 29, 2021, the Government of Sri Lanka banned the import of chemical fertilizers and any other agrochemicals to make Sri Lanka the first nation in the world to practice organic-only agriculture. Rice is a consumption staple in Sri Lanka (45 percent of food expenditures) and the largest sector of employment (16 percent of the labor force).  The government of Sri Lanka heavily regulates rice imports, so the impact of this shift to organic-only agriculture is that rice prices shot up because of the ban from around 84 rupees per kilogram to 150 rupees per kilogram.  What information do you need to know to evaluate the impact of this shift to organic agriculture on nutrition? \nBonus tying in poverty trap material: Under what conditions could this shift to organic agriculture lead to involuntary unemployment?  Poverty traps?",
    minutes: 10.5
  },

   {
    id: "lc3-or-05",
    topic: "Lecture 3 - Malnutrition",
    type: "open_response",
    prompt: "In July 2023, India — which supplies roughly 40% of the world's rice exports — banned exports of non-basmati white rice, citing domestic food security concerns. Because the previously-exported surplus could no longer leave the country, it was redirected onto the domestic market, and the domestic price of rice fell. What do we expect the impact of this fall in the domestic price to have on household caloric consumption? \nTip - in answering this question, you will want to consider whether rice is a Giffen good and you may want to consider net buyers and net sellers of rice separately.  A full credit answer would consider all these different issues.",
    minutes: 10.5
  },

    // ============================================
  // LECTURE 4 — Policy Brief 1: Self-perpetuating poverty
  // ============================================

  {
    id: "lc4-tf-01",
    topic: "Lecture 4 - Policy Brief 1: Self-perpetuating poverty",
    type: "true_false",
    prompt: "A World Bank evaluation finds that small microcredit loans in rural Bangladesh increased borrowers’ incomes modestly but did not reduce long-run poverty rates. This result is consistent with the view that credit markets work well for the poor.",
    minutes: 1.5
  },

  {
    id: "lc4-tf-02",
    topic: "Lecture 4 - Policy Brief 1: Self-perpetuating poverty",
    type: "true_false",
    prompt: "A government in sub-Saharan Africa doubles the wage subsidy it pays to firms that hire low-skill workers. Because the subsidy raises returns to work, it will eliminate persistent poverty among households that take up the jobs.",
    minutes: 1.5
  },

  {
    id: "lc4-tf-03",
    topic: "Lecture 4 - Policy Brief 1: Self-perpetuating poverty",
    type: "true_false",
    prompt: "Evidence from Ethiopia shows that ultra-poor households receiving only cash transfers eventually return to their pre-transfer asset levels, while households receiving cash plus livestock, training, and consumption support do not. This difference is most easily ex- plained by the larger total monetary value of the bundled package.",
    minutes: 1.5
  },

  {
    id: "lc4-tf-04",
    topic: "Lecture 4 - Policy Brief 1: Self-perpetuating poverty",
    type: "true_false",
    prompt: "A randomized evaluation in rural India finds that poor households work fewer hours per day than non-poor households in the same villages. This is sufficient evidence that labor supply differences explain the income gap between the two groups.",
    minutes: 1.5
  },

  {
    id: "lc4-tf-05",
    topic: "Lecture 4 - Policy Brief 1: Self-perpetuating poverty",
    type: "true_false",
    prompt: "A drought that destroys 30 percent of assets uniformly across all households in a Sahelian village will have symmetric long-run effects on rich and poor households.",
    minutes: 1.5
  },

  {
    id: "lc4-tf-06",
    topic: "Lecture 4 - Policy Brief 1: Self-perpetuating poverty",
    type: "true_false",
    prompt: "A senior official in a low-income country proposes cutting food assistance to able-bodied adults on the grounds that the program discourages work. A labor economist responds that among the ultra-poor, low work effort is more likely a consequence of poverty than a cause of it. The labor economist is wrong, because every household can choose to work harder regardless of its asset level.",
    minutes: 1.5
  },

  {
    id: "lc4-or-01",
    topic: "Lecture 4 - Policy Brief 1: Self-perpetuating poverty",
    type: "open_response",
    prompt: "In Niger, pastoralist households that own fewer than a critical number of livestock con- sistently lose animals over time, while those above that number consistently accumulate. A drought destroys 40 percent of the herd for all households. Using the logic of self- perpetuating poverty, explain which households are most at risk of permanent welfare loss and which are most likely to recover without assistance. What does this imply for how an emergency relief program should be designed and targeted?",
    minutes: 10.5
  },

  {
    id: "lc4-or-02",
    topic: "Lecture 4 - Policy Brief 1: Self-perpetuating poverty",
    type: "open_response",
    prompt: "Ghana’s government is debating two anti-poverty programs of equal total cost. Program A gives every poor household a small monthly cash transfer indefinitely. Program B gives a one-time large asset transfer to a randomly selected subset of poor households, with no follow-up support. Using the economics of poverty traps, make the best case for Program B over Program A. Then identify the single most important condition that must hold for Program B to produce permanent escapes from poverty rather than temporary relief.",
    minutes: 10.5
  },

  {
    id: "lc4-or-03",
    topic: "Lecture 4 - Policy Brief 1: Self-perpetuating poverty",
    type: "open_response",
    prompt: "A government in rural Zambia is considering two ways to spend the same budget on its poorest households. Option A hires poor households as casual day laborers on public works projects at a wage just above subsistence, for one agricultural season. Option B gives a subset of the same households a one-time transfer of productive assets worth three times the seasonal wage bill, with no follow-up. The minister argues that Option A is preferable because it reaches more households and guarantees immediate income support. Using the economics of poverty traps, explain when the minister is wrong. What does your answer imply about the trade-off between the breadth and the depth of anti-poverty programs?",
    minutes: 10.5
  },

  {
    id: "lc4-or-04",
    topic: "Lecture 4 - Policy Brief 1: Self-perpetuating poverty",
    type: "open_response",
    prompt: "A government economist in Malawi argues that conditional cash transfers, which require school attendance, are more cost-effective than unconditional transfers because they im- prove future productivity. A second economist argues that conditionality is counterproductive for the very poorest households. Using the economics of poverty traps, construct the second economist’s argument precisely. Under what circumstances is she right?",
    minutes: 10.5
  },

  {
    id: "lc4-or-05",
    topic: "Lecture 4 - Policy Brief 1: Self-perpetuating poverty",
    type: "open_response",
    prompt: "A donor is evaluating two villages in rural Cambodia. In Village A, most households are clustered just below the asset level needed to access irrigated farming. In Village B, households are spread evenly across all asset levels, with the same average assets as Village A. The donor can fund one program in one village. Using the logic of threshold effects and asset dynamics, explain which village offers a higher expected return to a large one-time asset transfer program, and why the average asset level alone is not sufficient information for this decision.",
    minutes: 10.5
  },

  {
    id: "lc4-or-06",
    topic: "Lecture 4 - Policy Brief 1: Self-perpetuating poverty",
    type: "open_response",
    prompt: "A prominent politician in a low-income African country points to survey data showing that poor rural households work significantly fewer hours and generate significantly less output per hour than wealthier households in the same region. He concludes that a culture of low effort explains persistent poverty and that anti-poverty transfers reward bad behavior. A policy advisor disagrees. Write the advisor’s rebuttal. Your answer should explain both why observed effort levels among the poor may be low and why transfers to the poor need not reduce economy-wide productive effort.",
    minutes: 10.5
  },

    // ============================================
  // LECTURE 5 — Health
  // ============================================

  {
    id: "lc5-tf-01",
    topic: "Lecture 5 - Health",
    type: "true_false",
    prompt: "Families infer the value of preventative health services from their price.",
    minutes: 1.5
  },

  {
    id: "lc5-tf-02",
    topic: "Lecture 5 - Health",
    type: "true_false",
    prompt: "Making a preventive health service free is sufficient to ensure full take-up among households who would benefit from it.",
    minutes: 1.5
  },

  {
    id: "lc5-tf-03",
    topic: "Lecture 5 - Health",
    type: "true_false",
    prompt: "A household deciding whether to purchase a malaria bed net will not fully account for the benefits its prevention generates for its neighbors.",
    minutes: 1.5
  },

  {
    id: "lc5-tf-04",
    topic: "Lecture 5 - Health",
    type: "true_false",
    prompt: "Overinclusion occurs when a subsidy is set too low, excluding households that would benefit from a health product.",
    minutes: 1.5
  },

  {
    id: "lc5-tf-05",
    topic: "Lecture 5 - Health",
    type: "true_false",
    prompt: "A rise in caregiver wages can reduce uptake of preventive health practices, even when those practices are free.",
    minutes: 1.5
  },

  {
    id: "lc5-tf-06",
    topic: "Lecture 5 - Health",
    type: "true_false",
    prompt: "Receiving a health product for free reduces a household's willingness to pay for it in the future.",
    minutes: 1.5
  },

  {
    id: "lc5-tf-07",
    topic: "Lecture 5 - Health",
    type: "true_false",
    prompt: "In low- and middle-income countries, excluding COVID, more people died of communicable diseases like HIV, Tuberculosis, and Malaria than of noncommunicable diseases.",
    minutes: 1.5
  },

  {
    id: "lc5-tf-08",
    topic: "Lecture 5 - Health",
    type: "true_false",
    prompt: "Even though subsidized or reduced-price preventative health measures may lead to misuse, subsidies and reduce prices seem very important in this space as users tend to be extremely price elastic.",
    minutes: 1.5
  },

  {
    id: "lc5-or-01",
    topic: "Lecture 5 - Health",
    type: "open_response",
    prompt: "Show that an increase in the market wage can reduce a household's uptake of a preventive health service, even when that service is provided free of charge. What does this imply about the total cost of preventative health services?",
    minutes: 10.5
  },

  {
    id: "lc5-or-02",
    topic: "Lecture 5 - Health",
    type: "open_response",
    prompt: "A government installs protected wells in a village, successfully eliminating parasite-infected surface water. Explain why child health outcomes may nevertheless fail to improve.",
    minutes: 10.5
  },

  {
    id: "lc5-or-03",
    topic: "Lecture 5 - Health",
    type: "open_response",
    prompt: "Ethiopia is the largest coffee producer in Africa, with over 15 million people (roughly 15% of the population) employed in coffee cultivation and processing. In 2021-2022, global coffee prices surged to their highest levels in decades following supply disruptions in Brazil. At the same time, a local NGO planned to expand childhood vaccination coverage in rural coffee-growing regions, establishing local, free immunization camps to reduce travel time to vaccination sites. Vaccination rates in these regions have been historically low. \nWhat information do you need to evaluate the net effect of the coffee price surge and immunization camp on childhood vaccination rates? Under what conditions can the immunization camps be sufficient to offset the effect of the price surge on vaccination rates?",
    minutes: 10.5
  },
   {
    id: "lc5-or-04",
    topic: "Lecture 5 - Health",
    type: "open_response",
    prompt: "A self-employed street vendor earns money only for the hours he's actually selling — an afternoon spent at a free health clinic is an afternoon of lost income, with no employer to authorize time off. A salaried factory worker earning the same monthly income can take a paid afternoon off for the same clinic visit at no lost pay. \n&emsp;&emsp;(a) Using the time-cost model, explain why the vendor is less likely to use the free clinic than the salaried worker, even though their incomes and the price of care are identical. \n&emsp;&emsp;(b) Does this argument imply that raising the vendor's daily earnings would increase or decrease his clinic visits? \n&emsp;&emsp;(c) What kind of intervention lowers his effective time cost without requiring him to earn less that day?",
    minutes: 10.5
  },
   {
    id: "lc5-or-05",
    topic: "Lecture 5 - Health",
    type: "open_response",
    prompt: "A rural clinic offers free prenatal checkups. A pregnant woman's most time-intensive daily task is fetching water for the household — an activity with no market wage. The well she uses runs dry, so fetching water from the next-nearest source now takes twice as long. Using the time-cost model of preventive care demand, show that her prenatal visits can fall even though neither the price of care nor her market wage has changed. What does this imply about using the market wage as a stand-in for 'the price of time' when evaluating preventive care policy?" ,
    minutes: 10.5
  },
   {
    id: "lc5-or-06",
    topic: "Lecture 5 - Health",
    type: "open_response",
    prompt: "Two mothers are identical in age, education, household income, and distance to a free clinic — except Mother A has one child under five and Mother B has four. \n&emsp;&emsp;(a) Using the time-cost model, explain why Mother B may bring any given child in for a preventive visit (e.g., a vaccination) less often than Mother A, even though the price is zero for both. \n&emsp;&emsp;(b) Does an additional dependent unambiguously raise or lower the household's total demand for preventive visits, summed across all children? \n&emsp;&emsp;(c) An NGO wants to raise immunization coverage in a high-fertility region: between (i) a cash transfer conditional on vaccination and (ii) a mobile clinic that comes to the household, which is more likely to help larger families specifically, and why?",
    minutes: 10.5
  },

    // ============================================
  // LECTURE 6 — Unhealthy behaviors
  // ============================================

  {
    id: "lc6-tf-01",
    topic: "Lecture 6 - Unhealthy behaviors",
    type: "true_false",
    prompt: "A household that fails to adopt a cheap, high-return health intervention must be making an irrational decision.",
    minutes: 1.5
  },

  {
    id: "lc6-tf-02",
    topic: "Lecture 6 - Unhealthy behaviors",
    type: "true_false",
    prompt: "Informing agents about a rise in HIV prevalence will reduce risky sexual behaviors.",
    minutes: 1.5
  },

  {
    id: "lc6-tf-03",
    topic: "Lecture 6 - Unhealthy behaviors",
    type: "true_false",
    prompt: "Transaction sex is more common during periods of economic stability than during periods of economic hardship.",
    minutes: 1.5
  },

  {
    id: "lc6-or-01",
    topic: "Lecture 6 - Unhealthy behaviors",
    type: "open_response",
    prompt: "A government is deciding whether to scale up a school-based deworming program based on an evaluation that compares infection rates of treated and untreated students within the same schools. Explain why this evaluation strategy will underestimate the program's true effect, and why this is matters for the government’s scaling-up decision.",
    minutes: 10.5
  },

  {
    id: "lc6-or-02",
    topic: "Lecture 6 - Unhealthy behaviors",
    type: "open_response",
    prompt: "A cheap, effective health intervention has near-zero take-up even after an extensive education campaign. What are some reasons this behavior could be consistent with rational behavior?",
    minutes: 10.5
  },

  {
    id: "lc6-or-03",
    topic: "Lecture 6 - Unhealthy behaviors",
    type: "open_response",
    prompt: "Show that two individuals with identical preferences and identical HIV risk per partner may nevertheless choose very different numbers of sexual partners depending on their non-HIV life expectancy.",
    minutes: 10.5
  },

  {
    id: "lc6-or-04",
    topic: "Lecture 6 - Unhealthy behaviors",
    type: "open_response",
    prompt: "A region experiences a severe drought that reduces household income. A public health official argues this will have no effect on HIV transmission rates since it is an economic shock rather than a health shock. Explain why the official could be wrong, identifying a channel through which economic shocks can affect HIV risk.",
    minutes: 10.5
  },

  {
    id: "lc6-or-05",
    topic: "Lecture 6 - Unhealthy behaviors",
    type: "open_response",
    prompt: "Let’s adapt the fatalism model to think about the usefulness of information and testing in a public health context.  Let’s consider this in Dartmouth’s context of trying to develop its COVID policy.  Suppose that the university’s objective is solely learning, and we think learning is a function of class time (I’m looking at you, you know who you are).  The university cannot directly dictate student behavior.  Students want to learn but also want to avoid COVID.  Suppose their marginal utility of time in class is positive diminishing, and suppose their marginal cost of time in class is positive diminishing as the more time you spend in class, the more likely you already have COVID.   Depict the basic fatalism model with this reframing. Suppose the university becomes aware of an uptick in covid on campus.  Model this increased prevalence of COVID as an increase in the marginal cost of attending class.  Use your adapted fatalism model to advise the university against informing students about the increased risk of covid.",
    minutes: 10.5
  },

  {
    id: "lc6-or-06",
    topic: "Lecture 6 - Unhealthy behaviors",
    type: "open_response",
    prompt: "A government in central Africa has learned that HIV prevalence during the COVID pandemic has decreased substantially.  Proud of this, the government is considering announcing this finding with much fanfare across the country.  Under what conditions is this likely to be counterproductive in the sense that it might reverse the progress against HIV?",
    minutes: 10.5
  },
    // ============================================
  // LECTURE 7 — Policy brief 2: Undersupplying global health innovation
  // ============================================

  {
    id: "lc7-tf-01",
    topic: "Lecture 7 - Policy brief 2: Undersupplying global health innovation",
    type: "true_false",
    prompt: "A disease with higher mortality burden will always generate higher private research and development investment.",
    minutes: 1.5
  },

  {
    id: "lc7-tf-02",
    topic: "Lecture 7 - Policy brief 2: Undersupplying global health innovation",
    type: "true_false",
    prompt: "A per-unit subsidy can increase innovation incentives by partially aligning private incentives with broader public health benefits.",
    minutes: 1.5
  },

  {
    id: "lc7-tf-03",
    topic: "Lecture 7 - Policy brief 2: Undersupplying global health innovation",
    type: "true_false",
    prompt: "Patent protection can fully solve underinvestment in neglected diseases by increasing prices firms can charge.",
    minutes: 1.5
  },

  {
    id: "lc7-tf-04",
    topic: "Lecture 7 - Policy brief 2: Undersupplying global health innovation",
    type: "true_false",
    prompt: "Push policies and pull policies differ mainly in whether they affect research costs or expected revenues.",
    minutes: 1.5
  },

  {
    id: "lc7-tf-05",
    topic: "Lecture 7 - Policy brief 2: Undersupplying global health innovation",
    type: "true_false",
    prompt: "Knowledge spillovers imply that private incentives to innovate are often smaller than the total value to society.",
    minutes: 1.5
  },

  {
    id: "lc7-or-01",
    topic: "Lecture 7 - Policy brief 2: Undersupplying global health innovation",
    type: "open_response",
    prompt: "A company is considering developing a malaria vaccine for a region where malaria transmission occurs only a few months each year. As a result, demand for vaccination is concentrated in a short window. \n&emsp;&emsp;a. Explain how this seasonal pattern affects the company’s expected revenue from the vaccine. \n&emsp;&emsp;b. Explain why the vaccine might still generate large social benefits despite limited commercial incentives. \n&emsp;&emsp;c. Propose one policy that would make the investment more attractive to the company and explain how it works.",
    minutes: 10.5
  },

  {
    id: "lc7-or-02",
    topic: "Lecture 7 - Policy brief 2: Undersupplying global health innovation",
    type: "open_response",
    prompt: "A new tuberculosis treatment reduces the likelihood that drug-resistant strains will develop in the future. Most of the benefit comes from avoiding future cases rather than improving outcomes for current patients. \n&emsp;&emsp;a. Explain why the company developing the drug may not fully benefit from this future impact. \n&emsp;&emsp;b. Explain why society may still value the drug highly. \n&emsp;&emsp;c. Propose one policy tool that would better align private incentives with social value.",
    minutes: 10.5
  },

  {
    id: "lc7-or-03",
    topic: "Lecture 7 - Policy brief 2: Undersupplying global health innovation",
    type: "open_response",
    prompt: "A rapid HIV test makes it easier for people to learn their status and seek treatment. However, individuals often delay testing, and many do not consider the impact of their behavior on others. \n&emsp;&emsp;a. Explain why private demand for testing may be too low. \n&emsp;&emsp;b. Explain how increased testing could benefit people beyond those who are tested. \n&emsp;&emsp;c. Consider the impact of accurate and rapid testing on the logic of the fatalism model discussed in the \"Unhealthy behaviors\" class. How would a free and accurate rapid test change the marginal cost of risky behaviors? \n&emsp;&emsp;d. Propose a policy that would increase the use of testing and explain the mechanism.",
    minutes: 10.5
  },

  {
    id: "lc7-or-04",
    topic: "Lecture 7 - Policy brief 2: Undersupplying global health innovation",
    type: "open_response",
    prompt: "A firm develops a new vaccine technology that can be adapted quickly to many diseases. The first application is only moderately profitable, but the technology has broad future potential. \n&emsp;&emsp;a. Explain why the firm may underinvest in developing this platform. \n&emsp;&emsp;b. Explain why the platform could be highly valuable for society (”Hi, MRNA”). \n&emsp;&emsp;c. Propose a policy that encourages investment in this type of technology.",
    minutes: 10.5
  },

  {
    id: "lc7-or-05",
    topic: "Lecture 7 - Policy brief 2: Undersupplying global health innovation",
    type: "open_response",
    prompt: "A cholera vaccine has been developed, but it is not widely used in low-income countries because governments struggle to finance and organize large-scale purchases. \n&emsp;&emsp;a. Explain why low adoption reduces incentives for firms to invest in improving or expanding the vaccine. \n&emsp;&emsp;b. Explain how government purchasing capacity affects market incentives. \n&emsp;&emsp;c. Propose a policy that would increase vaccine use and strengthen incentives for innovation.",
    minutes: 10.5
  },

    // ============================================
  // LECTURE 8 — Scarcity, Time, and Underinvestment
  // ============================================

  {
    id: "lc8-tf-01",
    topic: "Lecture 8 - Scarcity, Time, and Underinvestment",
    type: "true_false",
    prompt: "A household that fails to invest in fertilizer despite high returns must have a very high discount rate.",
    minutes: 1.5
  },

  {
    id: "lc8-tf-02",
    topic: "Lecture 8 - Scarcity, Time, and Underinvestment",
    type: "true_false",
    prompt: "A sophisticated present-biased agent always invests less than a naive present-biased agent.",
    minutes: 1.5
  },

  {
    id: "lc8-tf-03",
    topic: "Lecture 8 - Scarcity, Time, and Underinvestment",
    type: "true_false",
    prompt: "Under the β-δ model, an agent with β = 1 and δ < 1 is time consistent.",
    minutes: 1.5
  },

  {
    id: "lc8-tf-04",
    topic: "Lecture 8 - Scarcity, Time, and Underinvestment",
    type: "true_false",
    prompt: "The SEED experiment shows that commitment savings devices are demanded only by agents who are fully rational.",
    minutes: 1.5
  },

  {
    id: "lc8-tf-05",
    topic: "Lecture 8 - Scarcity, Time, and Underinvestment",
    type: "true_false",
    prompt: "Mani et al. (2013) find that the cognitive cost of poverty is entirely explained by lower nutrition and health status.",
    minutes: 1.5
  },

  {
    id: "lc8-tf-06",
    topic: "Lecture 8 - Scarcity, Time, and Underinvestment",
    type: "true_false",
    prompt: "A commitment device can in principle help a naive present-biased agent just as much as a sophisticated one.",
    minutes: 1.5
  },

  {
    id: "lc8-tf-07",
    topic: "Lecture 8 - Scarcity, Time, and Underinvestment",
    type: "true_false",
    prompt: "Reducing the price of fertilizer by 50% had a smaller effect on take-up than offering a small post-harvest voucher.",
    minutes: 1.5
  },

  {
    id: "lc8-or-01",
    topic: "Lecture 8 - Scarcity, Time, and Underinvestment",
    type: "open_response",
    prompt: "A farmer has β = 0.6, δ= 0.9, and faces an investment costing $10 today that returns $18 in one period. Show whether a time-consistent agent and a present-biased agent invest. What is the minimum value of β such that the present-biased agent invests?",
    minutes: 10.5
  },

  {
    id: "lc8-or-02",
    topic: "Lecture 8 - Scarcity, Time, and Underinvestment",
    type: "open_response",
    prompt: "Explain why a sophisticated present-biased agent demands commitment but a naive present-biased agent does not. Under what conditions is the naive agent worse off in welfare terms?",
    minutes: 10.5
  },

  {
    id: "lc8-or-03",
    topic: "Lecture 8 - Scarcity, Time, and Underinvestment",
    type: "open_response",
    prompt: "Use the bandwidth model of Mani et al. (2013) to explain why the same intervention (a labeled savings account) may have larger effects post-harvest than pre-harvest.",
    minutes: 10.5
  },

  {
    id: "lc8-or-04",
    topic: "Lecture 8 - Scarcity, Time, and Underinvestment",
    type: "open_response",
    prompt: "Suppose a government wants to raise fertilizer adoption among smallholder farmers. Using the β-δ model, compare the predicted effects of: \n&emsp;&emsp;(a) a price subsidy paid at planting  \n&emsp;&emsp;(b) a small voucher offered right after harvest. \n&emsp;&emsp;Which does the model predict will be more effective and why?",
    minutes: 10.5
  },

  {
    id: "lc8-or-05",
    topic: "Lecture 8 - Scarcity, Time, and Underinvestment",
    type: "open_response",
    prompt: "Haushofer & Fehr (2014) argue that poverty increases risk aversion as well as present bias. Show how higher risk aversion compounds the underinvestment problem derived from present bias alone.",
    minutes: 10.5
  },
  // ============================================
  // LECTURE 9 — Poor hedge fund managers
  // ============================================

  {
    id: "lc9-tf-01",
    topic: "Lecture 9 - Poor hedge fund managers",
    type: "true_false",
    prompt: "Risk aversion comes from the assumption of diminishing marginal utility of income.",
    minutes: 1.5
  },

  {
    id: "lc9-tf-02",
    topic: "Lecture 9 - Poor hedge fund managers",
    type: "true_false",
    prompt: "For a risk-averse household, the utility of expected income equals the expected utility of income.",
    minutes: 1.5
  },

  {
    id: "lc9-tf-03",
    topic: "Lecture 9 - Poor hedge fund managers",
    type: "true_false",
    prompt: "Under the permanent income hypothesis, the marginal propensity to consume out of transitory income should be bigger than the marginal propensity to consume out of permanent income.",
    minutes: 1.5
  },

  {
    id: "lc9-tf-04",
    topic: "Lecture 9 - Poor hedge fund managers",
    type: "true_false",
    prompt: "Informal insurance networks function best when member households face idiosyncratic rather than aggregate shocks, because transfers across households require that some members have good outcomes when others have bad ones.",
    minutes: 1.5
  },

  {
    id: "lc9-tf-05",
    topic: "Lecture 9 - Poor hedge fund managers",
    type: "true_false",
    prompt: "Ideal partners in a mutual insurance arrangement have uncorrelated income streams.",
    minutes: 1.5
  },

  {
    id: "lc9-tf-06",
    topic: "Lecture 9 - Poor hedge fund managers",
    type: "true_false",
    prompt: "The failure of self-insurance arises because of limited ways to save in settings with a lack of formal savings tools.",
    minutes: 1.5
  },

  {
    id: "lc9-tf-07",
    topic: "Lecture 9 - Poor hedge fund managers",
    type: "true_false",
    prompt: "An agent can self-insure if shocks are iid.",
    minutes: 1.5
  },

  {
    id: "lc9-tf-08",
    topic: "Lecture 9 - Poor hedge fund managers",
    type: "true_false",
    prompt: "Cultural beliefs can evolve to help households solve insolvable problems.",
    minutes: 1.5
  },

  {
    id: "lc9-tf-09",
    topic: "Lecture 9 - Poor hedge fund managers",
    type: "true_false",
    prompt: "A migrant household in a new location that lacks a social network is less likely to be able to insure against income shocks than before they migrated if they had a social network in their source community.",
    minutes: 1.5
  },

  {
    id: "lc9-tf-10",
    topic: "Lecture 9 - Poor hedge fund managers",
    type: "true_false",
    prompt: "The household’s valuation of livestock depends only on the present value of the income stream earned by that livestock’s agricultural output.",
    minutes: 1.5
  },

  {
    id: "lc9-tf-11",
    topic: "Lecture 9 - Poor hedge fund managers",
    type: "true_false",
    prompt: "Suppose the relationship between wealth today and wealth tomorrow exhibits positive, diminishing marginal returns. Suppose a large, one-time negative income shock today reduces household income. Suppose households lack informal or formal insurance, face binding credit constraints that limit their ability to borrow, and lack savings. \n&emsp;&emsp;a) Whether the household recovers from the shock depends on whether the shock pushes the household below some threshold. Below that threshold, the household will become increasingly poor. Above that threshold, the household will recover from the negative shock and converge to some steady state. \n&emsp;&emsp;b) Whether the household recovers from the shock depends on whether the shock pushes the household below some threshold. Below that threshold, the household will become increasingly poor. Above that threshold, the household will recover from the negative shock and grow increasingly rich. \n&emsp;&emsp;c) The household will recover from the shock, converging to the original level. \n&emsp;&emsp;d) The household will be left impoverished, unable to recover from the shock. ",
    minutes: 1.5
  },
  {
    id: "lc9-or-01",
    topic: "Lecture 9 - Poor hedge fund managers",
    type: "open_response",
    prompt: "Why do so many of the world’s poor spend a lot of money on jewelry?",
    minutes: 10.5
  },

  {
    id: "lc9-or-02",
    topic: "Lecture 9 - Poor hedge fund managers",
    type: "open_response",
    prompt: "A subsistence farmer in rural Zambia experiences a severe drought that destroys her harvest. She has no access to formal credit or insurance markets. Identify two distinct strategies she might use to smooth consumption and explain one cost or inefficiency associated with each.",
    minutes: 10.5
  },

  {
    id: "lc9-or-03",
    topic: "Lecture 9 - Poor hedge fund managers",
    type: "open_response",
    prompt: "Explain how an informal insurance network among neighboring farming households will break down precisely when insurance is most valuable (when a shock is large and widespread).",
    minutes: 10.5
  },

  {
    id: "lc9-or-04",
    topic: "Lecture 9 - Poor hedge fund managers",
    type: "open_response",
    prompt: "A household near the poverty trap threshold experiences a negative income shock and responds by selling productive assets to smooth consumption. Show that this coping strategy, while individually rational in the short run, can produce a worse long-run outcome than simply allowing consumption to fall.",
    minutes: 10.5
  },

  {
    id: "lc9-or-05",
    topic: "Lecture 9 - Poor hedge fund managers",
    type: "open_response",
    prompt: "We regularly see the most vulnerable in society killed by that society during periods of aggregate crisis.  Explain why this doesn’t happen in normal times, why it doesn’t happen with idiosyncratic shocks, and the economic logic of this phenomena.",
    minutes: 10.5
  },

  // ============================================
  // LECTURE 10 — Why saving is hard
  // ============================================

  {
    id: "lc10-tf-01",
    topic: "Lecture 10 - Why saving is hard",
    type: "true_false",
    prompt: "Low savings among poor households implies time inconsistency.",
    minutes: 1.5
  },

  {
    id: "lc10-tf-02",
    topic: "Lecture 10 - Why saving is hard",
    type: "true_false",
    prompt: "A ROSCA can be interpreted as a commitment device that also protects funds from social claims.",
    minutes: 1.5
  },

  {
    id: "lc10-tf-03",
    topic: "Lecture 10 - Why saving is hard",
    type: "true_false",
    prompt: "If trust in banks rises, under-saving should disappear even when households face present bias and intrahousehold conflict.",
    minutes: 1.5
  },

  {
    id: "lc10-tf-04",
    topic: "Lecture 10 - Why saving is hard",
    type: "true_false",
    prompt: "A household may rationally prefer an illiquid asset to a liquid bank balance even when the illiquid asset has a lower financial return.",
    minutes: 1.5
  },

  {
    id: "lc10-tf-05",
    topic: "Lecture 10 - Why saving is hard",
    type: "true_false",
    prompt: "An aspiration intervention that raises savings goals must raise actual saving if households are fully rational.",
    minutes: 1.5
  },

  {
    id: "lc10-tf-06",
    topic: "Lecture 10 - Why saving is hard",
    type: "true_false",
    prompt: "In a simple intrahousehold model, a lower expected control share over future savings reduces the private return to saving today.",
    minutes: 1.5
  },

  {
    id: "lc10-tf-07",
    topic: "Lecture 10 - Why saving is hard",
    type: "true_false",
    prompt: "Commitment savings products are useful only when the central problem is self-control.",
    minutes: 1.5
  },

  {
    id: "lc10-tf-08",
    topic: "Lecture 10 - Why saving is hard",
    type: "true_false",
    prompt: "Insurance and a liquid emergency buffer can raise willingness to hold illiquid commitment savings.",
    minutes: 1.5
  },

  {
    id: "lc10-or-01",
    topic: "Lecture 10 - Why saving is hard",
    type: "open_response",
    prompt: "Distinguish present bias from low aspirations as explanations for under-saving. Give one empirical pattern that would support each mechanism.",
    minutes: 10.5
  },

  {
    id: "lc10-or-02",
    topic: "Lecture 10 - Why saving is hard",
    type: "open_response",
    prompt: "A government offers a standard savings account, a commitment account, and direct deposit into an individual account. Match each product to the friction it is best suited to solve.",
    minutes: 10.5
  },

  {
    id: "lc10-or-03",
    topic: "Lecture 10 - Why saving is hard",
    type: "open_response",
    prompt: "Write a two-agent saving problem in which one spouse controls only a fraction θ of tomorrow’s savings. Show how a lower θ changes saving behavior and product demand.",
    minutes: 10.5
  },

  {
    id: "lc10-or-04",
    topic: "Lecture 10 - Why saving is hard",
    type: "open_response",
    prompt: "What are the different ways we have discussed to promote savings in this and the behavioral lecture.  Discuss the friction that each of those different savings promotion mechanisms are designed to address and what frictions they do not.",
    minutes: 10.5
  },

  // ============================================
  // LECTURE 11 — Lending to the poor
  // ============================================

  {
    id: "lc11-tf-01",
    topic: "Lecture 11 - Lending to the poor",
    type: "true_false",
    prompt: "A lender facing both safe and risky borrowers can always increase expected profit by raising the interest rate, since higher rates generate more revenue per loan.",
    minutes: 1.5
  },

  {
    id: "lc11-tf-02",
    topic: "Lecture 11 - Lending to the poor",
    type: "true_false",
    prompt: "Adverse selection in credit markets occurs after the loan is made, when borrowers choose how much effort to exert on their project.",
    minutes: 1.5
  },

  {
    id: "lc11-tf-03",
    topic: "Lecture 11 - Lending to the poor",
    type: "true_false",
    prompt: "In a one-period lending relationship with no collateral, a rational borrower with limited liability has no incentive to repay a loan.",
    minutes: 1.5
  },

  {
    id: "lc11-tf-04",
    topic: "Lecture 11 - Lending to the poor",
    type: "true_false",
    prompt: "Give a man a fish, he’ll eat for a day. Give a woman microcredit, she, her husband, her children and her extended family will eat for a lifetime.",
    minutes: 1.5
  },

  {
    id: "lc11-tf-05",
    topic: "Lecture 11 - Lending to the poor",
    type: "true_false",
    prompt: "Credit transactions are often interlinked with transactions in other markets such as land, labor, or crops in developing countries.",
    minutes: 1.5
  },

  {
    id: "lc11-tf-06",
    topic: "Lecture 11 - Lending to the poor",
    type: "true_false",
    prompt: "High rates of default explain high interest rates in informal credit markets in developing countries.",
    minutes: 1.5
  },

  {
    id: "lc11-tf-07",
    topic: "Lecture 11 - Lending to the poor",
    type: "true_false",
    prompt: "Microcredit attains higher repayment rates than observed in informal lending.",
    minutes: 1.5
  },

  {
    id: "lc11-or-01",
    topic: "Lecture 11 - Lending to the poor",
    type: "open_response",
    prompt: "Show that a lender who raises interest rates in response to high default risk may end up with a riskier loan portfolio than before, even though the rate increase was intended to compensate for risk.",
    minutes: 10.5
  },

  {
    id: "lc11-or-02",
    topic: "Lecture 11 - Lending to the poor",
    type: "open_response",
    prompt: "A government is deciding between two interventions to help poor households manage income volatility: a formal insurance program or a microcredit program. Discuss how credit and insurance might serve overlapping functions for poor households, and how they are distinct. Identify a type of shock where access to credit is an inadequate substitute for insurance.",
    minutes: 10.5
  },

  {
    id: "lc11-or-03",
    topic: "Lecture 11 - Lending to the poor",
    type: "open_response",
    prompt: "Credit markets appear highly segmented, with long-term exclusive relationships and repeated lending between parties. What can explain this?",
    minutes: 10.5
  },

  {
    id: "lc11-or-04",
    topic: "Lecture 11 - Lending to the poor",
    type: "open_response",
    prompt: "You compare two communities that appear to be identical in almost every way. They have the same ethnic groups, the same levels of general education, the same mix of economic activities, and the same standard of living. However, in community A, households generally stay for only a few years before moving on to some other community for work. In community B, it is not unusual for individual household members to leave for work for a few weeks, but they always return to the same household, which has been in the community for generations. In which community will interest rates be lower for informal credit? Why?",
    minutes: 10.5
  },

  {
    id: "lc11-or-05",
    topic: "Lecture 11 - Lending to the poor",
    type: "open_response",
    prompt: "Informal credit arrangements in developing countries are characterized by enormous disparity in interest rates. Why might these apparent arbitrage opportunities not be real?",
    minutes: 10.5
  },

  {
    id: "lc11-or-06",
    topic: "Lecture 11 - Lending to the poor",
    type: "open_response",
    prompt: "Show that the dynamic incentives inherent in a typical microcredit contract can increase repayment rates relative to a static loan, even without the group structure of the typical microcredit loan. Is there credit rationing in this setting?",
    minutes: 10.5
  },

  {
    id: "lc11-or-07",
    topic: "Lecture 11 - Lending to the poor",
    type: "open_response",
    prompt: "What explains the existence of credit rationing in low-income countries? Make sure you precisely define credit rationing in your answer.",
    minutes: 10.5
  },

    // ============================================
  // LECTURE 12 — The informal economy
  // ============================================

  {
    id: "lc12-tf-01",
    topic: "Lecture 12 - The informal economy",
    type: "true_false",
    prompt: "Suppose 14 percent of the Indian labor force is in self-employment. From this fact, we can conclude that at least 14 percent of the labor force in India is in the informal sector.",
    minutes: 1.5
  },

  {
    id: "lc12-tf-02",
    topic: "Lecture 12 - The informal economy",
    type: "true_false",
    prompt: "The rise in the urban informal sector in Latin America over the last decade can be explained by the easing of restrictions on hiring and firing in the formal sector and the relaxation of the minimum wage.",
    minutes: 1.5
  },

  {
    id: "lc12-tf-03",
    topic: "Lecture 12 - The informal economy",
    type: "true_false",
    prompt: "Household consumption decisions are made independently of household production decisions in households that operate a farm or a business.",
    minutes: 1.5
  },

  {
    id: "lc12-tf-04",
    topic: "Lecture 12 - The informal economy",
    type: "true_false",
    prompt: "The observation that many families with businesses or farms simultaneously hire in labor and sell their own labor in the formal labor market suggests market imperfections in the formal labor market that prevent market clearing.",
    minutes: 1.5
  },

  {
    id: "lc12-tf-05",
    topic: "Lecture 12 - The informal economy",
    type: "true_false",
    prompt: "If labor demand in a family business depends on household composition, then there must be constraints on family members’ ability to find work outside of the household.",
    minutes: 1.5
  },

  {
    id: "lc12-tf-06",
    topic: "Lecture 12 - The informal economy",
    type: "true_false",
    prompt: "Most labor in low-income countries works on the family farm. Thus, we expect to see that the value of labor’s marginal product on the family farm is below the market wage.",
    minutes: 1.5
  },

  {
    id: "lc12-tf-07",
    topic: "Lecture 12 - The informal economy",
    type: "true_false",
    prompt: "Hsieh & Olken (2014), using microdata on Indian, Indonesian, and Mexican firms, document a pronounced “missing middle” separating small informal firms from large formal firms.",
    minutes: 1.5
  },

  {
    id: "lc12-tf-08",
    topic: "Lecture 12 - The informal economy",
    type: "true_false",
    prompt: "Under monopsony in the formal labor market, the wage the employer pays equals the worker’s marginal revenue product.",
    minutes: 1.5
  },

  {
    id: "lc12-tf-09",
    topic: "Lecture 12 - The informal economy",
    type: "true_false",
    prompt: "If persistent poverty reflects fundamental differences in ability rather than differences in access to capital, a large one-off productive-asset transfer should permanently raise recipient income.",
    minutes: 1.5
  },

  {
    id: "lc12-tf-10",
    topic: "Lecture 12 - The informal economy",
    type: "true_false",
    prompt: "De Mel, McKenzie & Woodruff’s post-tsunami Sri Lanka cash-grant experiment found that the returns to injected working capital were similar for male-run and female-run microenterprises.",
    minutes: 1.5
  },

  {
    id: "lc12-or-01",
    topic: "Lecture 12 - The informal economy",
    type: "open_response",
    prompt: "Why is there so much self-employment and entrepreneurship in low-income countries?",
    minutes: 10.5
  },

  {
    id: "lc12-or-02",
    topic: "Lecture 12 - The informal economy",
    type: "open_response",
    prompt: "Consider two Indian states, West Bengal and Maharashtra. Model rigid labor laws as a restriction on the availability of employment outside of the household. Show that, under this model, the productivity of labor in home enterprises is higher in Maharashtra than in West Bengal.",
    minutes: 10.5
  },

  {
    id: "lc12-or-03",
    topic: "Lecture 12 - The informal economy",
    type: "open_response",
    prompt: "The Philippines government is considering giving unrestricted grants to entrepreneurs in the hope of fostering the growth of small enterprises. Use a non-separable household model to argue that these grants will decrease the time a household spends in entrepreneurship and small enterprises.",
    minutes: 10.5
  },

  {
    id: "lc12-or-04",
    topic: "Lecture 12 - The informal economy",
    type: "open_response",
    prompt: "Malawi’s shortage of foreign currency led it to be unable to import fertilizer. Model this as a negative shock to farm productivity in the farm household model. Explain why the impact of this productivity shock on household living standards is larger in the non-separable version of the farm household model. What protects living standards in the separable model?",
    minutes: 10.5
  },

  {
    id: "lc12-or-05",
    topic: "Lecture 12 - The informal economy",
    type: "open_response",
    prompt: "In a separable farm household model, what is true about the relationship between profit maximization, the labor choice, and consumption/leisure decisions?",
    minutes: 10.5
  },

  {
    id: "lc12-or-06",
    topic: "Lecture 12 - The informal economy",
    type: "open_response",
    prompt: "In parts of rural Nepal, many prime-age men work abroad and remit money home. Suppose a crisis cuts off remittances. Using a non-separable farm household model with binding constraints on off-farm employment, show that the decline in remittances can leave off-farm employment unchanged while increasing time spent on the family farm.",
    minutes: 10.5
  },

  {
    id: "lc12-or-07",
    topic: "Lecture 12 - The informal economy",
    type: "open_response",
    prompt: "Explain how the way a family shares resources can create incentives for surplus labor.",
    minutes: 10.5
  },

  {
    id: "lc12-or-08",
    topic: "Lecture 12 - The informal economy",
    type: "open_response",
    prompt: "Consider a trade liberalization that raises the productivity of labor in large-scale enterprises in a rural community. Assume it has no effect on the productivity or profitability of labor in family farms or enterprises. How does this affect the allocation of labor between family enterprises and the wage-labor market, and the share of family income coming from the home enterprise?",
    minutes: 10.5
  },

    // ============================================
  // LECTURE 13 — Why workers leave agriculture
  // ============================================

  {
    id: "lc13-tf-01",
    topic: "Lecture 13 - Why workers leave agriculture",
    type: "true_false",
    prompt: "Security of title is necessary to incentivise investment in land such as letting fields lie fallow.",
    minutes: 1.5
  },

  {
    id: "lc13-tf-02",
    topic: "Lecture 13 - Why workers leave agriculture",
    type: "true_false",
    prompt: "In Indian farm data with enough large farms to observe the upper tail, output per acre declines monotonically as farm size rises.",
    minutes: 1.5
  },

  {
    id: "lc13-tf-03",
    topic: "Lecture 13 - Why workers leave agriculture",
    type: "true_false",
    prompt: "A tax on agricultural land has zero efficiency cost as long as land is in fixed supply and complementary assets remain with the land.",
    minutes: 1.5
  },

  {
    id: "lc13-tf-04",
    topic: "Lecture 13 - Why workers leave agriculture",
    type: "true_false",
    prompt: "When a single Indian farmer simultaneously cultivates both her own land and sharecropped land, output per acre is lower on the sharecropped plots — and this within-farmer gap is driven by the fact that sharecroppers are lower-ability farmers than owner-operators.",
    minutes: 1.5
  },

  {
    id: "lc13-tf-05",
    topic: "Lecture 13 - Why workers leave agriculture",
    type: "true_false",
    prompt: "Panel data following the same worker as she moves from agriculture to non-agriculture in a developing country show that no productivity gap remains within individuals, implying that the cross-sectional agricultural productivity gap is entirely selection.",
    minutes: 1.5
  },

  {
    id: "lc13-tf-06",
    topic: "Lecture 13 - Why workers leave agriculture",
    type: "true_false",
    prompt: "A field experiment in rural Bangladesh that offered an $8.50 cash incentive to migrate seasonally found only a small increase in migration, implying that mobility frictions are modest.",
    minutes: 1.5
  },

  {
    id: "lc13-tf-07",
    topic: "Lecture 13 - Why workers leave agriculture",
    type: "true_false",
    prompt: "West Bengal’s Operation Barga raised agricultural productivity primarily by redistributing ownership of land from landlords to sharecroppers.",
    minutes: 1.5
  },

  {
    id: "lc13-tf-08",
    topic: "Lecture 13 - Why workers leave agriculture",
    type: "true_false",
    prompt: "Monopsony in the formal-sector labor market creates a wedge between wages and marginal revenue product, and this wedge can help sustain a persistent non-agriculture / agriculture productivity gap.",
    minutes: 1.5
  },

  {
    id: "lc13-or-01",
    topic: "Lecture 13 - Why workers leave agriculture",
    type: "open_response",
    prompt: "Bolivia tenancy reform: Two-thirds of land in Bolivia is held by under one percent of farms, and sharecropping is widespread. The government is considering assigning long-term tenancy rights to sharecroppers — without redistributing ownership. Predict the effect on \n&emsp;&emsp;(i) tenant effort and output per acre \n&emsp;&emsp;(ii) tenant access to credit and insurance \n&emsp;&emsp;(iii) labor-market outcomes for the landless who do not benefit from the reform. \n&emsp;&emsp;Identify at least one general-equilibrium channel that alters your prediction once agricultural wages and land rents adjust.",
    minutes: 10.5
  },

  {
    id: "lc13-or-02",
    topic: "Lecture 13 - Why workers leave agriculture",
    type: "open_response",
    prompt: "Bangladesh seasonal migration: During the monga lean season in northern Bangladesh, seasonal unemployment coexists with strong urban labor demand. A field experiment found that an $8.50 travel subsidy raised seasonal migration by 22 percentage points and household consumption by∼30%. \n&emsp;&emsp;(a) Use a non-separable farm-household model with a binding off-farm-employment constraint to explain why affected households appear to underinvest in migration absent the subsidy. \n&emsp;&emsp;(b) Using general-equilibrium reasoning (wages, food prices, selection into the program), explain why a universal migration subsidy would produce smaller aggregate welfare gains than a naive scaling-up of the experimental estimates would suggest.",
    minutes: 10.5
  },

  {
    id: "lc13-or-03",
    topic: "Lecture 13 - Why workers leave agriculture",
    type: "open_response",
    prompt: "Zimbabwe 2000: In 2000 the government of Zimbabwe argued that 4,500 white farmers held 70% of the country’s best agricultural land and expropriated their farms, redistributing plots to landless war veterans. \n&emsp;&emsp;Using the economic argument that a tax or forced transfer of a fixed-supply asset has no deadweight loss, explain the conditions under which this reform should raise aggregate agricultural output. \n&emsp;&emsp;Using the complementary-inputs argument, explain the conditions under which it lowers aggregate output. \n&emsp;&emsp;Which assumption of the fixed-asset efficiency argument was violated in Zimbabwe’s experience?",
    minutes: 10.5
  },

  {
    id: "lc13-or-04",
    topic: "Lecture 13 - Why workers leave agriculture",
    type: "open_response",
    prompt: "Nutrition–wage trap and land redistribution: Consider a rural economy in which many workers cannot afford the calories needed for full labor productivity (the nutrition-based efficiency-wage trap from earlier in the course). Landlords pay piece rates that leave the poorest workers chronically undernourished. A reform redistributes land from large landlords to the rural poor. Show that \n&emsp;&emsp;(a) in the short run, beneficiaries’ calorie intake and labor productivity rise, but \n&emsp;&emsp;(b) equilibrium wages for the remaining landless workers can fall, and involuntary unemployment can emerge. \n&emsp;&emsp;Under what conditions do long-run effects differ from short-run ones?",
    minutes: 10.5
  },

  {
    id: "lc13-or-05",
    topic: "Lecture 13 - Why workers leave agriculture",
    type: "open_response",
    prompt: "Effective contracts and the case for land reform: Suppose a country enacts a legal reform that can enforce written contracts at low cost and allows any asset, including land, to be posted as collateral on borrowing. Explain how this reform weakens the economic case for redistributing land from large landowners to the rural poor. Specifically, which credit-market and insurance-market frictions from earlier in the semester does the case for redistribution rest on?",
    minutes: 10.5
  },

  {
    id: "lc13-or-06",
    topic: "Lecture 13 - Why workers leave agriculture",
    type: "open_response",
    prompt: "Indian farm consolidation: Recent estimates from Indian panel data suggest that consolidating farms to the technology-optimal size of∼24 acres would raise output per acre by 42% but reduce the agricultural workforce by 16%. \n&emsp;&emsp;(a) Using a non-separable farm-household model, explain why the households currently operating sub-optimally small farms may not voluntarily sell or rent out their land to consolidators. \n&emsp;&emsp;(b) Propose two complementary policies, each targeting a specific wedge τi , that would increase the probability that aggregate welfare rises after consolidation.",
    minutes: 10.5
  },

  {
    id: "lc13-or-07",
    topic: "Lecture 13 - Why workers leave agriculture",
    type: "open_response",
    prompt: "Land-price puzzle: In many rural areas, the sale price of agricultural land substantially exceeds the present discounted value of the agricultural income the buyer can earn from it. Give three distinct economic reasons for the premium, each drawing on material from this or a prior lecture. Which of your reasons is most consistent with the observation that secure titles are the exception rather than the rule?",
    minutes: 10.5
  },
   // ============================================
  // LECTURE 14 — Policy brief 3 - Climate change
  // ============================================

  {
    id: "lc14-tf-01",
    topic: "Lecture 14 - Policy brief 3 - Climate change",
    type: "true_false",
    prompt: "If an index insurance contract is actuarially fair, then it necessarily provides strong consumption smoothing for poor households.",
    minutes: 1.5
  },

  {
    id: "lc14-tf-02",
    topic: "Lecture 14 - Policy brief 3 - Climate change",
    type: "true_false",
    prompt: "When adaptation has a fixed cost, liquidity constraints can prevent adoption even when expected returns are positive.",
    minutes: 1.5
  },

  {
    id: "lc14-tf-03",
    topic: "Lecture 14 - Policy brief 3 - Climate change",
    type: "true_false",
    prompt: "Aggregate climate shocks are easier for informal insurance networks to smooth than idiosyncratic shocks.",
    minutes: 1.5
  },

  {
    id: "lc14-tf-04",
    topic: "Lecture 14 - Policy brief 3 - Climate change",
    type: "true_false",
    prompt: "Reducing false negative basis risk is more important than reducing false positive basis risk when the goal is to protect subsistence consumption.",
    minutes: 1.5
  },

  {
    id: "lc14-tf-05",
    topic: "Lecture 14 - Policy brief 3 - Climate change",
    type: "true_false",
    prompt: "Policies that target frequent, low loss shocks should rely primarily on market insurance rather than savings or liquidity tools.",
    minutes: 1.5
  },

  {
    id: "lc14-or-01",
    topic: "Lecture 14 - Policy brief 3 - Climate change",
    type: "open_response",
    prompt: "Explain how liquidity constraints interact with fixed costs of adaptation to generate slow adoption. Provide one policy that relaxes this constraint and describe its mechanism.",
    minutes: 10.5
  },

  {
    id: "lc14-or-02",
    topic: "Lecture 14 - Policy brief 3 - Climate change",
    type: "open_response",
    prompt: "Distinguish adaptation from mitigation in the context of poor households facing climate risk. Give one example of each and explain why governments may prioritize one over the other.",
    minutes: 10.5
  },

  {
    id: "lc14-or-03",
    topic: "Lecture 14 - Policy brief 3 - Climate change",
    type: "open_response",
    prompt: "Describe the concept of risk layering. For each layer, propose an appropriate policy instrument and justify why it matches the risk characteristics.",
    minutes: 10.5
  },

  {
    id: "lc14-or-04",
    topic: "Lecture 14 - Policy brief 3 - Climate change",
    type: "open_response",
    prompt: "Explain how basis risk affects both the demand for insurance and its effectiveness. Propose one contract design improvement and discuss its tradeoffs.",
    minutes: 10.5
  },

  {
    id: "lc14-or-05",
    topic: "Lecture 14 - Policy brief 3 - Climate change",
    type: "open_response",
    prompt: "Discuss when migration functions as a substitute for local adaptation and when it complements it. What role do fixed costs play in shaping this decision for poor households?",
    minutes: 10.5
  },
  // ============================================
  // LECTURE 15 — Why cities grow
  // ============================================

  {
    id: "lc15-tf-01",
    topic: "Lecture 15 - Why cities grow",
    type: "true_false",
    prompt: "A severe drought lowers agricultural productivity in rural India. In the Harris–Todaro model with a binding urban minimum wage, this raises both rural-to-urban migration and the number of informal or unemployed urban workers.",
    minutes: 1.5
  },

  {
    id: "lc15-tf-02",
    topic: "Lecture 15 - Why cities grow",
    type: "true_false",
    prompt: "President Lula raises Brazil’s minimum wage, which is enforced only in urban areas. Because rural labor markets clear at their own wage, the policy has no effect on rural wages.",
    minutes: 1.5
  },

  {
    id: "lc15-tf-03",
    topic: "Lecture 15 - Why cities grow",
    type: "true_false",
    prompt: "In Harris–Todaro equilibrium, urban informal-sector wages lie below rural wages — even though migrants voluntarily chose the city over the countryside.",
    minutes: 1.5
  },

  {
    id: "lc15-tf-04",
    topic: "Lecture 15 - Why cities grow",
    type: "true_false",
    prompt: "Under-5 mortality rates in Sub-Saharan African cities are, on average, higher than in rural areas of the same countries because of congestion and disease density.",
    minutes: 1.5
  },

  {
    id: "lc15-tf-05",
    topic: "Lecture 15 - Why cities grow",
    type: "true_false",
    prompt: "A randomized transport-subsidy experiment in Addis Ababa raised treated jobseekers’ employment by six percentage points. Because the experiment is an RCT, six percentage points is a lower bound on the aggregate employment effect of scaling the program to every jobseeker in Addis.",
    minutes: 1.5
  },

  {
    id: "lc15-tf-06",
    topic: "Lecture 15 - Why cities grow",
    type: "true_false",
    prompt: "Seasonal migration from rural Bangladesh to Dhaka can raise consumption in origin villages even when urban wages are modest, because the seasonal flow substitutes for missing formal insurance markets.",
    minutes: 1.5
  },

  {
    id: "lc15-tf-07",
    topic: "Lecture 15 - Why cities grow",
    type: "true_false",
    prompt: "Nigeria’s government hires 100,000 new workers into its formal urban civil service. In the Harris–Todaro benchmark, this program unambiguously lowers urban unemployment because it creates formal-sector jobs.",
    minutes: 1.5
  },

  {
    id: "lc15-tf-08",
    topic: "Lecture 15 - Why cities grow",
    type: "true_false",
    prompt: "Asher and Novosad (2020) show that new feeder roads in Indian villages raised village agricultural productivity, farm income, and household asset holdings within four years of construction.",
    minutes: 1.5
  },

  {
    id: "lc15-or-01",
    topic: "Lecture 15 - Why cities grow",
    type: "open_response",
    prompt: "China relaxes hukou restrictions: In the 1990s, China made rural-urban migration substantially easier. \n&emsp;&emsp;(a) Using the Harris–Todaro two-sector diagram, show how easier migration can raise urban involuntary unemployment when the urban formal wage does not adjust. \n&emsp;&emsp;(b) Separately, explain how easier rural out-migration might tighten credit rationing in rural areas and deter rural capital investment.",
    minutes: 10.5
  },

  {
    id: "lc15-or-02",
    topic: "Lecture 15 - Why cities grow",
    type: "open_response",
    prompt: "Brazil’s urban-only minimum wage: President Lula raises the Brazilian minimum wage by 20%, enforced only in urban areas. Using the HT two-sector diagram, predict the impact on \n&emsp;&emsp;(a) rural wages \n&emsp;&emsp;(b) urban formal employment \n&emsp;&emsp;(c) the urban informal sector \n&emsp;&emsp;(d) the share of the population in rural areas. \n&emsp;&emsp;Would your answer change if rural workers were strongly risk-averse rather than risk-neutral? Explain briefly.",
    minutes: 10.5
  },

  {
    id: "lc15-or-03",
    topic: "Lecture 15 - Why cities grow",
    type: "open_response",
    prompt: "Bangladesh textile quota lift: In the early 1990s, the U.S. exempted Bangladeshi textiles from its import quotas. Garment manufacturing for export is concentrated in Dhaka. Model this as a positive productivity shock to urban formal manufacturing, with a binding urban minimum wage that does not adjust and flexible rural wages. Using the HT two-sector diagram, predict the impact on \n&emsp;&emsp;(a) the urban population share \n&emsp;&emsp;(b) urban informal-sector size \n&emsp;&emsp;(c) rural wages. \n&emsp;&emsp;How would your prediction change if the Bangladeshi government simultaneously built new rural feeder roads, in the spirit of Asher and Novosad?",
    minutes: 10.5
  },

  {
    id: "lc15-or-04",
    topic: "Lecture 15 - Why cities grow",
    type: "open_response",
    prompt: "Indian Green Revolution: In the 1970s, the Green Revolution raised yields per hectare for rice and wheat on Indian farms. Using the HT diagram, predict the impact on \n&emsp;&emsp;(a) rural wages \n&emsp;&emsp;(b) labor allocation within rural areas between the family farm and hired wage work \n&emsp;&emsp;(c) the share of the population that is urban. \n&emsp;&emsp;Where does this benchmark prediction match the empirical record, and where might HT understate or overstate the effect?",
    minutes: 10.5
  },

  {
    id: "lc15-or-05",
    topic: "Lecture 15 - Why cities grow",
    type: "open_response",
    prompt: "Zambia copper price collapse: Zambia’s copper mines lie inside urban areas and pay an enforced minimum wage. A global downturn sharply lowers the copper price. Using HT, describe the impact on \n&emsp;&emsp;(a) urban formal employment \n&emsp;&emsp;(b) rural-to-urban migration \n&emsp;&emsp;(c) the urban informal sector \n&emsp;&emsp;(d) rural wages. \n&emsp;&emsp;How would the short-run adjustment differ if the mining-sector minimum wage is slow to fall even after demand collapses?",
    minutes: 10.5
  },

  {
    id: "lc15-or-06",
    topic: "Lecture 15 - Why cities grow",
    type: "open_response",
    prompt: "Malawi fertilizer subsidy and seasonal migration: In 2005–2007, a large fertilizer subsidy sharply raised maize yields on Malawian smallholder farms. Assume smallholders do not hire labor and that most rural income comes from own-farm production. \n&emsp;&emsp;(a) Using HT, predict the impact on the incentive to migrate permanently to Malawian cities and on urban population size. \n&emsp;&emsp;(b) Could the agricultural boom also reduce seasonal migration to cities even if permanent urban populations are unchanged? Draw on what we said about seasonal migration and risk-sharing.",
    minutes: 10.5
  },

  {
    id: "lc15-or-07",
    topic: "Lecture 15 - Why cities grow",
    type: "open_response",
    prompt: "Nairobi urban-search program: A Nairobi city agency offers new rural-urban migrants (i) a one-month transport and phone subsidy, (ii) CV preparation, and (iii) an interview-matching service. \n&emsp;&emsp;Drawing on Caria et al. (2024), predict effects in (a) the first six months, (b) after the subsidy ends, and (c) once the program is scaled to every new migrant. What data would you need to distinguish true aggregate employment gains from displacement of untreated jobseekers?",
    minutes: 10.5
  },

  {
    id: "lc15-or-08",
    topic: "Lecture 15 - Why cities grow",
    type: "open_response",
    prompt: "Urbanization and health: A student argues: “Sub-Saharan African cities have such bad sanitation and crowding that moving to a city must be bad for families’ health, even if wages are higher.” \n&emsp;&emsp;(a) Is this claim correct on average? \n&emsp;&emsp;(b) For whom is the claim most likely to be correct? \n&emsp;&emsp;(c) How should concerns about health and amenities enter a migration-decision model that until now has used only wages and moving costs? Connect your answer to what we study about slums.",
    minutes: 10.5
  }, 

    // ============================================
  // LECTURE 16 — Why slums exist
  // ============================================

  {
    id: "lc16-tf-01",
    topic: "Lecture 16 - Why slums exist",
    type: "true_false",
    prompt: "Suppose any number of people can freely enter a shared resource, and each chooses to enter whenever expected earnings inside exceed an outside option. Whenever the aggregate production function is concave, the equilibrium number of entrants coincides with the socially optimal number.",
    minutes: 1.5
  },

  {
    id: "lc16-tf-02",
    topic: "Lecture 16 - Why slums exist",
    type: "true_false",
    prompt: "If a slum is a stepping stone to higher-income employment rather than a trap, we should expect average consumption among its current residents to rise with years of residency.",
    minutes: 1.5
  },

  {
    id: "lc16-tf-03",
    topic: "Lecture 16 - Why slums exist",
    type: "true_false",
    prompt: "Revealed preference implies that a slum is always the individually optimal destination for the migrants who choose it: migrants know best.",
    minutes: 1.5
  },

  {
    id: "lc16-tf-04",
    topic: "Lecture 16 - Why slums exist",
    type: "true_false",
    prompt: "When neighbors play a one-shot game over whether to contribute to a shared public good with a prisoner’s dilemma payoff structure, the unique Nash equilibrium is for everyone to contribute.",
    minutes: 1.5
  },

  {
    id: "lc16-tf-05",
    topic: "Lecture 16 - Why slums exist",
    type: "true_false",
    prompt: "Providing secure, transferable titles for informal property will enable the urban poor to access formal credit.",
    minutes: 1.5
  },

  {
    id: "lc16-tf-06",
    topic: "Lecture 16 - Why slums exist",
    type: "true_false",
    prompt: "The urban poor are not poor because they lack assets. Rather, they lack secure title for those assets, and because of this insecurity of title the poor cannot leverage their assets productively.",
    minutes: 1.5
  },

  {
    id: "lc16-tf-07",
    topic: "Lecture 16 - Why slums exist",
    type: "true_false",
    prompt: "The dominant effect of titling programs on household behavior appears to be through their influence on the actions households need to take to protect insecure titles.",
    minutes: 1.5
  },

  {
    id: "lc16-tf-08",
    topic: "Lecture 16 - Why slums exist",
    type: "true_false",
    prompt: "Consider an urban setting where poor individuals have a number of opportunities to participate in Grameen-style microcredit programs. In this setting, we do not expect the collateral value of urban titles to be substantive.",
    minutes: 1.5
  },

  {
    id: "lc16-tf-09",
    topic: "Lecture 16 - Why slums exist",
    type: "true_false",
    prompt: "Slum clearance makes residents better off because they are relocated to higher-value land.",
    minutes: 1.5
  },

  {
    id: "lc16-tf-10",
    topic: "Lecture 16 - Why slums exist",
    type: "true_false",
    prompt: "Issuing individual property titles converts what was previously an open-access shared resource into privately held property, whereas in-place upgrading (provision of sanitation, water, and electricity) maintains the shared character of the settlement but commits the central-city land to permanent low-value use.",
    minutes: 1.5
  },

  {
    id: "lc16-or-01",
    topic: "Lecture 16 - Why slums exist",
    type: "open_response",
    prompt: "Consider a slum in which total output (e.g., aggregate earnings of all residents) is given by a production function Y (n), where n is the number of residents and Y is increasing and concave. Each potential migrant decides whether to enter the slum by comparing expected earnings inside to a reservation option w0. Show that free entry yields more migrants than a social planner would choose. Identify the source of the wedge and describe one specific congestion externality in a developing-country slum that fits this model.",
    minutes: 10.5
  },

  {
    id: "lc16-or-02",
    topic: "Lecture 16 - Why slums exist",
    type: "open_response",
    prompt: "Explain how insecure titles can lead to inefficient land use and overpopulation in slums.",
    minutes: 10.5
  },

  {
    id: "lc16-or-03",
    topic: "Lecture 16 - Why slums exist",
    type: "open_response",
    prompt: "A government is choosing between (a) a slum clearance program that demolishes informal housing and relocates residents to peripheral public housing, and (b) an in-place upgrading program that installs sanitation and issues titles. Compare the welfare consequences of each policy and identify whom each policy helps. Your answer should incorporate both the congestion/overuse consequences of insecure tenure and the empirical findings from Field (2007).",
    minutes: 10.5
  },

  {
    id: "lc16-or-04",
    topic: "Lecture 16 - Why slums exist",
    type: "open_response",
    prompt: "Why might titling programs fail to reduce credit rationing?",
    minutes: 10.5
  },

  {
    id: "lc16-or-05",
    topic: "Lecture 16 - Why slums exist",
    type: "open_response",
    prompt: "Why might household composition change in response to urban titling programs?",
    minutes: 10.5
  },

  {
    id: "lc16-or-06",
    topic: "Lecture 16 - Why slums exist",
    type: "open_response",
    prompt: "Urban titling programs attempt to give the poor assets that they can use as collateral in formal-sector borrowing. In a standard credit-market model with limited liability and moral hazard, what impact would we expect the ability to post collateral to have on the interest rates that poor borrowers face? Explain the mechanism.",
    minutes: 10.5
  },

  {
    id: "lc16-or-07",
    topic: "Lecture 16 - Why slums exist",
    type: "open_response",
    prompt: "Informal slum governance (residents’ associations, rotating credit groups, favela self-government) can sustain cooperation on local public goods. Using a repeated-game argument, explain when such governance breaks down. What does this imply for the optimal scale of a slum-upgrading intervention?",
    minutes: 10.5
  },

  {
    id: "lc16-or-08",
    topic: "Lecture 16 - Why slums exist",
    type: "open_response",
    prompt: "Marx, Stoker & Suri (2013) find consumption flat or declining in years of residence. Explain what this finding does and does not settle about the “trap vs. pathway” question, and propose one additional empirical test that could distinguish the two regimes.",
    minutes: 10.5
  },

  {
    id: "lc16-or-09",
    topic: "Lecture 16 - Why slums exist",
    type: "open_response",
    prompt: "Two cities are identical except in their transport infrastructure: city A has dense public transit, while city B does not. Both experience a positive shock to formal-sector wages in the urban core. Treating the slum as a shared resource with free entry (entrants come until expected earnings inside equal the rural outside option), predict how slum size and per-capita slum amenities evolve in each city.",
    minutes: 10.5
  },

  {
    id: "lc16-or-10",
    topic: "Lecture 16 - Why slums exist",
    type: "open_response",
    prompt: "The State Council of China is concerned about urban unemployment and asks what information is needed to evaluate several policy options. The options include a higher minimum wage, an employment subsidy in rural areas, faster public transit into the urban center, cheap housing in the city center, and urban titling.",
    minutes: 10.5
  },
  // ============================================
  // LECTURE 17 — Policy brief 4: Migration
  // ============================================

  {
    id: "lc17-tf-01",
    topic: "Lecture 17 - Policy brief 4: Migration",
    type: "true_false",
    prompt: "A large wage gap abroad is enough by itself to make migration privately attractive for a worker in the origin country. (Note. The probability of successful migration was q in the background work. The migration cost was κh. The family or nonpecuniary cost was ψh.)",
    minutes: 1.5
  },

  {
    id: "lc17-tf-02",
    topic: "Lecture 17 - Policy brief 4: Migration",
    type: "true_false",
    prompt: "Lowering the up-front cost of a legal migration route can increase migration even if foreign wages and domestic wages do not change. (Note. The up-front migration cost was κh.)",
    minutes: 1.5
  },

  {
    id: "lc17-tf-03",
    topic: "Lecture 17 - Policy brief 4: Migration",
    type: "true_false",
    prompt: "Exchange-rate risk can reduce the value of foreign earnings and remittances for risk-averse households, even when expected foreign wages are high. (Note. Exchange-rate risk was σ squared sub e.)",
    minutes: 1.5
  },

  {
    id: "lc17-tf-04",
    topic: "Lecture 17 - Policy brief 4: Migration",
    type: "true_false",
    prompt: "A policy that raises the expected return to migration will always help the poorest households migrate.",
    minutes: 1.5
  },

  {
    id: "lc17-tf-05",
    topic: "Lecture 17 - Policy brief 4: Migration",
    type: "true_false",
    prompt: "A higher chance of successful skilled migration can either increase or reduce the number of skilled workers who remain in the origin country. (Note. The success probability was q. The number of people acquiring skill was H(q).)",
    minutes: 1.5
  },

  {
    id: "lc17-tf-06",
    topic: "Lecture 17 - Policy brief 4: Migration",
    type: "true_false",
    prompt: "A sending-country government should consider costs and benefits that migrant households may not fully internalize, such as diaspora spillovers, public training costs, local service losses, and family or community costs. (Note. These terms were represented by Xh, Th, Dh, and Lh.)",
    minutes: 1.5
  },

  {
    id: "lc17-or-01",
    topic: "Lecture 17 - Policy brief 4: Migration",
    type: "open_response",
    prompt: "Set up a private migration decision in plain language. What benefits, costs, and risks should enter the worker’s decision to attempt migration through a specific pathway? Write a simple inequality if helpful. Then identify one policy that would change one term in your setup.",
    minutes: 10.5
  },

  {
    id: "lc17-or-02",
    topic: "Lecture 17 - Policy brief 4: Migration",
    type: "open_response",
    prompt: "Set up the financing constraint for a household that must pay the up-front cost of migration before it earns foreign income. What resources should be on the left side? What required expenses should be on the right side or subtracted from resources? Explain why this constraint can bind even when migration has high expected returns.",
    minutes: 10.5
  },

  {
    id: "lc17-or-03",
    topic: "Lecture 17 - Policy brief 4: Migration",
    type: "open_response",
    prompt: "Set up the human-capital decision when migration raises the return to a skill. What domestic return belongs in the comparison? What foreign return belongs in the comparison? What training cost belongs in the comparison? Explain how the same migration opportunity can create both brain drain and brain gain.",
    minutes: 10.5
  },

  {
    id: "lc17-or-04",
    topic: "Lecture 17 - Policy brief 4: Migration",
    type: "open_response",
    prompt: "Set up an origin-country social accounting expression for a successful migrant. Include at least two terms that support encouraging migration and at least two terms that support regulating or limiting migration. Explain which of these terms are likely to be external to the migrant household.",
    minutes: 10.5
  },

  {
    id: "lc17-or-05",
    topic: "Lecture 17 - Policy brief 4: Migration",
    type: "open_response",
    prompt: "Choose two possible policies aimed at the same migration pathway. For each policy, state which economic constraint or externality it targets. Then describe one offsetting response or implementation problem that could weaken the policy’s case.",
    minutes: 10.5
  },

    // ============================================
  // LECTURE 18 — Poverty and gender gaps
  // ============================================

  {
    id: "lc18-tf-01",
    topic: "Lecture 18 - Poverty and gender gaps",
    type: "true_false",
    prompt: "In a country where parents care equally about all of their children once they are born and there are no gender diﬀerences in the returns to investment of any type, we expect to see few gender diﬀerences in educational enrollment or malnutrition rates.",
    minutes: 1.5
  },

  {
    id: "lc18-tf-02",
    topic: "Lecture 18 - Poverty and gender gaps",
    type: "true_false",
    prompt: "The eﬀects of in-utero exposure to famines or other severe economic shocks are evident at birth.",
    minutes: 1.5
  },

  {
    id: "lc18-tf-03",
    topic: "Lecture 18 - Poverty and gender gaps",
    type: "true_false",
    prompt: "Resource dilution and sibling rivalry are two names for the same phenomenon: as family size rises, average investment per child falls.",
    minutes: 1.5
  },

  {
    id: "lc18-tf-04",
    topic: "Lecture 18 - Poverty and gender gaps",
    type: "true_false",
    prompt: "An altruistic parent who cares equally about each child’s lifetime welfare will, in general, invest equal amounts in each of her children.",
    minutes: 1.5
  },

  {
    id: "lc18-tf-05",
    topic: "Lecture 18 - Poverty and gender gaps",
    type: "true_false",
    prompt: "In a unitary household model, transferring $100 of income to the mother and transferring the same $100 to the father should produce identical eﬀects on child outcomes.",
    minutes: 1.5
  },

  {
    id: "lc18-or-01",
    topic: "Lecture 18 - Poverty and gender gaps",
    type: "open_response",
    prompt: "Why is average education per child lower in larger families?",
    minutes: 10.5
  },

  {
    id: "lc18-or-02",
    topic: "Lecture 18 - Poverty and gender gaps",
    type: "open_response",
    prompt: "There are roughly 130 million missing women in the world today. What does the term “missing women” mean, what are the main mechanisms by which women go missing, and why might girls have higher mortality rates than boys in some settings?",
    minutes: 10.5
  },

  {
    id: "lc18-or-03",
    topic: "Lecture 18 - Poverty and gender gaps",
    type: "open_response",
    prompt: "Suppose women in China are more active in tea cultivation than men. China then liberalizes trade in tea with India and Indian producers undercut Chinese tea prices, so tea prices fall in tea-suitable Chinese counties. Use the household allocation model to predict what happens to gender diﬀerences in education in those counties. Compare with the case where the aﬀected crop is a male-comparative-advantage crop with falling prices.",
    minutes: 10.5
  },

  {
    id: "lc18-or-04",
    topic: "Lecture 18 - Poverty and gender gaps",
    type: "open_response",
    prompt: "The government of India is considering an aﬃrmative-action program that reserves a fixed share of government jobs for women, with no gender pay gap on those jobs. Use the lecture’s framework to predict the eﬀect on schooling investments in girls. Identify which parameters of the model the policy moves — Rg , ωg , bf , or B— and discuss whether they reinforce or oﬀset one another.",
    minutes: 10.5
  },

  {
    id: "lc18-or-05",
    topic: "Lecture 18 - Poverty and gender gaps",
    type: "open_response",
    prompt: "In societies with high dowry, daughters carry a large negative net transfer at marriage. Explain how dowry interacts with credit constraints to aﬀect (a) the household’s investment in a daughter’s human capital and (b) parents’ decisions about how many daughters to have.",
    minutes: 10.5
  },

    // ============================================
  // LECTURE 19 — Adolescence
  // ============================================

  {
    id: "lc19-tf-01",
    topic: "Lecture 19 - Adolescence",
    type: "true_false",
    prompt: "Child labor will increase and schooling decline when a household experiences an unexpectedly bad harvest. Defend your answer with the relevant model.",
    minutes: 1.5
  },

  {
    id: "lc19-tf-02",
    topic: "Lecture 19 - Adolescence",
    type: "true_false",
    prompt: "In the classical labor supply model with costly schooling, an increase in the wage w unambiguously raises the optimal level of schooling s∗. Defend your answer with the relevant model.",
    minutes: 1.5
  },

  {
    id: "lc19-tf-03",
    topic: "Lecture 19 - Adolescence",
    type: "true_false",
    prompt: "In the nonseparable farm household model, a fall in the local price of the household’s main crop changes a child’s time allocation through a channel that the classical labor supply model rules out by assumption. Defend your answer with the relevant model.",
    minutes: 1.5
  },

  {
    id: "lc19-tf-04",
    topic: "Lecture 19 - Adolescence",
    type: "true_false",
    prompt: "In a Harris–Todaro economy, expanding rural secondary schooling raises the expected urban wage facing the next cohort of rural graduates and can therefore increase rural-to-urban migration. Defend your answer with the relevant model.",
    minutes: 1.5
  },

  {
    id: "lc19-tf-05",
    topic: "Lecture 19 - Adolescence",
    type: "true_false",
    prompt: "A pure cash transfer to a household always raises a child’s schooling by at least as much as the same dollar amount delivered as a transfer conditional on attendance. Defend your answer with the relevant model.",
    minutes: 1.5
  },

  {
    id: "lc19-or-01",
    topic: "Lecture 19 - Adolescence",
    type: "open_response",
    prompt: "The government of South Sudan has recently announced the abolition of school fees through the secondary level. Suppose this announcement did make secondary schooling free (in practice, informal fees, uniforms, transport, and opportunity costs remain). \n&emsp;&emsp;Use the adapted labor supply model – ironically, the version with “costly schooling” is the right tool here – to address the following: \n&emsp;&emsp;a. Predict the impact of the fall in p on a child’s time in school and time in work. Be explicit about which households respond most. \n&emsp;&emsp;b. Discuss how this shock changes the within-household distribution of human-capital investment across siblings, paying explicit attention to resource dilution and sibling rivalry.",
    minutes: 10.5
  },

  {
    id: "lc19-or-02",
    topic: "Lecture 19 - Adolescence",
    type: "open_response",
    prompt: "The government of Burkina Faso is eager to raise schooling among its school-aged population. Two policy levers are on the table: (i) reducing the direct costs of schooling (fees, uniforms, transport), and (ii) tightening enforcement against child labor. \n&emsp;&emsp;Use the classical labor supply framework with costly schooling to argue that lever (i) is a more reliable instrument for raising schooling than lever (ii), even if the enforcement effort against child labor were perfectly successful. Make explicit: \n&emsp;&emsp;a. What does each policy do to the household’s full-income budget and to the relative price of schooling time? \n&emsp;&emsp;b. Which margin of substitution does the work in each case? \n&emsp;&emsp;c. Why can a successful child-labor ban leave s∗ essentially unchanged in the model?",
    minutes: 10.5
  },

  {
    id: "lc19-or-03",
    topic: "Lecture 19 - Adolescence",
    type: "open_response",
    prompt: "Conditional cash transfers (CCTs) are now the dominant instrument of social protection in middle-income developing countries. Using the classical labor supply model with costly schooling, address each of the following: \n&emsp;&emsp;a. What are the advantages of a CCT over the free provision of schooling? \n&emsp;&emsp;b. What are the advantages of a CCT over an unconditional cash transfer of the same monetary value? \n&emsp;&emsp;c. Most CCT programs raise the per-child conditional payment for adolescent girls as they age. Why does the model predict that the conditional transfer to a girl in school must rise with her age in order to keep her enrolled?",
    minutes: 10.5
  },

  {
    id: "lc19-or-04",
    topic: "Lecture 19 - Adolescence",
    type: "open_response",
    prompt: "Across the Sahel and East Africa, smallholder households produce a large share of their own food. The local price of the household’s main crop and the marginal product of household labor on the family plot both vary sharply across seasons and harvest years. \n&emsp;&emsp;Compare what the classical labor supply model and the nonseparable farm household model from earlier in the term predict about how a child’s time allocation responds to: \n&emsp;&emsp;a. A fall in the local price of the household’s main crop \n&emsp;&emsp;b. A positive productivity shock to household land (e.g. a new irrigation scheme). \n&emsp;&emsp;In which environments does the classical labor supply model give misleading policy advice? In which does it remain a useful first approximation?",
    minutes: 10.5
  },

  {
    id: "lc19-or-05",
    topic: "Lecture 19 - Adolescence",
    type: "open_response",
    prompt: "African governments are scaling rural secondary schools at a time when urban formal-sector job creation is lagging far behind growth in the urban working-age population. \n&emsp;&emsp;a. Use the classical labor supply model with costly schooling to predict the effect of a large expansion of rural secondary schooling on a household’s choice of s∗. \n&emsp;&emsp;b. Now embed that household in a Harris–Todaro economy. As successive cohorts graduate, what happens to the expected urban wage, urban unemployment, and the migration decision facing the next rural cohort? \n&emsp;&emsp;c. In what sense does a successful rural schooling policy generate its own backlash against rural human-capital retention? What complementary policies does the joint model suggest a government should consider?",
    minutes: 10.5
  },

    // ============================================
  // LECTURE 20 — Fertility
  // ============================================

  {
    id: "lc20-tf-01",
    topic: "Lecture 20 - Fertility",
    type: "true_false",
    prompt: "In the quality–quantity framework, the implicit (“shadow”) price of an extra child rises with the household’s chosen level of child quality.",
    minutes: 1.5
  },

  {
    id: "lc20-tf-02",
    topic: "Lecture 20 - Fertility",
    type: "true_false",
    prompt: "Fertility declines as family incomes increase.",
    minutes: 1.5
  },

  {
    id: "lc20-tf-03",
    topic: "Lecture 20 - Fertility",
    type: "true_false",
    prompt: "Increasing earnings power for women can explain why total fertility rates fall with development.",
    minutes: 1.5
  },

  {
    id: "lc20-or-01",
    topic: "Lecture 20 - Fertility",
    type: "open_response",
    prompt: "Why might fertility decline with rising incomes?",
    minutes: 10.5
  },

  {
    id: "lc20-or-02",
    topic: "Lecture 20 - Fertility",
    type: "open_response",
    prompt: "Why might an education program on the side effects affect fertility rates even without any change in access to contraceptives?",
    minutes: 10.5
  },

  {
    id: "lc20-or-03",
    topic: "Lecture 20 - Fertility",
    type: "open_response",
    prompt: "The government of South Sudan recently announced the abolition of school fees through secondary.  Suppose this makes secondary schooling free (it does not).  Let’s think through the implication of this fall in school fees using two different models. \n&emsp;&emsp;a. Use the quality - quantity model to discuss the impact of this fall in school fees on fertility. \n&emsp;&emsp;b. Use the adapted labor supply model (ironically you will want to use the version with “costly schooling” for this) to discuss the impact on child labor and schooling. \n&emsp;&emsp;What drives the differences in your discussion between these two models?",
    minutes: 10.5
  },

  {
    id: "lc20-or-04",
    topic: "Lecture 20 - Fertility",
    type: "open_response",
    prompt: "Suppose women in China are more active in tea cultivation than men.  Suppose that China liberalizes trade in tea with India and that India can produce tea more cheaply than China so that Chinese tea prices fall.  What effect should this have on fertility and the choice of contraceptives in China in communities where women are largely engaged in tea cultivation?  What effect might this have on gender differences in education in these Chinese communities?  In answering this later question, how does your answer change if tea is a tiny share of overall female employment?  How does your answer vary with assumptions about the returns to education in tea cultivations?",
    minutes: 10.5
  },

  {
    id: "lc20-or-05",
    topic: "Lecture 20 - Fertility",
    type: "open_response",
    prompt: "30 years ago, most of the population of Nepal lacked road access whereas today, a majority of the population lives within easy access to roads.  Assume that this improved access to roads is attributable to road construction rather than migration (not entirely true).  Suppose that the availability of roads dramatically lowers transportation costs and lead to the availability of traded goods that would have previously been home produced.  What effect do we expect road construction to have on the fertility of women (ignore income effects associated directly with building roads)?",
    minutes: 10.5
  },

  {
    id: "lc20-or-06",
    topic: "Lecture 20 - Fertility",
    type: "open_response",
    prompt: "Why will increases in the relative wages of women lower fertility? Why does the question need to refer to women’s relative wages and not only wages overall? What happens if both male and female wages rise but women’s relative wage falls? Why are fertility responses larger for older women than younger women?",
    minutes: 10.5
  },
   {
    id: "lc20-or-07",
    topic: "Lecture 20 - Fertility",
    type: "open_response",
     prompt: "Nigeria’s TFR is approximately 5.1 (2024), the highest among the world’s ten most populous countries. The North–South divide is dramatic: states in the Northeast and Northwest have TFRs above 6 and female secondary enrollment under 30%; states in the Southwest have TFRs near 3 and female enrollment near 70%. Boko Haram and bandit displacement persist in the North. The federal government’s May 2023 fuel-subsidy removal roughly tripled transport prices and pushed inflation to near 30%. \n&emsp;&emsp;a) Use the quality–quantity model to write down two competing explanations for the Nigerian North–South fertility gap. \n&emsp;&emsp;b) Suppose a hypothetical labor demand shock doubles the wages of women in northern Nigerian agriculture (e.g. via mechanization- induced demand for labor in processing). Use the cost-of-female-time hypothesis to predict the sign and rough magnitude of the effect on regional TFR. Be explicit about the income and substitution channels and which is likely to dominate at northern Nigeria’s income level. \n&emsp;&emsp;c) The 2023 fuel-subsidy removal raised the effective price of transport, food and basic goods. Using the Q-Q framework, sketch what this implies for current fertility decisions among urban poor households in Lagos. What does it imply for schooling and the allocation of workers between urban and rural areas?",
    minutes: 10.5
  },

    // ============================================
  // LECTURE 21 — Public Policy and Human Development
  // ============================================

  {
    id: "lc21-tf-01",
    topic: "Lecture 21 - Public Policy and Human Development",
    type: "true_false",
    prompt: "In Basu–Van, a temporary ban on child labor that shifts the economy from the low-wage to the high-wage equilibrium can be self-sustaining after the ban is lifted. Defend this statement using the models from this week.",
    minutes: 1.5
  },

  {
    id: "lc21-tf-02",
    topic: "Lecture 21 - Public Policy and Human Development",
    type: "true_false",
    prompt: "Reduced school costs decrease child labor. Defend this statement using the models from this week.",
    minutes: 1.5
  },

  {
    id: "lc21-tf-03",
    topic: "Lecture 21 - Public Policy and Human Development",
    type: "true_false",
    prompt: "An enforced ban on child labor will hurt low-income families by depriving them of the child’s income. Defend this statement using the models from this week.",
    minutes: 1.5
  },

  {
    id: "lc21-tf-04",
    topic: "Lecture 21 - Public Policy and Human Development",
    type: "true_false",
    prompt: "Schooling is low in low-income countries because of the prevalence of child labor. If we could prevent children from working, schooling would inevitably increase. Defend this statement using the models from this week.",
    minutes: 1.5
  },

  {
    id: "lc21-tf-05",
    topic: "Lecture 21 - Public Policy and Human Development",
    type: "true_false",
    prompt: "The principal advantage of a CCT over a UCT of equal value is that the CCT lowers the marginal price of schooling.",
    minutes: 1.5
  },

  {
    id: "lc21-or-01",
    topic: "Lecture 21 - Public Policy and Human Development",
    type: "open_response",
    prompt: "Children in poor communities are less likely to attend school than children in richer communities. Why might this be the case? \n&emsp;&emsp;Use the models from the course to organize your answer. Be explicit about which channel you are pointing to in each model: e.g. direct cost p, time price w, full income Y, perceived returns b, school quality, fertility / sibling competition, credit constraints, and the equilibrium adult wage. A complete answer will draw on more than one model and will say which channel is likely to be first-order in the setting you have in mind.",
    minutes: 10.5
  },

  {
    id: "lc21-or-02",
    topic: "Lecture 21 - Public Policy and Human Development",
    type: "open_response",
    prompt: "The government of South Sudan has recently announced the abolition of school fees through the secondary level. Suppose this announcement did make secondary schooling free (in practice, informal fees and other costs remain). Work the implications of this fall in school fees through three different models. \n&emsp;&emsp;a. Use the quality–quantity model to discuss the impact on fertility. \n&emsp;&emsp;b. Use the adapted labor supply model — ironically, the version with “costly schooling” is the right tool here — to discuss the impact on child labor and on schooling. \n&emsp;&emsp;c. Use the partial-equilibrium model of child labor from this lecture to discuss the impact on child labor, assuming that the decline in fees is felt by the household as a lower subsistence threshold (the household can now get by without child-labor income at a lower level of household income). \n&emsp;&emsp;d. Use the results from a-c to discuss the impact on the within-household distribution of human-capital investment, paying attention to resource dilution and sibling rivalry.",
    minutes: 10.5
  },

  {
    id: "lc21-or-03",
    topic: "Lecture 21 - Public Policy and Human Development",
    type: "open_response",
    prompt: "Consider an economy with child labor present. Assume that families allow their children to work only when household income absent the child’s income is below subsistence. Children and adults perform the same type of work, but children are less productive at it. Now suppose the government imposes a binding minimum wage at a tiny bit above the subsistence level of consumption. \n&emsp;&emsp;Work out what happens. Be explicit about: \n&emsp;&emsp;a. Which agents (adults, children) are hired in the new equilibrium and at what wage; \n&emsp;&emsp;b. Whether households still send their children to work, and why or why not; \n&emsp;&emsp;c. Which equilibrium the Basu–Van diagram now selects, and whether the minimum wage acts as a coordination device in the same sense as a child-labor ban.",
    minutes: 10.5
  },

  {
    id: "lc21-or-04",
    topic: "Lecture 21 - Public Policy and Human Development",
    type: "open_response",
    prompt: "A farm household in a competitive economy has one child. The household allocates the child’s labor between the family farm and the formal market; the child’s total labor supply is fixed but the allocation is not. Initially the family chooses to keep the child entirely on the farm. A well-intentioned government now bans child labor in the formal market; the ban is effective. The ban does not extend to the family farm. \n&emsp;&emsp;a. Use the Basu–Van model from this lecture to predict the impact on this household’s allocation, on the equilibrium adult market wage, and on household welfare. \n&emsp;&emsp;b. Use the nonseparable farm household model from earlier in the term to predict what happens to the shadow value of child time. \n&emsp;&emsp;c. Where do the two models agree and disagree? In which empirical settings is each the right tool?",
    minutes: 10.5
  },

  {
    id: "lc21-or-05",
    topic: "Lecture 21 - Public Policy and Human Development",
    type: "open_response",
    prompt: "Low-fee private schools now serve a substantial share of urban Indian children from low-income households, and a growing share in rural areas. Advocates argue the segment has shifted girls into school in particular. \n&emsp;&emsp;a. Use the labor supply model with costly schooling to interpret the price elasticity that this advocacy claim implicitly relies on. \n&emsp;&emsp;b. Use the Harris–Todaro logic to discuss what the availability of urban private schools does to the rural-to-urban migration decision facing a household with school-aged children in rural Bihar.",
    minutes: 10.5
  },

  {
    id: "lc21-or-06",
    topic: "Lecture 21 - Public Policy and Human Development",
    type: "open_response",
    prompt: "Brazil’s Bolsa Família is moving toward time-limited transfers, with households expected to “graduate” off the program after several years. \n&emsp;&emsp;a. Use the labor supply model with costly schooling to predict what happens to a recipient family’s child-time allocation when the conditional payment ends. \n&emsp;&emsp;b. Use the Becker quality–quantity model to predict what happens to the family’s fertility decisions, and to per-child schooling, if the family is still considering further children. \n&emsp;&emsp;c. If many recipient households simultaneously lose the transfer in a single municipality, what does the Basu–Van child-labor coordination model predict for the local adult wage? In what sense does this strengthen or weaken the case for graduation?",
    minutes: 10.5
  },

  {
    id: "lc21-or-07",
    topic: "Lecture 21 - Public Policy and Human Development",
    type: "open_response",
    prompt: "Sustained Western pressure on Pakistan’s soccer-ball stitching industry in Sialkot in the late 1990s removed children from formal export production. Local NGOs reported that many displaced children moved into hazardous work on family farms, in domestic service, or in small unregulated workshops — not into school. \n&emsp;&emsp;Compare what each of the following predicts about where displaced children go: \n&emsp;&emsp;a. The Basu–Van child-labor coordination model. \n&emsp;&emsp;b. The nonseparable farm household model \n&emsp;&emsp;c. The Harris–Todaro model. \n&emsp;&emsp;Which mechanism best matches the observed pattern? What does the comparison imply about the relative effectiveness of sector-specific child-labor bans versus broad income-support programs?",
    minutes: 10.5
  },

  {
    id: "lc21-or-08",
    topic: "Lecture 21 - Public Policy and Human Development",
    type: "open_response",
    prompt: "Ethiopia’s Productive Safety Net Programme (PSNP) provides cash and food transfers to chronically food-insecure rural households, with public-works requirements for some recipients. Suppose a multi-year drought reduces the marginal product of household labor on smallholder farms. \n&emsp;&emsp;a. Compare what the nonseparable farm household model and the labor supply model with costly schooling predict about the effect of the drought on a child’s time at school. \n&emsp;&emsp;b. Layer in PSNP transfers. Under what conditions does the Basu–Van child-labor coordination logic suggest that PSNP transfers — without any conditionality on child schooling — could nevertheless reduce child labor at the village level? \n&emsp;&emsp;c. What feature of the demand curve for adult labor would tell you whether the resulting reduction in child labor is permanent or temporary?",
    minutes: 10.5
  },

  {
    id: "lc21-or-09",
    topic: "Lecture 21 - Public Policy and Human Development",
    type: "open_response",
    prompt: "The Iran war has disrupted Iranian urea and ammonia exports, pushing global fertilizer prices sharply higher. Smallholder farmers in Tanzania, Malawi, and Ethiopia — already running thin margins — face substantially higher input costs for the 2026 planting season. \n&emsp;&emsp;a. Use the nonseparable farm household model to predict how the input-price shock affects a family’s choice over child time on the farm versus child time at school. What changes (shadow wage, full income, output, or some combination)? Why does the labor supply model with costly schooling give a less complete answer? \n&emsp;&emsp;b. If the shock pushes the village-level adult wage below subsistence, what does Basu–Van predict? Does temporary humanitarian assistance suffice to prevent a slip to the low-wage equilibrium, or are persistent transfers required? \n&emsp;&emsp;c. If fertilizer prices remain elevated for several years, use the Becker quality–quantity model to predict how households revise fertility, and what this implies for per-child schooling a generation later. In what sense does a transient shock leave a permanent imprint?",
    minutes: 10.5
  },

    // ============================================
  // LECTURE 22 — Policy brief 5: Foreign aid
  // ============================================

  {
    id: "lc22-tf-01",
    topic: "Lecture 22 - Policy brief 5: Foreign aid",
    type: "true_false",
    prompt: "A project can improve the task it directly targets and still have little effect on the final outcome if a complementary task remains weak.",
    minutes: 1.5
  },

  {
    id: "lc22-tf-02",
    topic: "Lecture 22 - Policy brief 5: Foreign aid",
    type: "true_false",
    prompt: "In an O-ring production chain, a strong engineering case is enough to show that the project fixes the weak link.",
    minutes: 1.5
  },

  {
    id: "lc22-tf-03",
    topic: "Lecture 22 - Policy brief 5: Foreign aid",
    type: "true_false",
    prompt: "A project that misdiagnoses why the weak task is weak can fail even when the technology works as designed.",
    minutes: 1.5
  },

  {
    id: "lc22-tf-04",
    topic: "Lecture 22 - Policy brief 5: Foreign aid",
    type: "true_false",
    prompt: "Adoption and use are the same decision.",
    minutes: 1.5
  },

  {
    id: "lc22-tf-05",
    topic: "Lecture 22 - Policy brief 5: Foreign aid",
    type: "true_false",
    prompt: "High take up is enough evidence that the target population uses the intervention as intended.",
    minutes: 1.5
  },

  {
    id: "lc22-tf-06",
    topic: "Lecture 22 - Policy brief 5: Foreign aid",
    type: "true_false",
    prompt: "A household can rationally adopt a new technology and still use the old fallback technology on many occasions.",
    minutes: 1.5
  },

  {
    id: "lc22-tf-07",
    topic: "Lecture 22 - Policy brief 5: Foreign aid",
    type: "true_false",
    prompt: "A small positive price always raises project value because it selects only households that will use the good.",
    minutes: 1.5
  },

  {
    id: "lc22-tf-08",
    topic: "Lecture 22 - Policy brief 5: Foreign aid",
    type: "true_false",
    prompt: "Household crowd out can reduce the additional engineering output of a program even when no one is stealing funds or breaking rules.",
    minutes: 1.5
  },

  {
    id: "lc22-tf-09",
    topic: "Lecture 22 - Policy brief 5: Foreign aid",
    type: "true_false",
    prompt: "If a donor funds a named project, spending on that project must rise by the full amount of the donor funding.",
    minutes: 1.5
  },

  {
    id: "lc22-tf-10",
    topic: "Lecture 22 - Policy brief 5: Foreign aid",
    type: "true_false",
    prompt: "A donor grant can be less valuable than it first appears if it brings tied procurement, reporting burdens, cofinancing requirements, scarce staff demands, future maintenance costs, or weak delivery through the public system.",
    minutes: 1.5
  },

  {
    id: "lc22-or-01",
    topic: "Lecture 22 - Policy brief 5: Foreign aid",
    type: "open_response",
    prompt: "A donor proposes a vaccine campaign in a low-income country. Vaccines are available, but rural clinics often lack refrigeration, nurses are frequently absent, and parents often miss follow-up visits. Explain whether the project fixes the weak link or depends on weak complements. What would you recommend changing before scale-up? Use concepts from the brief.",
    minutes: 10.5
  },

  {
    id: "lc22-or-02",
    topic: "Lecture 22 - Policy brief 5: Foreign aid",
    type: "open_response",
    prompt: "A donor distributes improved cookstoves for free in rural villages. Most households accept the stoves, but many continue cooking some meals on traditional fires and maintenance falls after the first year. Explain why adoption is not enough evidence of impact. What evidence would distinguish low adoption, low use, stacking, and fade out? Use concepts from the brief.",
    minutes: 10.5
  },

  {
    id: "lc22-or-03",
    topic: "Lecture 22 - Policy brief 5: Foreign aid",
    type: "open_response",
    prompt: "A government considers a fertilizer subsidy for small farmers. Some farmers would have purchased fertilizer without the subsidy. Others say fertilizer raises yields, but they lack cash at planting time and worry about rainfall risk. Explain the likely household-side problem and whether the subsidy mainly changes output, transfers resources, or both. Use concepts from the brief.",
    minutes: 10.5
  },

  {
    id: "lc22-or-04",
    topic: "Lecture 22 - Policy brief 5: Foreign aid",
    type: "open_response",
    prompt: "A donor offers to finance nurses in poor districts for three years. The finance ministry may reduce its own staffing budget in those districts and use the savings elsewhere. The donor also requires special reporting and a separate procurement system. Explain what the country should ask about additionality, fungibility, donor restrictions, and future fiscal obligations. Use concepts from the brief.",
    minutes: 10.5
  },

  {
    id: "lc22-or-05",
    topic: "Lecture 22 - Policy brief 5: Foreign aid",
    type: "open_response",
    prompt: "A donor offers tablets for primary schools. The country has weak teacher attendance, unreliable electricity, and limited maintenance capacity. If the same amount were available as unrestricted budget support, the education ministry might choose teacher management and school repairs instead. Explain how the country should compare the donor project to the alternative use of the same scarce resources. Use concepts from the brief.",
    minutes: 10.5
  },

    // ============================================
  // LECTURE 23 — Taxation
  // ============================================

  {
    id: "lc23-tf-01",
    topic: "Lecture 23 - Taxation",
    type: "true_false",
    prompt: "A Pigovian tax set at the marginal external cost evaluated at the socially efficient quantity restores efficiency.",
    minutes: 1.5
  },

  {
    id: "lc23-tf-02",
    topic: "Lecture 23 - Taxation",
    type: "true_false",
    prompt: "The economic incidence of a tax is determined by who is legally required to remit it.",
    minutes: 1.5
  },

  {
    id: "lc23-tf-03",
    topic: "Lecture 23 - Taxation",
    type: "true_false",
    prompt: "Doubling a tax rate roughly doubles the dead-weight loss generated by the tax.",
    minutes: 1.5
  },

  {
    id: "lc23-tf-04",
    topic: "Lecture 23 - Taxation",
    type: "true_false",
    prompt: "A tax on land imposes essentially no dead-weight loss because land is in perfectly inelastic supply.",
    minutes: 1.5
  },

  {
    id: "lc23-tf-05",
    topic: "Lecture 23 - Taxation",
    type: "true_false",
    prompt: "The self-enforcing logic of the value-added tax works equally well at every stage of the supply chain, including the final sale to consumers.",
    minutes: 1.5
  },

  {
    id: "lc23-tf-06",
    topic: "Lecture 23 - Taxation",
    type: "true_false",
    prompt: "Audit threats produce the largest revenue gains on transactions that are already covered by the VAT paper trail.",
    minutes: 1.5
  },

  {
    id: "lc23-tf-07",
    topic: "Lecture 23 - Taxation",
    type: "true_false",
    prompt: "Consumption taxes are necessarily regressive in low-income countries because the poor consume a larger share of their income.",
    minutes: 1.5
  },

  {
    id: "lc23-tf-08",
    topic: "Lecture 23 - Taxation",
    type: "true_false",
    prompt: "In most low- and middle-income countries the personal income tax is a major contributor to total tax revenue.",
    minutes: 1.5
  },

  {
    id: "lc23-tf-09",
    topic: "Lecture 23 - Taxation",
    type: "true_false",
    prompt: "Higher performance-based pay for tax agents reliably reduces both unpaid tax and collusion between agents and taxpayers.",
    minutes: 1.5
  },

  {
    id: "lc23-tf-10",
    topic: "Lecture 23 - Taxation",
    type: "true_false",
    prompt: "Visible improvements in public services can raise tax compliance enough that the revenue gains exceed the cost of providing the public good.",
    minutes: 1.5
  },

  {
    id: "lc23-or-01",
    topic: "Lecture 23 - Taxation",
    type: "open_response",
    prompt: "In 2014 Mexico introduced a peso-per-liter tax on sugar-sweetened beverages. Several other middle-income countries (South Africa, Colombia, the Philippines, Saudi Arabia) have adopted similar taxes since, and the rate is currently under debate in Mexico. \n&emsp;&emsp;a. Pigovian framing: What is the relevant externality? Under what assumptions does a flat per-liter tax approximate the Pigovian benchmark, and what does that imply for the optimal rate? \n&emsp;&emsp;b. Incidence: Under what conditions does the burden fall mostly on consumers, and under what conditions mostly on bottlers and retailers? Use elasticity reasoning. \n&emsp;&emsp;c. Dead-weight loss: Calculate the dead-weight-loss triangle conceptually, then explain why the existence of a corrective externality changes the sign of the welfare effect. Could a sufficiently large tax actually be welfare-reducing even with the externality? At what point? \n&emsp;&emsp;d. Equity: Headline analyses call SSB taxes regressive on the standard ground that the poor spend a larger share of their income on consumption goods. Explain why that conclusion can be wrong once you account for where the poor actually transact, and what data you would want to verify it for a particular country.",
    minutes: 10.5
  },

  {
    id: "lc23-or-02",
    topic: "Lecture 23 - Taxation",
    type: "open_response",
    prompt: "Brazil’s 2023–2024 constitutional tax reform consolidates a tangle of overlapping federal and state consumption taxes (PIS, COFINS, IPI, ICMS, ISS) into a unified dual VAT (CBS at the federal level, IBS at the state and municipal levels) with a single split rate, phased in from 2026 through 2033. The reform also introduces a partial cashback to low-income households. \n&emsp;&emsp;a. Using the third-party-reporting / paper-trail logic, explain why a unified VAT should raise more revenue at lower compliance cost than the system it replaces. \n&emsp;&emsp;b. Critics argue the new VAT will be regressive because it falls on consumption. Evaluate this argument, paying attention to which households actually transact in venues where the VAT is collected. Where in the income distribution is the actual burden likely to land? \n&emsp;&emsp;c. Is the cashback a better redistribution tool than exempting basic goods from the VAT? Use the design rule for taxing inelastic vs. elastic bases.",
    minutes: 10.5
  },

  {
    id: "lc23-or-03",
    topic: "Lecture 23 - Taxation",
    type: "open_response",
    prompt: "Under its current IMF program, Pakistan has committed to raise tax revenue from around 10% of GDP toward 13%+ of GDP. The personal-income-tax base is very narrow (under 5% of working-age adults file), property tax collection is weak, and the retail and wholesale sectors are largely outside the VAT chain. \n&emsp;&emsp;a. Using the technology / tax-agents / politics framework, identify which of the three levers is most binding and explain why. \n&emsp;&emsp;b. Compare raising the personal-income-tax base against raising the property tax. Which has greater long-run revenue potential, and which is the easier political reform? Be explicit about whom each reform mobilises against the government. \n&emsp;&emsp;c. Higher pay for tax agents has been proposed as part of the reform. Explain why monitoring is needed alongside, not instead of, incentive reform. What unmeasured margin might high-powered incentives worsen? \n&emsp;&emsp;d. Brazil and Pakistan face different versions of the same revenue problem. Do you have any guesses as to what features of Pakistan’s political economy makes a Brazilian-style consolidating-VAT reform more or less feasible there?",
    minutes: 10.5
  },
  // ============================================
  // LECTURE 24 — Corruption
  // ============================================

  {
    id: "lc24-tf-01",
    topic: "Lecture 24 - Corruption",
    type: "true_false",
    prompt: "Bribes that allow buyers to skip queues can be welfare-improving in a setting with otherwise inefficient regulations.",
    minutes: 1.5
  },

  {
    id: "lc24-tf-02",
    topic: "Lecture 24 - Corruption",
    type: "true_false",
    prompt: "The long-run damage from corruption is usually larger through distorted private-sector decisions than through direct theft from the state.",
    minutes: 1.5
  },

  {
    id: "lc24-tf-03",
    topic: "Lecture 24 - Corruption",
    type: "true_false",
    prompt: "Higher bureaucratic wages have been shown to reliably and substantially reduce corruption.",
    minutes: 1.5
  },

  {
    id: "lc24-tf-04",
    topic: "Lecture 24 - Corruption",
    type: "true_false",
    prompt: "Cross-country growth regressions provide strong identified evidence that corruption causes slow growth.",
    minutes: 1.5
  },

  {
    id: "lc24-tf-05",
    topic: "Lecture 24 - Corruption",
    type: "true_false",
    prompt: "Diplomats from countries with higher perceived corruption accumulate more unpaid parking tickets when stationed abroad with diplomatic immunity.",
    minutes: 1.5
  },

  {
    id: "lc24-tf-06",
    topic: "Lecture 24 - Corruption",
    type: "true_false",
    prompt: "Higher performance-based pay for tax or service-delivery agents tends to raise measured revenue and increase the rents extracted from clients at the same time.",
    minutes: 1.5
  },

  {
    id: "lc24-tf-07",
    topic: "Lecture 24 - Corruption",
    type: "true_false",
    prompt: "Top-down audits and bottom-up community monitoring are perfect substitutes for one another, since each addresses the same information friction.",
    minutes: 1.5
  },

  {
    id: "lc24-tf-08",
    topic: "Lecture 24 - Corruption",
    type: "true_false",
    prompt: "Publishing the results of government audits can change electoral outcomes even where direct judicial enforcement is weak.",
    minutes: 1.5
  },

  {
    id: "lc24-tf-09",
    topic: "Lecture 24 - Corruption",
    type: "true_false",
    prompt: "Clientelism in poor democracies is best understood as a stable cultural attribute rather than as the equilibrium outcome of a political game.",
    minutes: 1.5
  },

  {
    id: "lc24-tf-10",
    topic: "Lecture 24 - Corruption",
    type: "true_false",
    prompt: "A national biometric ID system reduces corruption uniformly across all stages of a public-service program, from upstream procurement of inputs to downstream disbursement of benefits.",
    minutes: 1.5
  },

  {
    id: "lc24-or-01",
    topic: "Lecture 24 - Corruption",
    type: "open_response",
    prompt: "South Africa’s Judicial Commission of Inquiry into Allegations of State Capture (the Zondo Commission) reported in 2022 on systematic looting of state-owned enterprises (Eskom, Transnet, SAA) during the Zuma administration, with private actors installing senior officials and writing procurement contracts. Several years on, prosecutions are slow, Eskom remains in crisis, and reform of public procurement is the central policy debate. \n&emsp;&emsp;a. Explain why this case is poorly described by a petty-bribery model and what it tells us about the limits of cross-country corruption indices. \n&emsp;&emsp;b. Using the four-margin bureaucratic framework (selection, incentives, monitoring, political connections), identify which margin failed most catastrophically at the state-owned enterprises, and which reform tool best addresses that margin. \n&emsp;&emsp;c. Apply procurement-capture logic. Which specific reforms — open electronic procurement, beneficial-ownership disclosure, debarment of connected suppliers, or independent audit publication — would have the largest near-term effect on the rents available? Justify your ranking. \n&emsp;&emsp;d. Why has the post-Zondo reform process been slow? Identify the losers, the winners, and the coalition problem that makes sustained reform politically difficult.",
    minutes: 10.5
  },

  {
    id: "lc24-or-02",
    topic: "Lecture 24 - Corruption",
    type: "open_response",
    prompt: "Since 2022 Ukraine has accelerated anti-corruption reform under sustained pressure from Western donors and the EU accession process: vetting of judges, expanded powers for the anti-corruption bureau, broader e-procurement, beneficial-ownership transparency, and high-profile prosecutions of senior officials, including over defense procurement during active war. \n&emsp;&emsp;a. Apply the “getting to Denmark” framing. Under what conditions can wartime urgency and donor pressure substitute for the slow institutional development that the textbook story says is required? \n&emsp;&emsp;b. Identify two structural risks of donor-conditioned anti-corruption reform that the textbook framework predicts. \n&emsp;&emsp;c. Apply the bureaucratic-incentives framework to defense procurement during war: which features of the wartime environment make corruption particularly hard to control, and which features of the donor-pressure environment make it particularly easy to expose? \n&emsp;&emsp;d. Compare the Ukrainian situation to a historical reform case of your choosing. Which of the lessons travel and which do not?",
    minutes: 10.5
  },

  {
    id: "lc24-or-03",
    topic: "Lecture 24 - Corruption",
    type: "open_response",
    prompt: "India’s Aadhaar biometric ID is now linked to most welfare delivery (the Public Distribution System, the rural employment guarantee, cooking-fuel subsidies, pensions). Independent estimates suggest substantial leakage reduction, but Aadhaar has also been criticised for exclusion errors (legitimate beneficiaries denied access when the biometric match fails) and for enabling surveillance. \n&emsp;&emsp;a. Using “technology substitutes for state capacity,” identify which categories of corruption rents biometric authentication is well-positioned to eliminate, and which it leaves untouched. \n&emsp;&emsp;b. Discuss the trade-off between leakage reduction and exclusion error. Why is reducing one inevitably traded off against the other when the binding constraint is the match-quality of the biometric system? \n&emsp;&emsp;c. Indian state governments differ substantially in how cleanly Aadhaar-linked delivery operates. Which features of bureaucratic incentives and political accountability would you look for to explain the variation? \n&emsp;&emsp;d. The surveillance concern is not in the optimal-bureaucracy framework. Is there a tension between technologies that constrain corrupt officials and technologies that consolidate state power? How should an anti-corruption policy maker weigh it?",
    minutes: 10.5
  },
    // ============================================
  // LECTURE 25 — Globalization
  // ============================================

  {
    id: "lc25-tf-01",
    topic: "Lecture 25 - Globalization",
    type: "true_false",
    prompt: "The race-to-the-bottom mechanism is most likely to bind when capital is highly mobile across countries and the regulation in question is hard for foreign buyers to observe.",
    minutes: 1.5
  },

  {
    id: "lc25-tf-02",
    topic: "Lecture 25 - Globalization",
    type: "true_false",
    prompt: "Randomized evaluation of labor-standards enforcement in Bangladeshi garment factories found that compliance imposes large and statistically significant costs on factory profits.",
    minutes: 1.5
  },

  {
    id: "lc25-tf-03",
    topic: "Lecture 25 - Globalization",
    type: "true_false",
    prompt: "The pollution-haven mechanism applies symmetrically to local pollutants (air, water, e-waste) and to global pollutants like CO₂, since both respond to the same regulatory differentials.",
    minutes: 1.5
  },

  {
    id: "lc25-tf-04",
    topic: "Lecture 25 - Globalization",
    type: "true_false",
    prompt: "Most modern manufacturing relocates primarily in response to environmental-regulation differentials between source and destination countries.",
    minutes: 1.5
  },

  {
    id: "lc25-tf-05",
    topic: "Lecture 25 - Globalization",
    type: "true_false",
    prompt: "The cross-country empirical finding that resource-rich countries grow more slowly than resource-poor ones is robust across time periods and sample compositions.",
    minutes: 1.5
  },

  {
    id: "lc25-tf-06",
    topic: "Lecture 25 - Globalization",
    type: "true_false",
    prompt: "Norway, Botswana, and Chile each support the interpretation that the \"resource curse\" is mediated by the strength of pre-existing institutions.",
    minutes: 1.5
  },

  {
    id: "lc25-tf-07",
    topic: "Lecture 25 - Globalization",
    type: "true_false",
    prompt: "The resource curse is most likely to bind when the resource is geographically diffuse (e.g., smallholder agricultural commodities) rather than point-source (e.g., a small set of oil or copper extraction sites).",
    minutes: 1.5
  },

  {
    id: "lc25-tf-08",
    topic: "Lecture 25 - Globalization",
    type: "true_false",
    prompt: "Dutch disease is most likely to bite when the booming export sector has minimal domestic backward and forward linkages and the country has a floating exchange rate.",
    minutes: 1.5
  },

  {
    id: "lc25-tf-09",
    topic: "Lecture 25 - Globalization",
    type: "true_false",
    prompt: "A well-designed sovereign wealth fund can substantially offset the manufacturing-share contraction that Dutch disease would otherwise produce.",
    minutes: 1.5
  },

  {
    id: "lc25-tf-10",
    topic: "Lecture 25 - Globalization",
    type: "true_false",
    prompt: "For a country whose export basket is dominated by a few primary commodities, the year-to-year volatility of the terms of trade is empirically a more robust predictor of growth volatility than the secular trend in those terms of trade.",
    minutes: 1.5
  },

  {
    id: "lc25-tf-11",
    topic: "Lecture 25 - Globalization",
    type: "true_false",
    prompt: "The prediction of a secular decline in the relative price of primary commodities has held uniformly across primary commodities since 1980.",
    minutes: 1.5
  },

  {
    id: "lc25-tf-12",
    topic: "Lecture 25 - Globalization",
    type: "true_false",
    prompt: "The growth in formal-sector manufacturing employment in Vietnam after the 2001 U.S.–Vietnam Bilateral Trade Agreement was driven primarily by United States firms entering Vietnam as FDI investors, since the agreement reduced the cost of doing business between the two parties.",
    minutes: 1.5
  },

  {
    id: "lc25-tf-13",
    topic: "Lecture 25 - Globalization",
    type: "true_false",
    prompt: "The decline in U.S. official development assistance over the past year is roughly 5 to 10 percent, the largest year-on-year decline in two decades.",
    minutes: 1.5
  },

  {
    id: "lc25-tf-14",
    topic: "Lecture 25 - Globalization",
    type: "true_false",
    prompt: "Even after accounting for non-U.S. donors (UK, Germany, France, Japan), total OECD ODA in the past year is roughly unchanged, because European donors expanded their commitments to offset the U.S. cuts.",
    minutes: 1.5
  },

  {
    id: "lc25-or-01",
    topic: "Lecture 25 - Globalization",
    type: "open_response",
    prompt: "The EU's Carbon Border Adjustment Mechanism (CBAM) entered full force in 2026, requiring importers of steel, cement, aluminium, and fertilisers from outside the EU to surrender carbon allowances at the EU ETS price (about €75 per tonne of embedded CO₂ in 2025) for each tonne imported. India's domestic carbon price is essentially zero. Indian steel exports to the EU are concentrated in Jharkhand, Odisha, and Chhattisgarh — states that absorb substantial rural-to-urban migration into manufacturing. \n&emsp;&emsp;Mechanism: CBAM functions as a tariff on Indian steel imported into the EU. EU buyers face a higher delivered cost, so demand for Indian steel falls; Indian producers receive a lower net-of-CBAM price and cut output. Indian steel-sector labor demand falls. Because Indian steel-belt cities have been absorbing rural-to-urban migrants, the migration flow into those cities slows. The carbon embodied in Indian steel is also a global externality that the policy is trying to price. \n&emsp;&emsp;(a) Identify who in India bears the burden of CBAM and the changes in producer and consumer surplus and dead-weight loss in the Indian steel market. \n&emsp;&emsp;(b) Under what assumptions is CBAM equivalent to internalizing the global externality of Indian steel emissions, and under what assumptions is it instead a transfer of resources away from Indian producers? \n&emsp;&emsp;(c) Predict the consequences for Indian rural households on the migration-into-manufacturing path. Be explicit about how wages and unemployment adjust. \n&emsp;&emsp;(d) The Indian government has proposed responding with a domestic carbon price that mirrors CBAM. Should rural Indian households on this path support such a policy? Why? \n&emsp;&emsp;Hint: (not on the exam): the policy combines a tariff with a corrective justification, plus a knock-on effect on the labor market absorbing rural-to-urban migrants. Within India, steel producers and the firms and workers that use steel as an input experience very different effects — your answer should distinguish both sides.",
    minutes: 10.5
  },

  {
    id: "lc25-or-02",
    topic: "Lecture 25 - Globalization",
    type: "open_response",
    prompt: "The African Growth and Opportunity Act, under which sub-Saharan exports enter the US duty-free, expires in September 2025 with renewal uncertain. Lesotho's garment industry — mostly young women in factories around Maseru — exports about 70% of output to the US. If Lesotho loses preferential access and faces MFN tariffs of 17–25%, industry estimates suggest closure of two-thirds of factories and loss of about 30,000 formal-sector jobs. \n&emsp;&emsp;Mechanism: The tariff raises the delivered cost of Lesotho garments in the US, so US demand for Lesotho apparel falls. Factory output falls. Because garment-sector wages are bargained collectively and sticky, the adjustment is through factory closure and layoffs rather than wage cuts. Displaced workers move to family farms or to domestic service in Maseru, where wages are flexible. Remittances from displaced workers to their rural households fall. \n&emsp;&emsp;(a) Predict the short-run effect on Lesotho's formal-sector wages, employment, and urban unemployment. \n&emsp;&emsp;(b) Trace the medium-run consequences for rural agricultural wages and rural household consumption in the villages the displaced workers come from. Pay attention to whether reverse migration occurs and what that implies. \n&emsp;&emsp;(c) Predict the effect on child schooling and child labor in the remitting families, paying attention to whether the income shock pushes households below the threshold at which they begin to send children to work. \n&emsp;&emsp;(d) The Lesotho government has proposed a wage subsidy to garment factories financed by an import tax. Discuss the equity and efficiency consequences of this policy versus direct transfers to displaced workers. \n&emsp;&emsp;Hint (not on the exam): the policy contracts urban formal-sector labor demand at a sticky wage and reduces remittances to rural informal labor markets. The impact differs sharply between households with a garment-sector wage earner and rural households without one — your answer should distinguish these two.",
    minutes: 10.5
  },

  {
    id: "lc25-or-03",
    topic: "Lecture 25 - Globalization",
    type: "open_response",
    prompt: "In 2025 the United States sharply cut bilateral health funding to PEPFAR partner countries, including reductions of 30–50% in antiretroviral therapy procurement for high-prevalence countries in eastern and southern Africa. In Eswatini, Lesotho, Botswana, and Malawi, where HIV prevalence in adults aged 15–49 exceeds 10%, this is expected to reverse two decades of gains in life expectancy and ART access. \n&emsp;&emsp;Mechanism: The funding cut directly reduces the supply of ART. Adults who would have been treated face higher mortality risk, so expected adult life expectancy in high-prevalence communities falls. For young adults and adolescents, this lowers the expected return to long-horizon investments (schooling, costly skill acquisition) and changes the trade-off they face over risky sexual behavior. For children with HIV-positive parents, the early-life health environment worsens, with consequences that compound across later stages of human capital accumulation. \n&emsp;&emsp;(a) Predict the effect on adolescent sexual behavior in affected countries. \n&emsp;&emsp;(b) Predict the effect on educational investment in households whose ART access is now uncertain. Contrast with households without HIV exposure. \n&emsp;&emsp;(c) Many PEPFAR programs supported prevention of mother-to-child transmission and TB co-treatment. Trace the consequences for the affected cohorts of children born during the funding cut. \n&emsp;&emsp;(d) An economist argues that PEPFAR funding is poorly targeted because it focuses on one disease rather than building general health systems. Evaluate this argument from the perspective of poor households in PEPFAR-affected countries. \n&emsp;&emsp;Hint (not on the exam): the policy lowers expected adult life expectancy in affected communities and degrades the early-life health environment for affected cohorts. The impact differs across households depending on HIV status and across cohorts depending on the timing of exposure relative to the funding cut.",
    minutes: 10.5
  },

  {
    id: "lc25-or-04",
    topic: "Lecture 25 - Globalization",
    type: "open_response",
    prompt: "The EU's Deforestation Regulation (EUDR) requires importers of cocoa, coffee, rubber, palm oil, beef, soy, and wood products to certify, with geolocation evidence, that goods were not produced on land deforested since December 2020. Ivory Coast is the world's largest cocoa producer; roughly 60% of cocoa is grown on smallholder farms of 1–3 hectares. Industry estimates suggest 20–30% of smallholders may be unable to demonstrate compliance and could lose access to the EU market. \n&emsp;&emsp;Mechanism: EUDR reduces EU demand for cocoa from non-compliant farms — effectively cocoa from land cleared since 2020, and cocoa from farms that cannot verify their land history. For a non-compliant smallholder, the effective price received for cocoa falls; for a compliant smallholder, the price holds steady or even rises slightly as competition from non-compliant supply contracts. The avoided deforestation is a global environmental externality the EU is trying to price. \n&emsp;&emsp;(a) Under what conditions does EUDR internalize an externality that domestic Ivorian regulation cannot, and under what conditions does it operate as protectionism? \n&emsp;&emsp;(b) Trace the effects on income, household labor allocation, and consumption for two types of smallholders: a compliant farmer and a non-compliant farmer. \n&emsp;&emsp;(c) About half of Ivorian cocoa is grown on land cleared from forests since 2000. Discuss the distributional effects within Ivorian rural society — who wins, who loses, and which subset is most vulnerable to long-run income losses that persist after the immediate shock. \n&emsp;&emsp;(d) Ivory Coast and Ghana together produce more than 60% of world cocoa and have introduced domestic price floors. Does EUDR's price effect interact with these floors in ways that help or hurt smallholder farmers? \n&emsp;&emsp;Hint (not on the exam): the policy splits cocoa farmers into two groups facing different effective prices and reallocates the cocoa demand between them. The impact differs sharply between smallholders who can document compliance and those who cannot, and between recent forest-clearers and farmers on older land.",
    minutes: 10.5
  },

  {
    id: "lc25-or-05",
    topic: "Lecture 25 - Globalization",
    type: "open_response",
    prompt: "In July 2023 India banned exports of non-basmati white rice; the ban was briefly lifted in 2024 and reimposed in 2025. Senegal, Côte d'Ivoire, Nigeria, and Mozambique are net rice importers; India historically supplied about 40% of their rice imports. Landed rice prices in these countries rose 20–30%.\n&emsp;&emsp;Mechanism: The ban reduces the supply of rice in West African markets and raises the local rice price by 20–30%. The effect on a household depends on whether the household is a net seller or a net buyer of rice. Net sellers (e.g., a smallholder rice farmer in the Senegal River Valley) gain on the income side. Net buyers (an urban Dakar household, or a farmer in the groundnut basin who eats rice but doesn't grow it) face a fall in real income, with most of the shock landing on the food budget. \n&emsp;&emsp;(a) Predict the consequences for three Senegalese households: a smallholder rice farmer in the Senegal River Valley; an urban household in Dakar; a smallholder farmer in the groundnut basin (a region that does not grow rice). Identify which households gain, which lose, and why. \n&emsp;&emsp;(b) For poor urban households in West African capitals, predict the effect on child labor and child schooling. \n&emsp;&emsp;(c) Discuss the consequences for fertility decisions and per-child investment in poor households experiencing the food-price shock. \n&emsp;&emsp;(d) The Senegalese government has proposed responding with subsidies for domestic rice production. Evaluate this policy versus food vouchers for poor urban consumers, with attention to which households each instrument actually reaches. \n&emsp;&emsp;Hint (not on the exam): the policy creates a price shock with asymmetric effects depending on each household's net-buyer / net-seller status, and for poor net-buyer households it may push consumption below a subsistence threshold that triggers child labor.",
    minutes: 10.5
  },

  {
    id: "lc25-or-06",
    topic: "Lecture 25 - Globalization",
    type: "open_response",
    prompt: "Indonesia banned exports of raw, unprocessed nickel ore in 2020 to force downstream value addition. The actual outcome has been a wave of Chinese-led FDI in smelting and battery-materials processing — primarily on Sulawesi — accompanied by coal-fired electricity expansion and substantial environmental damage. Indonesia is now the world's largest nickel producer and a major supplier of inputs to the global EV battery supply chain. \n&emsp;&emsp;Mechanism: The export ban plus the FDI surge produces four specific shifts in Indonesia: (i) labor demand and wages in the nickel-processing belt of Sulawesi rise sharply; (ii) foreign currency inflows from FDI and processed-nickel exports rise, appreciating the real exchange rate; (iii) the combination of higher wages and a stronger currency raises costs facing producers in non-nickel tradable sectors (other manufacturing, agriculture); (iv) local pollution and health damage rise sharply in the nickel-belt communities. \n&emsp;&emsp;(a) Predict which Indonesian sectors are most likely to contract, and through what specific channel. \n&emsp;&emsp;(b) Discuss the political-economy risks. Under what conditions does the nickel export ban escape the standard institutional pathology of resource-rich extractive countries, and under what conditions does it merely shift the rent-capture mechanism downstream? \n&emsp;&emsp;(c) Indonesian environmental groups argue that the country is absorbing local climate and pollution damage while supplying clean-energy inputs to the rest of the world. Discuss this framing using what you have learned about externalities and the limits of cross-border environmental policy. \n&emsp;&emsp;(d) Bolivia, Argentina, and Chile (the \"lithium triangle\") are watching Indonesia closely. Would an analogous lithium export ban work for them? Highlight the differences in market structure and institutional capacity that determine the answer. \n&emsp;&emsp;Hint (not on the exam): the policy generates exchange-rate appreciation and wage pressure that hurt non-booming tradables, plus a resource-rent capture problem mediated by institutional quality. Within Indonesia, the boom helps nickel-belt workers and capital owners but hurts workers in non-nickel tradable sectors and households exposed to local environmental damage.",
    minutes: 10.5
  },

  {
    id: "lc25-or-07",
    topic: "Lecture 25 - Globalization",
    type: "open_response",
    prompt: "At COP29 in November 2024, developed countries pledged to raise climate adaptation finance for developing countries to $300 billion per year by 2035 — about one-third of what the Africa Group and AOSIS negotiators demanded. The shortfall is most severe for adaptation funding to rainfed subsistence agriculture in the Sahel, Horn of Africa, and South Asia. \n&emsp;&emsp;Mechanism: Without adaptation finance, households cannot buy formal weather insurance or build large irrigation or storage capacity. Climate variability rises and the variance of agricultural income widens. For risk-averse households, the certainty-equivalent return on higher-return but riskier crops, livestock, or capital falls. Households respond by shifting toward lower-return, lower-variance activities. Some households fall below the productive-asset level required to remain on the productive-farming path and lose the capacity to recover. \n&emsp;&emsp;(a) From the perspective of a Sahelian smallholder farmer, what is the consequence of climate risk remaining uninsured for household decisions about investment, consumption, and labor allocation? \n&emsp;&emsp;(b) Climate shocks in the Sahel are spatially correlated across households within a region. Discuss the consequences of this correlation for traditional informal risk-sharing among households. Why do kin networks struggle to insure against this type of shock? \n&emsp;&emsp;(c) The shortfall is expected to push some Sahelian households below the asset threshold typically required for productive farming. Discuss the dynamics around this threshold and the long-run consequences for households that fall below it. \n&emsp;&emsp;(d) A donor argues that a one-time large asset transfer to vulnerable households is a better instrument than ongoing parametric insurance. Evaluate this argument with attention to which problem each instrument actually solves. \n&emsp;&emsp;Hint (not on the exam): the policy gap leaves households facing uninsured covariate climate risk, which both reduces investment in higher-return activities and exposes asset-poor households to a threshold below which recovery is self-limiting. The consequences fall hardest on households closer to the asset threshold and on those whose risk-coping options are most limited.",
    minutes: 10.5
  },

  {
    id: "lc25-or-08",
    topic: "Lecture 25 - Globalization",
    type: "open_response",
    prompt: "In 2024 the OECD Pillar 2 agreement entered into force, imposing a 15% global minimum effective tax on multinational profits. Small developing economies — Mauritius, Kenya's Special Economic Zones, parts of Vietnam — currently use effective rates below 15% on multinational FDI in manufacturing and services as part of their FDI-attraction strategy. \n&emsp;&emsp;Mechanism: Pillar 2 raises the effective tax rate on multinationals locating in Mauritius from below 15% to 15%. The after-tax return on FDI in Mauritius falls. Some FDI that was previously profitable in Mauritius is no longer profitable, so the inflow of new FDI slows and existing affiliates expand more slowly. Labor demand from FDI-employed Mauritian workers falls. Domestic Mauritian capital that competes with FDI faces less competition. Mauritius's tariff-equivalent policy lever for attracting capital has been removed. \n&emsp;&emsp;(a) Analyze who in Mauritius bears the burden of Pillar 2. Use elasticity reasoning to identify the Mauritian actors whose income or surplus changes and the direction of each change. \n&emsp;&emsp;(b) Pillar 2 has been described as \"lifting the floor of a race to the bottom.\" Evaluate this characterization. Under what conditions was the race-to-the-bottom mechanism plausibly operating before Pillar 2, and under what conditions does the headline framing misrepresent the underlying economics? \n&emsp;&emsp;(c) Predict the effect on Mauritian formal-sector employment, manufacturing wages, and rural-to-urban migration patterns. \n&emsp;&emsp;(d) Mauritius has argued that Pillar 2 disproportionately harms small developing economies that have used tax competition as one of the few policy tools available to them. Evaluate this argument with attention to alternative policy tools available to Mauritius. \n&emsp;&emsp;Hint (not on the exam): the policy raises the cost of locating multinational production in Mauritius, with downstream effects on the labor demand that FDI generated. The burden falls differently on FDI-employed labor, on domestic capital that competes with FDI, and on Mauritian consumers.",
    minutes: 10.5
  },

  {
    id: "lc25-or-09",
    topic: "Lecture 25 - Globalization",
    type: "open_response",
    prompt: "In April 2025 the United States imposed tariffs of 30–50% on apparel imports from Bangladesh, Cambodia, and Vietnam, before partly reducing them after negotiations. Bangladesh's ready-made garment sector employs about four million workers — overwhelmingly young women in factories around Dhaka and Chittagong — and accounts for 84% of Bangladesh's merchandise exports. \n&emsp;&emsp;Mechanism: The tariff raises the delivered cost of Bangladeshi apparel in the US, so US demand for Bangladesh-made apparel falls. Factory output and employment contract. Rural-to-urban migration into Dhaka and Chittagong slows; some workers who would have entered formal-sector jobs end up in the urban informal sector or return to family villages. Remittance flows from garment workers back to rural families fall. \n&emsp;&emsp;(a) Analyze the consequences in Bangladesh's apparel sector. Trace the price and quantity effects, identify who bears the burden, and discuss the implications for factory wages, factory employment, and factory-owner returns. \n&emsp;&emsp;(b) Predict the consequences for rural-to-urban migration into Dhaka and Chittagong. Be specific about what a contraction in formal-sector employment does to migration flows and to urban informal-sector wages. \n&emsp;&emsp;(c) Garment-worker households typically finance schooling for younger siblings and family medical care in their rural villages. Trace the consequences for human capital accumulation in those rural communities — both in the worker's own children and in their younger siblings — paying attention to how the effective price of schooling changes for remaining household members. \n&emsp;&emsp;(d) Bangladesh has limited fiscal capacity. The government has proposed a temporary wage subsidy to RMG factories financed by a tariff on imported textiles. Evaluate the policy choice and its likely incidence. \n&emsp;&emsp;Hint (not on the exam): the policy contracts urban formal-sector labor demand and reduces remittance flows to rural villages, raising the effective price of schooling for the rural household members the worker was supporting. The impact falls differently on factory owners, on garment workers, and on rural households dependent on remittances.",
    minutes: 10.5
  },

  {
    id: "lc25-or-10",
    topic: "Lecture 25 - Globalization",
    type: "open_response",
    prompt: "Ethiopia entered the G20 Common Framework debt restructuring in 2023 alongside Zambia, Ghana, and Sri Lanka. Restructuring requires Ethiopia to commit to fiscal consolidation, including reductions in current spending on health and education subsidies. Net school fees, eliminated in 1995, have been partially reintroduced at the secondary and tertiary levels. Ethiopia's school-aged population is roughly 35 million. \n&emsp;&emsp;Mechanism: The reintroduction of fees raises the effective monetary cost of schooling for households. At the same time, the fiscal consolidation reduces household disposable income through cuts to other transfers. The combination — higher schooling cost and lower disposable resources — reduces the share of children whose parents choose schooling, with the largest withdrawal among households closest to the margin. \n&emsp;&emsp;(a) Predict the effect on schooling enrollment of the partial fee reintroduction. Be specific about which households are most likely to withdraw children from school. \n&emsp;&emsp;(b) Trace the long-run consequences for the cohort currently in primary school. Pay particular attention to how interrupted schooling affects later-stage human capital investment and the productivity of any future children they raise. \n&emsp;&emsp;(c) Discuss the threshold conditions under which a temporary fee increase pulls a marginal household into a state of low investment and low capacity that persists after fees are eventually reduced again. \n&emsp;&emsp;(d) An economist argues that the IMF should have prioritized preserving health and education spending in the restructuring agreement, even at the cost of slower fiscal adjustment. Evaluate this argument with attention to the long-run versus short-run trade-off in household income and human capital. \n&emsp;&emsp;Hint (not on the exam): the policy raises the price of schooling and reduces household disposable resources at the same time, and can push marginal households into a low-investment trap that persists after fees are lowered again. The impact falls differently on poor and middle-income households and on younger versus older cohorts.",
    minutes: 10.5
  },

  {
    id: "lc25-or-11",
    topic: "Lecture 25 - Globalization",
    type: "open_response",
    prompt: "The Democratic Republic of Congo supplies approximately 70% of the world's cobalt. About 20% of cobalt production comes from artisanal and small-scale mining, employing an estimated 200,000 people — including children. Chinese-financed industrial mines operate alongside the artisanal sector. Western automakers and battery manufacturers face increasing public pressure to certify their supply chains free of child labor. \n&emsp;&emsp;Mechanism. Two shifts are at work. First, as Western buyers shift demand from artisanal to audited industrial cobalt, the demand curve facing artisanal miners shifts inward; the price they receive and the income they earn both fall. Second, the working conditions in artisanal mining (silicosis, accidents, heavy-metal exposure) materially shorten expected adult life expectancy in mining communities, which lowers the expected return to long-horizon investments by workers in those communities. \n&emsp;&emsp;(a) Discuss the conditions under which the regulatory gap between DRC artisanal mining and OECD labor standards is best characterized as a competitive pressure on regulation, and under what conditions that characterization is misleading. \n&emsp;&emsp;(b) Discuss how a shortened expected life horizon affects schooling decisions, sexual behavior, and willingness to invest in costly skills. \n&emsp;&emsp;(c) Predict the effect on artisanal mining household incomes if Western buyers succeed in shifting demand away from artisanal supply. What do artisanal miners do next, and how does that affect fertility decisions and per-child investment in their families? \n&emsp;&emsp;(d) Discuss whether a higher floor on cobalt prices paid to artisanal miners (similar to fair-trade in coffee) addresses the underlying income and child-outcomes problem, with attention to which features of DRC governance would make the policy effective or ineffective. \n&emsp;&emsp;Hint (not on the exam): the policy combines a fall in demand for artisanal cobalt with a background of shortened life expectancy in mining communities. The consequences fall differently on artisanal mining households and on industrial mine workers, and within artisanal households on workers, on children, and on partners.",
    minutes: 10.5
  },

  {
    id: "lc25-or-12",
    topic: "Lecture 25 - Globalization",
    type: "open_response",
    prompt: "Bolivia, Argentina, and Chile together hold more than half of the world's identified lithium reserves. Chinese-led FDI in extraction and processing has expanded rapidly across the three countries since 2020. Lithium prices peaked above $80/kg in 2022, fell below $15/kg in 2024, and have since recovered modestly. \n&emsp;&emsp;Mechanism. The lithium FDI surge produces four specific shifts in Argentina: (i) lithium-sector labor demand and wages in Salta and Jujuy rise sharply; (ii) foreign currency inflows from FDI and lithium exports appreciate the real exchange rate; (iii) higher wages and a stronger currency raise costs facing producers in non-lithium tradable sectors (agriculture, other manufacturing); (iv) lithium prices are volatile, so household incomes in lithium-belt provinces are volatile and the shocks are correlated across neighbors. \n&emsp;&emsp;(a) Predict which Argentine sectors are most likely to contract, and through what specific channel. \n&emsp;&emsp;(b) Discuss the political-economy risks. Under what conditions does Argentina's lithium experience play out like Botswana's diamonds or Norway's oil, and under what conditions like Venezuela's oil? \n&emsp;&emsp;(c) For households in lithium-producing provinces (Salta, Jujuy), discuss how price volatility affects decisions about schooling, savings, and migration. Pay attention to households' risk-coping mechanisms when income shocks are correlated across neighbors. \n&emsp;&emsp;(d) Argentina has proposed a sovereign wealth fund to manage lithium revenues. Evaluate this proposal: which of the problems identified in (a)-(c) does it actually address, and which does it not?\n&emsp;&emsp;Hint (not on the exam): the policy combines exchange-rate appreciation and wage pressure hurting non-booming tradables with a boom-bust income-volatility shock for lithium-belt households whose risks are correlated. The impact falls differently on workers in lithium-belt provinces, on workers in non-lithium tradable sectors elsewhere, and on households at different points in the income distribution.",
    minutes: 10.5
},
];