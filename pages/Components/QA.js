//Componente de los checkboxes de la historia clinica, para no mostrar select con si y no 
//preferible a los select porque ocupa menos espacio y mejoran la experiencia de uso

export default function QA({name, defaultValue, toChange, children, handleClickBt}){
    return (
        <div className="col-sm-3 mb-2 form-check">
            <label className="me-2 form-check-label">{children}
                <input
                name={name}
                onChange={toChange}
                onClick={handleClickBt}
                className="form-check-input"
                type="checkbox"
                defaultChecked={defaultValue}
                id="inlineCheckbox3"
                />
            </label>
        </div>
    )
}