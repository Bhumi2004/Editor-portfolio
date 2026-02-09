import { Section } from "@/components/ui/section";
import { Briefcase, Instagram, Video } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      role: "Freelance Video Editor",
      company: "Self-Employed",
      period: "2023 - Present",
      description: "Delivering high-quality video edits for diverse clients including YouTubers, small businesses, and influencers. Managing end-to-end post-production workflow.",
      icon: Briefcase
    },
    {
      role: "Content Creator",
      company: "Social Media",
      period: "2023 - Present",
      description: "Producing and editing engaging reels and shorts for personal brand growth. Mastering viral trends and retention strategies.",
      icon: Instagram
    },
    {
      role: "Junior Editor (Intern)",
      company: "Creative Agency",
      period: "2023",
      description: "Assisted senior editors with cutting rough cuts, organizing footage, and basic color correction.",
      icon: Video
    }
  ];

  return (
    <Section id="experience">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 sticky top-32">
            My <span className="text-primary">Journey</span>
          </h2>
        </div>

        <div className="md:w-2/3 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline line for mobile */}
              <div className="absolute left-0 top-2 bottom-0 w-px bg-white/10 md:hidden" />
              
              <div className="flex flex-col md:flex-row gap-6 group">
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg group-hover:shadow-primary/25">
                    <exp.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 w-px bg-white/10 my-4 group-last:hidden" />
                </div>

                <div className="flex-1 p-6 rounded-2xl bg-card/50 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:translate-x-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-3 flex items-center gap-2 md:hidden">
                    <exp.icon className="w-4 h-4" /> {exp.company}
                  </p>
                  <p className="text-primary font-medium mb-3 hidden md:block">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
