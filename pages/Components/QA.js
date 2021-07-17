export default function QA({name, defaultValue, toChange, children}){
    return (
        <div className="col-sm-3 mb-2 form-check">
            <label className="me-2 form-check-label">{children}
                <input
                name={name}
                onChange={toChange}
                className="form-check-input"
                type="checkbox"
                checked={defaultValue}
                id="inlineCheckbox3"
                />
            </label>
        </div>
    )
}