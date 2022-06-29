import { NavLink} from "react-router-dom";



const NavLinks = () => {
  
  return (
    
    <nav>
       <NavLink
        to="/"
        style={({ isActive }) => {
          return { color: isActive && "green" };
        }}
      >
        <li>Home</li>
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => {
          return { color: isActive && "green" };
        }}
      >
        <li>About</li>
      </NavLink> 

      <NavLink
        to="/events"
        style={({ isActive }) => {
          return { color: isActive && "green" };
        }}
      >
        <li>Events</li>
      </NavLink> 
       
{/* 
      <Link to="/">Home</Link>
      <Link to="/about">
         About
      </Link>  */}
     </nav>
  );
};

export default NavLinks;
