"use client"

import { BookOpen, Heart, Target, Users, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Button variant="ghost" onClick={() => (window.location.href = "/")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="font-serif font-bold text-3xl text-foreground">About Trigli</h1>
            <p className="text-muted-foreground mt-1">Understanding our mission and approach</p>
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Trigli empowers individuals to develop deeper self-awareness through mindful journaling. We believe that
              understanding our emotional patterns—both the challenges (triggers) and the joys (glimmers)—is fundamental
              to personal growth and mental well-being.
            </p>
          </CardContent>
        </Card>

        {/* What We Do */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="font-serif">Track Triggers</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Identify patterns in what challenges you. By recording and reflecting on triggers, you can develop
                better coping strategies and emotional regulation skills.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Heart className="h-5 w-5 text-accent" />
                </div>
                <CardTitle className="font-serif">Celebrate Glimmers</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Capture moments of joy, peace, and connection. Glimmers help you recognize what brings you happiness and
                build resilience through gratitude practice.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Approach */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-serif text-xl">Our Approach</CardTitle>
            <CardDescription>Evidence-based practices for emotional well-being</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Mindful Awareness</h3>
              <p className="text-muted-foreground">
                We encourage non-judgmental observation of your emotional experiences, helping you develop greater
                self-compassion and understanding.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Pattern Recognition</h3>
              <p className="text-muted-foreground">
                Through consistent tracking, you'll begin to notice patterns in your triggers and glimmers, leading to
                valuable insights about your emotional landscape.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Balanced Perspective</h3>
              <p className="text-muted-foreground">
                By tracking both challenges and joys, Trigli helps you maintain a balanced view of your experiences and
                build resilience through difficult times.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-serif text-xl">Privacy & Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Your journal entries are deeply personal, and we treat them with the utmost care. All data is stored
              securely and remains completely private to you. We never share your personal information or journal
              content with third parties.
            </p>
          </CardContent>
        </Card>

        {/* Get Started */}
        <Card className="text-center">
          <CardContent className="py-8">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-serif font-semibold text-xl text-foreground mb-2">Ready to Begin?</h3>
            <p className="text-muted-foreground mb-6">
              Start your journey of self-discovery with mindful journaling today.
            </p>
            <Button onClick={() => (window.location.href = "/")} className="bg-primary hover:bg-primary/90">
              Start Journaling
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
