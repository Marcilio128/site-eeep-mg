import "./style.scss";
import SouAluno from "../../Components/SouAluno";
import prof from "../../assets/prof.jpg";

const Materias = () => [
  <section>
    <SouAluno />
    <div className="div-section">
      <div className="div-subjects">
        <div className="matter">
          <h3>Matemática</h3>
          <div className="div-prof">
            <img src={prof} alt="" className="img-profile" />
            <div className="text">
              <h2>Francisca</h2>
              <a>francisca@gmail.com</a>
              <p>(85) 99999-9999</p>
            </div>
          </div>
          <button className="button-details">Detalhes</button>
        </div>
        <div className="matter">
          <h3>Matemática</h3>
          <div className="div-prof">
            <img src={prof} alt="" className="img-profile" />
            <div className="text">
              <h2>Francisca</h2>
              <a>francisca@gmail.com</a>
              <p>(85) 99999-9999</p>
            </div>
          </div>
          <button className="button-details">Detalhes</button>
        </div>
        <div className="matter">
          <h3>Matemática</h3>
          <div className="div-prof">
            <img src={prof} alt="" className="img-profile" />
            <div className="text">
              <h2>Francisca</h2>
              <a>francisca@gmail.com</a>
              <p>(85) 99999-9999</p>
            </div>
          </div>
          <button className="button-details">Detalhes</button>
        </div>
      </div>
    </div>
  </section>,
];
export default Materias;
