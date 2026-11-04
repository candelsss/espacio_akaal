

import './styles.css'

const necesidades = ['Problemas de sueño y tensión', 'Estrés y sobrecarga', 'Inestabilidad emocional', 'Molestias físicas y recuperación']

const tarifas = [
  { label: '1ª sesión', detalle: 'Toma de contacto y valoración · 75 min', precio: '65€' },
  { label: 'Bono 3 sesiones siguientes', detalle: '60 min/sesión · 50€ la sesión', precio: '150€' },
  { label: 'Primer tratamiento completo', detalle: '4 sesiones en aprox. 1 mes', precio: '215€', destacada: true },
  { label: 'Sesión de mantenimiento', detalle: 'Tras el primer tratamiento, sin bono', precio: '50€' },
  { label: 'Sesión suelta', detalle: 'Fuera de tratamiento', precio: '60€' },
]

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
            <p>El Reiki es una técnica natural de armonización, reconocida por la <strong>OMS</strong> como terapia complementaria y totalmente compatible con cualquier tratamiento médico.</p>
            <p>A través de una suave colocación de manos, actúa como un canal limpio que ayuda a <strong>deshacer bloqueos energéticos</strong> que a veces se somatizan en forma de dolor, estrés o fatiga.</p>

            <p>Te puede acompañar especialmente si atraviesas:</p>
            <ul className='necesidades-ul'>
              {necesidades.map((n) => (
                <li key={n} className='necesidades-li'> <span className="icono-li"><img src="/img/star.png" alt="necesidades-reiki" className="imagen-li" /></span>{n}</li>
              ))}
            </ul>

            <p>La sesión se realiza tumbada o sentada, con ropa habitual, mediante contacto suave o a distancia según tu preferencia. Solo tienes que relajarte y recibir.</p>

            <div className="precios-lista">
              {tarifas.map((t) => (
                <div key={t.label} className={`precio-fila ${t.destacada ? 'precio-fila-destacada' : ''}`}>
                  <p className="precio-label">{t.label}<span>{t.detalle}</span></p>
                  <p className="precio-valor">{t.precio}</p>
                </div>
              ))}
            </div>
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
