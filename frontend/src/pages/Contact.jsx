import { useState } from "react";
import { api } from "../utils/api";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null); // "sending" | "success" | "error" | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Ne pas envoyer name si vide (évite 422 côté Pydantic)
      const payload = { email, message };
      const trimmedName = name.trim();
      if (trimmedName) payload.name = trimmedName;

      await api.post("/contact", payload);

      setStatus("success");
      setEmail("");
      setMessage("");
      setName("");

      // Masquer le message de succès après 4s
      setTimeout(() => setStatus(null), 4000);
    } catch (err) {
      console.error("Contact error:", err);
      setStatus("error");
      // Masquer l'erreur après 6s
      setTimeout(() => setStatus(null), 6000);
    }
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:py-16 space-y-6">
      <h2 className="heading-hero mb-8">Contact</h2>

      <p>
        Email : <a href="mailto:mariemekamara@esp.sn">mariemekamara@esp.sn</a>
      </p>
      <p>
        GitHub :{" "}
        <a
          href="https://github.com/MariemeKmr"
          target="_blank"
          rel="noreferrer"
        >
          github.com/MariemeKmr
        </a>
      </p>

      <form className="card p-6 space-y-3" onSubmit={handleSubmit}>
        <input
          id="name"
          name="name"
          className="w-full px-3 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-transparent"
          placeholder="Votre nom (optionnel)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />

        <input
          id="email"
          name="email"
          type="email"
          className="w-full px-3 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-transparent"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />

        <textarea
          id="message"
          name="message"
          className="w-full px-3 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-transparent"
          rows="4"
          placeholder="Votre message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button
          className="btn-primary"
          type="submit"
          disabled={status === "sending"}
          aria-busy={status === "sending"}
        >
          {status === "sending" ? "Envoi..." : "Envoyer"}
        </button>

        {status === "success" && (
          <p className="text-emerald-500 mt-2">Message envoyé avec succès !</p>
        )}
        {status === "error" && (
          <p className="text-red-500 mt-2">
            Une erreur est survenue. Réessaie plus tard.
          </p>
        )}
      </form>
    </section>
  );
}
