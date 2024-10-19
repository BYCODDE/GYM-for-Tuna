// import React from "react";
// import { NavLink, useLocation } from "react-router-dom";

// const AdminNav = () => {
//   const location = useLocation();
//   return (
//     <nav
//       className="fixed bottom-0 left-0 w-full sm:bg-primary-bg py-4 md:max-w-[1140px] lg:mx-auto sm:static
//      border-t border-white bg-[#323232] sm:border-none"
//     >
//       <div className="text-[#000] flex justify-center items-center">
//         <div
//           className="sm:bg-[#323232] py-0 rounded-[31px] flex justify-center items-center
//         gap-[14px] sm:gap-[40px] font-Nunito w-fit"
//         >
//           <NavLink
//             to="/admin/dashboard"
//             className={({ isActive }) =>
//               isActive || location.pathname === "/admin"
//                 ? "bg-[#D7FD44] px-3 py-[13px] rounded-2xl sm:rounded-3xl transition-all duration-500 ease font-bold font-nun"
//                 : "px-3 py-[13px] rounded-2xl sm:rounded-3xl text-white text-base font-bold"
//             }
//           >
//             Dashboard
//           </NavLink>
//           <NavLink
//             to="/admin/admin-blogs"
//             className={({ isActive }) =>
//               isActive
//                 ? "bg-[#D7FD44] px-3 py-[13px] rounded-2xl sm:rounded-3xl transition-all duration-500 ease font-bold"
//                 : "px-3 py-[13px] rounded-2xl sm:rounded-3xl text-white text-base font-bold"
//             }
//           >
//             Blogs
//           </NavLink>
//           <NavLink
//             to="/admin/admin-about"
//             className={({ isActive }) =>
//               isActive
//                 ? "bg-[#D7FD44] px-3 py-[13px] rounded-2xl sm:rounded-3xl transition-all duration-500 ease font-bold"
//                 : "px-3 py-[13px] rounded-2xl sm:rounded-3xl text-white text-base font-bold"
//             }
//           >
//             About Me
//           </NavLink>
//           <NavLink
//             to="/admin/admin-services"
//             className={({ isActive }) =>
//               isActive
//                 ? "bg-[#D7FD44] px-3 py-[13px] rounded-2xl sm:rounded-3xl transition-all duration-500 ease font-bold"
//                 : "px-3 py-[13px] rounded-2xl sm:rounded-3xl text-white text-base font-bold"
//             }
//           >
//             Services
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default AdminNav;
