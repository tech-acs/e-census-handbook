"use strict";(self.webpackChunke_census_handbook=self.webpackChunke_census_handbook||[]).push([[5878],{4702:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=s(4848),o=s(8453);const r={id:"9.3. Data Transmission",sidebar_position:4},a=void 0,i={id:"experiences-lessons-2020/chapter-09/9.3. Data Transmission",title:"9.3. Data Transmission",description:"Data transmission refers to the movement of data between the census servers and field devices or movement of data amongst field devices, such as between enumerators and supervisors.",source:"@site/docs/experiences-lessons-2020/chapter-09/9.3-Data-Transmission.md",sourceDirName:"experiences-lessons-2020/chapter-09",slug:"/experiences-lessons-2020/chapter-09/9.3. Data Transmission",permalink:"/e-census-handbook/docs/experiences-lessons-2020/chapter-09/9.3. Data Transmission",draft:!1,unlisted:!1,editUrl:"https://github.com/tech-acs/e-census-handbook/tree/main/docs/experiences-lessons-2020/chapter-09/9.3-Data-Transmission.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"9.3. Data Transmission",sidebar_position:4},sidebar:"experiencesLessons2020Sidebar",previous:{title:"9.2. Technological Innovations",permalink:"/e-census-handbook/docs/experiences-lessons-2020/chapter-09/9.2. Technological Innovations"},next:{title:"9.4. Data Security",permalink:"/e-census-handbook/docs/experiences-lessons-2020/chapter-09/9.4. Data Security"}},d={},c=[{value:"9.3.1 Selected Country experiences",id:"931-selected-country-experiences",level:3},{value:"Kenya",id:"kenya",level:4},{value:"Sierra Leone",id:"sierra-leone",level:4},{value:"Botswana",id:"botswana",level:4},{value:"9.3.2 Lessons Learnt",id:"932-lessons-learnt",level:3},{value:"9.3.3 Recommendations",id:"933-recommendations",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Data transmission refers to the movement of data between the census servers and field devices or movement of data amongst field devices, such as between enumerators and supervisors."}),"\n",(0,n.jsx)(t.p,{children:"There are various considerations that go into the decision process of data flow. Some of these are:"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"-\tAvailability of mobile network coverage where enumerators are or cost of equipping all devices with SIM cards."}),"\nIf enumerators will not be able to find connectivity in the field, they might have to, periodically, travel to either meet up with the supervisor and sync their collected data via Bluetooth to the supervisor or they travel to where they can find connectivity, usually in the evenings."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"-\tImplementation of data quality checks"}),"\nIt could be beneficial to allow only supervisors to sync to the server so that enumerators can run checks on collected data before sending it on to the server. When data qualities are discovered by the supervisor (with the help of automated and/or manual checks), the supervisor can task the enumerators to correct the issue by re-visiting the households. [",(0,n.jsx)(t.a,{href:"https://www.csprousers.org/help/CSPro/synchronization.html",children:"https://www.csprousers.org/help/CSPro/synchronization.html"}),"]"]}),"\n",(0,n.jsx)(t.h3,{id:"931-selected-country-experiences",children:"9.3.1 Selected Country experiences"}),"\n",(0,n.jsx)(t.p,{children:"It is seeming evident that countries transmitted data directly from the enumerators to the servers through varied platforms as shown below:"}),"\n",(0,n.jsx)(t.h4,{id:"kenya",children:"Kenya"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"All enumerators were sending their data to the server at the headquarters daily and whenever there was no internet, they would send data to the supervisor via Bluetooth that was configured between supervisor\u2019s and enumerator\u2019s devices. The supervisors would run pre-selected reports and review the data to check for its completeness before uploading the data to the server. A robust server was thus required to handle the magnitude of traffic and hits that were expected during the enumeration process. At the back end, the authorized personnel were pulling the data from the server to evaluate its quality and inform the respective field personnel in case data was inconsistent. In addition, they were also preparing monitoring reports."}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"sierra-leone",children:"Sierra Leone"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The mapping PAD Application (a Data acquisition package built by Milsat Technologies) did a direct export of data to CSV format and the Headquarter offices downloaded the data through a cloud server system."}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"botswana",children:"Botswana"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Data transfer to and from the servers was done through mobile data from sim cards loaded with different data packages depending on the role of end users for all the tablets or use of WIFI."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"932-lessons-learnt",children:"9.3.2 Lessons Learnt"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"There was no consistency in supervisor checks for the data before uploading to the server given that this was only done when there was internet failure on the part of the interviewer so most of the data was not supervisor checked because of the data transmission criteria employed."}),"\n",(0,n.jsx)(t.li,{children:"Botswana depended on the available mobile phone network for data transmission and the problem experienced was the instability and non-existence of network coverage by the different providers in some areas."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"933-recommendations",children:"9.3.3 Recommendations"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"For consistency in data quality checks, it is recommended that data transmission is layered i.e from an interviewer to an immediate supervisor via cost effective means like Bluetooth then the supervisors send to the main server via internet. This reduces on stress at the headquarters level who monitor through the dashboard."}),"\n",(0,n.jsx)(t.li,{children:"Areas without mobile phone network, it is wise to explore other means of connectivity like the use of Satellite Dishes to ensure continued data transmission."}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var n=s(6540);const o={},r=n.createContext(o);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);