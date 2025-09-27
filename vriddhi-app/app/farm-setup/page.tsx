"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Leaf, MapPin, Droplets, Zap } from "lucide-react"

export default function FarmSetupPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [farmData, setFarmData] = useState({
    farmName: "",
    location: "",
    address: "",
    pincode: "",
    state: "",
    district: "",
    landArea: "",
    landUnit: "acres",
    landType: "",
    waterSource: "",
    irrigationType: "",
    soilType: "", // Will be auto-detected
    currentCrops: "",
    farmingExperience: "",
    infrastructure: "",
  })
  const router = useRouter()

  const handleInputChange = (field: string, value: string) => {
    setFarmData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = async () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsLoading(true)
      // Simulate API calls for location analysis
      await new Promise((resolve) => setTimeout(resolve, 2000))
      router.push("/livestock-setup")
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 p-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Vriddhi</h1>
          </div>
          <h2 className="text-3xl font-bold mb-2">Set Up Your Farm Profile</h2>
          <p className="text-muted-foreground">Help us understand your farm to provide personalized recommendations</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step}
                </div>
                {step < 3 && <div className={`w-12 h-1 mx-2 ${step < currentStep ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Basic Farm Information */}
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Basic Farm Information
              </CardTitle>
              <CardDescription>Tell us about your farm's location and basic details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="farmName">Farm Name</Label>
                <Input
                  id="farmName"
                  placeholder="Enter your farm name"
                  value={farmData.farmName}
                  onChange={(e) => handleInputChange("farmName", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Select onValueChange={(value) => handleInputChange("state", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="punjab">Punjab</SelectItem>
                      <SelectItem value="haryana">Haryana</SelectItem>
                      <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                      <SelectItem value="rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                      <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                      <SelectItem value="telangana">Telangana</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="district">District</Label>
                  <Input
                    id="district"
                    placeholder="Enter district"
                    value={farmData.district}
                    onChange={(e) => handleInputChange("district", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Complete Address</Label>
                <Textarea
                  id="address"
                  placeholder="Enter your farm's complete address"
                  value={farmData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pincode">PIN Code</Label>
                <Input
                  id="pincode"
                  placeholder="Enter PIN code"
                  value={farmData.pincode}
                  onChange={(e) => handleInputChange("pincode", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Land Details */}
        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Land & Infrastructure Details
              </CardTitle>
              <CardDescription>Provide details about your land area and current setup</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="landArea">Land Area</Label>
                  <Input
                    id="landArea"
                    type="number"
                    placeholder="Enter land area"
                    value={farmData.landArea}
                    onChange={(e) => handleInputChange("landArea", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="landUnit">Unit</Label>
                  <Select onValueChange={(value) => handleInputChange("landUnit", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="acres">Acres</SelectItem>
                      <SelectItem value="hectares">Hectares</SelectItem>
                      <SelectItem value="bigha">Bigha</SelectItem>
                      <SelectItem value="katha">Katha</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="landType">Land Type</Label>
                <Select onValueChange={(value) => handleInputChange("landType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select land type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="irrigated">Irrigated</SelectItem>
                    <SelectItem value="rain-fed">Rain-fed</SelectItem>
                    <SelectItem value="mixed">Mixed (Irrigated + Rain-fed)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="waterSource">Primary Water Source</Label>
                <Select onValueChange={(value) => handleInputChange("waterSource", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select water source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="borewell">Borewell</SelectItem>
                    <SelectItem value="canal">Canal</SelectItem>
                    <SelectItem value="river">River</SelectItem>
                    <SelectItem value="pond">Pond/Tank</SelectItem>
                    <SelectItem value="rainwater">Rainwater Harvesting</SelectItem>
                    <SelectItem value="multiple">Multiple Sources</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="irrigationType">Irrigation Method</Label>
                <Select onValueChange={(value) => handleInputChange("irrigationType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select irrigation method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="drip">Drip Irrigation</SelectItem>
                    <SelectItem value="sprinkler">Sprinkler</SelectItem>
                    <SelectItem value="flood">Flood Irrigation</SelectItem>
                    <SelectItem value="furrow">Furrow Irrigation</SelectItem>
                    <SelectItem value="none">No Irrigation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Current Farming Status */}
        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="h-5 w-5" />
                Current Farming Status
              </CardTitle>
              <CardDescription>Tell us about your current crops and farming experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentCrops">Current/Previous Crops</Label>
                <Textarea
                  id="currentCrops"
                  placeholder="List the crops you currently grow or have grown recently"
                  value={farmData.currentCrops}
                  onChange={(e) => handleInputChange("currentCrops", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="farmingExperience">Farming Experience</Label>
                <Select onValueChange={(value) => handleInputChange("farmingExperience", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (3-10 years)</SelectItem>
                    <SelectItem value="experienced">Experienced (10+ years)</SelectItem>
                    <SelectItem value="expert">Expert (20+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="infrastructure">Available Infrastructure</Label>
                <Textarea
                  id="infrastructure"
                  placeholder="Describe available infrastructure (storage, machinery, processing units, etc.)"
                  value={farmData.infrastructure}
                  onChange={(e) => handleInputChange("infrastructure", e.target.value)}
                />
              </div>

              {isLoading && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                    <div>
                      <p className="font-medium text-blue-900">Analyzing Your Farm Location</p>
                      <p className="text-sm text-blue-700">
                        We're using AI to determine your soil type and local weather patterns...
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={handleBack} disabled={currentStep === 1}>
            Back
          </Button>
          <Button onClick={handleNext} disabled={isLoading}>
            {currentStep === 3 ? (isLoading ? "Analyzing..." : "Continue to Livestock") : "Next"}
          </Button>
        </div>
      </div>
    </div>
  )
}
