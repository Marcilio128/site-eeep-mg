import React, { useEffect } from "react";

import "./style.scss"
import Header from "../../components/Header";

const Home = () => {
    function typeWrite(elemento){
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = ' ';
        textoArray.forEach(function(letra, i){   
          
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 75 * i)
    
      });
    }
    useEffect(() => {
        const titulo = document.querySelector('h1');
        typeWrite(titulo);
    }, [])
    
    return(
        <section className="section-home">
            <Header />
            <main>
                <h1>Bem-vindos a Escola Estadual de Ensino Profissionalizante Comendador Miguel Gurgel! </h1>
                <div>
                    <span class="material-icons-outlined">settings</span>
                    <label>Informática |</label>
                    <span class="material-icons-outlined">play_circle</span>
                    <label>Multimídia |</label>
                    <span class="material-icons-outlined">cases</span>
                    <label>Contabilidade</label>
                </div>
            </main>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1e742d" fill-opacity="1" d="M0,224L40,229.3C80,235,160,245,240,245.3C320,245,400,235,480,202.7C560,171,640,117,720,117.3C800,117,880,171,960,176C1040,181,1120,139,1200,122.7C1280,107,1360,117,1400,122.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        </section>
    )
}

export default Home;