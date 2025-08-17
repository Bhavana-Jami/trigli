import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Plus, TrendingDown } from "lucide-react"
import { useFetch } from "@/hooks/useFetch"
import TableComp from "@/components/TableComp"
interface Trigger {
  id: string
  title: string
  description: string
  intensity: number
  date: string
  tags: string
  previousTriggers: []
}

export default function TriggersPage() {
  const { data, addItem, deleteItem } = useFetch()
  const [showForm, setShowForm] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false);
  const [newTrigger, setNewTrigger] = useState<Trigger>({
    id: "",
    title: "",
    description: "",
    intensity: 1,
    date: new Date().toISOString().split("T")[0],
    tags: "",
    previousTriggers: [],
  });

  const handleAddTrigger = () => {
    addItem(newTrigger);
    setNewTrigger({
      id: "",
      title: "",
      description: "",
      intensity: 1,
      date: new Date().toISOString().split("T")[0],
      tags: "",
      previousTriggers: [],
    });
    setShowForm(false);
  };
  const handleEdit = (trigger: any) => {
    setShowForm(true)
    setShowEditForm(!showEditForm);
    setNewTrigger(trigger)
  }
  const handleDelete = (triggerId: string) => {
    deleteItem(triggerId)
  }
  const [showSingleTrigger, setShowSingleTrigger] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-background">
      <div className="w-4xl mx-auto mt-8 flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
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
      <div className="w-4xl mx-auto mt-8">
        <TableComp triggers={data} handleDelete={handleDelete} handleEdit={handleEdit} showEditForm={showEditForm} showSingleTrigger={showSingleTrigger} setShowSingleTrigger={setShowSingleTrigger} />
      </div>
      <Dialog open={showForm} onOpenChange={setShowForm} >
        <DialogContent className="sm:max-w-[600px] ">
          <DialogHeader>
            <DialogTitle className="font-serif">Record New Trigger</DialogTitle>
            <DialogDescription>
              Describe what triggered you and how it made you feel
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Input
              className="border-violet-950 focus:border-primary focus:ring-primary"

              placeholder="Trigger title (e.g., 'Work deadline stress')"
              value={newTrigger.title}
              onChange={(e) => setNewTrigger({ ...newTrigger, title: e.target.value })}
            />
            <Textarea
              placeholder="Describe the situation and your feelings..."
              value={newTrigger.description}
              className="border-violet-950 focus:border-primary focus:ring-primary"
              onChange={(e) => setNewTrigger({ ...newTrigger, description: e.target.value })}
              rows={3}
            />
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Intensity (1-10)
                </label>
                <Input
                  type="number"
                  min="1"
                  max="10"
                  value={newTrigger.intensity}
                  className="border-violet-950 focus:border-primary focus:ring-primary"
                  onChange={(e) =>
                    setNewTrigger({ ...newTrigger, intensity: Number.parseInt(e.target.value) })
                  }
                />
              </div>
              <div className="flex-1">
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Tags (comma separated)
                </label>
                <Input
                  placeholder="work, stress, anxiety"
                  value={newTrigger.tags}
                  className="border-violet-950 focus:border-primary focus:ring-primary"
                  onChange={(e) => setNewTrigger({ ...newTrigger, tags: e.target.value })}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleAddTrigger} className="bg-primary hover:bg-primary/90">
              Save Trigger
            </Button>
            <Button variant="outline" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent></Dialog>
      <div>
        {data.length === 0 && (
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
    </div >
  )
}
