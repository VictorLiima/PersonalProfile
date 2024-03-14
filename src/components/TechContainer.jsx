import { DiJsBadge, DiNodejsSmall, DiMysql, DiPython, DiMongodb } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FaRobot } from "react-icons/fa";

import "../styles/components/TechContainer.sass"

const technologies = [
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, time: "2 Anos"},
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, time: "2 Anos e meio"},
    { id: "mysql", name: "MySQL", icon: <DiMysql />, time: "2 Anos e meio"},
    { id: "python", name: "Python", icon: <DiPython />, time: "3 Anos e meio"},
    { id: "mongodb", name: "MongoDb", icon: <SiMongodb />,time: "2 Anos"},
    { id: "automation", name: "RPA - Automações", icon: <FaRobot/>,time: "3 Anos e meio"}

];

const TechContainer = ()=> {
    return(
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((technology)=>(
                    <div className="technology-card" id={technology.id} key={technology.id}>
                        {technology.icon}
                        <div className="technology-info">
                            <h3>{technology.name}</h3>
                            <h3>Experiência</h3>
                            <p>{technology.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechContainer;