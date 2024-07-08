import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo-bd-new.svg";
import { navbar } from "../Constants";

const Navbar = () => {
  return (
    <header className="pagecenter flex-seperate padding-x padding-t pb-10">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <navbar className="flex font-bold gap-x-5">
        {navbar.map((item, index) => {
          return (
            <NavLink
              key={index}
              className="hover:text-slate-600"
              to={item.href}
            >
              {item.label}
            </NavLink>
          );
        })}
      </navbar>
    </header>
  );
};

export default Navbar;
