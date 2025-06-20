// import React from 'react';
// import { Tab } from '../types/Tab';
// import { Routes, Route, Link } from 'react-router-dom';

// type Props = {
//   tabs: Tab[];
// };

// export const PageInfo: React.FC<Props> = ({ tabs }) => {
//   return (
//     <div className="section">
//       <div className="container ">
//         {/* <h1 className="title">Home page</h1> */}
//         <h1 className="title">Tabs page</h1>
//         {/* <h1 className="title">Page not found</h1> */}

//         <div className="tabs is-boxed">
//           <ul>
//             {tabs.map(tab => {
//               return (
//                 <li data-cy="Tab" className="is-active" key={tab.id}>
//                   <Link to="#/">{tab.title}</Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         <div className="block" data-cy="TabContent">
//           Please select a tab
//         </div>
//       </div>
//     </div>
//   );
// };
