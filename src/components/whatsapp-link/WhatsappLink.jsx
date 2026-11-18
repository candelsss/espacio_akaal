

import React from "react";
import { Button } from "../buttons/Button";

const WhatsAppLink = ({ message = "", phone = "34614218764", children, ...props }) => {
  const whatsappLink = message ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : `https://wa.me/${phone}`;
 
 
 

  return (
    
    
    <Button
    as="a"
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </Button>
    
    
    
    
    
  );
};

export default WhatsAppLink;
