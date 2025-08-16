import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from 'lucide-react';

const Hero = ()=>{

    const [trigger, setTrigger] = useState("");
    const [triggers, setTriggers] = useState<string[]>([]);
    const handleAddTrigger = () => {
        if (trigger.trim()) {
            setTriggers([...triggers, trigger.trim()]);
            setTrigger("");
        }
    };
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleAddTrigger();
        }
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif font-bold text-4xl md:text-6xl text-foreground mb-6 leading-tight">
            Mindful Journaling
            <br />
            <span className="text-primary">Made Simple</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Track your triggers, celebrate your glimmers, and build a deeper understanding of your emotional patterns.
          </p>

          {/* Trigger Input */}
          <div className="max-w-md mx-auto mb-16">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Enter a trigger or thought..."
                value={trigger}
                onChange={(e) => setTrigger(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 h-12 text-base border-border focus:ring-primary focus:border-primary"
              />
              <Button
                onClick={handleAddTrigger}
                className="h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Hero;