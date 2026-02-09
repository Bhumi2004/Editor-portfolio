import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Scissors, Palette, Layout, PenTool, Video, Aperture } from "lucide-react";

const skills = [
  { name: "CapCut", icon: Scissors, description: "Advanced mobile editing & effects" },
  { name: "Canva", icon: Layout, description: "Graphic design & thumbnails" },
  { name: "Figma", icon: PenTool, description: "UI design & visual planning" },
  { name: "Motion Graphics", icon: Video, description: "Keyframing & transitions" },
  { name: "Color Grading", icon: Palette, description: "Correction & stylization" },
  { name: "Premiere Pro", icon: Aperture, description: "Professional timeline editing" },
];

export function SkillsSection() {
  return (
    <Section id="skills">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
          My <span className="text-primary">Toolkit</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          I leverage a powerful combination of tools to bring creative visions to life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
