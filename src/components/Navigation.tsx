import { BookOpen } from "lucide-react"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-serif font-bold text-xl text-foreground">Trigli</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/triggers" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Triggers
            </Link>
            <Link to="/glimmers" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Glimmers
            </Link>
            <Link to="/notes" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Notes
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
