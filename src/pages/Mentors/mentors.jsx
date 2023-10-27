// import React from 'react'
// import "./mentors.css"
// import Navbar from '../../components/Navbar/Navbar'
// import { userInfo } from "../../data/data"

// const Mentors = () => {
//   document.title = "Mentors"
//   return (
//     <div className='mentors'>
//       <Navbar />
//       <div className="searchBx"><i className="fa-solid fa-magnifying-glass"></i><input type="text" placeholder='Search...' /></div>
//       <div className='container'>
//         <table>
//           {userInfo.map((el) => (
//             <ul key={el.id}>
//               <li className='imgBx'>{el.image}</li>
//               <li><h2>{el.name}</h2><p>{el.status}</p></li>
//               <li><h2>{el.NumStudents}</h2><p>Students</p></li>
//               <li><h2>{el.NumGroups}</h2><p>Groups</p></li>
//               <li><h2>{el.FirIncome}</h2><p>Total Profit</p></li>
//               <li><h2>{el.FirIncome}</h2><p>Total Profit</p></li>
//               <i class="fa-solid fa-chevron-right"></i>
//             </ul>
//           ))}
//         </table>
//       </div>
//     </div>
//   )
// }

// export default Mentors


// import React, { useState } from 'react';
// import "./mentors.css"
// import Navbar from '../../components/Navbar/Navbar'
// import { userInfo } from "../../data/data"
// import userImage from '../../assets/mentors_img/user_profile.png';

// const Mentors = () => {
//   document.title = "Mentors";
//   const [searchQuery, setSearchQuery] = useState('');
//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };
//   const filteredUserInfo = userInfo.filter((el) =>
//     el.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   {filteredUserInfo.map((el) => (
//   // ... Your mapping logic here
// ))}

//   return (
//     <div className='mentors'>
//       <Navbar />
//       <div className='container'>
//         <div className="searchBx"><i className="fa-solid fa-magnifying-glass"></i><input type="text" placeholder='Search...' /></div>
//         <table>
//           {userInfo.map((el) => (
//             <ul key={el.id}>
//               <li className='imgBx'><img src={userImage} alt="User" /></li>
//               <li><h2>{el.name}</h2><p>{el.status}</p></li>
//               <li><h2>{el.NumStudents}</h2><p>Students</p></li>
//               <li><h2>{el.NumGroups}</h2><p>Groups</p></li>
//               <li><h2>{el.FirIncome}</h2><p>Total Profit</p></li>
//               <li><h2>{el.SecIncome}</h2><p>Total Profit</p></li>
//               <i className="fa-solid fa-chevron-right"></i>
//             </ul>
//           ))}
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Mentors;


import React, { useState } from 'react';
import "./mentors.css";
import Navbar from '../../components/Navbar/Navbar';
import { userInfo } from "../../data/data";
import userImage from '../../assets/mentors_img/user_profile.png';

const Mentors = () => {
  document.title = "Mentors";

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUserInfo = userInfo.filter((el) =>
    el.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='mentors'>
      <Navbar />
      <div className='container'>
        <div className="searchBx">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder='Search...'
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <table>
          {filteredUserInfo.map((el) => (
            <ul key={el.id}>
              <li className='imgBx'><img src={userImage} alt="User" /></li>
              <li><h2>{el.name}</h2><p>{el.status}</p></li>
              <li><h2>{el.NumStudents}</h2><p>Students</p></li>
              <li><h2>{el.NumGroups}</h2><p>Groups</p></li>
              <li><h2>{el.FirIncome}</h2><p>Total Profit</p></li>
              <li><h2>{el.SecIncome}</h2><p>Total Profit</p></li>
              <i className="fa-solid fa-chevron-right"></i>
            </ul>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Mentors;
