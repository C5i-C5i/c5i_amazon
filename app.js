// Crisp, locally embedded C5i-violet pictograms. 100% vector at every screen scale.
const c5iPurpleIconPaths = {
  "📊": "<path d=\"M3 20.5h18\"/><rect x=\"4.5\" y=\"11\" width=\"3.7\" height=\"9.5\" rx=\".7\"/><rect x=\"10.2\" y=\"5\" width=\"3.7\" height=\"15.5\" rx=\".7\"/><rect x=\"15.9\" y=\"13.5\" width=\"3.7\" height=\"7\" rx=\".7\"/>",
  "🔎": "<circle cx=\"10.7\" cy=\"10.7\" r=\"6.3\"/><path d=\"m15.4 15.4 5.2 5.2\"/><path d=\"M8.4 11.1c.3-1.8 1.5-3 3.2-3.2\"/>",
  "🛢️": "<ellipse cx=\"12\" cy=\"5\" rx=\"7.4\" ry=\"2.7\"/><path d=\"M4.6 5v14c0 1.5 3.3 2.8 7.4 2.8s7.4-1.3 7.4-2.8V5\"/><path d=\"M4.6 10c0 1.5 3.3 2.8 7.4 2.8s7.4-1.3 7.4-2.8M4.6 15c0 1.5 3.3 2.8 7.4 2.8s7.4-1.3 7.4-2.8\"/>",
  "⚙️": "<path d=\"M3 19V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z\"/><path d=\"M6.7 16.8l4.1-5 3.5 2.5 3.2-6.5\"/><circle cx=\"6.7\" cy=\"16.8\" r=\".7\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"10.8\" cy=\"11.8\" r=\".7\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"14.3\" cy=\"14.3\" r=\".7\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"17.5\" cy=\"7.8\" r=\".7\" fill=\"currentColor\" stroke=\"none\"/>",
  "👥": "<circle cx=\"9.3\" cy=\"8.3\" r=\"3.1\"/><path d=\"M2.4 20.1v-1.6c0-3.3 2.7-5.7 6.7-5.7s6.8 2.4 6.8 5.7v1.6H2.4Z\"/><circle cx=\"17.4\" cy=\"9.1\" r=\"2.4\"/><path d=\"M17.2 14.2c2.8 0 4.4 2 4.4 4.5v1.4h-3.6\"/>",
  "🎯": "<circle cx=\"11\" cy=\"13\" r=\"8.3\"/><circle cx=\"11\" cy=\"13\" r=\"4.7\"/><circle cx=\"11\" cy=\"13\" r=\"1.25\"/><path d=\"M11 13 21 3M16.4 3H21v4.6\"/>",
  "🤝": "<path d=\"M2 8.2 7.2 4l4.1 1.2 2.9-1.2L22 8.2l-5.4 7.5-2.6 1.6-2.3 2.9-2.9-2.1-2.1-.4z\"/><path d=\"m7.2 11.6 4.2 4.4 2.6 1.3m-2.7-12.1-3.2 5 2.1 2 3.5-3.1 5.1 5\"/>",
  "📄": "<path d=\"M6 2.3h7.5l4.5 4.6v14.8H6zM13.5 2.3v4.6H18M9 11.5h6M9 15h6M9 18.5h4.2\"/>",
  "▦": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M3 9h18M3 15h18M9 3v18M15 3v18\"/>",
  "🌐": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M3.3 12h17.4M12 3c-5.5 5.5-5.5 12.5 0 18M12 3c5.5 5.5 5.5 12.5 0 18M5 7.5h14M5 16.5h14\"/>",
  "🏷️": "<path d=\"M3 3.5h9.5l8.5 8.5-9 9-9-9V3.5Z\"/><circle cx=\"8.2\" cy=\"8.2\" r=\"1.45\"/>",
  "📦": "<path d=\"m12 2.5 8.5 4.7v9.6L12 21.5l-8.5-4.7V7.2L12 2.5Z\"/><path d=\"m3.5 7.2 8.5 4.7 8.5-4.7M12 11.9v9.6m-4-16.8 8.5 4.7\"/>",
  "📣": "<path d=\"M3 9.3h5.2L20 4v16L8.2 14.7H3V9.3Z\"/><path d=\"M8.2 14.7 10 21h4l-2.6-5\"/><path d=\"M22 9v6\"/>",
  "🛰️": "<rect x=\"9\" y=\"9\" width=\"6\" height=\"6\" rx=\"1\" transform=\"rotate(45 12 12)\"/><path d=\"m8 8-3-3M16 16l3 3M3 9l6-6m6 18 6-6M15.7 4.6a6 6 0 0 1 3.7 3.7M17 2.4a9 9 0 0 1 4.6 4.6\"/><path d=\"m5 4-2 1 2 2m14 10 2 2-2 2\"/>",
  "🏆": "<path d=\"M7 3.3h10V10a5 5 0 0 1-10 0V3.3Z\"/><path d=\"M7 5H3v2.5c0 3 1.4 4.5 4 4.5M17 5h4v2.5c0 3-1.4 4.5-4 4.5M12 15v5M8 21h8\"/>",
  "🕒": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 6.7V12l4.1 2.8\"/>",
};
function c5iPurpleIcon(symbol){
  const path = c5iPurpleIconPaths[symbol];
  if (!path) return "";
  return `<svg xmlns="http://www.w3.org/2000/svg" class="c5i-purple-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" shape-rendering="geometricPrecision">${path}</svg>`;
}

const capabilities = [
  {title:'Research, Analytics & Reporting', icon:'📊', text:'Tracking, analytics, scorecards, reporting and strategic insights.', glow:'rgba(0,102,192,.18)'},
  {title:'End-to-End Primary Research', icon:'🔎', text:'Multi-market and ad-hoc research across customer experience needs.', glow:'rgba(22,163,74,.16)'},
  {title:'Data Engineering & BI Dashboarding', icon:'🛢️', text:'Data processing, modelling and interactive dashboards.', glow:'rgba(124,58,237,.16)'},
  {title:'Advanced Analytics', icon:'⚙️', text:'Conjoint, pricing, demand modelling and predictive analytics.', glow:'rgba(255,138,0,.17)'},
  {title:'UX Research', icon:'👥', text:'User experience, journey and usability research.', glow:'rgba(225,29,72,.13)'},
  {title:'Market & Competitive Intelligence', icon:'🎯', text:'Market, category and competitive insights.', glow:'rgba(10,167,164,.16)'}
];

const engagements = [
  {title:'XCM RBT Continuous & Pulse Tracker', capability:'Research, Analytics & Reporting', team:'XCM', methodology:'Analytics', geography:'24+ Markets', status:'Ongoing', tags:['Research','Analytics'], image:"linear-gradient(135deg,rgba(7,26,52,.20),rgba(255,138,0,.18)), url('assets/xcm-brand-tracker.svg') center/cover no-repeat", desc:'Multi-market brand tracking, data analysis, scorecards, and quarterly reporting.', stats:[['24+','Markets'],['Monthly / Quarterly','Refresh']]},
  {title:'XCM RBT Tracker Dashboarding', capability:'Data Engineering & BI Dashboarding', team:'XCM RBT', methodology:'QuickSight', geography:'Multi-market', status:'Ongoing', tags:['Data Engineering','BI'], image:"linear-gradient(135deg,rgba(6,26,52,.12),rgba(0,102,192,.08)), url('assets/xcm-bi-dashboard.svg') center/cover no-repeat", desc:'Interactive QuickSight dashboard enabling KPI monitoring and stakeholder access.', stats:[['350+','Users'],['25','Segments']]},
  {title:'Amazon Fuse', capability:'End-to-End Primary Research', team:'Amazon Fuse', methodology:'Primary Research', geography:'US | EU/MEA', status:'Ongoing', tags:['Primary Research','UX Research'], image:"linear-gradient(135deg,rgba(255,255,255,.15),rgba(0,102,192,.10)), url('assets/amazon-fuse-ux.svg') center/contain no-repeat, linear-gradient(135deg,#f8fbff,#dff2ff)", desc:'End-to-end primary and UX research supporting Activation, Engagement, Suspension and Willingness-to-Recommend studies.', stats:[['10–12','Surveys/year'],['4–5','UX studies']]},
  {title:'Exports – Shopping Experience', capability:'End-to-End Primary Research', team:'Exports', methodology:'Tracking', geography:'Colombia | Israel', status:'Ongoing', tags:['Primary Research','Tracking'], image:"linear-gradient(135deg,rgba(5,32,61,.15),rgba(16,185,129,.10)), url('assets/exports-shopping.svg') center/cover no-repeat", desc:'Multi-market research evaluating cross-border shopping experience and tracking Amazon, Prime and Prime Video performance.', stats:[['5','Waves – Colombia'],['2','Waves – Israel']]},
  {title:'WW Search Satisfaction & Shopping Experience', capability:'End-to-End Primary Research', team:'WW Search', methodology:'Satisfaction Tracking', geography:'US | EU3 | Japan', status:'Ongoing', tags:['Primary Research','Analytics'], image:"linear-gradient(135deg,rgba(6,26,52,.18),rgba(0,102,192,.08)), url('assets/ww-search-satisfaction.svg') center/cover no-repeat", desc:'Global search-satisfaction tracking and ad-hoc research covering pain points, navigation, discovery and Ads Monetization.', stats:[['US | EU3','Japan'],['3 waves','US & EU5']]},
  {title:'Heavy Bulky Services - Delivery Experience (HBS DEX)', capability:'Advanced Analytics', team:'HBS', methodology:'Conjoint', geography:'UK | IT', status:'Earlier', tags:['Conjoint','Qual + Quant'], image:"linear-gradient(135deg,rgba(53,33,107,.20),rgba(246,162,26,.10)), url('assets/hbs-dex-delivery.svg') center/cover no-repeat", desc:'Three phase module to understand customer expectations delivery experience: qualitative, quantitative and conjoint.', stats:[['$77k','Value'],['Conjoint','Simulator']]},
  {title:'WW Pricing - Hardlines, Softlines & Consumables', capability:'End-to-End Primary Research', team:'Pricing', methodology:'Price perception Tracker', geography:'US | EU5', status:'Earlier', tags:['Pricing','Tracker'], image:"linear-gradient(135deg,rgba(5,59,86,.18),rgba(20,184,166,.10)), url('assets/ww-pricing.svg') center/cover no-repeat", desc:'Global price perception tracker across US, EU5 and markets covering clothing, footwear, consumables and Van Westendorp questions.', stats:[['$600k','Value'],['5+4','Waves']]},
  {title:'Price Lift Module (PLM)', capability:'Advanced Analytics', team:'PLM', methodology:'Conjoint Analysis', geography:'US', status:'Earlier', tags:['Conjoint','PLM'], image:"linear-gradient(135deg,rgba(91,17,71,.20),rgba(14,165,233,.10)), url('assets/plm-price-lift.svg') center/contain no-repeat, linear-gradient(135deg,#071a34,#0b2a4e)", desc:'End-to-end primary research conjoint survey in US to capture customer reactions to price information, features and shipping.', stats:[['~20,000','Respondents'],['~100K','Products']]},
  {title:'Demand Sensitivity and Decision Module (DSDM)', capability:'Advanced Analytics', team:'DSDM', methodology:'Conjoint', geography:'EU5', status:'Earlier', tags:['DSDM','Conjoint'], image:"linear-gradient(135deg,rgba(17,34,68,.18),rgba(255,138,0,.12)), url('assets/dsdm-decision.svg') center/cover no-repeat", desc:'End-to-end primary research conjoint survey in EU5 markets on delivery time, product and delivery fee, and delivery location.', stats:[['~300K','Respondents'],['1,500','Products']]},
  {title:'AWS Media Lifestyle Study', capability:'End-to-End Primary Research', team:'AWS Media', methodology:'Media Tracking', geography:'9 markets', status:'Earlier', tags:['Media Tracking','Ad-hoc'], image:"linear-gradient(135deg,rgba(3,59,89,.18),rgba(34,197,94,.10)), url('assets/aws-media-lifestyle.svg') center/cover no-repeat", desc:'Global media behavior tracking study across 9 markets to understand media better to better connect with customers.', stats:[['9','Markets'],['$77k','Value']]}
];

const teams = ['XCM','Amazon Fuse','WW Search','Exports','Pricing','HBS','AWS Advertising','Leo / Kuiper','CXBT'];
const teamIcons = ['📊','👥','🔎','🌐','🏷️','📦','📣','🛰️','👥'];
const impactMetrics = [
  ['🌐','24+','Marketplace (Continuous + Pulse)'], ['👥','350+','Dashboard users'], ['📦','~100K','Products evaluated (PLM)'], ['👥','~300K','Respondents (DSDM)'], ['📦','1,500','Products evaluated (DSDM)'], ['📍','9','Markets (AWS Media Study)']
];
const programs = [
  {title:'XCM RBT Continuous program', points:['NA, EU5, ROW monitors Amazon’s and Prime’s brand health metrics in Retail (Amazon) and Membership programs (Prime).','Online survey using a mix of 3P panels representative of age 18+, internet engaged and shop online.','Supports Cross Category and Cross Channel (XCM) QBRs, CBR and portfolio planning.','Markets: US, UK, DE, JP, FR, IT, ES, CA, MX, AU and BR.']},
  {title:'XCM RBT Pulse program', points:['Quarterly online survey-based study monitoring long-term brand strength metrics for Retail and Membership programs.','13 Emerging Marketplaces: 7 EU and 6 Non-EU.','Uses the same questionnaire as XCM RBT Continuous program to ensure consistency across 24 marketplaces.']},
  {title:'Amazon Fuse', points:['Driving incremental acquisitions for Amazon digital services: Prime, Prime Video, Amazon Music.','Partner routes through Telecom Mobile Operators in US and EU/MEA region.','Studying opportunities within SVOD / AVOD consumption.']},
  {title:'Exports (XB) Shopping Experience program', points:['5 waves in CO & IL.','Measure performance of Amazon and Prime brand health metrics in Colombia.','Expanding to LATAM.']},
  {title:'WW Search Satisfaction study', points:['3 waves in US and EU5 marketplaces.','Assess customer perceptions and satisfaction with website search systems and competitors.','Expanded to deep-dive and understand how AI chatbots play a key role in the shopping journey.']},
  {title:'Amazon pricing research team', points:['US (5 waves) and 4 waves in EU5: UK, DE, FR, IT and ES.','Understand perception of pricing across Softlines, Hardlines and Consumables categories.','Van Westerndorp questions were also done to arrive at optimal prices for product.']}
];
// Detail content for the "Our Capabilities" Explore pop-up only - does NOT affect the Ongoing engagements section above.
const capabilityDetails = {
  'Research, Analytics & Reporting': [
    {title:'XCM RBT Continuous & Pulse tracker', points:[
      'Continuous brand tracking: 11 established markets with monthly data collection',
      'Pulse brand tracking: 13 emerging markets with quarterly data collection',
      'Questionnaire design & Data collection by Kantar',
      'Data analysis & detailed reports with insights every quarter by C5i'
    ], scale:[
      '4 quarterly detailed reports for both programs',
      'Monthly scorecards',
      'Regular ad-hoc deep dives with analysis & insights'
    ]}
  ],
  'Data Engineering & BI Dashboarding': [
    {title:'XCM RBT Tracker Dashboarding', points:[
      'QuickSight dashboard on C5i’s environment with AWS SSO for both Continuous and Pulse tracker',
      'Continuous brand tracking: Refresh every month',
      'Pulse brand tracking: Refresh every quarter',
      'Views: 25 segments, TTM, Monthly, Quarterly time periods, multiple level of significant testing'
    ], scale:[
      'Always-on KPI access for 350+ users',
      '4-5 views with various cuts for each market'
    ]}
  ],
  'End-to-End Primary Research': [
    {title:'Amazon Fuse', points:[
      'End-to-end primary research, except data collection for multiple Activation, Engagement, Suspension and Willingness to recommend surveys with customers & Sales partners',
      'End to end UX research studies on signup experience on Amazon’s UX testing platforms'
    ], scale:[
      '~10-12 surveys in a year',
      '4-5 UX research studies',
      'Detailed analysis and reports for any studies undertaken'
    ]},
    {title:'Exports (XB) Shopping Experience', points:[
      'Multi-market primary research survey for 5 markets to evaluate cross-border shopping experience',
      'Tracking survey in Colombia & Israel to track Amazon’s retail, Prime and Prime Video performance along with cross-border shopping experience'
    ], scale:[
      '5 waves in Colombia',
      '2 waves in Israel',
      '1 ad-hoc in 5 markets',
      'Expanding to LATAM',
      'Detailed analysis and reports for any studies undertaken'
    ]},
    {title:'WW Search Satisfaction & Shopping Experience', points:[
      'Global search-satisfaction tracker across US, EU3 and Japan markets',
      'Multiple ad-hoc primary research survey on pain points, navigation, discovery and Ads Monetization / Reduced Page Views'
    ], scale:[
      '8 quarters of tracking program',
      'Excel reporting & dashboards',
      'Thematic analysis using C5i AI accelerators'
    ]}
  ],
  'Advanced Analytics': [
    {title:'Heavy Bulky Services - Delivery Experience (HBS DEX)', points:[
      'Three phase module to understand customer expectations delivery experience',
      'Qualitative exercise to understand delivery experience',
      'Quantitative exercise to quantify the results from Qualitative',
      'Conjoint to understand the choice of deliver'
    ], scale:[
      '3 detailed reports for each module',
      'Simulator for conjoint analysis results'
    ]},
    {title:'Price Lift Module (PLM) Conjoint Analysis', points:[
      'End-to-end primary research conjoint survey in US to capture customer’s reactions to price info., features and shipping',
      '~20,000 respondents',
      'Evaluating for ~100,000 products across 30 categories',
      'Detailed analysis done by Amazon'
    ], scale:[
      'Re-structured respondent level data in the format required by Amazon given by C5i for analysis'
    ]},
    {title:'Demand Sensitivity and Decision Module (DSDM)', points:[
      'End-to-end primary research conjoint survey in EU5 markets to capture how different attributes impact customer’s shopping behavior (delivery time, product and delivery fee, and delivery location)',
      '~300,000 respondents evaluating 1500 products',
      'Detailed analysis done by Amazon'
    ], scale:[
      'Re-structured respondent level data in the format required by Amazon given by C5i for analysis'
    ]}
  ],
  'UX Research': [
    {title:'Amazon Fuse - UX Research track', points:[
      'End to end UX research studies on signup experience on Amazon’s UX testing platforms'
    ], scale:[
      '4-5 UX research studies',
      'Detailed analysis and reports for any studies undertaken'
    ]}
  ],
  'Market & Competitive Intelligence': [
    {title:'Amazon LEO | Competitive Intelligence Overview',
     subtitle:'Weekly monitoring of Starlink serviceability and plan details across Residential, Roam, Global Priority, and Local Priority services.',
     stats:[
       {value:'38', label:'weeks of tracked history'},
       {value:'4', note:'Consumer – Residential, Roam<br>Business – Global, Local', label:'service categories monitored'},
       {value:'~43K', label:'residential addresses scraped per week'},
       {value:'58', label:'countries/regions covered'}
     ],
     pointsHeading:'Key deliverables',
     points:[
       'Weekly dataset covering serviceability, plans, hardware, installation, and taxes',
       'Address-level Residential plan captures, along with Roam, Business plans (Global & Local) plan capture',
       'Drill-down dashboard with week, competitor, and geography filters',
       'Key observations and KPIs on plans, market coverage, hardware pricing'
     ],
     scaleHeading:'How the client uses the data',
     scale:[
       'Track coverage, congestion, waitlist, and pricing changes over time',
       'Identify market-level shifts and opportunities to expand category coverage',
       'Support export-ready analysis and drilldowns for stakeholder decisions',
       'Compare Starlink plans to help define the pricing strategy for Amazon LEO satellite internet service'
     ]},
    {title:'CXBT | Global & India Competitive Intelligence',
     subtitle:'A multi-market competitive intelligence engagement, leveraging competitor website data to monitor delivery timelines, pricing and discount changes, and category-level product assortment.',
     stats:[
       {value:'Jan 25 - Present', label:'Engagement timeline'},
       {value:'~1M', label:'SKUs crawled till date'},
       {value:'17', label:'retailers tracked'},
       {value:'6', label:'regions covered'},
       {value:'8', label:'competitive intelligence use cases applied'}
     ],
     pointsHeading:'Key deliverables',
     points:[
       'Dataset containing delivery timelines, pricing details, and category wise product assortment',
       'Crawl data spread across 24*7 (168 hours)',
       'Dataset includes screenshots for 25% of product pages so that the client can validate the data'
     ],
     scaleHeading:'How the client uses the data',
     scale:[
       'Uses the dataset for price, offer, category, selection, and serviceability decisions',
       'Utilizes delivery promise, returns, stock-outs, and marketplace attributes',
       'Leverages the dataset to track holiday and festive events, along with category-wise sales offers and deals.'
     ]}
  ]
};
const earlier = [
  {title:'Heavy Bulky Services - Delivery Experience (HBS DEX)', cost:'$77k', points:['Three phase module to understand customer expectations delivery experience.','Qualitative exercise, quantitative exercise and conjoint to understand choice of delivery.']},
  {title:'WW Pricing - Hardlines, Softlines & Consumables', cost:'$600k', points:['Global price perception tracker across US, EU5 and markets.','Multiple product categories such as clothing, footwear, consumables etc.']},
  {title:'Price Lift Module (PLM)', cost:'$200k', points:['End-to-end primary research conjoint survey in US.','~20,000 respondents evaluating ~100,000 products across 30 categories.']},
  {title:'Demand Sensitivity and Decision Module (DSDM)', cost:'$850k', points:['EU5 markets conjoint study.','~300,000 respondents evaluating 1500 products.']},
  {title:'AWS Media Lifestyle Study', cost:'$77k', points:['Global media behavior tracking study across 9 markets.','Data collected through AWS database.']}
];
const differentiators = [
  ['🏆','Deep Amazon Knowledge','Long-running engagements have built institutional knowledge across multiple Amazon teams.'],
  ['👥','Integrated Capabilities','Research, analytics, BI, advanced analytics, UX and competitive intelligence under one partnership.'],
  ['⚙️','Extension Team Model','Dedicated teams that manage execution complexity while allowing Amazon stakeholders to focus on strategic priorities.'],
  ['🌐','Global Delivery at Scale','Multi-market programs across geographies, teams and research requirements.'],
  ['🕒','Proven Continuity','Several programs have been supported continuously over multiple years.']
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const unique = (arr, key) => [...new Set(arr.map(x => x[key]).filter(Boolean))].sort();
function init(){
  renderCapabilities();
  renderTeams();
  // Impact scorecards removed as requested.
  if ($('#programsGrid')) renderPrograms();
  if ($('#earlierGrid')) renderEarlier();
  if ($('#diffGrid')) renderDiffs();
  if ($('#openSearch') && $('#searchModal')) setupSearch();
  setupCapModal();
  setupNav();
  setupCounters();
  setupReveal();
  setTimeout(()=>$$('.reveal:not(.show)').forEach(el=>el.classList.add('show')), 1500);
}
function renderCapabilities(){
  $('#capabilityGrid').innerHTML = capabilities.map(c=>`<article class="cap-card" style="--glow:${c.glow}" data-capability="${c.title}"><div class="cap-card-body"><div class="cap-icon">${c5iPurpleIcon(c.icon)}</div><h3>${c.title}</h3><p>${c.text}</p></div><a href="#" class="cap-explore" data-capability="${c.title}">Explore →</a></article>`).join('');
}
const primaryQualitativeStudies = [
  'Research in UAE for Amazon Fuse to understand the bundling options with their Telecom partners and plans (21 in-depth interviews among Prime vs Non-Prime members)',
  'Research in US and India for Amazon pricing team to understand shopping journey and steps which consumers take before they purchase their product (21 interviews split between Prime members, Amazon customers and Non-Amazon Customers )',
  'Research & Prototype testing in Colombia to understand the shopping experience on Amazon via a prototype testing (20 interviews split between Prime & Non-Prime members )',
  'Research in UK, IT and DE to understand delivery experience of customers and expectations of delivery of heavy bulky items to their homes (12 interviews in each market among Amazon shoppers)'
];
function renderPrimaryResearchTab(tab){
  const body = $('#capModalBody');
  if(!body) return;
  const quantitative = tab !== 'qualitative';
  body.querySelectorAll('[data-primary-tab]').forEach(btn=>{
    const active = btn.dataset.primaryTab === (quantitative?'quantitative':'qualitative');
    btn.classList.toggle('active',active);
    btn.setAttribute('aria-selected',String(active));
    btn.tabIndex = active?0:-1;
  });
  const panel = body.querySelector('#primaryResearchTabPanel');
  if(!panel) return;
  if(quantitative){
    const items = capabilityDetails['End-to-End Primary Research'] || [];
    panel.innerHTML = items.map(e=>`<div class="cap-engagement"><h4>${e.title}</h4>${e.subtitle?`<p class="eng-sub">${e.subtitle}</p>`:''}<ul>${e.points.map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('');
  }else{
    panel.innerHTML = `<div class="cap-engagement qualitative-research"><h4>Qualitative Research</h4><ul>${primaryQualitativeStudies.map(x=>`<li>${x}</li>`).join('')}</ul></div>`;
  }
}
function renderCapModal(capTitle){
  const cap = capabilities.find(c=>c.title===capTitle);
  const items = capabilityDetails[capTitle] || [];
  $('#capModalEyebrow').textContent = 'EXPLORE';
  $('#capModalTitle').textContent = capTitle;
  $('#capModalText').textContent = cap ? cap.text : '';
  if(capTitle === 'End-to-End Primary Research'){
    $('#capModalBody').innerHTML = `<div class="primary-research-tabs" role="tablist" aria-label="Primary research type"><button type="button" role="tab" data-primary-tab="quantitative" aria-controls="primaryResearchTabPanel">Quantitative</button><button type="button" role="tab" data-primary-tab="qualitative" aria-controls="primaryResearchTabPanel">Qualitative</button></div><div id="primaryResearchTabPanel" role="tabpanel"></div>`;
    renderPrimaryResearchTab('quantitative');
    return;
  }
  $('#capModalBody').innerHTML = items.length
    ? items.map(e=>`<div class="cap-engagement"><h4>${e.title}</h4>${e.subtitle?`<p class="eng-sub">${e.subtitle}</p>`:''}${e.stats?`<ul>${e.stats.map(x=>`<li>${x.value} ${x.label}${x.note?`<br>${x.note}`:''}</li>`).join('')}</ul>`:''}${e.pointsHeading?`<h5 class="eng-h">${e.pointsHeading}</h5>`:''}<ul>${e.points.map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('')
    : `<p class="cap-empty">Detailed engagement breakdowns for this capability are being added soon.</p>`;
}
function setupCapModal(){
  const modal = $('#capModal');
  if(!modal) return;
  $$('.cap-explore').forEach(a=>a.addEventListener('click', e=>{
    e.preventDefault();
    renderCapModal(a.dataset.capability);
    modal.classList.add('open');
  }));
  $('#capModalBody').addEventListener('click', e=>{ const tab=e.target.closest('[data-primary-tab]'); if(tab) renderPrimaryResearchTab(tab.dataset.primaryTab); });
  $('#closeCapModal').addEventListener('click', ()=>modal.classList.remove('open'));
  modal.addEventListener('click', e=>{ if(e.target===modal) modal.classList.remove('open'); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') modal.classList.remove('open'); });
}
function setupFilters(){
  const caps=unique(engagements,'capability'),teams=unique(engagements,'team'),methods=unique(engagements,'methodology'),geos=unique(engagements,'geography'),statuses=unique(engagements,'status');
  fill('#capabilityFilter',caps,'Capability');fill('#teamFilter',teams,'Amazon Team');fill('#methodologyFilter',methods,'Methodology');fill('#geographyFilter',geos,'Geography');fill('#statusFilter',statuses,'Engagement Status');
}
function fill(id, values, label){$(id).innerHTML = `<option value="All">${label} All</option>` + values.map(v=>`<option>${v}</option>`).join('');}
function renderEngagements(){
  const q=$('#engagementSearch').value.toLowerCase().trim(), cap=$('#capabilityFilter').value, team=$('#teamFilter').value, method=$('#methodologyFilter').value, geo=$('#geographyFilter').value, status=$('#statusFilter').value;
  const list=engagements.filter(e=>(!q||Object.values(e).join(' ').toLowerCase().includes(q))&&(cap==='All'||e.capability===cap)&&(team==='All'||e.team===team)&&(method==='All'||e.methodology===method)&&(geo==='All'||e.geography===geo)&&(status==='All'||e.status===status));
  $('#engagementGrid').innerHTML=list.map((e,i)=>`<article class="engagement-card reveal" style="transition-delay:${Math.min(i*.035,.25)}s"><div class="card-image" style="background:${e.image}"></div><div class="card-body"><div class="tags">${e.tags.map((t,j)=>`<span class="tag ${j%3===1?'green':j%3===2?'pink':''}">${t}</span>`).join('')}</div><h3>${e.title}</h3><p>${e.desc}</p><div class="card-stats">${e.stats.map(s=>`<div><strong>${s[0]}</strong><span>${s[1]}</span></div>`).join('')}</div><a class="view-link" href="#capabilities">View Engagement →</a></div></article>`).join('') || `<div class="program-card"><h3>No engagements found</h3><p>Adjust filters or search another term.</p></div>`;
  setupReveal();
}
function renderTeams(){ $('#teamGrid').innerHTML=teams.map((t,i)=>`<div class="team-tile" data-team="${t}"><span>${c5iPurpleIcon(teamIcons[i])}</span>${t}</div>`).join(''); }
function renderImpact(){ $('#impactMetrics').innerHTML=impactMetrics.map(m=>`<article class="impact-card reveal"><div class="metric-icon">${m[0]}</div><div><strong>${m[1]}</strong><span>${m[2]}</span></div></article>`).join(''); }
function renderPrograms(){ $('#programsGrid').innerHTML=programs.map(p=>`<article class="program-card reveal"><h3>${p.title}</h3><ul>${p.points.map(x=>`<li>${x}</li>`).join('')}</ul></article>`).join(''); }
function renderEarlier(){ $('#earlierGrid').innerHTML=earlier.map(e=>`<article class="earlier-card reveal"><h3>${e.title}</h3><span class="cost">${e.cost}</span><ul>${e.points.map(x=>`<li>${x}</li>`).join('')}</ul></article>`).join(''); }
function renderDiffs(){ $('#diffGrid').innerHTML=differentiators.map(d=>`<article class="diff-card"><div class="dicon">${c5iPurpleIcon(d[0])}</div><h3>${d[1]}</h3><p>${d[2]}</p></article>`).join(''); }
function setupSearch(){
  const modal=$('#searchModal'), open=()=>{modal.classList.add('open');$('#globalSearch').focus();renderGlobalResults('');};
  $('#openSearch').onclick=open; $('#findExperience').onclick=open; $('#findSimilar').onclick=open; $('#closeSearch').onclick=()=>modal.classList.remove('open'); modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')}); $('#globalSearch').addEventListener('input',e=>renderGlobalResults(e.target.value));
}
function renderGlobalResults(q){
  q=String(q||'').toLowerCase().trim();
  const rows=engagements.filter(e=>!q||Object.values(e).join(' ').toLowerCase().includes(q)).slice(0,8);
  $('#globalResults').innerHTML=rows.map(e=>`<div class="result"><h4>${e.title}</h4><p>${e.desc}</p><small>${e.capability} • ${e.team} • ${e.geography}</small></div>`).join('') || '<div class="result"><h4>No match</h4><p>Try another capability, team, geography or methodology.</p></div>';
}
function syncHeaderHeight(){
  const t=document.getElementById('topbar');
  if(t) document.documentElement.style.setProperty('--header-h', t.getBoundingClientRect().height+'px');
}
function setupIntegratedFrame(){
  const f=document.getElementById('iiFrame'); if(!f) return;
  window.addEventListener('message',e=>{
    if(e.source!==f.contentWindow||!e.data) return;
    if(e.data.type==='ii-height'&&e.data.h>0) f.style.height=Math.ceil(e.data.h)+'px';
    if(e.data.type==='ii-user-navigation') document.body.dataset.iiUserNavigated='true';
    if(e.data.type==='ii-view'){
      const exploring=e.data.view!=='home' && document.body.dataset.iiUserNavigated==='true';
      const section=f.closest('#integrated-intelligence');
      if(section){
        let following=section.nextElementSibling;
        while(following){
          following.classList.toggle('ii-hidden-during-explore',exploring);
          following=following.nextElementSibling;
        }
      }
      // Hide surrounding main-site sections while exploring an internal view.
      // The Home hero stays visible and is never hidden.
      for(const id of ['relationship','teams']){
        const el=document.getElementById(id);
        if(el)el.classList.toggle('ii-hidden-during-explore',exploring);
      }
      document.body.classList.toggle('ii-exploring',exploring);
    }

    if(e.data.type==='ii-top' && document.body.classList.contains('ii-exploring') && document.body.dataset.iiUserNavigated==='true'){
      const hh=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h'))||68;
      window.scrollTo({top:f.getBoundingClientRect().top+window.scrollY-hh,behavior:'smooth'});
    }
  });
}
function setupNav(){
  // Startup is never an Integrated Intelligence navigation action.
  // Block iframe-originated scrolling and browser scroll restoration until
  // the user actually navigates or scrolls.
  let startupGuard=true;
  let userHasNavigated=false;
  const unlockStartup=()=>{startupGuard=false;};
  const homeTop=()=>{
    if(!startupGuard || userHasNavigated)return;
    window.scrollTo(0,0);
    const homeLink=document.querySelector('.nav a[href="#home"]');
    document.querySelectorAll('.nav a[href^="#"]').forEach(a=>a.classList.toggle('active',a===homeLink));
  };
  document.addEventListener('pointerdown',unlockStartup,{once:true,capture:true});
  document.addEventListener('keydown',unlockStartup,{once:true,capture:true});
  document.addEventListener('wheel',unlockStartup,{once:true,passive:true,capture:true});
  window.addEventListener('load',()=>{
    homeTop();
    requestAnimationFrame(homeTop);
    setTimeout(homeTop,250);
    setTimeout(homeTop,1000);
    setTimeout(homeTop,2000);
  });
  const embeddedFrame=document.getElementById('iiFrame');
  if(embeddedFrame)embeddedFrame.addEventListener('load',()=>{
    homeTop();
    requestAnimationFrame(homeTop);
    setTimeout(homeTop,150);
  });
  setupIntegratedFrame();
  syncHeaderHeight();
  const links = $$('.nav a[href^="#"]');
  const pairs = links.map(a => ({a, section:document.getElementById(a.getAttribute('href').slice(1))}))
    .filter(item => item.section);
  const header = document.getElementById('topbar');
  const headerHeight = () => header ? Math.ceil(header.getBoundingClientRect().height) : 68;
  let pending = null;
  let pendingUntil = 0;
  let raf = 0;
  const setActive = item => {
    links.forEach(a => {
      const active = !!item && a === item.a;
      a.classList.toggle('active',active);
      if(active) a.setAttribute('aria-current','location');
      else a.removeAttribute('aria-current');
    });
  };
  const visiblePairs = () => pairs.filter(item => {
    const style = getComputedStyle(item.section);
    return style.display !== 'none' && item.section.getClientRects().length > 0;
  });
  const updateActive = () => {
    raf=0;
    if(startupGuard && !userHasNavigated){homeTop();return;}
    if(pending && performance.now() < pendingUntil){setActive(pending);return;}
    pending=null;
    const visible=visiblePairs();
    if(!visible.length)return;
    const top=headerHeight()+16;
    const maxScroll=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);
    // The last section can never reach the top when the page is shorter than its height.
    if(window.scrollY >= maxScroll-5){setActive(visible[visible.length-1]);return;}
    let current=visible[0];
    for(const item of visible){
      if(item.section.getBoundingClientRect().top <= top)current=item;
      else break;
    }
    setActive(current);
  };
  const scheduleActive = () => {if(!raf)raf=requestAnimationFrame(updateActive);};
  const revealMainSections = () => {
    document.querySelectorAll('.ii-hidden-during-explore').forEach(el=>el.classList.remove('ii-hidden-during-explore'));
    document.body.classList.remove('ii-exploring');
    const frame=document.getElementById('iiFrame');
    if(frame && frame.contentWindow)frame.contentWindow.postMessage({type:'ii-reset-home'},'*');
  };
  const goTo = (item,updateHash=true) => {
    userHasNavigated=true;
    startupGuard=false;
    // Restore hidden sections BEFORE measuring their positions.
    if(item.section.id!=='integrated-intelligence')revealMainSections();
    // When What We Do for Amazon is selected, do not show the unrelated
    // Integrated Intelligence subnavigation directly beneath its cards.
    // Restore the full page for every other main navigation selection.
    pending=item;
    pendingUntil=performance.now()+700;
    setActive(item);
    const top=Math.max(0,window.scrollY+item.section.getBoundingClientRect().top-headerHeight());
    window.scrollTo({top,behavior:'instant'});
    if(updateHash)history.replaceState(null,'','#'+item.section.id);
    // Wait for iframe/layout changes to settle, then align to the actual target.
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      const corrected=Math.max(0,window.scrollY+item.section.getBoundingClientRect().top-headerHeight());
      if(Math.abs(corrected-window.scrollY)>2)window.scrollTo({top:corrected,behavior:'instant'});
      setActive(item);
    }));
    setTimeout(()=>{pending=null;scheduleActive();},750);
  };
  pairs.forEach(item=>item.a.addEventListener('click',event=>{
    event.preventDefault();
    goTo(item);
  }));
  // The brand logo and hero action also use in-page anchors.
  $$('.brand[href^="#"], .hero-actions a[href^="#"]').forEach(a=>{
    const id=a.getAttribute('href').slice(1);
    const match=pairs.find(item=>item.section.id===id);
    if(match)a.addEventListener('click',e=>{e.preventDefault();goTo(match);});
  });
  window.addEventListener('scroll',scheduleActive,{passive:true});
  window.addEventListener('resize',()=>{syncHeaderHeight();scheduleActive();});
  // A fresh visit to the published website always starts at Home.
  // Ignore stale URL fragments and browser scroll restoration on initial load.
  const home=pairs.find(item=>item.section.id==='home') || pairs[0];
  const startAtHome=()=>{
    revealMainSections();
    if(location.hash)history.replaceState(null,'',location.pathname+location.search);
    window.scrollTo({top:0,left:0,behavior:'instant'});
    pending=home;
    pendingUntil=performance.now()+900;
    setActive(home);
    scheduleActive();
  };
  if('scrollRestoration' in history)history.scrollRestoration='manual';
  startAtHome();
  window.addEventListener('load',()=>{
    syncHeaderHeight();
    startAtHome();
    requestAnimationFrame(()=>requestAnimationFrame(startAtHome));
  });
  // Some browsers restore scroll position after image/font layout settles.
  window.addEventListener('pageshow',event=>{
    if(event.persisted)startAtHome();
  });
  window.addEventListener('hashchange',()=>{
    const id=decodeURIComponent(location.hash.slice(1));
    const match=pairs.find(item=>item.section.id===id);
    if(match)goTo(match,false);
  });
  scheduleActive();
}
function setupCounters(){
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{ if(e.isIntersecting){ const el=e.target,target=+el.dataset.count; let cur=0; const step=Math.max(1,Math.ceil(target/38)); const tick=()=>{cur=Math.min(target,cur+step);el.textContent=cur;if(cur<target)requestAnimationFrame(tick)}; tick(); io.unobserve(el);} }),{threshold:.5}); $$('[data-count]').forEach(el=>io.observe(el));
}
function setupReveal(){
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.01,rootMargin:'0px 0px 120px 0px'});
  $$('.reveal:not(.show)').forEach(el=>io.observe(el));
}
init();


// The Integrated Intelligence iframe is expanded to its full content height.
// CSS sticky *inside* that iframe cannot stick to the parent window viewport.
// Mirror the active navigation in the parent document while it is scrolled out.
function setupIntegratedStickyBars(){
  const frame=document.getElementById('iiFrame');
  const host=document.getElementById('integrated-intelligence');
  if(!frame||!host)return;
  const overlay=document.createElement('div');
  overlay.id='ii-parent-sticky-navigation';
  overlay.setAttribute('aria-label','Integrated Intelligence navigation');
  overlay.hidden=true;
  document.body.appendChild(overlay);
  let activeView='home';
  const subViews=new Set(['primary','primary-quant','primary-qual','brand','campaign','ux']);
  const primaryViews=new Set(['primary-quant','primary-qual','brand','campaign','ux']);
  const routes=[
    ['back','← BACK'],['solutions','SOLUTIONS'],['primary','PRIMARY RESEARCH'],
    ['conjoint','CONJOINT & CHOICE ANALYTICS'],['dashboard','DASHBOARDING & BI'],
    ['external','COMPETITIVE INTELLIGENCE']
  ];
  const subs=[['primary','OVERVIEW'],['primary-quant','QUANTITATIVE'],
    ['primary-qual','QUALITATIVE'],['brand','BRAND HEALTH TRACKERS & CUSTOMER EXPERIENCE TRACKERS'],
    ['ux','UX RESEARCH']];
  const makeButton=(route,label,secondary=false)=>{
    const button=document.createElement('button');
    button.type='button';button.textContent=label;
    button.dataset.route=route;
    button.className=secondary?'ii-sticky-sub-button':'ii-sticky-main-button';
    button.addEventListener('click',()=>{
      if(route==='external'){
        window.open('https://resources.c5i.ai/c5i-compete-ai-powered-insights-for-a-winning-digital-shelf','_blank','noopener,noreferrer');
        return;
      }
      const inner=frame.contentWindow;
      if(!inner)return;
      document.body.dataset.iiUserNavigated='true';
      // Use the iframe's own router as the single source of truth.
      // It announces the resulting view via ii-view, including back navigation.
      inner.postMessage({type:'ii-sticky-route',route},'*');
    });
    return button;
  };
  const main=document.createElement('div');main.className='ii-sticky-main-row';
  routes.forEach(([route,label])=>main.appendChild(makeButton(route,label)));
  const secondary=document.createElement('div');secondary.className='ii-sticky-sub-row';
  subs.forEach(([route,label])=>secondary.appendChild(makeButton(route,label,true)));
  overlay.append(main,secondary);
  function render(){
    for(const b of main.children){
      const r=b.dataset.route;
      b.classList.toggle('active',r===activeView || (r==='primary'&&primaryViews.has(activeView)));
      if(r==='back')b.hidden=activeView==='home';
    }
    secondary.hidden=!subViews.has(activeView);
    for(const b of secondary.children)b.classList.toggle('active',b.dataset.route===activeView);
  }
  function update(){
    const head=document.getElementById('topbar');
    const top=head?head.getBoundingClientRect().bottom:0;
    overlay.style.top=Math.max(0,top)+'px';
    const rect=frame.getBoundingClientRect();
    const visible=rect.top<top-40 && rect.bottom>top+80 &&
      !host.classList.contains('ii-hidden-during-explore') &&
      getComputedStyle(host).display!=='none';
    overlay.hidden=!visible;
    if(visible){render();frame.contentWindow?.postMessage({type:'ii-request-view'},'*');}
  }
  window.addEventListener('message',event=>{
    if(event.source!==frame.contentWindow||!event.data)return;
    if(event.data.type==='ii-view'){
      activeView=event.data.view||'home';
      render();requestAnimationFrame(update);
    }
    if(event.data.type==='ii-height')requestAnimationFrame(update);
  });
  frame.addEventListener('load',()=>{activeView='home';render();update()});
  window.addEventListener('scroll',update,{passive:true});
  window.addEventListener('resize',update);
  render();update();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setupIntegratedStickyBars);
else setupIntegratedStickyBars();
