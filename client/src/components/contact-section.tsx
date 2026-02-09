import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useContact } from "@/hooks/use-contact";
import { Section } from "@/components/ui/section";
import { Loader2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const { mutate, isPending } = useContact();
  
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertMessage) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <Section id="contact" className="bg-gradient-to-b from-black to-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Let's <span className="text-primary">Collaborate</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Whether it's a quick reel or a full production edit, 
            I'm ready to bring your vision to life.
          </p>
        </div>

        <div className="bg-card border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Name</label>
                <Input
                  {...form.register("name")}
                  placeholder="Your Name"
                  className="bg-white/5 border-white/10 focus:border-primary h-12 rounded-xl"
                  disabled={isPending}
                />
                {form.formState.errors.name && (
                  <p className="text-xs text-destructive mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Email</label>
                <Input
                  {...form.register("email")}
                  placeholder="hello@example.com"
                  className="bg-white/5 border-white/10 focus:border-primary h-12 rounded-xl"
                  disabled={isPending}
                />
                {form.formState.errors.email && (
                  <p className="text-xs text-destructive mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Message</label>
              <Textarea
                {...form.register("message")}
                placeholder="Tell me about your project details, timeline, and goals..."
                className="min-h-[160px] bg-white/5 border-white/10 focus:border-primary rounded-xl resize-none p-4"
                disabled={isPending}
              />
              {form.formState.errors.message && (
                <p className="text-xs text-destructive mt-1">{form.formState.errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
