import { FileText, Users, Zap, Clock, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Advantages = () => {
  const advantages = [
    {
      icon: FileText,
      title: "Smart Automated Document",
      description: "Intelligent document processing with AI-powered analysis, formatting, and legal compliance checking.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Multi Agent Collaboration",
      description: "Coordinated AI agents working together to provide comprehensive legal solutions and insights.",
      color: "text-success"
    },
    {
      icon: Brain,
      title: "Agentic Approach",
      description: "Advanced AI agents that autonomously handle complex legal tasks with intelligent decision-making capabilities.",
      color: "text-secondary"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock legal assistance and document processing without any downtime.",
      color: "text-accent-light"
    }
  ];

  return (
    <section id="advantages" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl font-bold font-display mb-6">
            Key Advantages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the powerful advantages that make NyaySetu the leading choice for legal technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <Card 
                key={index} 
                className="advantage-card p-8 border-0 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-muted to-card flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`w-8 h-8 ${advantage.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute -top-4 -bottom-4 -left-4 -right-4 bg-gradient-to-r from-transparent via-accent/20 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300" />
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center section-reveal">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-6 py-3 rounded-full">
            <Zap className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-accent font-semibold">Powered by Advanced AI Technology</span>
          </div>
        </div>
      </div>
    </section>
  );
};
