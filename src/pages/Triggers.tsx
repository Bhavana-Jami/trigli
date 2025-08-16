"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Plus, Calendar, TrendingDown, ArrowLeft } from "lucide-react"

interface Trigger {
  id: string
  title: string
  description: string
  intensity: number
  date: string
  tags: string[]
}

export default function TriggersPage() {
  const [triggers, setTriggers] = useState<Trigger[]>([
    {
      id: "1",
      title: "Work deadline stress",
      description: "Feeling overwhelmed by multiple project deadlines approaching simultaneously",
      intensity: 8,
      date: "2024-01-15",
      tags: ["work", "stress", "deadlines"],
    },
    {
      id: "2",
      title: "Social anxiety at party",
      description: "Felt uncomfortable and anxious in large group setting",
      intensity: 6,
      date: "2024-01-14",
      tags: ["social", "anxiety", "crowds"],
    },
  ])

  const [newTrigger, setNewTrigger] = useState({
    title: "",
    description: "",
    intensity: 5,
    tags: "",
  })

  const [showForm, setShowForm] = useState(false)

  const handleAddTrigger = () => {
    if (newTrigger.title.trim()) {
      const trigger: Trigger = {
        id: Date.now().toString(),
        title: newTrigger.title,
        description: newTrigger.description,
        intensity: newTrigger.intensity,
        date: new Date().toISOString().split("T")[0],
        tags: newTrigger.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag),
      }
      setTriggers([trigger, ...triggers])
      setNewTrigger({ title: "", description: "", intensity: 5, tags: "" })
      setShowForm(false)
    }
  }

  const getIntensityColor = (intensity: number) => {
    if (intensity <= 3) return "bg-green-100 text-green-800"
    if (intensity <= 6) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
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
              <h1 className="font-serif font-bold text-3xl text-foreground">Triggers</h1>
              <p className="text-muted-foreground mt-1">Track and understand your emotional triggers</p>
            </div>
          </div>
          <Button onClick={() => setShowForm(!showForm)} className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Trigger
          </Button>
        </div>

        {/* Add Trigger Form */}
        {showForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-serif">Record New Trigger</CardTitle>
              <CardDescription>Describe what triggered you and how it made you feel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Trigger title (e.g., 'Work deadline stress')"
                value={newTrigger.title}
                onChange={(e) => setNewTrigger({ ...newTrigger, title: e.target.value })}
              />
              <Textarea
                placeholder="Describe the situation and your feelings..."
                value={newTrigger.description}
                onChange={(e) => setNewTrigger({ ...newTrigger, description: e.target.value })}
                rows={3}
              />
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <label className="text-sm font-medium text-foreground mb-2 block">Intensity (1-10)</label>
                  <Input
                    type="number"
                    min="1"
                    max="10"
                    value={newTrigger.intensity}
                    onChange={(e) => setNewTrigger({ ...newTrigger, intensity: Number.parseInt(e.target.value) })}
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium text-foreground mb-2 block">Tags (comma separated)</label>
                  <Input
                    placeholder="work, stress, anxiety"
                    value={newTrigger.tags}
                    onChange={(e) => setNewTrigger({ ...newTrigger, tags: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex space-x-2">
                <Button onClick={handleAddTrigger} className="bg-primary hover:bg-primary/90">
                  Save Trigger
                </Button>
                <Button variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Triggers List */}
        <div className="space-y-4">
          {triggers.map((trigger) => (
            <Card key={trigger.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif font-semibold text-lg text-foreground">{trigger.title}</h3>
                  <div className="flex items-center space-x-2">
                    <Badge className={getIntensityColor(trigger.intensity)}>{trigger.intensity}/10</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {trigger.date}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">{trigger.description}</p>
                <div className="flex flex-wrap gap-2">
                  {trigger.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {triggers.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <TrendingDown className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-serif font-semibold text-lg text-foreground mb-2">No triggers recorded yet</h3>
              <p className="text-muted-foreground mb-4">
                Start tracking your triggers to better understand your patterns
              </p>
              <Button onClick={() => setShowForm(true)} className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Trigger
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
