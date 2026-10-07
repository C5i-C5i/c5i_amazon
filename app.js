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
// Detail content for the "Our Capabilities" Explore pop-up only — does NOT affect the Ongoing engagements section above.
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
    {title:'Amazon Fuse — UX Research track', points:[
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
       {value:'38', note:'Pilot: Feb 26 – May 26<br>Full Scale: June 26 – May 27', label:'weeks of tracked history'},
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
  $('#capabilityGrid').innerHTML = capabilities.map(c=>`<article class="cap-card" style="--glow:${c.glow}" data-capability="${c.title}"><div class="cap-icon">${c.icon}</div><h3>${c.title}</h3><p>${c.text}</p><a href="#" class="cap-explore" data-capability="${c.title}">Explore →</a></article>`).join('');
}
function renderCapModal(capTitle){
  const cap = capabilities.find(c=>c.title===capTitle);
  const items = capabilityDetails[capTitle] || [];
  $('#capModalEyebrow').textContent = 'EXPLORE';
  $('#capModalTitle').textContent = capTitle;
  $('#capModalText').textContent = cap ? cap.text : '';
  $('#capModalBody').innerHTML = items.length
    ? items.map(e=>`<div class="cap-engagement"><h4>${e.title}</h4>${e.subtitle?`<p class="eng-sub">${e.subtitle}</p>`:''}${e.stats?`<ul>${e.stats.map(x=>`<li>${x.value} ${x.label}${x.note?`<br>${x.note}`:''}</li>`).join('')}</ul>`:''}${e.pointsHeading?`<h5 class="eng-h">${e.pointsHeading}</h5>`:''}<ul>${e.points.map(x=>`<li>${x}</li>`).join('')}</ul>${e.scale?`<div class="scale-output"><h5>${e.scaleHeading||'SCALE / OUTPUT'}</h5><ul>${e.scale.map(x=>`<li>${x}</li>`).join('')}</ul></div>`:''}</div>`).join('')
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
  $('#engagementGrid').innerHTML=list.map((e,i)=>`<article class="engagement-card reveal" style="transition-delay:${Math.min(i*.035,.25)}s"><div class="card-image" style="background:${e.image}"></div><div class="card-body"><div class="tags">${e.tags.map((t,j)=>`<span class="tag ${j%3===1?'green':j%3===2?'pink':''}">${t}</span>`).join('')}</div><h3>${e.title}</h3><p>${e.desc}</p><div class="card-stats">${e.stats.map(s=>`<div><strong>${s[0]}</strong><span>${s[1]}</span></div>`).join('')}</div><a class="view-link" href="#programs">View Engagement →</a></div></article>`).join('') || `<div class="program-card"><h3>No engagements found</h3><p>Adjust filters or search another term.</p></div>`;
  setupReveal();
}
function renderTeams(){ $('#teamGrid').innerHTML=teams.map((t,i)=>`<div class="team-tile" data-team="${t}"><span>${teamIcons[i]}</span>${t}</div>`).join(''); }
function renderImpact(){ $('#impactMetrics').innerHTML=impactMetrics.map(m=>`<article class="impact-card reveal"><div class="metric-icon">${m[0]}</div><div><strong>${m[1]}</strong><span>${m[2]}</span></div></article>`).join(''); }
function renderPrograms(){ $('#programsGrid').innerHTML=programs.map(p=>`<article class="program-card reveal"><h3>${p.title}</h3><ul>${p.points.map(x=>`<li>${x}</li>`).join('')}</ul></article>`).join(''); }
function renderEarlier(){ $('#earlierGrid').innerHTML=earlier.map(e=>`<article class="earlier-card reveal"><h3>${e.title}</h3><span class="cost">${e.cost}</span><ul>${e.points.map(x=>`<li>${x}</li>`).join('')}</ul></article>`).join(''); }
function renderDiffs(){ $('#diffGrid').innerHTML=differentiators.map(d=>`<article class="diff-card"><div class="dicon">${d[0]}</div><h3>${d[1]}</h3><p>${d[2]}</p></article>`).join(''); }
function setupSearch(){
  const modal=$('#searchModal'), open=()=>{modal.classList.add('open');$('#globalSearch').focus();renderGlobalResults('');};
  $('#openSearch').onclick=open; $('#findExperience').onclick=open; $('#findSimilar').onclick=open; $('#closeSearch').onclick=()=>modal.classList.remove('open'); modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')}); $('#globalSearch').addEventListener('input',e=>renderGlobalResults(e.target.value));
}
function renderGlobalResults(q){
  q=String(q||'').toLowerCase().trim();
  const rows=engagements.filter(e=>!q||Object.values(e).join(' ').toLowerCase().includes(q)).slice(0,8);
  $('#globalResults').innerHTML=rows.map(e=>`<div class="result"><h4>${e.title}</h4><p>${e.desc}</p><small>${e.capability} • ${e.team} • ${e.geography}</small></div>`).join('') || '<div class="result"><h4>No match</h4><p>Try another capability, team, geography or methodology.</p></div>';
}
function setupNav(){
  const links=$$('.nav a'); const pairs=links.map(a=>({a,s:$(a.getAttribute('href'))})).filter(x=>x.s);
  window.addEventListener('scroll',()=>{let idx=0;pairs.forEach((x,i)=>{if(x.s.getBoundingClientRect().top<110)idx=i});links.forEach(a=>a.classList.remove('active')); if(pairs[idx])pairs[idx].a.classList.add('active');},{passive:true});
}
function setupCounters(){
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{ if(e.isIntersecting){ const el=e.target,target=+el.dataset.count; let cur=0; const step=Math.max(1,Math.ceil(target/38)); const tick=()=>{cur=Math.min(target,cur+step);el.textContent=cur;if(cur<target)requestAnimationFrame(tick)}; tick(); io.unobserve(el);} }),{threshold:.5}); $$('[data-count]').forEach(el=>io.observe(el));
}
function setupReveal(){
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.01,rootMargin:'0px 0px 120px 0px'});
  $$('.reveal:not(.show)').forEach(el=>io.observe(el));
}
init();
