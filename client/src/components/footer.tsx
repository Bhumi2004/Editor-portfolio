import { Instagram, Youtube, HardDrive, Heart, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold mb-2">
              EDITOR<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Crafting visual stories that captivate and inspire. Let's create something amazing together.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {[
             
              {
    icon: Youtube,
    href: "https://www.youtube.com/@BhumiJain-08",
    label: "YouTube",
  },
  {
    icon: Mail,
    href: "mailto:bhumijain127@gmail.com",
    label: "Email",
  },
  {
    icon: Phone,
    href: "tel:+916376930806",
    label: "Phone",
  },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Video Editor Portfolio. All rights reserved.</p>
            <p className="flex items-center gap-1 mt-2 md:mt-0">
              Made with <Heart className="w-3 h-3 text-primary fill-primary" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
