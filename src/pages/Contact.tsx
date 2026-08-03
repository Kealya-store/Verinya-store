import { useState } from "react";
import { MessageCircle, Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function Contact() {
  const [nom, setNom] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Bonjour, je suis ${nom}.\n\n${message}`;
    window.open(
      `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setSent(true);
  };

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-[700px] px-[5%]">
        <div className="text-center mb-10">
          <h1 className="font-display font-semibold text-sage-deep text-[2.2rem] md:text-[2.8rem] mb-4">
            Contactez-nous
          </h1>
          <p className="text-ink-soft text-lg">
            Une question, un besoin particulier ? Écrivez-nous directement sur WhatsApp.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 bg-white rounded-xl shadow-card-sm p-6 transition-transform hover:-translate-y-1"
          >
            <MessageCircle className="w-7 h-7 text-[#25D366]" />
            <span className="font-semibold text-sage-deep">WhatsApp</span>
            <span className="text-sm text-ink-soft">{SITE_CONFIG.whatsappDisplay}</span>
          </a>
          <div className="flex flex-col items-center gap-2 bg-white rounded-xl shadow-card-sm p-6">
            <Mail className="w-7 h-7 text-clay-deep" />
            <span className="font-semibold text-sage-deep">Email</span>
            <span className="text-sm text-ink-soft">contact@verinya.dz</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-white rounded-xl shadow-card-sm p-6">
            <MapPin className="w-7 h-7 text-clay-deep" />
            <span className="font-semibold text-sage-deep">Zone</span>
            <span className="text-sm text-ink-soft">Toute l'Algérie</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-card p-8">
          {sent ? (
            <div className="text-center py-8 animate-scale-in">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="font-display text-sage-deep text-xl mb-2">Message envoyé !</h2>
              <p className="text-ink-soft mb-5">WhatsApp s'est ouvert avec ton message.</p>
              <button onClick={() => setSent(false)} className="btn btn-secondary">
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSend} className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-sage-deep mt-3 mb-1">
                Votre nom
              </label>
              <input
                type="text"
                required
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="input-field"
              />

              <label className="text-sm font-semibold text-sage-deep mt-3 mb-1">
                Votre message
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Décrivez votre besoin..."
                className="input-field min-h-[120px] resize-y"
              />

              <button type="submit" className="btn btn-primary btn-block mt-5">
                <MessageCircle className="w-5 h-5" />
                Envoyer sur WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
