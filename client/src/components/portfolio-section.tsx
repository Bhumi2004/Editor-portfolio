import { Section } from "@/components/ui/section";
import { useProjects } from "@/hooks/use-projects";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function PortfolioSection() {
  const { data: projects, isLoading } = useProjects();

  // Fallback mock data if API is empty or failing (since we might not have seeded data yet)
  const displayProjects = projects && projects.length > 0 ? projects : [
    {
      id: 1,
      title: "Fashion Reel Edit",
      category: "Reels",
      imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
      description: "Fast-paced editing for a summer collection launch."
    },
    {
      id: 2,
      title: "Tech Review Intro",
      category: "YouTube",
      imageUrl: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&q=80",
      description: "Clean motion graphics and sound design."
    },
    {
      id: 3,
      title: "Travel Vlog Highlights",
      category: "Creative",
      imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
      description: "Cinematic color grading and transitions."
    },
    {
      id: 4,
      title: "Fitness Motivation",
      category: "Shorts",
      imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      description: "High energy sync with music beat."
    }
  ];

  return (
    <Section id="portfolio" className="bg-white/[0.02]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of my best work across different styles and formats.
          </p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
          View All Projects <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {isLoading ? (
          Array(4).fill(0).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="w-full aspect-video rounded-2xl bg-white/5" />
              <Skeleton className="h-6 w-2/3 bg-white/5" />
              <Skeleton className="h-4 w-full bg-white/5" />
            </div>
          ))
        ) : (
          displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-card border border-white/5"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100 shadow-xl shadow-primary/30">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-bold uppercase tracking-wider text-white">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))
        )}
      </div>
      
      <div className="mt-8 text-center md:hidden">
        <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
          View All Projects <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </Section>
  );
}
