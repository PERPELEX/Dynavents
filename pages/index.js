"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./components/HeroSection";
import Events from "./components/Events";
import Wrapper from "./components/Wrapper";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 1.5 seconds)
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex space-x-4 mb-8">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="block w-6 h-6 rounded-full bg-yellow-500"
                  initial={{ y: 0, opacity: 0.7 }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold text-black"
            >
              {/* Loading... */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {!loading && (
        <main className="min-h-screen flex flex-col bg-[#F7F7F7]">
          <HeroSection />
          <Wrapper>
            <Home />
            <Events />
            <Contact />
          </Wrapper>
          <Footer />
        </main>
      )}
    </>
  );
}
