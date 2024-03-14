import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/SocialNetworkContainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> , link:'https://www.linkedin.com/in/victor-lima-dev/'},
  { name: "github", icon: <FaGithub />, link: 'https://github.com/VictorLiima'},
  { name: "instagram", icon: <FaInstagram />, link:'https://www.instagram.com/victorlima.py/'},
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name} target="_blank" rel="noopener noreferrer">
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;