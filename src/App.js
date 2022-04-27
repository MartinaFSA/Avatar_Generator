import './App.css';
import './styles.css';
import React, { useState } from 'react';
import html2canvas from 'html2canvas';

function Cambioalor(){
  const [cont, setCont]= useState(0); //useState (valor en el que incio cont) y setCont (manipulador de contenido)

  const sumaClick = () => {
    setCont(cont + 1)
  }

  return (
    <div>
      <h1>Sumar valores</h1>
      <p>{cont}</p>
      <button onClick={sumaClick}>Agregar</button>
      <hr></hr>
    </div>
  )
}

function PersonajeExportar() {
  /* Asignación con useState */
  const [ojos, setOjos] = useState();
  const [boca, setBoca] = useState();
  const [nariz, setNariz] = useState();
  const [cejas, setCejas] = useState();
  const [piel, setPiel] = useState(1);
  const arrOjos = [1,2,3,4];
  const arrCejas = [1,2,3,4];
  const arrNariz = [1,2,3,4];
  const arrBoca = [1,2,3,4];
  const arrPiel = [1,2,3];
  
  /* Exportar archivo */
  const archivoExportado = function(i){
    html2canvas(document.querySelector("#exportar")).then(canvas => {
      let img = canvas.toDataURL("img/png");
      let link = document.createElement("a"); /*Elemento que descargaremos*/
      link.download = "personaje.png"; /*el nombre que tendrá el archivo descargado*/
      link.href = img;
      link.click();
    });
  }

  /* event listeners de los useState */
  const pielSeleccionada = function(e){
   setPiel(e.target.id);
  };  const ojosSeleccionados = function(e){
    setOjos(e.target.id);
  };  const bocaSeleccionada = function(e){
    setBoca(e.target.id);
  };  const narizSeleccionada = function(e){
    setNariz(e.target.id);
  };  const cejasSeleccionadas = function(e){
    setCejas(e.target.id);
  };
  
  function displayCejas(){    
    let opciones_boca = document.getElementById("rasgos_boca");
    opciones_boca.style.display = "none";    
    let opciones_piel = document.getElementById("rasgos_piel");
    opciones_piel.style.display = "none";
    let opciones_nariz = document.getElementById("rasgos_nariz");
    opciones_nariz.style.display = "none";
    let opciones_ojos = document.getElementById("rasgos_ojos");
    opciones_ojos.style.display = "none";

    let opciones_cejas = document.getElementById("rasgos_cejas");
    opciones_cejas.style.display = "block";
  };  function displayOjos(){
    let opciones_boca = document.getElementById("rasgos_boca");
    opciones_boca.style.display = "none";
    let opciones_piel = document.getElementById("rasgos_piel");
    opciones_piel.style.display = "none"; 
    let opciones_nariz = document.getElementById("rasgos_nariz");
    opciones_nariz.style.display = "none";
    let opciones_cejas = document.getElementById("rasgos_cejas");
    opciones_cejas.style.display = "none";
    let opciones_ojos = document.getElementById("rasgos_ojos");
    opciones_ojos.style.display = "block";
  };  function displayNariz(){    
    let opciones_boca = document.getElementById("rasgos_boca");
    opciones_boca.style.display = "none";    
    let opciones_piel = document.getElementById("rasgos_piel");
    opciones_piel.style.display = "none";
    let opciones_ojos = document.getElementById("rasgos_ojos");
    opciones_ojos.style.display = "none";
    let opciones_cejas = document.getElementById("rasgos_cejas");
    opciones_cejas.style.display = "none";
    let opciones_nariz = document.getElementById("rasgos_nariz");
    opciones_nariz.style.display = "block";
  };  function displayBoca(){ 
    let opciones_piel = document.getElementById("rasgos_piel");
    opciones_piel.style.display = "none";
    let opciones_nariz = document.getElementById("rasgos_nariz");
    opciones_nariz.style.display = "none";
    let opciones_ojos = document.getElementById("rasgos_ojos");
    opciones_ojos.style.display = "none";
    let opciones_cejas = document.getElementById("rasgos_cejas");
    opciones_cejas.style.display = "none";
    let opciones_boca = document.getElementById("rasgos_boca");
    opciones_boca.style.display = "block";   
  };  function displayPiel(){    
    let opciones_boca = document.getElementById("rasgos_boca");
    opciones_boca.style.display = "none";
    let opciones_nariz = document.getElementById("rasgos_nariz");
    opciones_nariz.style.display = "none";
    let opciones_ojos = document.getElementById("rasgos_ojos");
    opciones_ojos.style.display = "none";
    let opciones_cejas = document.getElementById("rasgos_cejas");
    opciones_cejas.style.display = "none";    
    let opciones_piel = document.getElementById("rasgos_piel");
    opciones_piel.style.display = "block";
  };

  return (
    <div>
      <h2 className="titulo">Creá un personaje!</h2>
      {/* selectores de rasgos */}
      <section className='selectorRasgos'>
          <figure id="exportar">
            <div>
              <img src={"/img/piel/" + piel + ".png"} alt="" className='img_personaje'/>
              <img src={"/img/ojos/" + ojos + ".png"} alt="" className='img_personaje'/>
              <img src={"/img/boca/" + boca + ".png"} alt="" className='img_personaje'/>
              <img src={"/img/nariz/" + nariz + ".png"} alt="" className='img_personaje'/>
              <img src={"/img/cejas/" + cejas + ".png"} alt="" className='img_personaje'/>
            </div>
            <button onClick={archivoExportado}>Exportar personaje</button>
          </figure>
          <article>
            <ul>
              <li>
                <button onClick={displayPiel}>Piel</button>
              </li>
              <li>
                <button onClick={displayBoca}>Boca</button>
              </li>
              <li>
                <button onClick={displayOjos}>Ojos</button>
              </li>
              <li>
                <button onClick={displayCejas}>Cejas</button>
              </li>
              <li>
                <button onClick={displayNariz}>Nariz</button>
              </li>
            </ul>
            <ul className='rasgos' id='rasgos_piel'>
              {arrPiel.map((piel, index) => (
                  <li key={piel.toString()}> <button onClick={pielSeleccionada} id={piel}> <img src={"/img/piel/" + piel + ".png"} alt="" className='img_personaje' id={piel}></img> {piel} </button></li>  
                ))}
            </ul>
            <ul className='rasgos' id='rasgos_boca'>
              {arrBoca.map((boca, index) => (
                  <li key={boca.toString()}> <button onClick={bocaSeleccionada} id={boca}> <img src={"/img/boca/" + boca + ".png"} alt="" className='img_personaje' id={boca}></img> {boca} </button></li>  
                ))}
            </ul>
            <ul className='rasgos' id='rasgos_nariz'>
              {arrNariz.map((nariz, index) => (
                  <li key={nariz.toString()}> <button onClick={narizSeleccionada} id={nariz}> <img src={"/img/nariz/" + nariz + ".png"} alt="" className='img_personaje' id={nariz}></img> {nariz} </button></li>  
                ))}
            </ul>
            <ul className='rasgos' id='rasgos_cejas'>
              {arrCejas.map((ceja, index) => (
                  <li key={ceja.toString()}> <button onClick={cejasSeleccionadas} id={ceja}> <img src={"/img/cejas/" + ceja + ".png"} alt="" className='img_personaje' id={ceja}></img> {ceja} </button></li>  
                ))}
            </ul>
            <ul className='rasgos' id='rasgos_ojos'>
              {arrOjos.map((ojo, index) => (
                  <li key={ojo.toString()}> <button onClick={ojosSeleccionados} id={ojo}> <img src={"/img/ojos/" + ojo + ".png"} alt="" className='img_personaje' id={ojo}></img> {ojo} </button></li>  
                ))}
            </ul>
        </article>
      </section>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Cambioalor />
      <PersonajeExportar />
    </div>
  );
}

export default App;
