import { AiOutlineWhatsApp, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "../styles/components/InformationContainer.sass";
const phoneNumber = '+5542998445953'
const message = encodeURIComponent('Olá, estou entrando em contato através do seu site!');
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
const emailUrl = "mailto:contateojoaovictor@gmail.com";

const infoHref = [
    { icon: <AiOutlineWhatsApp id="whatsapp-icon"/>, label: "Telefone", value: "(42)99844-5953", link: whatsappUrl},
    { icon: <AiOutlineMail id="email-icon"/>,  label: "E-mail", value: "contateojoaovictor@gmail.com", link: emailUrl}
];

const InformationContainer = () => {
  return <section id="information">
    {infoHref.map((info)=>(
        <div className="info-card">
            <a href={info.link} target="_blank" rel="noopener noreferrer">
                {info.icon}
            </a>
            <div>
                <h3>{info.label}</h3>
                <p>{info.value}</p>
            </div>
        </div>
    ))}
    <div className="info-card">
        <AiFillEnvironment id="pin-icon"/>
        <div>
            <h3>Localização</h3>
            <p>Castro/Paraná</p>
        </div>
    </div>
  </section>
};

export default InformationContainer;