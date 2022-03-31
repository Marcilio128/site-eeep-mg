import { useEffect, useState } from "react";
import SouAluno from "../../Components/SouAluno";
import BoletimServices from "./service";
import "./style.scss";
const Boletim = () => {
  const [aluno, setAluno] = useState([]);

  const ListarDadosAluno = async () => {
    const response = await BoletimServices.list();
    setAluno(response.data);
  };
  useEffect(() => {
    ListarDadosAluno();
  }, []);

  return (
    <section>
      <div>
        <SouAluno />
      </div>
      <div className="div-table">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Matérias</th>
              <th scope="col">1° Bimestre</th>
              <th scope="col">2° Bimestre</th>
              <th scope="col">3° Bimestre</th>
              <th scope="col">4° Bimestre</th>
              <th scope="col">Média Final</th>
            </tr>
          </thead>
          <tbody>
            {aluno.map((e) => (
              <>
                {e.materias.map((item) => (
                  <tr>
                    <th scope="row">{item.nome}</th>
                    <td>{item.nota1}</td>
                    <td>{item.nota2}</td>
                    <td>{item.nota3}</td>
                    <td>{item.nota4}</td>
                    <td>
                      {(
                        (item.nota4 + item.nota3 + item.nota2 + item.nota1) /
                        4
                      ).toFixed(1)}
                    </td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>{" "}
      </div>
    </section>
  );
};
export default Boletim;
