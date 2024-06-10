import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center mt-5">
      <img className="mx-auto" src={logo} alt="" />
      <p className="my-2">Journalism Without Fear or Favour</p>
      <p className="text-xl mb-8">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
