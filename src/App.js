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

function GeneradorPersonaje() {
  /* Asignación con useState */
  const [ojos, setOjos] = useState();
  const [boca, setBoca] = useState();
  const [nariz, setNariz] = useState();
  const [cejas, setCejas] = useState();
  const [piel, setPiel] = useState();
  
  const archivoExportado = function(i){
    html2canvas(document.querySelector("#exportar")).then(canvas => {
      let img = canvas.toDataURL("img/png");
      let link = document.createElement("a"); /*Elemento que descargaremos*/
      link.download = "personaje.png"; /*el nombre que tendrá el archivo descargado*/
      link.href = img;
      link.click();
    });
  }

  /* Funciones de los eventos */
  const pielSeleccionada = function(i){
   setPiel(i.target.value);
  }
  const ojosSeleccionados = function(i){
    setOjos(i.target.value);
  }
  const bocaSeleccionada = function(i){
    setBoca(i.target.value);
  }
  const narizSeleccionada = function(i){
    setNariz(i.target.value);
  }
  const cejasSeleccionadas = function(i){
    setCejas(i.target.value);
  }

  return (
    <div>
      <h2 className="titulo">Creá un personaje!</h2>
      {/* selectores de rasgos */}
      <section className='selectorRasgos'>
        <ul>
          <li>
            <select onChange={pielSeleccionada}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </li>
          <li>
            <select onChange={ojosSeleccionados}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </li>
          <li>
            <select onChange={bocaSeleccionada}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </li>
          <li>
            <select onChange={narizSeleccionada} id="nariz">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </li>
          <li>
            <select onChange={cejasSeleccionadas} id="cejas">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </li>
        </ul>
        <article>
          <figure id="exportar">
            <img src={"/img/piel/" + piel + ".png"}/>
            <img src={"/img/ojos/" + ojos + ".png"}/>
            <img src={"/img/boca/" + boca + ".png"}/>
            <img src={"/img/nariz/" + nariz + ".png"}/>
            <img src={"/img/cejas/" + cejas + ".png"}/>
          </figure>
          <button onClick={archivoExportado}>Exportar personaje</button>
        </article>
      </section>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Cambioalor />
      <GeneradorPersonaje />
    </div>
  );
}

export default App;
