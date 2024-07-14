import drop from "../../assets/droplet.svg";
import awards from "../../assets/big-drop-awards.png";
import { footer } from "../Constants";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex max-md:flex-col gap-10 mx-auto pagecenter padding">
      <div className="w-16 mt-3">
        <img src={drop} alt="drop" />
      </div>
      <div className="para text-slate-500">
        <h3 className="font-bold">Big Drop Brewing Co. Ltd.</h3>
        <p className="my-4 leading-8">
          © 2016-2024 Big Drop Brewing Co Ltd. | Registered Office: Connexions
          3rd Floor, 159 Princes Street, Ipswich, Suffolk, United Kingdom, IP1
          1QJ | Registered in England #10305828
        </p>
        <p className="text-xs leading-7">
          Big Drop Brewing is a Registered Trademark of Big Drop Brewing Co.
          Limited. “Go On. Go Big.” and “Beer So Good … You Won't Miss The
          Alcohol.” are Trademarks of Big Drop Brewing Co. Limited.
        </p>
        <navbar className="flex font-bold gap-x-5">
          {footer.map((item, index) => {
            return (
              <NavLink
                key={index}
                className="hover:text-slate-600 underline decoration-dotted"
                to={item.href}
              >
                {item.label}
              </NavLink>
            );
          })}
        </navbar>
      </div>
      <div className="">
        <img src={awards} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
