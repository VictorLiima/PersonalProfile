import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiReact, DiPython, DiMongodb } from "react-icons/di";

import "../styles/components/TechContainer.sass"

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "python", name: "Python", icon: <DiPython /> },
    { id: "mongodb", name: "MongoDb", icon: <DiMongodb /> },
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
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechContainer;