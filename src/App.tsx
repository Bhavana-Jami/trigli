import type React from "react"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import { Route, Routes } from "react-router-dom"
import Triggers from "./pages/Triggers"
import Glimmers from "./pages/Glimmers"
import Notes from "./pages/Notes"
import About from "./pages/About"
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/triggers" element={<Triggers />} />
          <Route path="/glimmers" element={<Glimmers />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      {/* Features Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Search className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">Triggers</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  Identify and track patterns that challenge your well-being
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-primary/20 hover:bg-primary/5 hover:border-primary/40 bg-transparent"
                  onClick={() => (window.location.href = "/triggers")}
                >
                  Explore Triggers
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Sparkles className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle className="font-serif text-xl">Glimmers</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  Celebrate moments of joy, peace, and positive connection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-accent/20 hover:bg-accent/5 hover:border-accent/40 bg-transparent"
                  onClick={() => (window.location.href = "/glimmers")}
                >
                  Discover Glimmers
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Recent Entries */}
      {/* {triggers.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-2xl text-foreground mb-8 text-center">Recent Entries</h2>
            <div className="space-y-3">
              {triggers
                .slice(-5)
                .reverse()
                .map((item, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-4">
                      <p className="text-foreground">{item}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      )} */}
    </div>
  )
}
