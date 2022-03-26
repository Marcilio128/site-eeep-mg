import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiTwotoneCalendar, AiOutlineUser } from "react-icons/ai";
import { GiPoliceBadge } from "react-icons/gi";

import "./style.scss";
import logo from "../../assets/logo.jpg";

const SouAluno = () => {
  return (
    <section>
      <div className="header-home">
        <div>
          <img src={logo} />
        </div>
        <div>
          <button className="button-pages">
            <BsFillBookmarkFill />
            Matérias
          </button>
          <button className="button-pages">
            <AiTwotoneCalendar />
            Calendário
          </button>
          <button className="button-pages">
            <IoIosArrowDown />
            Notas
          </button>

          <button className="button-pages">
            <GiPoliceBadge />
            Grêmio
          </button>
          <button className="button-pages">
            <AiOutlineUser />
            Perfil
          </button>
        </div>
      </div>
    </section>
  );
};

export default SouAluno;
