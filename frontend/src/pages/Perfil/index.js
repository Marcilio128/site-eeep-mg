import { useEffect, useState } from "react";
import SouAluno from "../../Components/SouAluno";
import PerfilServices from "./service";

import "./style.scss";
const Perfil = () => {
  const [aluno, setAluno] = useState([]);

  const ListarDadosAluno = async () => {
    const response = await PerfilServices.list();
    setAluno(response.data);
  };
  useEffect(() => {
    ListarDadosAluno();
  }, []);
  return (
    <section>
      <SouAluno />
      <div className="div-informacoes">
        {aluno.map((item) => (
          <div className="div-card-aluno">
            <div className="div-perfil">
              <img src={item.perfil} alt="" />
              <h1>{item.nome}</h1>
            </div>

            {/* (é so criar no json e chamar aqui) */}
            <div className="card-infos">
              <div className="card-info">
                <p>Data de Nascimento:</p>
                <span>00/00/00</span>
              </div>
              <div className="card-info">
                <p>Email:</p>
                <span>inultil@gmail.com</span>
              </div>
              <div className="card-info">
                <p>Telefone</p>
                <span>(85)99999-9999</span>
              </div>

              <div className="card-info">
                <p>Telefone</p>
                <span>(85)99999-9999</span>
              </div>
              <div className="card-info">
                <p>Telefone</p>
                <span>(85)99999-9999</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Perfil;
