import { Brain, FileSearch, Zap, Shield, Users, Clock, Scale, FileText, MessageCircle, Gavel } from "lucide-react";
import { Card } from "@/components/ui/card";
import featuresImage from "@/assets/features-bg.jpg";

export const Features = () => {
  const handleScrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: MessageCircle,
      title: "Chatbot",
      description: "To act as a legal guidance chatbot that explains complex IPC sections, legal terms, and document purposes in simple English. It also helps with incident analysis, document explainability, and basic legal research, guiding users toward the correct next steps.",
      color: "text-success"
    },
    {
      icon: Scale,
      title: "IPC Section Prediction",
      description: "Automatically predict the most relevant IPC Section(s) based on a user’s incident description provided in multiple formats. Ensures citizens understand which laws apply.",
      color: "text-accent"
    },
    {
      icon: FileText,
      title: "Legal Draft Generator",
      description: "Automate the creation of legal documents using predefined templates and dynamic questioning.",
      color: "text-secondary"
    },
    {
      icon: Gavel,
      title: "Law and Judgement Updation Automate",
      description: "Automatically fetch legal news, updates, and judgments; deliver via website or automated newsletter.",
      color: "text-accent-light"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="feature-card p-8 border-0 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={
                  feature.title === "Chatbot"
                    ? () => handleScrollTo('demo')
                    : feature.title === "IPC Section Prediction"
                      ? () => handleScrollTo('step-demo')
                      : feature.title === "Legal Draft Generator"
                        ? () => handleScrollTo('draft-generator')
                        : undefined
                }
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