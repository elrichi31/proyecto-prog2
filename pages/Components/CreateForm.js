export default function CreateForm({ form, handleSubmit, handleInput }) {
  return (
    <div>
      <form
        className="row g-3 needs-validation"
        onSubmit={handleSubmit}
        noValidate
      >
{/* Pesonal y contacto */}
        <div>
          <h2>Información personal</h2>
        </div>
        <div className="col-sm-4">
          <label>Fecha de registro</label>
          <input
            type="date"
            className="form-control"
            aria-label="Fecha de registro"
            name="registrodate"
            defaultValue={form.registrodate} 
            onChange={handleInput}
          />
        </div>

        
        <div className="col-sm-4">
          <label>Nombres</label>
          <input
            type="text"
            className="form-control"
            aria-label="Nombre"
            name="name"
            defaultValue={form.name}
            onChange={handleInput}
            id="validationCustom1"
            required
          />
        </div>
        
        <div className="col-sm-4">
          <label>Apellidos</label>
          <input
            type="text"
            className="form-control"
            aria-label="Apellido"
            name="surname"
            defaultValue={form.surname}
            onChange={handleInput}
          />
        </div>

        <div className="col-sm-4">
          <label>Fecha de nacimiento</label>
          <input
            type="date"
            className="form-control"
            aria-label="Fecha de nacimiento"
            name="nacimientodate"
            defaultValue={form.nacimientodate} 
            onChange={handleInput}
            required
          />
        </div>

        <div className="col-sm">
          <label>Edad</label>
          <input
            type="number"
            className="form-control"
            aria-label="Edad"
            name="age"
            defaultValue={form.age}
            onChange={handleInput}
          />
        </div>

        <div className="col-sm-4">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            aria-label="Email"
            name="email"
            defaultValue={form.email}
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-3">
          <label>Pasaporte / CI</label>
          <input
            type="text"
            className="form-control"
            aria-label="CI"
            name="passportCI"
            defaultValue={form.passportCI}
            onChange={handleInput}
          />
        </div>
        
        <div className="col-sm-3">
          <label>Estado civil</label>
          <select name="" id="parentesco" 
           className="form-control"
           aria-label="Estado civil"
           name="civilState"
           defaultValue={form.civilState}
           onChange={handleInput}
          >
            <option value="">Seleccionar</option>
            <option value="Soltero/a">Soltero/a</option>
            <option value="Casado/a">Casado/a</option>
            <option value="Divorciado/a">Divorciado/a</option>
            <option value="Unión libre">Unión libre</option>
          </select>
          {/* <input
            type="text"
            className="form-control"
            aria-label="Estado civil"
            name="civilState"
            defaultValue={form.civilState}
            onChange={handleInput}
          /> */}
        </div>
        <div className="col-sm-3">
          <label>Nacionalidad</label>
          <input
            type="text"
            className="form-control"
            aria-label="Nacionalidad"
            name="citizenship"
            defaultValue={form.citizenship}
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-5">
          <label>Profesión</label>
          <input
            type="text"
            className="form-control"
            aria-label="Profesión"
            name="profession"
            defaultValue={form.profession}
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-3">
          <label>Celular</label>
          <input
            type="number"
            className="form-control"
            aria-label="Celular"
            name="cellphone"
            defaultValue={form.cellphone}
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-3">
          <label>Teléfono casa</label>
          <input
            type="number"
            className="form-control"
            aria-label="Teléfono casa"
            name="homephone"
            defaultValue={form.homephone}
            onChange={handleInput}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Dirección residencial
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            name="address"
            // value={form.address}
            defaultValue={form.address}
            onChange={handleInput}
          />
        </div>
        
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Dirección adicional
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            name="address2"
            defaultValue={form.address2}
            onChange={handleInput}
          />
        </div>

        
        <div className="col-sm-3">
          <label>Empresa</label>
          <input
            type="text"
            className="form-control"
            aria-label="company"
            name="company"
            defaultValue={form.company}
            onChange={handleInput}
          />
        </div>

        <div className="col-sm-3">
          <label>Cargo</label>
          <input
            type="text"
            className="form-control"
            aria-label="role"
            name="role"
            defaultValue={form.role}
            onChange={handleInput}
          />
        </div>

        <div className="col-sm-3">
          <label>Teléfono empresa</label>
          <input
            type="number"
            className="form-control"
            aria-label="Teléfono empresa"
            name="companyphone"
            defaultValue={form.companyphone}
            onChange={handleInput}
          />
        </div>

{/* Opcional medios de contacto */}

        <div className="col-sm-3">
          <label>Paciente particular o convenio empresarial</label>
          <select name="" id="type" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="type"
           name="type"
           defaultValue={form.type}
           onChange={handleInput}
           id="validationCustom1"
           required
          >
            <option value="">Seleccionar</option>
            <option value="Particular">Particular</option>
            <option value="Empresarial">Empresarial</option>
          </select>
          {/* <input
            type="text"
            className="form-control"
            aria-label="type"
            name="type"
            defaultValue={form.type}
            onChange={handleInput}
          /> */}
        </div>
{/* Conyugue */}
        <h3>Información del cónyugue</h3>
        <div className="col-sm-4">
          <label>Nombres</label>
          <input
            type="text"
            className="form-control"
            aria-label="Nombre"
            name="name_c"
            defaultValue={form.name_c}
            onChange={handleInput}
            id="validationCustom1"
            required
          />
        </div>
        
        <div className="col-sm-4">
          <label>Apellidos</label>
          <input
            type="text"
            className="form-control"
            aria-label="Apellido"
            name="surname_c"
            defaultValue={form.surname_c}
            onChange={handleInput}
          />
        </div>

        <div className="col-sm-4">
          <label>Fecha de nacimiento</label>
          <input
            type="date"
            className="form-control"
            aria-label="Fecha de nacimiento"
            name="nacimientodate_c"
            defaultValue={form.nacimientodate_c} 
            onChange={handleInput}
            required
          />
        </div>

        <div className="col-sm">
          <label>Edad</label>
          <input
            type="number"
            className="form-control"
            aria-label="Edad"
            name="age_c"
            defaultValue={form.age_c}
            onChange={handleInput}
          />
        </div>

        <div className="col-sm-4">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            aria-label="Email"
            name="email_c"
            defaultValue={form.email_c}
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-3">
          <label>Pasaporte / CI</label>
          <input
            type="text"
            className="form-control"
            aria-label="CI"
            name="passportCI_c"
            defaultValue={form.passportCI_c}
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-3">
          <label>Celular</label>
          <input
            type="number"
            className="form-control"
            aria-label="Celular"
            name="cellphone_c"
            defaultValue={form.cellphone_c}
            onChange={handleInput}
          />
        </div>
{/* Representante legal */}
        <h3>Representante legal</h3>
        Llenar si el paciente es menor de edad

        <div className="col-sm-4">
          <label>Parentesco</label>
          <select name="" id="parentesco" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="parentesco"
           name="parentesco"
           defaultValue={form.parentesco}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="">Seleccionar</option>
            <option value="Materno">Materno</option>
            <option value="Paterno">Paterno</option>
          </select>
          {/* <input
            type="select"
            className="form-control"
            aria-label="parentesco"
            name="parentesco"
            defaultValue={form.parentesco}
            onChange={handleInput}
            id="validationCustom1"
            required
          /> */}
        </div>

        <div className="col-sm-4">
          <label>Nombres</label>
          <input
            type="text"
            className="form-control"
            aria-label="Nombre"
            name="name_r"
            defaultValue={form.name_r}
            onChange={handleInput}
            id="validationCustom1"
            required
          />
        </div>
        
        <div className="col-sm-4">
          <label>Apellidos</label>
          <input
            type="text"
            className="form-control"
            aria-label="Apellido"
            name="surname_r"
            defaultValue={form.surname_r}
            onChange={handleInput}
          />
        </div>

        

        <div className="col-sm-4">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            aria-label="Email"
            name="email_r"
            defaultValue={form.email_r}
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-3">
          <label>Pasaporte / CI</label>
          <input
            type="text"
            className="form-control"
            aria-label="CI"
            name="passportCI_r"
            defaultValue={form.passportCI_r}
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-3">
          <label>Celular</label>
          <input
            type="number"
            className="form-control"
            aria-label="Celular"
            name="cellphone_r"
            defaultValue={form.cellphone_r}
            onChange={handleInput}
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Dirección residencial
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            name="address_r"
            defaultValue={form.address_r}
            onChange={handleInput}
          />
        </div>
        
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Dirección adicional
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            name="address2_r"
            defaultValue={form.address2_r}
            onChange={handleInput}
          />
        </div>

        
        <div className="col-sm-3">
          <label>Empresa</label>
          <input
            type="text"
            className="form-control"
            aria-label="company"
            name="company_r"
            defaultValue={form.company_r}
            onChange={handleInput}
          />
        </div>

        <div className="col-sm-3">
          <label>Cargo</label>
          <input
            type="text"
            className="form-control"
            aria-label="role"
            name="role_r"
            defaultValue={form.role_r}
            onChange={handleInput}
          />
        </div>

        <div className="col-sm-3">
          <label>Teléfono empresa</label>
          <input
            type="number"
            className="form-control"
            aria-label="Teléfono empresa"
            name="companyphone_r"
            defaultValue={form.companyphone_r}
            onChange={handleInput}
          />
        </div>
{/* Historial clinico */}
        <h2>Historial clinico</h2>

        <h3>Antecedentes Patológicos</h3>
        <h5>¿Ha padecido o padece alguna de las siguientes condiciones?</h5>
        <div className="col-sm-4">
          <label>Prolapso: válvula mitral</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        --revisar--
        <div className="col-sm-4">
          <label>Tratamiendo de radiación</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Huesos artificiales</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Consumo de drogas/alcohol</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>

        <div className="col-sm-4">
          <label>Dificultades respiratorias</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Transfusión de sangre</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Cáncer</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Defecto congénito del corazón</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Ataque al corazón</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Hemorragia/Sangrado fácil</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Cirugía del corazón</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Diabetes/Tuberculosis</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Presión arterial alta/baja</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Hospitalizado por alguna razón</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
            <label>Razón</label>
          <input
            type="text"
            className="form-control"
            aria-label="prolapso_r"
            name="prolapso_r"
            defaultValue={form.prolapso_r}
            onChange={handleInput}
          />
        </div>

{/*Pendiente texto razón */}


        <div className="col-sm-4">
          <label>Epilepsia/Convulsiones</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Enfermedades venereas</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Gastritis</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Marcapasos</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Válvulas artificiales</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Herpes</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Glaucoma</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Asma</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Hepatitis</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Problemas del riñon</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>SIDA/VIH</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Anemia</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Fiebre reumática</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Fiebre escarlatina</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Soplo cardiaco</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Ulceras/Colitis</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Sinusitis</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Desmayos</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>Artritis</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div className="col-sm-4">
          <label>¿Se medica?</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
            <label>Listar medicamentos</label>
          <input
            type="text"
            className="form-control"
            aria-label="prolapso_r"
            name="prolapso_r"
            defaultValue={form.prolapso_r}
            onChange={handleInput}
          />
        </div>
        

        <div>
        <label>Otras condiciones médicas severas</label>
          <input
            type="text"
            className="form-control"
            aria-label="prolapso_r"
            name="prolapso_r"
            defaultValue={form.prolapso_r}
            onChange={handleInput}
          />
        </div>
        <h5>¿Es alérgico a los siguientes medicamentos?</h5>
        <div className="col-sm-4">
          <label>Anestesia</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div>
        <label>Aspirina</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div>
        <label>Penicilina</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div>
        <label>Eritromicina</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div>
        <label>Látex</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div>
        <label>Tetracilina</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div>
        <label>Codeina</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div>
        <label>Otros</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
            <label>Listar medicamentos</label>
            <input
            type="text"
            className="form-control"
            aria-label="prolapso_r"
            name="prolapso_r"
            defaultValue={form.prolapso_r}
            onChange={handleInput}
          />
        </div>

        <h2>Historial Dental</h2>
        
        <div>
        <label>¿Ha tenido problemas con algún tratamiento dental previo?</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div>
        <label>¿Ha sentido dolor o molestias en la articulación témporo mandibular?</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div>
        <label>¿Le gusta su sonrisa?</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div>
        <label>¿Sangran sus encias?</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>
        <div>

        <h5>Para mujeres</h5>
        <label>¿Toma pi?</label>
          <select name="" id="prolapso" 
           className="form-control"       //Revisar si funcionan valores por defecto y autocompletado en otras pestañas
           aria-label="prolapso"
           name="prolapso"
           defaultValue={form.prolapso}
           onChange={handleInput}
           id="validationCustom1"
           
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            </select>
        </div>





{/* Boton */}
        
        <div className="col-3">
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
