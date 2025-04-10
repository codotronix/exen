import { NavLink } from "react-router-dom";
import routes from "../../../routes";

const Header = () => {
    return (
      <div>
        {routes.map((route) => (
        <NavLink 
            key={route.path} 
            to={route.path}
            style={({ isActive }) => ({ color: isActive ? 'yellow' : 'blue' })}
        >
            {route.name}
        </NavLink>
        ))}
      </div>
    );
  }
  
  export default Header;