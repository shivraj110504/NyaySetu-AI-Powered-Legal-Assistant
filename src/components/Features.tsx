import { Brain, FileSearch, Zap, Shield, Users, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import featuresImage from "@/assets/features-bg.jpg";

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Agentic AI Intelligence",
      description: "Advanced AI agents that understand legal contexts and provide intelligent recommendations.",
      color: "text-accent"
    },
    {
      icon: FileSearch,
      title: "Smart Legal Research",
      description: "Comprehensive case law analysis with AI-powered insights and precedent matching.",
      color: "text-success"
    },
    {
      icon: Zap,
      title: "Automated Documentation",
      description: "Generate legal documents, contracts, and notices with intelligent templates.",
      color: "text-secondary"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Bank-grade security with full compliance to Indian legal data protection standards.",
      color: "text-accent-light"
    },
    {
      icon: Users,
      title: "Multi-Agent Collaboration",
      description: "Coordinated AI agents working together to solve complex legal challenges.",
      color: "text-primary-light"
    },
    {
      icon: Clock,
      title: "Real-time Processing",
      description: "Instant legal analysis and document processing with live updates and notifications.",
      color: "text-success-light"
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={featuresImage} 
          alt="Features Background" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl font-bold font-display mb-6">
            Powerful AI Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the next generation of legal technology with our advanced AI agents and intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="feature-card p-8 border-0 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-muted to-card flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
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
            <span className="text-accent font-semibold">Powered by Advanced AI Agents</span>
          </div>
        </div>
      </div>
    </section>
  );
};