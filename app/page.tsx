"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Star,
  Zap,
  Code,
  Target,
  Mail,
  MessageCircle,
  Linkedin,
} from "lucide-react";
import { useEffect, useState } from "react";
import Scene3D from "./components/Scene3D";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* 3D Background */}
      <Scene3D />

      {/* Mouse Trail Effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            transition: "left 0.3s ease-out, top 0.3s ease-out",
          }}
        />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-16 max-w-6xl">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Main Logo */}
          <div className="relative inline-block mb-4">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <h1 className="relative text-6xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                BNEXWEB
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3 mt-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <p className="text-lg text-gray-300 tracking-widest uppercase">
              DIGITAL QUANTUM STUDIO
            </p>
            <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
          </motion.div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {["Next.js 14", "TypeScript", "3D WebGL", "AI Integration"].map(
              (tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-cyan-300 hover:bg-white/10 transition-all duration-300"
                >
                  <Code className="inline-block w-4 h-4 mr-2" />
                  {tech}
                </span>
              ),
            )}
          </div>
        </motion.div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              We Engineer{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Digital Ecosystems
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 blur-sm"></span>
              </span>
              <br />
              That Accelerate Business Evolution
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Fusing{" "}
              <span className="text-cyan-300 font-semibold">
                cutting-edge web technology
              </span>{" "}
              with{" "}
              <span className="text-purple-300 font-semibold">
                data-driven marketing strategy
              </span>{" "}
              to create immersive digital experiences that don't just look
              spectacular—they perform exceptionally.
            </p>
          </motion.div>

          {/* Stats with Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              {
                icon: Star,
                value: "5+",
                label: "Expert Certifications",
                color: "text-yellow-400",
              },
              {
                icon: Zap,
                value: "40%",
                label: "Growth Accelerated",
                color: "text-green-400",
              },
              {
                icon: Target,
                value: "100%",
                label: "Client Satisfaction",
                color: "text-red-400",
              },
              {
                icon: Sparkles,
                value: "24/7",
                label: "Quantum Support",
                color: "text-blue-400",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="relative group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <stat.icon className={`w-8 h-8 mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          >
            {/* Primary Button - Holographic */}
            <button
              onClick={() => (window.location.href = "#contact")}
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 animate-shimmer"></div>
              <div className="relative flex items-center justify-center gap-3">
                <span className="text-lg">Launch Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </button>

            {/* Secondary Button - Glass */}
            <button
              onClick={() =>
                window.open("https://calendly.com/nida93115", "_blank")
              }
              className="group px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white font-bold rounded-2xl hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <div className="flex items-center justify-center gap-3">
                <Sparkles className="w-5 h-5 text-cyan-300 group-hover:rotate-180 transition-transform duration-500" />
                <span className="text-lg">Book Quantum Consultation</span>
              </div>
            </button>
          </motion.div>

          {/* Contact Section */}
          <section
            id="contact"
            className="mt-32 pt-20 border-t border-white/10"
          >
            <div className="max-w-2xl mx-auto text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              >
                Let's Build Something Extraordinary
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 mb-8"
              >
                Ready to transform your digital presence? Contact me for a free
                strategy session.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button
                  onClick={() =>
                    window.open("mailto:nida93115@gmail.com", "_blank")
                  }
                  className="group px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email Me
                </button>
                <button
                  onClick={() =>
                    window.open("https://wa.me/923016172702", "_blank")
                  }
                  className="group px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/nida-batool-9a708b183/",
                      "_blank",
                    )
                  }
                  className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </button>
              </motion.div>
            </div>
          </section>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, repeat: Infinity, duration: 2 }}
            className="text-center mt-16"
          >
            <div className="inline-flex flex-col items-center gap-2 text-gray-400 text-sm">
              <span>Explore the Cosmos</span>
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-cyan-500 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
