"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Sparkles,
  Target,
  CheckCircle,
  Mail,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

/* ======================
   FLOATING BACKGROUND
====================== */
function FloatingBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-2 h-2 rounded-full bg-cyan-400/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [-40, 40, -40], opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

/* ======================
   LEFT SIDE LAPTOP
====================== */
function LaptopModel() {
  return (
    <motion.div
      className="hidden lg:block fixed left-8 top-1/3 z-0 pointer-events-none"
      animate={{ y: [-20, 20, -20], rotateY: [0, -12, 12, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="w-80 h-48 bg-gray-900 rounded-xl border border-gray-700 shadow-2xl">
        <div className="m-3 h-[calc(100%-1.5rem)] bg-black rounded-lg p-4 font-mono text-sm text-cyan-400">
          <p>const agency = "BNEXWEB";</p>
          <p>function buildWeb()</p>
          <p>{"{"}</p>
          <p className="ml-4">return "Next Level Web";</p>
          <p>{"}"}</p>
        </div>
      </div>
      <div className="mx-auto w-[360px] h-4 bg-gray-800 rounded-b-xl mt-1" />
    </motion.div>
  );
}

/* ======================
   PAGE
====================== */
export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX - 200}px`,
      );
      document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY - 200}px`,
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <FloatingBackground />
      <LaptopModel />

      {/* Mouse Glow */}
      <div className="mouse-glow fixed w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl pointer-events-none" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* LOGO */}
        <header className="text-center mb-12">
          <Image
            src="/BNEXWEBLogo.png"
            alt="BNEXWEB Logo"
            width={110}
            height={110}
            className="mx-auto mb-4"
          />
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            BNEXWEB
          </h1>
          <p className="tracking-widest text-gray-400 mt-1">NEXT IN WEB</p>
        </header>

        {/* HERO */}
        <section className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            We Build <span className="text-cyan-400">High-Impact Websites</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Modern, fast and conversion-focused websites designed to grow your
            business.
          </p>
          <a href="#pricing">
            <button className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl font-semibold hover:scale-105 transition">
              Build Your Website <ArrowRight className="inline ml-2" />
            </button>
          </a>
        </section>

        {/* SERVICES */}
        <section className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">
            Our Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Web Development",
                desc: "Fast, secure and scalable websites.",
              },
              {
                icon: Sparkles,
                title: "UI / UX Design",
                desc: "Clean, modern interfaces that convert.",
              },
              {
                icon: Target,
                title: "Business Branding",
                desc: "Strong digital presence that builds trust.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="p-8 bg-white/5 border border-white/10 rounded-xl text-center"
              >
                <s.icon className="mx-auto mb-4 text-cyan-400" size={36} />
                <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="mb-24 text-center">
          <h3 className="text-3xl font-bold mb-6 text-cyan-400">
            About BNEXWEB
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            BNEXWEB is a modern web development studio focused on building
            high-performance, conversion-driven websites for startups and
            businesses. We combine clean design, scalable technology, and
            strategic thinking to help brands grow online.
          </p>
        </section>

        {/* PROCESS */}
        <section className="mb-24 text-center">
          <h3 className="text-3xl font-bold mb-6 text-cyan-400">Our Process</h3>
          <ol className="text-gray-300 max-w-2xl mx-auto list-decimal list-inside space-y-2">
            <li>Discover – Understand your business goals</li>
            <li>Design – Create clean, modern UI focused on users</li>
            <li>Develop – Fast, SEO-optimized websites</li>
            <li>Launch – Tested, deployed, and supported</li>
          </ol>
        </section>

        {/* PRICING */}
        <section id="pricing" className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">
            Pricing Plans
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$99",
                features: ["1 Page Website", "Responsive Design", "Basic SEO"],
              },
              {
                name: "Business",
                price: "$249",
                features: ["Up to 5 Pages", "SEO Optimized", "Contact Form"],
              },
              {
                name: "Premium",
                price: "$499",
                features: ["Full Website", "Animations", "Priority Support"],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className="p-8 bg-white/5 border border-white/10 rounded-xl"
              >
                <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                <div className="text-3xl font-bold text-cyan-400 mb-4">
                  {plan.price}
                </div>
                <ul className="space-y-2 text-gray-400">
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <CheckCircle
                        size={16}
                        className="inline mr-2 text-cyan-400"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="text-center mb-20">
          <h3 className="text-3xl font-bold mb-6 text-cyan-400">
            Ready to Start?
          </h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:nida93115@gmail.com"
              className="px-6 py-3 bg-purple-600 rounded-lg"
            >
              <Mail className="inline mr-2" /> Email
            </a>
            <a
              href="https://wa.me/923016172702"
              className="px-6 py-3 bg-green-600 rounded-lg"
            >
              <MessageCircle className="inline mr-2" /> WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/"
              className="px-6 py-3 bg-blue-600 rounded-lg"
            >
              <Linkedin className="inline mr-2" /> LinkedIn
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} BNEXWEB — Next in Web
        </footer>
      </main>
    </div>
  );
}
