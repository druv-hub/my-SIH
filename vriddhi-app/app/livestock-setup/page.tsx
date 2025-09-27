"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Leaf, Plus, Minus, Users } from "lucide-react"

interface LivestockEntry {
  id: string
  type: string
  count: number
  ageGroup: string
  purpose: string
  notes: string
}

export default function LivestockSetupPage() {
  const [livestock, setLivestock] = useState<LivestockEntry[]>([])
  const [currentEntry, setCurrentEntry] = useState<Omit<LivestockEntry, "id">>({
    type: "",
    count: 0,
    ageGroup: "",
    purpose: "",
    notes: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const livestockTypes = [
    "Cattle (Cows/Bulls)",
    "Buffalo",
    "Goats",
    "Sheep",
    "Poultry (Chickens)",
    "Ducks",
    "Pigs",
    "Horses",
    "Other",
  ]

  const ageGroups = ["Young (0-1 year)", "Adult (1-5 years)", "Mature (5+ years)", "Mixed Ages"]

  const purposes = ["Milk Production", "Meat Production", "Breeding", "Draft/Work", "Eggs", "Mixed Purpose"]

  const addLivestock = () => {
    if (currentEntry.type && currentEntry.count > 0) {
      const newEntry: LivestockEntry = {
        ...currentEntry,
        id: Date.now().toString(),
      }
      setLivestock([...livestock, newEntry])
      setCurrentEntry({
        type: "",
        count: 0,
        ageGroup: "",
        purpose: "",
        notes: "",
      })
    }
  }

  const removeLivestock = (id: string) => {
    setLivestock(livestock.filter((item) => item.id !== id))
  }

  const handleContinue = async () => {
    setIsLoading(true)
    // Simulate API call to save livestock data
    await new Promise((resolve) => setTimeout(resolve, 1000))
    router.push("/crop-recommendations")
  }

  const skipLivestock = () => {
    router.push("/crop-recommendations")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Vriddhi</h1>
          </div>
          <h2 className="text-3xl font-bold mb-2">Livestock Management</h2>
          <p className="text-muted-foreground">Add your livestock details for integrated farming recommendations</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Add Livestock Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Add Livestock
              </CardTitle>
              <CardDescription>Enter details about your animals for better crop integration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="livestockType">Animal Type</Label>
                <Select onValueChange={(value) => setCurrentEntry({ ...currentEntry, type: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select animal type" />
                  </SelectTrigger>
                  <SelectContent>
                    {livestockTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="count">Number of Animals</Label>
                <Input
                  id="count"
                  type="number"
                  min="1"
                  placeholder="Enter count"
                  value={currentEntry.count || ""}
                  onChange={(e) => setCurrentEntry({ ...currentEntry, count: Number.parseInt(e.target.value) || 0 })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ageGroup">Age Group</Label>
                <Select onValueChange={(value) => setCurrentEntry({ ...currentEntry, ageGroup: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select age group" />
                  </SelectTrigger>
                  <SelectContent>
                    {ageGroups.map((age) => (
                      <SelectItem key={age} value={age}>
                        {age}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="purpose">Primary Purpose</Label>
                <Select onValueChange={(value) => setCurrentEntry({ ...currentEntry, purpose: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    {purposes.map((purpose) => (
                      <SelectItem key={purpose} value={purpose}>
                        {purpose}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Any special care, breed information, or other details"
                  value={currentEntry.notes}
                  onChange={(e) => setCurrentEntry({ ...currentEntry, notes: e.target.value })}
                />
              </div>

              <Button
                onClick={addLivestock}
                className="w-full"
                disabled={!currentEntry.type || currentEntry.count === 0}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Livestock
              </Button>
            </CardContent>
          </Card>

          {/* Current Livestock List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Your Livestock ({livestock.length})
              </CardTitle>
              <CardDescription>Review and manage your livestock entries</CardDescription>
            </CardHeader>
            <CardContent>
              {livestock.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No livestock added yet</p>
                  <p className="text-sm">Add animals to get integrated farming recommendations</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {livestock.map((animal) => (
                    <div key={animal.id} className="border rounded-lg p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{animal.type}</Badge>
                          <span className="font-medium">{animal.count} animals</span>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => removeLivestock(animal.id)}>
                          <Minus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>
                          <strong>Age:</strong> {animal.ageGroup}
                        </p>
                        <p>
                          <strong>Purpose:</strong> {animal.purpose}
                        </p>
                        {animal.notes && (
                          <p>
                            <strong>Notes:</strong> {animal.notes}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Integration Benefits */}
        {livestock.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Integrated Farming Benefits</CardTitle>
              <CardDescription>
                Based on your livestock, here's how we'll optimize your crop recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {livestock.reduce((sum, animal) => sum + animal.count, 0)}
                  </div>
                  <p className="text-sm text-green-700">Total Animals</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Organic</div>
                  <p className="text-sm text-blue-700">Fertilizer Available</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">Feed</div>
                  <p className="text-sm text-yellow-700">Crop Integration</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={() => router.back()}>
            Back to Farm Setup
          </Button>
          <div className="flex gap-4">
            <Button variant="ghost" onClick={skipLivestock}>
              Skip Livestock
            </Button>
            <Button onClick={handleContinue} disabled={isLoading}>
              {isLoading ? "Processing..." : "Continue to Crop Recommendations"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
