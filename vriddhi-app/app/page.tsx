import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, TrendingUp, Users, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Vriddhi</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Smart Farming for the <span className="text-primary">Future</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            AI-powered crop advisory system that helps farmers make data-driven decisions, optimize yields, and maximize
            profits through intelligent recommendations.
          </p>
          <Link href="/signup">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Your Farm Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardHeader>
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Smart Location Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>AI-powered soil and weather analysis based on your farm's location</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Leaf className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle>Crop Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Get personalized crop suggestions based on your land and livestock</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Livestock Management</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Track and manage your livestock for optimal farm integration</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle>Financial Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Detailed cost analysis and revenue projections for your crops</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Farm?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of farmers already using Vriddhi to optimize their harvests
          </p>
          <Link href="/signup">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Create Your Farm Profile
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Vriddhi. Empowering farmers with intelligent agriculture.</p>
        </div>
      </footer>
    </div>
  )
}
