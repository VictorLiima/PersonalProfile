import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../files/profile.jpg";

import "../styles/components/Sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="João Victor" />
      <p className="title">Desenvolvedor Pleno</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="src/files/victor_cv.pdf" target="_blank" rel="noopener noreferrer" className="btn">
        Download Currículo
      </a>
    </aside>
  );
};

export default Sidebar;