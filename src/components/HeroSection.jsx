import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I am </span>
            <span className="opacity-0 text-primary animate-fade-in-delay-1">Soumya </span>
            {/* <span className="opacity-0 text-gradient animate-fade-in-delay-2 ml-2">Acharya</span> */}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
           A React developer with a strong foundation in Python, Deep learning, and Machine learning. I specialize in building dynamic, user-focused web applications using modern frontend technologies, while leveraging my background in AI to develop intelligent and data-driven solutions. My skill set bridges the gap between frontend development and machine learning, allowing me to create seamless and innovative digital experiences.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
          <ArrowDown className="text-primary" />
        </div>

      </div>
    </section>
  );
}
