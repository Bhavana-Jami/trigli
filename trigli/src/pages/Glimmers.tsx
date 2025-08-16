"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Plus, Calendar, Heart, ArrowLeft } from "lucide-react"

interface Glimmer {
  id: string
  title: string
  description: string
  joy: number
  date: string
  tags: string[]
}

export default function GlimmersPage() {
  const [glimmers, setGlimmers] = useState<Glimmer[]>([
    {
      id: "1",
      title: "Morning coffee ritual",
      description: "Enjoyed a peaceful moment with my coffee while watching the sunrise",
      joy: 7,
      date: "2024-01-15",
      tags: ["morning", "peace", "ritual"],
    },
    {
      id: "2",
      title: "Friend's encouraging text",
      description: "Received an unexpected supportive message that brightened my day",
      joy: 9,
      date: "2024-01-14",
      tags: ["friendship", "support", "connection"],
    },
  ])

  const [newGlimmer, setNewGlimmer] = useState({
    title: "",
    description: "",
    joy: 5,
    tags: "",
  })

  const [showForm, setShowForm] = useState(false)

  const handleAddGlimmer = () => {
    if (newGlimmer.title.trim()) {
      const glimmer: Glimmer = {
        id: Date.now().toString(),
        title: newGlimmer.title,
        description: newGlimmer.description,
        joy: newGlimmer.joy,
        date: new Date().toISOString().split("T")[0],
        tags: newGlimmer.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag),
      }
      setGlimmers([glimmer, ...glimmers])
      setNewGlimmer({ title: "", description: "", joy: 5, tags: "" })
      setShowForm(false)
    }
  }

  const getJoyColor = (joy: number) => {
    if (joy <= 3) return "bg-blue-100 text-blue-800"
    if (joy <= 6) return "bg-green-100 text-green-800"
    return "bg-yellow-100 text-yellow-800"
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => (window.location.href = "/")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="font-serif font-bold text-3xl text-foreground">Glimmers</h1>
              <p className="text-muted-foreground mt-1">Celebrate moments of joy and connection</p>
            </div>
          </div>
          <Button onClick={() => setShowForm(!showForm)} className="bg-accent hover:bg-accent/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Glimmer
          </Button>
        </div>

        {/* Add Glimmer Form */}
        {showForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-serif">Record New Glimmer</CardTitle>
              <CardDescription>Capture a moment that brought you joy or peace</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Glimmer title (e.g., 'Morning coffee ritual')"
                value={newGlimmer.title}
                onChange={(e) => setNewGlimmer({ ...newGlimmer, title: e.target.value })}
              />
              <Textarea
                placeholder="Describe what happened and how it made you feel..."
                value={newGlimmer.description}
                onChange={(e) => setNewGlimmer({ ...newGlimmer, description: e.target.value })}
                rows={3}
              />
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <label className="text-sm font-medium text-foreground mb-2 block">Joy Level (1-10)</label>
                  <Input
                    type="number"
                    min="1"
                    max="10"
                    value={newGlimmer.joy}
                    onChange={(e) => setNewGlimmer({ ...newGlimmer, joy: Number.parseInt(e.target.value) })}
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium text-foreground mb-2 block">Tags (comma separated)</label>
                  <Input
                    placeholder="peace, gratitude, connection"
                    value={newGlimmer.tags}
                    onChange={(e) => setNewGlimmer({ ...newGlimmer, tags: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex space-x-2">
                <Button onClick={handleAddGlimmer} className="bg-accent hover:bg-accent/90">
                  Save Glimmer
                </Button>
                <Button variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Glimmers List */}
        <div className="space-y-4">
          {glimmers.map((glimmer) => (
            <Card key={glimmer.id} className="hover:shadow-md transition-shadow border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif font-semibold text-lg text-foreground">{glimmer.title}</h3>
                  <div className="flex items-center space-x-2">
                    <Badge className={getJoyColor(glimmer.joy)}>{glimmer.joy}/10</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {glimmer.date}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">{glimmer.description}</p>
                <div className="flex flex-wrap gap-2">
                  {glimmer.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {glimmers.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-serif font-semibold text-lg text-foreground mb-2">No glimmers recorded yet</h3>
              <p className="text-muted-foreground mb-4">Start capturing moments of joy and connection</p>
              <Button onClick={() => setShowForm(true)} className="bg-accent hover:bg-accent/90">
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Glimmer
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
