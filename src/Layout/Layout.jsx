import Logo from "../assets/EZ Works Blue@2x.png";
import { CardContainer, Form } from "../components";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="main-container">
      <div className="sub-container1">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="hero-content">A Suite Of Business Support Services</div>
        <div className="sub-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed
        </div>
        <div className="form-in-pc">
          <Form />
        </div>
      </div>
      <div className="sub-container2">
        <CardContainer />
      </div>
      <div className="form-in-mobile">
        <Form />
      </div>
    </div>
  );
};

export default Layout;
