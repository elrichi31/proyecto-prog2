import { DatePicker, TimePicker, DateTimePicker } from '@material-ui/pickers'
import {useState} from 'react'
import styles from '../../styles/dates.module.css'

//forma especial de manejar la fecha para poder conectar al servidor

export default function Dates({type, define = new Date(), fechaSeleccionada, cambiarFecha}){
    // const [fechaSeleccionada, cambiarFecha] = useState(new Date())
    if(type === "fecha"){
        return (
            <div>
                <label>Fecha</label><br></br>
                <DatePicker value={fechaSeleccionada} onChange={cambiarFecha}></DatePicker>
            </div>
        )
    } else if(type === "Hora") {
        return (
            <div>
                <label>Hora</label><br></br>
                <TimePicker value={fechaSeleccionada} onChange={cambiarFecha}></TimePicker>
            </div>
        )
    } else if (type === "fechaHora"){
        return (
            <div className={styles.div_total}>
                {/* <label>Fecha y Hora</label><br></br> */}
                <DateTimePicker value={fechaSeleccionada} onChange={cambiarFecha} className={styles.date}></DateTimePicker>
            </div>
        )
    } else if(type==="define"){
        return(
            <div readOnly>
                <DateTimePicker readOnly value={define} className={styles.date}></DateTimePicker>
            </div>
        )
    }
}