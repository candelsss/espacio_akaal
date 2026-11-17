

import './styles.css'
import { BonosCta } from './BonosCta'

const acompana = [
  { titulo: 'Insomnio y tensión', detalle: 'dificultad para dormir, bruxismo o inquietud.' },
  { titulo: 'Ansiedad y estrés', detalle: 'sobrecarga mental o sensación de estar "al límite".' },
  { titulo: 'Altibajos emocionales', detalle: 'necesidad de recuperar la calma y tu centro.' },
  { titulo: 'Molestias físicas', detalle: 'dolores persistentes (migrañas, lumbares) y recuperación (cicatrices, lesiones).' },
]

const beneficios = [
  { titulo: 'Relajación profunda', detalle: 'reducción inmediata del ritmo cardíaco y mental.' },
  { titulo: 'Alivio integral', detalle: 'liberación de tensiones físicas y emocionales.' },
  { titulo: 'Claridad y centro', detalle: 'sensación de estabilidad y paz interior.' },
  { titulo: 'Equilibrio orgánico', detalle: 'apoyo al sistema inmunitario y a la vitalidad.' },
]

const tarifas = [
  { label: '1ª sesión', detalle: 'Toma de contacto y valoración · 75 min', precio: '65€' },
  { label: 'Bono 3 sesiones siguientes', detalle: '60 min/sesión · 50€ la sesión', precio: '150€' },
  { label: 'Primer tratamiento completo', detalle: '4 sesiones en aprox. 1 mes', precio: '215€', destacada: true },
  { label: 'Sesión de mantenimiento', detalle: 'Tras el primer tratamiento, sin bono', precio: '50€' },
  { label: 'Sesión suelta', detalle: 'Fuera de tratamiento', precio: '60€' },
]

const sesionSuelta = tarifas.find((t) => t.label === 'Sesión suelta')

export const Reiki = ({ isOpen, onToggle }) => {

  return (
    <>
      <div className="acordeon">

        <div className="acordeon-desktop-header">
          <p className="acordeon-titulo-desktop">
            <strong>Reiki</strong>
            <span className="acordeon-subtitulo-desktop">Armonización y equilibrio energético</span>
          </p>
          <p className="acordeon-descripcion-desktop">Sintoniza tu energía vital y recupera la calma profunda.</p>
        </div>

        <div className="acordeon-header" onClick={onToggle}>
          <p className="acordeon-nombre"><strong>Reiki </strong><br /> (Armonización y equilibrio energético)</p>
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
            <p>Técnica natural de armonización reconocida por la <strong>OMS</strong> como terapia complementaria y compatible con cualquier tratamiento médico. A través de la sesión, facilito el flujo de la energía para ayudarte a liberar bloqueos que se manifiestan de múltiples formas en el cuerpo y la mente.</p>

            <p><strong>¿En qué te acompaña?</strong></p>
            <ul className='necesidades-ul'>
              {acompana.map((a) => (
                <li key={a.titulo} className='necesidades-li necesidades-li-detalle'> <span className="icono-li"><img src="/img/star.png" alt="necesidades-reiki" className="imagen-li" /></span><span><strong>{a.titulo}:</strong> {a.detalle}</span></li>
              ))}
            </ul>

            <p><strong>Beneficios</strong></p>
            <ul className='necesidades-ul'>
              {beneficios.map((b) => (
                <li key={b.titulo} className='necesidades-li necesidades-li-detalle'> <span className="icono-li"><img src="/img/star.png" alt="beneficios-reiki" className="imagen-li" /></span><span><strong>{b.titulo}:</strong> {b.detalle}</span></li>
              ))}
            </ul>

            <p>La sesión se realiza tumbada o sentada, con ropa habitual, mediante contacto suave o a distancia según tu preferencia. Solo tienes que relajarte y recibir.</p>

            <div className="precios-lista">
              <div className="precio-fila">
                <p className="precio-label">{sesionSuelta.label}<span>{sesionSuelta.detalle}</span></p>
                <p className="precio-valor">{sesionSuelta.precio}</p>
              </div>
            </div>

            <BonosCta mensaje="Hola, quiero más información sobre los bonos de Reiki, armonización y equilibrio energético" />
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
