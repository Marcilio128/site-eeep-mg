import React from "react";
import { useHistory } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

import "./style.scss";
import logo from "../../assets/logo.jpg";

const SouAluno = () => {
  const history = useHistory();

  const Matter = () => {
    history.push("/Materias");
  };
  const Calendario = () => {
    history.push("/Calendario");
  };

  return (
    <section>
      <div className="header-home">
        <div>
          <img src={logo} />
        </div>
        <div>
          <button onClick={Matter} className="button-pages">
            Matérias
            <IoIosArrowDown />
          </button>
          <button onClick={Calendario} className="button-pages">
            Calendário
            <IoIosArrowDown />
          </button>
          <button className="button-pages">
            Boletim
            <IoIosArrowDown />
          </button>

          <button className="button-pages">
            Grêmio
            <IoIosArrowDown />
          </button>
          <button className="button-pages">
            Perfil
            <IoIosArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SouAluno;
