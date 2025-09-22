import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Scale, Sparkles, Play } from "lucide-react";

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Staggered animation sequence
    setTimeout(() => setTitleVisible(true), 300);
    setTimeout(() => setSubtitleVisible(true), 800);
    setTimeout(() => setButtonsVisible(true), 1200);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        {/* Animated Mesh Gradient */}
        <div 
          className="absolute inset-0 opacity-90"
          style={{
            background: `var(--gradient-mesh)`,
            animation: 'mesh-animation 20s ease-in-out infinite',
            backgroundSize: '400% 400%'
          }}
        />
        
        {/* Premium Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary/80 to-secondary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent" />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent-light/25 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>


      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Premium Title with Staggered Animation */}
        <div className={`${titleVisible ? 'animate-[text-reveal_1.2s_ease-out_forwards]' : 'opacity-0'} mb-8`}>
          <h1 className="hero-title-simple perspective-1000">
            <span className="inline-block">NyaySetu</span>
          </h1>
        </div>
        
        {/* Premium Subtitle */}
        <div className={`${subtitleVisible ? 'animate-[subtitle-reveal_1s_ease-out_0.3s_forwards]' : 'opacity-0'} mb-16`}>
          <p className="hero-subtitle max-w-4xl mx-auto">
            AI-Powered Justice for Every Citizen
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mt-6 rounded-full" />
        </div>

        {/* Premium Action Buttons */}
        <div className={`${buttonsVisible ? 'animate-[button-reveal_1s_ease-out_0.5s_forwards]' : 'opacity-0'} flex flex-col sm:flex-row gap-8 justify-center items-center`}>
          <Button className="group relative overflow-hidden bg-accent hover:bg-accent-light text-accent-foreground px-12 py-6 text-xl font-semibold rounded-2xl transition-all duration-500 shadow-[0_0_30px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_50px_hsl(var(--accent)/0.6)] hover:scale-105">
            <span className="relative z-10 flex items-center gap-3">
              <Sparkles className="w-6 h-6" />
              Get Started
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>
          
          <Button className="group relative overflow-hidden bg-white/20 hover:bg-white/30 text-white px-10 py-6 text-xl font-semibold rounded-2xl border-2 border-white/50 hover:border-white/70 transition-all duration-500 backdrop-blur-sm hover:scale-105 shadow-[0_0_20px_hsl(0_0%_100%/0.3)] hover:shadow-[0_0_30px_hsl(0_0%_100%/0.5)]">
            <span className="relative z-10 flex items-center gap-3">
              <Play className="w-6 h-6" />
              Watch Demo
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
};