

import './styles.css'
import WhatsappLink from '../../../components/whatsapp-link/WhatsappLink'
import { MdOutlineNorthEast } from 'react-icons/md'

export const BonosCta = ({ mensaje }) => (
  <div className="bonos-cta">
    <p className="bonos-cta-titulo">DESCUBRE NUESTROS BONOS ESPECIALES</p>
    <WhatsappLink
      message={mensaje}
      icon={<MdOutlineNorthEast />}
      iconPosition="right"
    >
      + INFO
    </WhatsappLink>
  </div>
)
