import { KeyboardDatePicker } from "@material-ui/pickers";
import styles from "../../styles/dates.module.css";
import QA from "../Components/QA";

//componente con los campos y estilos para la creacion de usuarios
export default function CreateForm({
  form,
  handleSubmit,
  handleInput,
  handleChange,
  handleClick,
  fechaRegistro,
  cambiarFechaRegistro,
  fechaNacimiento,
  cambiarFechaNacimiento,
  handleBlur,
  handleClickBt,
  disabled = false,
}) {
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
        <div className="col-sm-3">
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

        <div className="col-sm-3">
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
        <div className="col-sm">
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
          <label>Estado civil</label>
          {form.civilState === "Soltero/a" ? (
            <select
              className="form-control"
              id="parentesco"
              className="form-control"
              aria-label="Estado civil"
              name="civilState"
              defaultValue={form.civilState}
              onChange={handleInput}
            >
              <option value="">Seleccionar</option>
              <option selected value="Soltero/a">
                Soltero/a
              </option>
              <option value="Casado/a">Casado/a</option>
              <option value="Divorciado/a">Divorciado/a</option>
              <option value="Unión libre">Unión libre</option>
            </select>
          ) : form.civilState === "Casado/a" ? (
            <select
              className="form-control"
              id="parentesco"
              className="form-control"
              aria-label="Estado civil"
              name="civilState"
              defaultValue={form.civilState}
              onChange={handleInput}
            >
              <option value="">Seleccionar</option>
              <option value="Soltero/a">Soltero/a</option>
              <option selected value="Casado/a">
                Casado/a
              </option>
              <option value="Divorciado/a">Divorciado/a</option>
              <option value="Unión libre">Unión libre</option>
            </select>
          ) : form.civilState === "Divorciado/a" ? (
            <select
              className="form-control"
              id="parentesco"
              className="form-control"
              aria-label="Estado civil"
              name="civilState"
              defaultValue={form.civilState}
              onChange={handleInput}
            >
              <option value="">Seleccionar</option>
              <option value="Soltero/a">Soltero/a</option>
              <option value="Casado/a">Casado/a</option>
              <option selected value="Divorciado/a">
                Divorciado/a
              </option>
              <option value="Unión libre">Unión libre</option>
            </select>
          ) : form.civilState === "Unión libre" ? (
            <select
              className="form-control"
              id="parentesco"
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
              <option selected value="Unión libre">
                Unión libre
              </option>
            </select>
          ) : (
            <select
              className="form-control"
              id="parentesco"
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
          )}
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
        <div className="col-sm-6">
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
        <div className="col-sm-4">
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
        <div className="col-sm-2">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Fecha de registro"
            value={fechaRegistro}
            onChange={cambiarFechaRegistro}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            disabled={disabled}
          />
        </div>
        <div className="col-sm-2">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Fecha de nacimiento"
            value={fechaNacimiento}
            onChange={cambiarFechaNacimiento}
            onBlur={handleBlur}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </div>
        <div className="col-sm-1">
          <label>Edad</label>
          <input
            type="number"
            className="form-control"
            aria-label="Edad"
            name="age"
            defaultValue={form.age}
            onChange={handleInput}
            readOnly
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
          {form.type === "Particular" ? (
            <select
              className="form-control"
              name=""
              id="type"
              className="form-control"
              aria-label="type"
              name="type"
              defaultValue={form.type}
              onChange={handleInput}
              id="validationCustom1"
              required
            >
              <option value="">Seleccionar</option>
              <option selected value="Particular">
                Particular
              </option>
              <option value="Empresarial">Empresarial</option>
            </select>
          ) : form.type === "Empresarial" ? (
            <select
              className="form-control"
              name=""
              id="type"
              className="form-control"
              aria-label="type"
              name="type"
              defaultValue={form.type}
              onChange={handleInput}
              id="validationCustom1"
              required
            >
              <option value="">Seleccionar</option>
              <option value="Particular">Particular</option>
              <option selected value="Empresarial">
                Empresarial
              </option>
            </select>
          ) : (
            <select
              className="form-control"
              name=""
              id="type"
              className="form-control"
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
          )}
        </div>

        {/* Historial clinico */}
        <h2>Historial clínico</h2>

        <h3>Antecedentes Patológicos</h3>
        <h5>¿Ha padecido o padece alguna de las siguientes condiciones?</h5>
        <div className="row">
          <QA
            name="q1"
            defaultValue={form.history.q1}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Prolapso: válvula mitral
          </QA>
          <QA
            name="q2"
            defaultValue={form.history.q2}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Tratamiento de radiación
          </QA>
          <QA
            name="q3"
            defaultValue={form.history.q3}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Huesos artificiales
          </QA>
          <QA
            name="q4"
            defaultValue={form.history.q4}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Consumo de drogas/alcohol
          </QA>
          <QA
            name="q5"
            defaultValue={form.history.q5}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Dificultades respiratorias
          </QA>
          <QA
            name="q6"
            defaultValue={form.history.q6}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Transfusión de sangre
          </QA>
          <QA
            name="q7"
            defaultValue={form.history.q7}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Cáncer
          </QA>
          <QA
            name="q8"
            defaultValue={form.history.q8}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Defecto congénito del corazón
          </QA>
          <QA
            name="q9"
            defaultValue={form.history.q9}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Ataque al corazón
          </QA>
          <QA
            name="q10"
            defaultValue={form.history.q10}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Hemorragia/Sangrado fácil
          </QA>
          <QA
            name="q11"
            defaultValue={form.history.q11}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Cirugía del corazón
          </QA>
          <QA
            name="q12"
            defaultValue={form.history.q12}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Diabetes/Tuberculosis
          </QA>
          <QA
            name="q13"
            defaultValue={form.history.q13}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Presión arterial alta/baja
          </QA>
          <QA
            name="q14"
            defaultValue={form.history.q14}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Epilepsia/Convulsiones
          </QA>
          <QA
            name="q15"
            defaultValue={form.history.q15}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Enfermedades venéreas
          </QA>
          <QA
            name="q16"
            defaultValue={form.history.q16}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Gastritis
          </QA>
          <QA
            name="q17"
            defaultValue={form.history.q17}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Marcapasos
          </QA>
          <QA
            name="q18"
            defaultValue={form.history.q18}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Válvulas artificiales
          </QA>
          <QA
            name="q19"
            defaultValue={form.history.q19}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Herpes
          </QA>
          <QA
            name="q20"
            defaultValue={form.history.q20}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Glaucoma
          </QA>
          <QA
            name="q21"
            defaultValue={form.history.q21}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Asma
          </QA>
          <QA
            name="q22"
            defaultValue={form.history.q22}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Hepatitis
          </QA>
          <QA
            name="q23"
            defaultValue={form.history.q23}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Problemas del riñón
          </QA>
          <QA
            name="q24"
            defaultValue={form.history.q24}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            SIDA/VIH
          </QA>
          <QA
            name="q25"
            defaultValue={form.history.q25}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Anemia
          </QA>
          <QA
            name="q26"
            defaultValue={form.history.q26}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Fiebre reumática
          </QA>
          <QA
            name="q27"
            defaultValue={form.history.q27}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Fiebre escarlatina
          </QA>
          <QA
            name="q28"
            defaultValue={form.history.q28}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Soplo cardíaco
          </QA>
          <QA
            name="q29"
            defaultValue={form.history.q29}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Ulceras/Colitis
          </QA>
          <QA
            name="q30"
            defaultValue={form.history.q30}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Sinusitis
          </QA>
          <QA
            name="q31"
            defaultValue={form.history.q31}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Desmayos
          </QA>
          <QA
            name="q32"
            defaultValue={form.history.q32}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Artritis
          </QA>
        </div>

        <div className="col-sm">
          <label>¿Se medica?</label>
          <input
            type="text"
            className="form-control"
            aria-label="prolapso_r"
            placeholder="Ingrese los medicamentos"
            name="prolapso_r"
            defaultValue={form.prolapso_r}
            onChange={handleInput}
          />
        </div>
        <div className="col-sm">
          <label>Hospitalizado por alguna razón</label>
          <input
            type="text"
            className="form-control"
            aria-label="prolapso_f"
            placeholder="Razon..."
            name="prolapso_f"
            defaultValue={form.prolapso_f}
            onChange={handleInput}
          />
        </div>

        <div>
          <label>Otras condiciones médicas severas</label>
          <input
            type="text"
            className="form-control"
            aria-label="prolapso_g"
            name="prolapso_g"
            defaultValue={form.prolapso_g}
            onChange={handleInput}
          />
        </div>
        <h5>¿Es alérgico a los siguientes medicamentos?</h5>
        <div className="row">
          <QA
            name="q33"
            defaultValue={form.history.q33}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Anestesia
          </QA>
          <QA
            name="q34"
            defaultValue={form.history.q34}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Aspirina
          </QA>
          <QA
            name="q35"
            defaultValue={form.history.q35}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Penicilina
          </QA>
          <QA
            name="q36"
            defaultValue={form.history.q36}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Eritromicina
          </QA>
          <QA
            name="q37"
            defaultValue={form.history.q37}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Latex
          </QA>
          <QA
            name="q38"
            defaultValue={form.history.q38}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Tetracilina
          </QA>
          <QA
            name="q39"
            defaultValue={form.history.q39}
            toChange={handleChange}
            handleClickBt={handleClickBt}
          >
            Codeina
          </QA>
        </div>
        <h2>Historial Dental</h2>

        <div className="col-sm-5">
          <label>
            ¿Ha tenido problemas con algún tratamiento dental previo?
          </label>
          <input
            type="text"
            className="form-control"
            aria-label="problem"
            placeholder="Indique el inconveniente"
            name="problem"
            defaultValue={form.problem}
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-5">
          <label>
            ¿Ha sentido dolor o molestias en la articulación témporo mandibular?
          </label>
          <input
            type="text"
            className="form-control"
            aria-label="dolor"
            placeholder=""
            name="dolor"
            defaultValue={form.dolor}
            onChange={handleInput}
          />
        </div>
        <div className="col-sm-2">
          <label>¿Le gusta su sonrisa?</label>
          {form.sonrisa === "No" ? (
            <select
              className="form-control"
              name=""
              id="prolapso"
              className="form-control"
              aria-label="sonrisa"
              name="sonrisa"
              defaultValue={form.sonrisa}
              onChange={handleInput}
              id="validationCustom1"
            >
              <option value="">Seleccionar</option>
              <option selected value="No">
                No
              </option>
              <option value="Si">Si</option>
            </select>
          ) : form.sonrisa === "Si" ? (
            <select
              className="form-control"
              name=""
              id="prolapso"
              className="form-control"
              aria-label="sonrisa"
              name="sonrisa"
              defaultValue={form.sonrisa}
              onChange={handleInput}
              id="validationCustom1"
            >
              <option value="">Seleccionar</option>
              <option value="No">No</option>
              <option selected value="Si">
                Si
              </option>
            </select>
          ) : (
            <select
              className="form-control"
              name=""
              id="prolapso"
              className="form-control"
              aria-label="sonrisa"
              name="sonrisa"
              defaultValue={form.sonrisa}
              onChange={handleInput}
              id="validationCustom1"
            >
              <option value="">Seleccionar</option>
              <option value="No">No</option>
              <option value="Si">Si</option>
            </select>
          )}
        </div>
        <div className="">
          <label>¿Sangran sus encias?</label>
          {form.encias === "No" ? (
            <select
              className="form-control"
              name=""
              id="encias"
              className="form-control"
              aria-label="encias"
              name="encias"
              defaultValue={form.encias}
              onChange={handleInput}
              id="validationCustom1"
            >
              <option value="">Seleccionar</option>
              <option selected value="No">
                No
              </option>
              <option value="Si">Si</option>
            </select>
          ) : form.encias === "Si" ? (
            <select
              className="form-control"
              name=""
              id="encias"
              className="form-control"
              aria-label="encias"
              name="encias"
              defaultValue={form.encias}
              onChange={handleInput}
              id="validationCustom1"
            >
              <option value="">Seleccionar</option>
              <option value="No">No</option>
              <option selected value="Si">
                Si
              </option>
            </select>
          ) : (
            <select
              className="form-control"
              name=""
              id="encias"
              className="form-control"
              aria-label="encias"
              name="encias"
              defaultValue={form.encias}
              onChange={handleInput}
              id="validationCustom1"
            >
              <option value="">Seleccionar</option>
              <option value="No">No</option>
              <option value="Si">Si</option>
            </select>
          )}
        </div>
        <div className="">
          <h5>Para mujeres</h5>
          <label>¿Toma píldoras anticonceptivas?</label>
          {form.pi === "No" ? (
            <select
              className="form-control"
              name=""
              id="pi"
              className="form-control"
              aria-label="pi"
              name="pi"
              defaultValue={form.pi}
              onChange={handleInput}
              id="validationCustom1"
            >
              <option value="">Seleccionar</option>
              <option selected value="No">
                No
              </option>
              <option value="Si">Si</option>
            </select>
          ) : form.pi === "Si" ? (
            <select
              className="form-control"
              name=""
              id="pi"
              className="form-control"
              aria-label="pi"
              name="pi"
              defaultValue={form.pi}
              onChange={handleInput}
              id="validationCustom1"
            >
              <option value="">Seleccionar</option>
              <option value="No">No</option>
              <option selected value="Si">
                Si
              </option>
            </select>
          ) : (
            <select
              className="form-control"
              name=""
              id="pi"
              className="form-control"
              aria-label="pi"
              name="pi"
              defaultValue={form.pi}
              onChange={handleInput}
              id="validationCustom1"
            >
              <option value="">Seleccionar</option>
              <option value="No">No</option>
              <option value="Si">Si</option>
            </select>
          )}
        </div>

        {/* Boton */}

        <div className="col-3 mb-3">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
