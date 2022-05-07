import './App.css';
import './styles.css';
import React, { useState } from 'react';
import html2canvas from 'html2canvas';

function PersonajeExportar() {
  /* Asignación con useState */
  let [ojos, setOjos] = useState(1);
  let [boca, setBoca] = useState(3);
  let [accesorio, setAccesorio] = useState(1);
  let [piel, setPiel] = useState(1);
  let [fondo, setFondo] = useState(1);
  let [ropa, setRopa] = useState(1);
  /*Mínimo 4 por array*/
  const arrOjos = [1,0];
  const arrAccesorio = [1,2];
  const arrBoca = [2,3];
  const arrPiel = [1,2,3,4];
  const arrFondo = [1,2,3,4,5];
  const arrRopa = [1];
  
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
  };  const accesorioSeleccionada = function(e){
    setAccesorio(e.target.id);
  }; const fondoSeleccionado = function(e){
    setFondo(e.target.id);
  }; const ropaSeleccionado = function(e){
    setRopa(e.target.id);
  };
  
  /*Variables conseguidas por ID*/
  const opciones_boca = document.getElementById("rasgos_boca");
  const opciones_piel = document.getElementById("rasgos_piel");
  const opciones_accesorio = document.getElementById("rasgos_accesorio");
  const opciones_ojos = document.getElementById("rasgos_ojos");
  const opciones_fondo = document.getElementById("rasgos_fondo");
  const opciones_ropa = document.getElementById("rasgos_ropa");
  
  function displayOjos(){
    opciones_boca.style.display = "none";
    opciones_piel.style.display = "none"; 
    opciones_fondo.style.display = "none";
    opciones_accesorio.style.display = "none";
    opciones_ropa.style.display = "none";
    opciones_ojos.style.display = "block";
  };  function displayAccesorio(){    
    opciones_boca.style.display = "none";    
    opciones_piel.style.display = "none";
    opciones_fondo.style.display = "none";
    opciones_ojos.style.display = "none";
    opciones_ropa.style.display = "none";
    opciones_accesorio.style.display = "block";
  };  function displayBoca(){ 
    opciones_piel.style.display = "none";
    opciones_accesorio.style.display = "none";
    opciones_ojos.style.display = "none";
    opciones_fondo.style.display = "none";
    opciones_ropa.style.display = "none";
    opciones_boca.style.display = "block";   
  };  function displayPiel(){    
    opciones_boca.style.display = "none";
    opciones_accesorio.style.display = "none";
    opciones_ojos.style.display = "none";
    opciones_fondo.style.display = "none";
    opciones_ropa.style.display = "none";
    opciones_piel.style.display = "block";
  };  function displayFondo(){    
    opciones_boca.style.display = "none";
    opciones_accesorio.style.display = "none";
    opciones_ojos.style.display = "none";
    opciones_piel.style.display = "none";
    opciones_ropa.style.display = "none";
    opciones_fondo.style.display = "block";
  };  function displayVestimenta(){    
    opciones_boca.style.display = "none";
    opciones_accesorio.style.display = "none";
    opciones_ojos.style.display = "none";
    opciones_piel.style.display = "none";
    opciones_fondo.style.display = "none";
    opciones_ropa.style.display = "block";
  };

  /*Random avatar*/
  function randomFondo(e) {
    setFondo(e);
  }; function randomOjo(e) {
    setOjos(e);
  }; function randomPiel(e) {
    setPiel(e);
  }; function randomBoca(e) {
    setBoca(e);
  };
  function randomCharacter() {
    let random_ojo = Math.floor(Math.random() * arrOjos.length);
    let random_boca = Math.floor(Math.random() * arrBoca.length);
    let random_piel = Math.floor(Math.random() * arrPiel.length);
    let random_fondo = Math.floor(Math.random() * arrFondo.length);
    piel = random_piel + 1;
    ojos = random_ojo;
    boca = random_boca + 1;
    fondo = random_fondo + 1;
    randomFondo(fondo);
    randomOjo(ojos);
    randomBoca(boca);
    randomPiel(piel);
  }

  return (
    <div>
      <section id='header'>
        <button className='icon' onClick={randomCharacter}><img src='/img/icons/dice.png' alt='generar imagen al azar'></img></button>
        <p id='nombre_app'>Avatar generator</p>
        <button className='icon' onClick={archivoExportado}><img src='/img/icons/download.png' alt='descargar imagen'></img></button>
      </section>
      <section className='selectorRasgos'>
          <figure id="exportar">
            <div>
              <img src={"/img/fondo/" + fondo + ".png"} className='img_personaje'/>
              <img src={"/img/piel/" + piel + ".png"} alt=" " className='img_personaje'/>
              <img src={"/img/base/peloengominado.png"} alt=" " className='img_personaje'/>
              <img src={"/img/base/baseOjosNariz.png"} className='img_personaje'/>
              <img src={"/img/ojos/" + ojos + ".png"} alt=" " className='img_personaje'/>
              <img src={"/img/base/brilloOjos.png"} className='img_personaje'/>
              <img src={"/img/boca/" + boca + ".png"} alt=" " className='img_personaje'/>
              <img src={"/img/accesorio/" + accesorio + ".png"} className='img_personaje'/>
              <img src={"/img/base/ropaTraje.png"} alt=" " className='img_personaje'/>
            </div>
            <div>
              <button onClick={archivoExportado}>Exportar personaje</button>
              <button onClick={randomCharacter}><img src='/img/icons/dice.png' alt='generar imagen al azar'></img></button>
            </div>
          </figure>
          <article>
            <ul className='scroll_horizontal'>
              <li> 
                <button onClick={displayPiel}><img src='./img/icons/piel.png'></img>Piel</button>
              </li>
              <li>
                <button onClick={displayBoca}><img src='./img/icons/labio.png'></img>Boca</button>
              </li>
              <li>
                <button onClick={displayOjos}><img src='./img/icons/ojo.png'></img>Ojos</button>
              </li>
              <li>
                <button onClick={displayAccesorio}><img src='./img/icons/accesorio.png'></img>Accesorios</button>
              </li>
              <li>
                <button onClick={displayFondo}><img src='./img/icons/background.png'></img>Fondo</button>
              </li>
              <li>
                <button onClick={displayVestimenta}><img src='./img/icons/ropa.png'></img>Vestimenta</button>
              </li>
            </ul>
            <ul className='rasgos scroll_horizontal' id='rasgos_piel'>
              {arrPiel.map((piel) => (
                  <li key={piel.toString()}> <button onClick={pielSeleccionada} id={piel}> <img src={"/img/miniaturaPiel/" + piel + ".png"} alt="color de piel" id={piel}></img></button></li>  
                ))}
            </ul>
            <ul className='rasgos scroll_horizontal' id='rasgos_boca'>
              {arrBoca.map((boca) => (
                  <li key={boca.toString()}> <button onClick={bocaSeleccionada} id={boca}> <img src={"/img/miniaturaLabios/" + boca + ".png"} alt="color de labios" id={boca}></img></button></li>  
                ))}
            </ul>
            <ul className='rasgos scroll_horizontal' id='rasgos_accesorio'>
              {arrAccesorio.map((accesorio) => (
                  <li key={accesorio.toString()}> <button onClick={accesorioSeleccionada} id={accesorio}> <img src={"/img/miniaturaAccesorio/" + accesorio + ".png"} id={accesorio}></img></button></li>  
                ))}
            </ul>
            <ul className='rasgos scroll_horizontal' id='rasgos_ojos'>
              {arrOjos.map((ojo) => (
                  <li key={ojo.toString()}> <button onClick={ojosSeleccionados} id={ojo}> <img src={"/img/miniaturaOjos/" + ojo + ".png"} alt="color de ojos" id={ojo}></img></button></li>  
                ))}
            </ul>
            <ul className='rasgos scroll_horizontal' id='rasgos_fondo'>
              {arrFondo.map((fondo) => (
                  <li key={fondo.toString()}> <button onClick={fondoSeleccionado} id={fondo}> <img src={"/img/miniaturaFondos/" + fondo + ".png"} alt="fondo" id={fondo}></img></button></li>  
                ))}
            </ul>
            <ul className='rasgos scroll_horizontal' id='rasgos_ropa'>
              {arrRopa.map((ropa) => (
                  <li key={ropa.toString()}> <button onClick={ropaSeleccionado} id={ropa}> <img src={"/img/miniaturaVestimenta/" + ropa + ".png"} alt="ropa" id={ropa}></img></button></li>  
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
      <PersonajeExportar />
    </div>
  );
}

export default App;
