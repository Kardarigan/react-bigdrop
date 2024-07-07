import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo-bd-new.svg";
import { navbar } from "../Constants";

const Navbar = () => {
  return (
    <header className="pagecenter flex-seperate padding-x padding-t pb-12">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <ul className="flex font-bold text-lg gap-x-5">
        {navbar.map((item, index) => {
          return (
            <li key={index}>
              <NavLink className="hover:text-slate-600" to={item.href}>
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Navbar;
