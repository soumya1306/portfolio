import Navbar from "../components/Navbar";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";
import { cn } from "../lib/utils";

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
    
    
    {/* Footer */}
  </div>
  )
}