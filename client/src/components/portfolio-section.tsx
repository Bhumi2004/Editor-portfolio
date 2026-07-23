import { useRef, useState } from "react";
import { Section } from "@/components/ui/section";

import { motion } from "framer-motion";
import { Play, ExternalLink, Volume2, VolumeX } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function PortfolioSection() {
const isLoading = false;

  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [mutedVideos, setMutedVideos] = useState({});
  const [hoveredVideoId, setHoveredVideoId] = useState(null);
  const videoRefs = useRef({});

const projectCategories = [
  {
    title: "Graphic Design",
    projects: [
      {
        id: 1,
  title: "Map Design",
  imageUrl: "/videos/design_1.png",
  description: "Creative Map poster."
      },
    {
  id: 2,
  title: "Motion Graphic designing",
  imageUrl: "/videos/design_3.png", // cover/thumbnail
  videoUrl: "/videos/gdesign_3.mp4",
  description: "Design with creative visual elements."
},
      {
      id: 3,
  title: "Celebrity Poster",
  imageUrl: "/videos/design_2.png",
  description: "Celebrity poster design with creative typography and visual composition."
      },
    ],
  },

  {
    title: "Video Editing",
    projects: [
      {
        id: 4,
  title: "Logo AI Animation",
  videoUrl: "https://drive.google.com/uc?export=download&id=1rpg0TylQP5NJsSaAeC4lN1kFixdhd8tN",
  description: "AI-generated logo animation with smooth motion and visual effects."
      },
      {
  id: 5,
  title: "Storytelling & Long Format",
  videoUrl: "https://drive.google.com/uc?export=download&id=10-2zs2eXyfncolV7YjJccQaLlgB151EJ",
  description: "Emotion-driven storytelling video with engaging visuals, narration, and cinematic editing."
},
      {
  id: 6,
  title: "Brand Reel Edit",
  videoUrl: "https://drive.google.com/uc?export=download&id=1A8AXVe8a1soMWT4Hj8XJtztV-kFMxXjx",
  description: "Short-form reel edit created for brand promotion with smooth transitions, pacing, and visual storytelling."
},
    ],
  },

  {
    title: "UI / UX Design",
    projects: [
     {
  id: 7,
  title: "GreenLink",
  imageUrl: "/ui/placeholder.png",
  figmaUrl: "https://www.figma.com/proto/EmAi12jcQbb4xcCCjmOHGW/GreenLink?node-id=155-474&p=f&t=28ZH87foP6BEYJhc-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  description: "Mobile UI/UX design with interactive Figma prototype."

},
     {
  id: 8,
  title: "Maternity & Baby Hub",
  imageUrl: "/ui/maternity.png",
  figmaUrl: "https://www.figma.com/proto/pkyTPrtSwS1htlrqv2lW6P/Maternity---Baby-hub?node-id=316-1997&p=f&t=zU5w6iwR3tkyUBEy-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=316%3A1508",
  description: "Mobile healthcare UI/UX design with interactive Figma prototype."
},
      
    ],
  },
];
  const handleVideoToggle = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlayingVideoId(id);
    } else {
      video.pause();
      setPlayingVideoId(null);
    }
  };

  const handleMuteToggle = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    const newMuted = !video.muted;
    video.muted = newMuted;
    setMutedVideos((prev) => ({ ...prev, [id]: newMuted }));
  };

 return (
  <Section id="portfolio" className="bg-white/[0.02]">
    {/* Section Header */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          A selection of my best work across Graphic Design, Video Editing &
          UI/UX Design.
        </p>
      </div>

      <button className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
        View All Projects <ExternalLink className="w-4 h-4" />
      </button>
    </div>

    {isLoading ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="w-full aspect-video rounded-2xl bg-white/5" />
              <Skeleton className="h-6 w-2/3 bg-white/5" />
              <Skeleton className="h-4 w-full bg-white/5" />
            </div>
          ))}
      </div>
    ) : (
      projectCategories.map((category) => (
        <div key={category.title} className="mb-20">
          {/* Category Heading */}
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary">
            {category.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-white/5 hover:border-primary/50 transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  {project.videoUrl ? (
                    <>
                     <video
                        poster={project.imageUrl}
  ref={(el) => {
    if (el) videoRefs.current[project.id] = el;
  }}
  src={project.videoUrl}
  poster={project.imageUrl}
  muted={mutedVideos[project.id] ?? true}
  playsInline
  preload="metadata"
  className="w-full h-full object-cover bg-black"
/>

                      {/* Play / Pause */}
                      <div
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => handleVideoToggle(project.id)}
                        onMouseEnter={() =>
                          setHoveredVideoId(project.id)
                        }
                        onMouseLeave={() =>
                          setHoveredVideoId(null)
                        }
                      >
                        {(playingVideoId !== project.id ||
                          hoveredVideoId === project.id) && (
                          <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center">
                            {playingVideoId === project.id ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M10 9v6m4-6v6"
                                />
                              </svg>
                            ) : (
                              <Play className="w-6 h-6 text-white fill-current" />
                            )}
                          </div>
                        )}
                      </div>

                      {/* Mute Button */}
                     <div
 className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center cursor-pointer"
 onClick={(e)=>{
   e.stopPropagation();
   handleMuteToggle(project.id);
 }}
>
                        {mutedVideos[project.id] ? (
                          <VolumeX className="w-5 h-5 text-white" />
                        ) : (
                          <Volume2 className="w-5 h-5 text-white" />
                        )}
                      </div>
                    </>
                  ) : (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                       className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  {/* Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-bold uppercase tracking-wider text-white">
                    {category.title}
                  </div>
                </div>

                {/* Card Details */}
               <div className="p-6">
  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
    {project.title}
  </h3>

  <p className="text-sm text-muted-foreground">
    {project.description}
  </p>

  {project.figmaUrl && (
    <a
      href={project.figmaUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 mt-4 text-primary font-medium hover:underline"
    >
      View Prototype
      <ExternalLink className="w-4 h-4" />
    </a>
  )}
</div>
              </motion.div>
            ))}
          </div>
        </div>
      ))
    )}

    {/* Mobile Button */}
    <div className="mt-8 text-center md:hidden">
      <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
        View All Projects
        <ExternalLink className="w-4 h-4" />
      </button>
    </div>
  </Section>
);
}
