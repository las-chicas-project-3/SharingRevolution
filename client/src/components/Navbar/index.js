import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// //JB added
function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div class="d-flex flex-grow-1">
      <span class="w-100 d-lg-none d-block"></span>
             <Link className="navbar-brand d-none d-lg-inline-block" to="/">
          Lieren
          </Link>
   </div>


  <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
      <ul className="navbar-nav ml-auto flex-nowrap">
          <li className="nav-item">
          <Link
            to="/products"
            className={window.location.pathname === "/products"
              ? "nav-link active"
              : "nav-link"
            }
          >
            Products
          </Link>
      </li>
          <li className="nav-item">
          <Link
            to="/signup"
            className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
          >Sign Up</Link>
          </li>
          <li className="nav-item">
          <Link
            to="/login"
            className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
          >
             Log In</Link>
          </li>
      </ul>
  </div>
</nav>

  )}

export default Navbar;


// previous code is below- Joyce will delete this on Friday Aug 23

// // Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-brand" to="/">
//         Home
//       </Link>
//       <div>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link
//               to="/products"
//               className={window.location.pathname === "/products"
//                 ? "nav-link active"
//                 : "nav-link"
//               }
//             >
//               Products
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/signup"
//               className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
//             >
//               Signup
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/login"
//               className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
//             >
//               Login
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

