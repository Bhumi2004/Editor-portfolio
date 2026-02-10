import { useRef, useState } from "react";
import { Section } from "@/components/ui/section";
import { useProjects } from "@/hooks/use-projects";
import { motion } from "framer-motion";
import { Play, ExternalLink, Volume2, VolumeX } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function PortfolioSection() {
  const { data: projects, isLoading } = useProjects();

  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [mutedVideos, setMutedVideos] = useState({});
  const [hoveredVideoId, setHoveredVideoId] = useState(null);
  const videoRefs = useRef({});

  const displayProjects =
    projects && projects.length > 0
      ? projects
      : [
          {
            id: 1,
            title: "Brand Promo Reel",
            category: "Brand",
            videoUrl: "/videos/YSL-Heels.mp4",
            thumbnail: "/videos/YSL.jpg",
            description:
              "Brand-focused reel with smooth transitions and color grading.",
          },
          {
            id: 2,
            title: "Model Edit ",
            category: "Model",
             videoUrl: "/videos/Model.mp4",
           thumbnail: "/videos/soft-girl.jpg",
            description: "Model Edit with clean sound and transitions.",
          },
          {
            id: 3,
            title: "Personal Edit",
            category: "Creative",
              videoUrl: "/videos/My edit.mp4",
           thumbnail: "/videos/soft-girl.jpg",
            description: "Cut-out Transition with effects and sync up with beats.",
          },
          {
            id: 4,
            title: "AI generated Stories",
            category: "AI Videos",
            videoUrl:"/videos/Riya-eductaion.mp4",
            thumbnail:"/videos/riya.jpeg",
           
            description: "Emotion-driven AI storytelling with meaningful narration and visuals.",
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
      {/* Section header */}
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

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {isLoading
          ? Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="w-full aspect-video rounded-2xl bg-white/5" />
                  <Skeleton className="h-6 w-2/3 bg-white/5" />
                  <Skeleton className="h-4 w-full bg-white/5" />
                </div>
              ))
          : displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer bg-card border border-white/5"
              >
                <div className="aspect-video relative overflow-hidden">
                  {project.videoUrl ? (
                    <>
                      {/* Video element */}
                     <video
  ref={(el) => {
    if (el) videoRefs.current[project.id] = el;
    if (el) {
      el.onplay = () => setPlayingVideoId(project.id);
      el.onpause = () => setPlayingVideoId(null);
    }
  }}
  src={project.videoUrl}
  poster={project.thumbnail || ""}
  className="w-full h-full object-contain bg-black" // ✅ changed from object-cover to object-contain
  muted={mutedVideos[project.id] ?? false}
/>

                      {/* Play/Pause overlay */}
                      <div
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => handleVideoToggle(project.id)}
                        onMouseEnter={() => setHoveredVideoId(project.id)}
                        onMouseLeave={() => setHoveredVideoId(null)}
                      >
                        {(playingVideoId !== project.id ||
                          hoveredVideoId === project.id) && (
                          <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center shadow-xl shadow-primary/30">
                            {playingVideoId === project.id ? (
                              // Pause icon
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
                              // Play icon
                              <Play className="w-6 h-6 fill-current text-white" />
                            )}
                          </div>
                        )}
                      </div>

                      {/* Mute/Unmute button */}
                      <div
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center cursor-pointer"
                        onClick={() => handleMuteToggle(project.id)}
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
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  {/* Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-bold uppercase tracking-wider text-white">
                    {project.category}
                  </div>
                </div>

                {/* Project details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
      </div>

      {/* Mobile View Button */}
      <div className="mt-8 text-center md:hidden">
        <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
          View All Projects <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </Section>
  );
}