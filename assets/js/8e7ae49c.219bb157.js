"use strict";(self.webpackChunke_census_handbook=self.webpackChunke_census_handbook||[]).push([[3649],{1041:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var n=a(4848),s=a(8453);const i={id:"11.4. Matching",sidebar_position:5,slug:"/experiences-lessons-2020/chapter-11/matching"},c=void 0,o={id:"experiences-lessons-2020/chapter-11/11.4. Matching",title:"11.4. Matching",description:"Once the PES enumeration phase has been collected, the next stage of PES processing is to match the PES persons to the census persons.",source:"@site/docs/experiences-lessons-2020/chapter-11/11.4-matching.md",sourceDirName:"experiences-lessons-2020/chapter-11",slug:"/experiences-lessons-2020/chapter-11/matching",permalink:"/e-census-handbook/docs/experiences-lessons-2020/chapter-11/matching",draft:!1,unlisted:!1,editUrl:"https://github.com/tech-acs/e-census-handbook/tree/main/docs/experiences-lessons-2020/chapter-11/11.4-matching.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"11.4. Matching",sidebar_position:5,slug:"/experiences-lessons-2020/chapter-11/matching"},sidebar:"experiencesLessons2020Sidebar",previous:{title:"11.3. PES Enumeration",permalink:"/e-census-handbook/docs/experiences-lessons-2020/chapter-11/11.3. PES Enumeration"},next:{title:"11.5. Reconciliation",permalink:"/e-census-handbook/docs/experiences-lessons-2020/chapter-11/11.5. Reconciliation"}},r={},h=[{value:"11.4.1 Automatic Matching",id:"1141-automatic-matching",level:3},{value:"11.4.2 Clerical Matching",id:"1142-clerical-matching",level:3}];function l(e){const t={a:"a",br:"br",em:"em",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Once the PES enumeration phase has been collected, the next stage of PES processing is to match the PES persons to the census persons.\nOne of the assumptions of dual-system estimation is that the matching of the census to PES data is perfect. Whilst this is unlikely to be achieved in practice, the aim must be to ensure that the matching is as accurate as possible."}),"\n",(0,n.jsx)(t.h3,{id:"1141-automatic-matching",children:"11.4.1 Automatic Matching"}),"\n",(0,n.jsxs)(t.p,{children:["With electronic census and PES data, automatic matching techniques can be used to carry out most of the matching.  A deterministic or rule-based approach to matching has been found to work well.",(0,n.jsx)(t.br,{}),"\n","With this approach, a series of matchkeys is developed where each matchkey is a set of conditions that a record pair must satisfy in order for that pair to be declared a match. INSERT LINK (see ",(0,n.jsx)(t.a,{href:"/docs/experiences-lessons-2020/chapter-11/selected-country-experiences-pes",children:"case study: Rwanda"})," for an example of matchkeys).\nAutomatic ",(0,n.jsx)(t.em,{children:"fuzzy matching"})," techniques such as using Levenshtein Edit Distance, Jarrow-Winkler score or Soundex phonetic coding, can be used to account for errors in the data, in particular with regards to errors in names.\nAn \u2019age-tolerance\u2019 function can also be used to account for small differences in year of birth. See ",(0,n.jsx)(t.a,{href:"https://github.com/Data-Linkage/pes_match/tree/main",children:"Data-Linkage/pes_match"})," for a set of functions for cleaning and matching census data with Post Enumeration Survey data written in python.\nAutomatic probabilistic matching algorithms can also be used for example the UK Ministry of Justice ",(0,n.jsx)(t.a,{href:"https://www.gov.uk/government/publications/joined-up-data-in-government-the-future-of-data-linking-methods/splink-mojs-open-source-library-for-probabilistic-record-linkage-at-scale",children:"Splink"}),"\nimplementation of the Fellegi-Sunter probabilistic matching algorithm is freely available."]}),"\n",(0,n.jsx)(t.h3,{id:"1142-clerical-matching",children:"11.4.2 Clerical Matching"}),"\n",(0,n.jsxs)(t.p,{children:["Whilst the majority of matches (between 70% and 90% is to be expected depending on the quality of the data) should be made automatically, there will still be the need to perform clerical matching.\nA team of people trained in matching will be required to look at potential matches and decide whether or not the records are truly a match.\nThe UK Office for National Statistics ",(0,n.jsx)(t.a,{href:"https://www.bing.com/ck/a?!&&p=b1a8a35dfe8b791fJmltdHM9MTcxODg0MTYwMCZpZ3VpZD0wY2VmM2U1ZS03NTE3LTZiNDYtMjU1NC0yYWZhNzRhYzZhNmImaW5zaWQ9NTIxNg&ptn=3&ver=2&hsh=3&fclid=0cef3e5e-7517-6b46-2554-2afa74ac6a6b&psq=CROW+clerical+matching+system&u=a1aHR0cHM6Ly9naXRodWIuY29tL0RhdGEtTGlua2FnZS9DbGVyaWNhbF9SZXNvbHV0aW9uX09ubGluZV9XaWRnZXQ&ntb=1",children:"CROW clerical matching system"}),"\ncan be used for clerical matching of census and PES data and is available free of charge. Clerical matching will be required for the following purposes:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Tuning of the automatic algorithms \u2013 as the matchkeys are developed, pairs of matches made are sent to the clerical team for review. If a matchkey is found to be making false matches then the matchkey is made stricter e.g., by including a new variable, and is reviewed again until the number of false matches made is acceptable."}),"\n",(0,n.jsx)(t.li,{children:"Resolution of conflicting automatic matches \u2013 conflicts occur when the automatic algorithms match one PES record to two different census records or vice versa. This can happen when there are same sex twins, father and son with same names, or just because people have very similar names and ages. The clerical matches review the conflicting records and decide which is the correct match."}),"\n",(0,n.jsx)(t.li,{children:"Review of possible matches generated by non-strict matchkeys which make lots of correct matches but also too many false matches to allow them to all be accepted automatically."}),"\n",(0,n.jsx)(t.li,{children:"Review of the unmatched persons once all automatic matching stages have been completed."}),"\n",(0,n.jsx)(t.li,{children:"Quality assurance of the automatic matching \u2013 samples of matched records are reviewed to estimate the false match rate, and for a sample of unmatched PES records, the census database is searched for a match to estimate the missed match rate."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This illustration of the CROW clerical matching system which clerical matchers can use to review record pairs or groups of records and confirm matches and non-matches. The system can be configured to display whichever variables are most useful for the country and task context. CAN WE ADD A PICTURE OF CROW HERE?"})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>c,x:()=>o});var n=a(6540);const s={},i=n.createContext(s);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);