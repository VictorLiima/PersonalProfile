import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../Img/profile.jpg";

import "../styles/components/Sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="João Victor" />
      <p className="title">Desenvolvedor Pleno</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="#" className="btn">
        Download Currículo
      </a>
    </aside>
  );
};

export default Sidebar;