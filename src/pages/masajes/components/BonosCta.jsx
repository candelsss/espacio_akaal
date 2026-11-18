

import './styles.css'
import WhatsappLink from '../../../components/whatsapp-link/WhatsappLink'
import { MdOutlineNorthEast } from 'react-icons/md'

export const BonosCta = ({ mensaje, telefono }) => (
  <div className="bonos-cta">
    <p className="bonos-cta-titulo">DESCUBRE NUESTROS BONOS ESPECIALES</p>
    <WhatsappLink
      message={mensaje}
      phone={telefono}
      icon={<MdOutlineNorthEast />}
      iconPosition="right"
    >
      + INFO
    </WhatsappLink>
  </div>
)
