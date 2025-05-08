import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";

export default function Home(){

  return(
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme toggle */}
    <ThemeToggle />
    
    {/* Background Effects */}
    <StarBackground />
    
    {/* Navbar */}
    <Navbar />

    {/* Main Content */}
    <main>
      <HeroSection />
      <AboutSection />
    </main>
    
    
    {/* Footer */}
  </div>
  )
}