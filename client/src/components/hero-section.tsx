import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-scroll";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-20 right-[10%] w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Freelance Projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-6"
          >
            Hi, I'm a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary/80">
              Video Editor
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Turning raw footage into compelling stories. I specialize in dynamic edits,
            motion graphics, and content that stops the scroll.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="portfolio"
              smooth={true}
              offset={-100}
              className="group px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              View My Work
            </Link>
            
            <Link
              to="contact"
              smooth={true}
              className="group px-8 py-4 rounded-full bg-white/5 border border-white/10 text-foreground font-semibold flex items-center gap-2 hover:bg-white/10 transition-all hover:border-primary/50 cursor-pointer"
            >
              Contact Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
