"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("O envio será disponibilizado em breve. Obrigado pelo interesse.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" autoComplete="email" placeholder="voce@exemplo.com" required />
      </div>
      <div className="field">
        <label htmlFor="subject">Assunto</label>
        <input id="subject" name="subject" type="text" placeholder="Como podemos conversar?" required />
      </div>
      <div className="field">
        <label htmlFor="description">Mensagem</label>
        <textarea id="description" name="description" rows={7} placeholder="Conte um pouco sobre o seu contato..." required />
      </div>
      <div className="form-footer">
        <button type="submit">Enviar mensagem</button>
        <p className="form-note" aria-live="polite">
          {message || "O formulário ainda não envia dados. O backend será conectado em uma próxima etapa."}
        </p>
      </div>
    </form>
  );
}
