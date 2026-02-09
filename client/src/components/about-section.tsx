import { Section } from "@/components/ui/section";
import { Clock, Heart, Zap, Award } from "lucide-react";

export function AboutSection() {
  return (
    <Section id="about" className="bg-black/50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20" />
          {/* Using a placeholder image for the profile/about section */}
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            {/* abstract creative workspace setup */}
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" 
              alt="Workspace" 
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-mono text-primary mb-1">Passionate Creator</p>
              <h3 className="text-2xl font-bold">Storytelling through every frame</h3>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a creative Video Editor with a sharp eye for detail and a passion for storytelling. 
              Over the past 6+ months, I've honed my skills in transforming raw ideas into polished visual narratives.
              I thrive in the fast-paced world of short-form content, understanding exactly what hooks an audience 
              in those first crucial seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Clock, label: "Experience", value: "6+ Months" },
              { icon: Heart, label: "Passion", value: "Short-form Content" },
              { icon: Zap, label: "Style", value: "Dynamic & Engaging" },
              { icon: Award, label: "Focus", value: "Creative Edits" },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                <item.icon className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="font-bold text-lg">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
