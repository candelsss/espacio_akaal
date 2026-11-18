

import './styles.css'
import { BonosCta } from './BonosCta'

const brujula = [
  { titulo: 'La linterna', detalle: 'para iluminar tus opciones cuando sientas falta de claridad.' },
  { titulo: 'El dron', detalle: 'para elevar la perspectiva y ver la situación desde un ángulo más amplio y objetivo.' },
]

const cuando = [
  { titulo: 'Objetivos estancados', detalle: 'llevas tiempo intentando lograr un cambio y terminas abandonando.' },
  { titulo: 'Diálogo interno limitante', detalle: 'te descubres diciendo "es que yo soy así" o "no voy a ser capaz".' },
  { titulo: 'Exigencia y autoestima', detalle: 'quieres ganar seguridad al tomar decisiones y dejar de exigirte de más.' },
  { titulo: 'Búsqueda de dirección y paz', detalle: 'quieres afrontar retos laborales, personales o familiares con serenidad.' },
]

export const Coaching = ({ isOpen, onToggle }) => {

  return (
    <>
      <div className="acordeon">

        <div className="acordeon-desktop-header">
          <p className="acordeon-titulo-desktop">
            <strong>Coaching con PNL</strong>
            <span className="acordeon-subtitulo-desktop">Desarrollo y claridad mental</span>
          </p>
          <p className="acordeon-descripcion-desktop">Reorganiza tu mapa mental y toma el timón de tu vida.</p>
        </div>

        <div className="acordeon-header" onClick={onToggle}>
          <p className="acordeon-nombre"><strong>Coaching con PNL </strong><br /> (Desarrollo y claridad mental)</p>
          <span className="acordeon-icono">
            <img
              src={isOpen ? "/img/up.png" : "/img/down.png"}
              alt="icono"
              className="acordeon-icono-img"
            />
          </span>
        </div>

        <div className={`acordeon-wrapper ${isOpen ? 'acordeon-wrapper-open' : ''}`}>
          <div className="acordeon-contenido">
            <p><em>"Si quieres conseguir algo distinto, haz algo diferente."</em></p>

            <p>La Programación Neurolingüística (PNL) analiza cómo organizamos nuestra realidad. Todos creamos un "mapa" interno del mundo, pero a veces ese mapa contiene creencias limitantes o patrones que nos hacen encallar.</p>

            <p>El coaching te acompaña desde donde estás hoy hasta la meta que te propongas, sosteniendo <strong>una linterna y un dron</strong>:</p>
            <ul className='necesidades-ul'>
              {brujula.map((b) => (
                <li key={b.titulo} className='necesidades-li necesidades-li-detalle'> <span className="icono-li"><img src="/img/star.png" alt="propuesta-coaching" className="imagen-li" /></span><span><strong>{b.titulo}:</strong> {b.detalle}</span></li>
              ))}
            </ul>

            <p><strong>¿Cuándo iniciar un proceso de coaching?</strong></p>
            <ul className='necesidades-ul'>
              {cuando.map((c) => (
                <li key={c.titulo} className='necesidades-li necesidades-li-detalle'> <span className="icono-li"><img src="/img/star.png" alt="cuando-coaching" className="imagen-li" /></span><span><strong>{c.titulo}:</strong> {c.detalle}</span></li>
              ))}
            </ul>

            <p>El proceso se desarrolla en 6 a 8 sesiones individuales de 60 minutos, con frecuencia semanal o quincenal, en un espacio seguro y de confidencialidad absoluta.</p>

            <div className="acordeon-precio">
              <p className="tiempo">60 min.</p>
              <p className="precio">60€</p>
            </div>

            <BonosCta
              mensaje="¡Hola! Me gustaría reservar una sesión contigo en Espacio AKAAL, ¿podrías contarme un poco más?"
              telefono="34615840306"
            />
          </div>
        </div>

        <button type="button" className="leer-mas-toggle" onClick={onToggle}>
          {isOpen ? 'LEER MENOS' : 'LEER MÁS'}
          <img
            src={isOpen ? "/img/up.png" : "/img/down.png"}
            alt=""
            className="leer-mas-icono"
          />
        </button>

      </div>
    </>
  );
}
