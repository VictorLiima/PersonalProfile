import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../files/profile.jpg";

import MeuCV from "../files/victor_cv.pdf"

import "../styles/components/Sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="João Victor" />
      <p className="title">Desenvolvedor Pleno</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href={MeuCV} download="Victor_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn">
        Download Currículo
      </a>
    </aside>
  );
};

export default Sidebar;