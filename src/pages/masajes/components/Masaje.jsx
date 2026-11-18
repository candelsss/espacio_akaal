


import './styles.css'
import { BonosCta } from './BonosCta'

const recursos = ['Quiromasaje y técnicas manuales específicas', 'Técnicas de liberación miofascial', 'Estiramientos con técnica de FNP (Facilitación Neuromuscular Propioceptiva)', 'Aplicación de kinesiotape']


export const Masaje = ({ isOpen, onToggle }) => {

    return (
        <>
          <div className="acordeon">

<div className="acordeon-desktop-header">
  <p className="acordeon-titulo-desktop">
    <strong>Tratamiento manual <br /> descontracturante</strong>
    <span className="acordeon-subtitulo-desktop">Abordaje de lesiones</span>
  </p>
  <p className="acordeon-descripcion-desktop">Alivia tensiones musculares, mejora la movilidad y acompaña la recuperación de lesiones.</p>
</div>

<div className="acordeon-header" onClick={onToggle}>
  <p className="acordeon-nombre"><strong>Tratamiento manual descontracturante y abordaje de lesiones</strong></p>
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

<p>Tratamiento manual personalizado para aliviar tensiones musculares, trabajar las restricciones de movilidad y acompañar los procesos de recuperación de determinadas lesiones.</p>
<p>Cada sesión se adapta a las necesidades de la persona, teniendo en cuenta la zona afectada, las características de las molestias y su evolución.</p>

<ul className='necesidades-ul'>
              {recursos.map((r) => (
                <li key={r} className='necesidades-li necesidades-li-detalle'> <span className="icono-li"><img src="/img/star.png" alt="recursos-tratamiento-descontracturante" className="imagen-li" /></span>{r}</li>
              ))}
            </ul>


      <div className="acordeon-precio">
        <p className="tiempo">60 min.</p>
        <p className="precio">55€</p>
      </div>

      <BonosCta
        mensaje="¡Hola! Me gustaría reservar una sesión de Tratamiento manual descontracturante contigo en Espacio AKAAL, ¿podrías contarme un poco más?"
        telefono="34633098076"
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

{/* <div className={`imagen-wrapper ${isOpen ? 'imagen-wrapper-cerrada' : ''}`}>
  <div className="acordeon-imagen-placeholder"></div>
</div> */}

</div>
        </>
     );
}