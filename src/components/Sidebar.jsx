import Avatar from '../Img/profile.jpeg'

import "../styles/components/sidebar.sass"

const Sidebar = ()=> {
    return(
        <aside id="sidebar">
            <img src={Avatar} alt="João Victor"/>
            <p className="title">Desenvolvedor Pleno</p>
            <p>redes sociais</p>
            <p>info de contato</p>
            <a href="" className="btn"> Download Currículo</a>
        </aside>
    )
}

export default Sidebar

