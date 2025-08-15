import React from "react";
import { useEffect } from 'react';
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";
import Certifications from "./components/Certifications";

export default function App() {
  const projects = [
    {
      title: "Bodyshark Maroc (E‑commerce)",
      desc: "Gestion produits WordPress & optimisation SEO. Analyse Google Analytics et suivi commandes.",
      tech: ["WordPress", "SEO", "Google Analytics"],
      url: "#",
    },
    {
      title: "Violet Vision (Web Design)",
      desc: "Adaptation de maquettes, intégration responsive et amélioration UI sur Figma/WordPress.",
      tech: ["Figma", "Responsive", "WordPress"],
      url: "#",
    },
    {
      title: "Saditech (Site vitrine)",
      desc: "Site vitrine en HTML/CSS/JS avec un petit système de gestion interne.",
      tech: ["HTML", "CSS", "JavaScript"],
      url: "#",
    },
    {
      title: "1337 (Stage)",
      desc: "Renforcement des pratiques professionnelles et organisation du développement web.",
      tech: ["Collaboration", "Standards"],
      url: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      {/* Container */}
      <header className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold">Khadija Fouganni</h1>
          <p className="text-sm text-slate-500">Développeuse Web Full Stack · Spécialiste SEO · UI/UX</p>
        </div>
        <nav className="flex gap-4 items-center text-sm">
          <a href="#projects" className="hover:underline">Projets</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 text-white">
  {/* Floating shapes */}
  <div className="hero-shape top-10 left-10"></div>
  <div className="hero-shape"></div>

  <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h2 className="text-5xl font-extrabold leading-tight drop-shadow-lg">Je conçois des sites <span className="text-cyan-300">performants</span> et <span className="text-pink-300">optimisés</span>.</h2>
      <p className="mt-4 text-lg text-slate-100 max-w-lg">Développeuse web full stack spécialisée en React, Laravel et WordPress avec expertise SEO pour booster la visibilité.</p>
      <div className="mt-6 flex gap-4">
        <a href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all">Me contacter</a>
        <a href="/cv.pdf" download className="px-6 py-3 rounded-full bg-blur text-white font-semibold hover:bg-white/20 transition-all">Télécharger CV</a>
      </div>
    </motion.div>
  </div>
</section>


      {/* Services */}
      <section id="services" className="p-6 rounded-xl bg-blur hover:scale-105 transition-all duration-300 shadow-lg border border-white/20">
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold"
        >Services</motion.h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="p-6 border rounded-xl"
          >
            <h4 className="font-semibold">Développement Web</h4>
            <p className="mt-2 text-sm text-slate-600">Sites React, Laravel et intégrations front-end modernes.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 border rounded-xl"
          >
            <h4 className="font-semibold">SEO & Analyse</h4>
            <p className="mt-2 text-sm text-slate-600">Audit technique, optimisation on-page et stratégie mots-clés.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="p-6 border rounded-xl"
          >
            <h4 className="font-semibold">UI / UX & Design</h4>
            <p className="mt-2 text-sm text-slate-600">Maquettes Figma, pages responsives et améliorations UX.</p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="projects" className="p-6 border rounded-xl bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
>
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold">Projets</h3>
          <p className="mt-2 text-sm text-slate-600">Quelques projets réalisés pendant mes stages et missions.</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}

                className="bg-white border rounded-xl p-5 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">{p.title}</h4>
                    <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                    <div className="mt-3 text-xs text-slate-500 flex gap-2 flex-wrap">
                      {p.tech.map((t) => (
                        <span key={t} className="px-2 py-1 border rounded-md">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="ml-4 text-sm">
                    <a href={p.url} className="inline-block px-3 py-2 border rounded-md text-slate-700">Voir</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Education */}
      <section className="p-6 border rounded-xl bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold">Expérience</h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-700">
              <li>
                <strong>Bodyshark Maroc</strong> — Développeuse Web & Spécialiste SEO (Mars 2025 - Présent)
                <div className="mt-1">Gestion produits, optimisation SEO, analyse des performances.</div>
              </li>
              <li>
                <strong>Violet Vision</strong> — Stagiaire Web Design (Juil 2025 - Août 2025)
                <div className="mt-1">Conception et intégration de maquettes e‑commerce responsive.</div>
              </li>
              <li>
                <strong>Saditech</strong> — Stagiaire Développeuse (Oct - Déc 2024)
                <div className="mt-1">Site vitrine et mini CMS interne.</div>
              </li>
              <li>
                <strong>1337</strong> — Stagiaire (Mars - Avril 2024)
                <div className="mt-1">Développement professionnel et organisation d'équipe.</div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold">Éducation & Certifications</h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-700">
              <li>
                <strong>DTS Développement Web</strong> — ISGI Khouribga (2022 - 2024)
              </li>
              <li>
                <strong>Baccalauréat Scientifique</strong> — Lycée Ibn Abdoun (2019 - 2020)
              </li>
            </ul>
          </div>
            
        </div>
      </section>
                
          <div className="p-6 border rounded-xl bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <section>
                    <Certifications />
                  </section>

          </div>
      {/* Contact */}
      <footer id="contact" className="bg-gradient-to-r from-indigo-700 via-purple-700 to-cyan-700 text-white py-12 relative z-10">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6 items-start">
          <div>
            <h4 className="text-lg font-semibold">Contact</h4>
            <p className="mt-2 text-sm max-w-md">Je recherche un poste en présentiel dans une entreprise dynamique ou des missions freelance en web & SEO.</p>

            <div className="mt-4 text-sm flex flex-col gap-2">
              <a className="inline-flex items-center gap-2" href="mailto:khadijafouganni66@gmail.com">
                <FiMail /> khadijafouganni66@gmail.com
              </a>
              <a className="inline-flex items-center gap-2" href="tel:+212719957735">
                <FiPhone /> +212 7 1995 7735
              </a>
              <a className="inline-flex items-center gap-2" href="https://www.linkedin.com/in/khadija-fouganni-4b89a2243/" target="_blank" rel="noreferrer">
                <FiLinkedin /> linkedin.com/in/khadija-fouganni
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold">Envoyez‑moi un message</h4>
            <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e)=>{e.preventDefault(); window.location.href = `mailto:khadijafouganni66@gmail.com?subject=Contact%20via%20portfolio&body=Bonjour%20Khadija,`}}>
              <input name="name" placeholder="Votre nom" className="p-3 rounded-md" required />
              <input name="email" type="email" placeholder="Email" className="p-3 rounded-md" required />
              <textarea name="message" placeholder="Message" className="p-3 rounded-md md:col-span-2" rows={6} required />
              <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-secondary transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-xl">Envoyer</button>
            </form>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-8 border-t border-white/20 pt-6 text-sm text-white/80">© {new Date().getFullYear()} Khadija Fouganni — Développeuse Web</div>
      </footer>
    </div>
  );
}
