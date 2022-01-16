import React, {Fragment,useState} from 'react';




const Formulario = ({crearCita,citas}) => {

    //Crear State de citas

    const [cita,actualizarCita]=useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
      
    });

    const [error,actualizarError]=useState(false)

    //Funcion que se ejecuta cada vez que el usuario escribe en un input

    const actualizarState = e =>{
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    //Extraer valores

    const { mascota,propietario,fecha,hora,sintomas } = cita;

    //Cuando el usuario presiona agregar cita
        const submitCita=e=>{
            e.preventDefault();

            
            //Validamos
            if(mascota.trim() ==='' || propietario.trim()==='' || fecha.trim()==='' || hora.trim()==='' || sintomas.trim()==='')
            {
                actualizarError(true)
                return;
            }
            //Eliminar Mensaje previo de Validacion

            actualizarError(false);

           //Asignar un ID
       
            for(let i=0;i<=citas.length;i++)
            {
              
                cita.id=i;
            }
           
           
     
           //Crear la cita

           crearCita(cita);


           //Reiniciar la cita o el form

            actualizarCita({
                mascota:'',
                propietario:'',
                fecha:'',
                hora:'',
                sintomas:'' 
            })

        }  
 

    return ( 
       <Fragment>

           <h2>Crear Cita</h2>

           { error ? <p className="alerta-error">Todos los campos nos obligatorios</p>  :  null }
           
           <form
           onSubmit={submitCita}
           
           >
            <label>Nombre Mascota</label>
            <input
                type="text"
                name="mascota"
                className="u-full-widht"
                placeholder="Nombre Mascota"
                onChange={actualizarState}
                value={mascota}
            />  
              <label>Nombre Dueño</label>
            <input
                type="text"
                name="propietario"
                className="u-full-widht"
                placeholder="Nombre Dueño de la mascota"
                onChange={actualizarState}
                value={propietario}
            /> 

            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                className="u-full-widht"
                onChange={actualizarState}
                value={fecha}
            />
            <label>Hora</label>
            <input
                type="time"
                name="hora"
                className="u-full-widht"
                onChange={actualizarState}
                value={hora}
            /> 

            <label>Sintomas</label>
            <textarea 
            className="u-full-width"
            name="sintomas"
            onChange={actualizarState}
            value={sintomas}
                
            ></textarea>

            <button
                type="submit"
                className="u-full-width button-primary" 
            >Agregar cita</button>

           </form>


       </Fragment>

     );
}
 
export default Formulario;