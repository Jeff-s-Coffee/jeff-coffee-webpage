import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-components";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contato — Jeff's Coffee",
  description: "Entre em contato com o projeto Jeff's Coffee.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <SiteHeader />
      <section className="contact shell">
        <div className="contact-intro">
          <p className="eyebrow"><span /> Contato</p>
          <h1>Vamos conversar.</h1>
          <p>
            Para parcerias, pesquisa ou para acompanhar o desenvolvimento da Jeff&apos;s Coffee, deixe uma mensagem.
          </p>
        </div>
        <ContactForm />
      </section>
      <SiteFooter />
    </main>
  );
}
