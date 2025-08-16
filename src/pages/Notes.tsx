"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, FileText, Plus, Calendar, Search, ArrowLeft, Edit, Trash2 } from "lucide-react"

interface Note {
  id: string
  title: string
  content: string
  date: string
  tags: string[]
  type: "reflection" | "insight" | "goal" | "general"
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: "1",
      title: "Weekly Reflection",
      content:
        "This week I noticed that my stress levels spike when I have back-to-back meetings. I should try to schedule buffer time between important calls to process and reset.",
      date: "2024-01-15",
      tags: ["reflection", "work", "stress"],
      type: "reflection",
    },
    {
      id: "2",
      title: "Gratitude Practice Insight",
      content:
        "Starting my day with three things I'm grateful for has been shifting my mindset. Even on difficult days, this practice helps me find small moments of appreciation.",
      date: "2024-01-14",
      tags: ["gratitude", "morning", "practice"],
      type: "insight",
    },
  ])

  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    tags: "",
    type: "general" as Note["type"],
  })

  const [showForm, setShowForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState<Note["type"] | "all">("all")

  const handleAddNote = () => {
    if (newNote.title.trim() && newNote.content.trim()) {
      const note: Note = {
        id: Date.now().toString(),
        title: newNote.title,
        content: newNote.content,
        date: new Date().toISOString().split("T")[0],
        tags: newNote.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag),
        type: newNote.type,
      }
      setNotes([note, ...notes])
      setNewNote({ title: "", content: "", tags: "", type: "general" })
      setShowForm(false)
    }
  }

  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesType = filterType === "all" || note.type === filterType
    return matchesSearch && matchesType
  })

  const getTypeColor = (type: Note["type"]) => {
    switch (type) {
      case "reflection":
        return "bg-blue-100 text-blue-800"
      case "insight":
        return "bg-green-100 text-green-800"
      case "goal":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
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
              <h1 className="font-serif font-bold text-3xl text-foreground">Notes</h1>
              <p className="text-muted-foreground mt-1">Capture insights, reflections, and thoughts</p>
            </div>
          </div>
          <Button onClick={() => setShowForm(!showForm)} className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Note
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as Note["type"] | "all")}
            className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
          >
            <option value="all">All Types</option>
            <option value="reflection">Reflections</option>
            <option value="insight">Insights</option>
            <option value="goal">Goals</option>
            <option value="general">General</option>
          </select>
        </div>

        {/* Add Note Form */}
        {showForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-serif">Create New Note</CardTitle>
              <CardDescription>Write down your thoughts, insights, or reflections</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Note title..."
                value={newNote.title}
                onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
              />
              <Textarea
                placeholder="Write your note here..."
                value={newNote.content}
                onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                rows={6}
              />
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <label className="text-sm font-medium text-foreground mb-2 block">Note Type</label>
                  <select
                    value={newNote.type}
                    onChange={(e) => setNewNote({ ...newNote, type: e.target.value as Note["type"] })}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  >
                    <option value="general">General</option>
                    <option value="reflection">Reflection</option>
                    <option value="insight">Insight</option>
                    <option value="goal">Goal</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium text-foreground mb-2 block">Tags (comma separated)</label>
                  <Input
                    placeholder="reflection, work, personal"
                    value={newNote.tags}
                    onChange={(e) => setNewNote({ ...newNote, tags: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex space-x-2">
                <Button onClick={handleAddNote} className="bg-primary hover:bg-primary/90">
                  Save Note
                </Button>
                <Button variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Notes Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredNotes.map((note) => (
            <Card key={note.id} className="hover:shadow-md transition-shadow h-fit">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="font-serif text-lg line-clamp-2">{note.title}</CardTitle>
                  <Badge className={getTypeColor(note.type)} variant="secondary">
                    {note.type}
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  {note.date}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm line-clamp-4 mb-4">{note.content}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {note.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                {searchTerm || filterType !== "all" ? "No matching notes found" : "No notes yet"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm || filterType !== "all"
                  ? "Try adjusting your search or filter criteria"
                  : "Start writing down your thoughts and reflections"}
              </p>
              {!searchTerm && filterType === "all" && (
                <Button onClick={() => setShowForm(true)} className="bg-primary hover:bg-primary/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Write Your First Note
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
