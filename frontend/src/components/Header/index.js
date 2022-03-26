import React from "react";

import "./style.scss";
import Logo from "../../assets/logo.png"

const Header = () => {
    const topics = [
        {icon: "school", title: "Cursos"},
        {icon: "emoji_objects", title: "Projetos"},
        {icon: "local_library", title: "Sou aluno"},
        {icon: "person_add", title: "Ser aluno"},
    ]

    return(
        <header>
            <div>
                <img src={Logo}/>
                <label>EEEP Comend. Miguel Gurgel</label>
            </div>
            <ul>
                {topics.map((item) => (
                    <li><span class="material-icons-outlined icons">{item.icon}</span> {item.title}</li>
                ))}
            </ul>
        </header>
    )
}

export default Header;