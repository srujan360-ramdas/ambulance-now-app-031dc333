import { NavLink } from "react-router-dom";
import { Bike } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-card shadow-md fixed top-0 left-0 right-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bike className="w-7 h-7 text-primary" />
          <h1 className="text-2xl font-bold text-primary">Bike Ambulance</h1>
        </div>
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative font-medium transition-colors hover:text-primary ${
                isActive ? "text-primary" : "text-muted-foreground"
              } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
                isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative font-medium transition-colors hover:text-primary ${
                isActive ? "text-primary" : "text-muted-foreground"
              } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
                isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/safety"
            className={({ isActive }) =>
              `relative font-medium transition-colors hover:text-primary ${
                isActive ? "text-primary" : "text-muted-foreground"
              } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
                isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`
            }
          >
            Safety
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative font-medium transition-colors hover:text-primary ${
                isActive ? "text-primary" : "text-muted-foreground"
              } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
                isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
