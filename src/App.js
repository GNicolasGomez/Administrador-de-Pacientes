import React,{Fragment,useState,useEffect} from 'react'
import Formulario from './components/formulario';
import Citas from './components/Citas';
import PropTypes  from 'prop-types';

function App() {

  //Citas en local storage
  let citasIniciales= JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales )
{
  citasIniciales=[];
}
  //Arreglo de citas

  const [citas,guardarCitas]=useState(citasIniciales);

  // Use Effect para realizar ciertas operaciones cuando el state cambia

  useEffect(() => {
    let citasIniciales= JSON.parse(localStorage.getItem('citas'));
    
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }
    else {
      localStorage.setItem('citas', JSON.stringify([]));
    }

  }, [citas])


  //Funcion que toma las citas actuales y agrege las nuevas

  const crearCita=cita=>{
  
    guardarCitas([
      ...citas,cita
    ]);
  }

  //Funcion que elimina una cita por su id
  const eliminarCita=id=>{
  
      const nuevasCitas = citas.filter(cita => cita.id !== id);

        guardarCitas(nuevasCitas);
  }

  //Mensaje Consdicional

  const titulo = citas.length === 0 ? 'Aun no hay citas' :'Administra tus citas';



  return (
      <Fragment>
           <h1>Administrador de pacientes</h1>

        <div className="container">
          <div className="one-half column">
              <Formulario
              crearCita={crearCita}
              citas={citas}
              />
          </div> 
          <div className="one-half column">
             <h2>{titulo}</h2>
            {citas.map(cita =>(
              <Citas
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
              />
            ))}
          </div>

        </div>
      </Fragment>
   
  );
}

  Formulario.propTypes={
    crearCita: PropTypes.func.isRequired
    
  }

export default App;
