import React from "react";

const WHATSAPP_NUMBER = "556191843270";
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da AGBunny e gostaria de receber mais informações sobre os serviços. Podem me ajudar?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

type ContactButton = React.ReactElement<{
  onClick?: React.MouseEventHandler<HTMLElement>;
}>;

export function ContactModal({ children }: { children: ContactButton }) {
  return React.cloneElement(children, {
    onClick: () => {
      window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
    },
  });
}