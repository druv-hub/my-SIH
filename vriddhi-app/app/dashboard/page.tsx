"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Leaf,
  TrendingUp,
  Users,
  MapPin,
  Calendar,
  Bell,
  Settings,
  BarChart3,
  DollarSign,
  Droplets,
  Sun,
  AlertTriangle,
} from "lucide-react"

export default function DashboardPage() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

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
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <div className="text-sm">
              <div className="font-medium">Welcome back, Farmer!</div>
              <div className="text-muted-foreground">Green Valley Farm</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">8 hectares</div>
              <div className="text-sm text-muted-foreground">Total Farm Area</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Leaf className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">2 crops</div>
              <div className="text-sm text-muted-foreground">Active Crops</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">25 animals</div>
              <div className="text-sm text-muted-foreground">Livestock Count</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">{formatCurrency(110000)}</div>
              <div className="text-sm text-muted-foreground">Expected Profit</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Crops */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5" />
                  Current Crop Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">Wheat</h3>
                      <p className="text-sm text-muted-foreground">5 hectares • Rabi Season</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Growing</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Growth Progress</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} />
                    <div className="text-xs text-muted-foreground">Expected harvest: March 2025</div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">Cotton</h3>
                      <p className="text-sm text-muted-foreground">3 hectares • Kharif Season</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Planning</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Preparation Progress</span>
                      <span>25%</span>
                    </div>
                    <Progress value={25} />
                    <div className="text-xs text-muted-foreground">Planting starts: June 2025</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Financial Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{formatCurrency(220000)}</div>
                    <div className="text-sm text-red-700">Total Investment</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{formatCurrency(330000)}</div>
                    <div className="text-sm text-green-700">Expected Revenue</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{formatCurrency(110000)}</div>
                    <div className="text-sm text-blue-700">Net Profit</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weather Widget */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="h-5 w-5" />
                  Weather Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">28°C</div>
                  <div className="text-muted-foreground mb-4">Partly Cloudy</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <Droplets className="h-4 w-4 inline mr-1" />
                      <span>65% Humidity</span>
                    </div>
                    <div>
                      <span>12 km/h Wind</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Farm Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-medium">Irrigation Due</div>
                    <div className="text-muted-foreground">Wheat field needs watering in 2 days</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <Calendar className="h-4 w-4 text-blue-600 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-medium">Fertilizer Application</div>
                    <div className="text-muted-foreground">Schedule NPK application for cotton</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Market Prices
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Activities
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Financial Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
