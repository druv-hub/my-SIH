"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, TrendingUp, Droplets, Sun, AlertTriangle, CheckCircle, Clock, Star, Plus } from "lucide-react"

interface CropRecommendation {
  id: string
  name: string
  scientificName: string
  suitabilityScore: number
  season: string
  expectedYield: string
  waterRequirement: "Low" | "Medium" | "High"
  soilSuitability: string
  marketDemand: "Low" | "Medium" | "High"
  riskLevel: "Low" | "Medium" | "High"
  growingPeriod: string
  profitability: "Low" | "Medium" | "High"
  reasons: string[]
  challenges: string[]
  tips: string[]
}

export default function CropRecommendationsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCrops, setSelectedCrops] = useState<string[]>([])
  const [recommendations, setRecommendations] = useState<CropRecommendation[]>([])
  const router = useRouter()

  useEffect(() => {
    // Simulate AI analysis
    const loadRecommendations = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000))

      // Mock AI-generated recommendations
      const mockRecommendations: CropRecommendation[] = [
        {
          id: "1",
          name: "Wheat",
          scientificName: "Triticum aestivum",
          suitabilityScore: 92,
          season: "Rabi (Winter)",
          expectedYield: "40-45 quintals/hectare",
          waterRequirement: "Medium",
          soilSuitability: "Excellent for loamy soil",
          marketDemand: "High",
          riskLevel: "Low",
          growingPeriod: "120-150 days",
          profitability: "High",
          reasons: [
            "Ideal soil conditions detected",
            "Favorable climate patterns",
            "Strong market demand in your region",
            "Compatible with your livestock feed needs",
          ],
          challenges: ["Requires timely irrigation", "Monitor for rust diseases"],
          tips: [
            "Plant between November-December",
            "Use certified seeds for better yield",
            "Apply balanced fertilizers",
          ],
        },
        {
          id: "2",
          name: "Sugarcane",
          scientificName: "Saccharum officinarum",
          suitabilityScore: 88,
          season: "Year-round",
          expectedYield: "80-100 tonnes/hectare",
          waterRequirement: "High",
          soilSuitability: "Good for your soil type",
          marketDemand: "High",
          riskLevel: "Medium",
          growingPeriod: "12-18 months",
          profitability: "High",
          reasons: [
            "High water availability matches requirement",
            "Excellent market prices",
            "Long-term stable income",
            "Bagasse can feed livestock",
          ],
          challenges: ["High initial investment", "Long growing period", "Labor intensive harvesting"],
          tips: ["Ensure proper drainage", "Regular pest monitoring", "Consider drip irrigation"],
        },
        {
          id: "3",
          name: "Cotton",
          scientificName: "Gossypium hirsutum",
          suitabilityScore: 85,
          season: "Kharif (Summer)",
          expectedYield: "15-20 quintals/hectare",
          waterRequirement: "Medium",
          soilSuitability: "Suitable for your region",
          marketDemand: "High",
          riskLevel: "Medium",
          growingPeriod: "180-200 days",
          profitability: "High",
          reasons: [
            "Good soil drainage detected",
            "Suitable temperature range",
            "Strong textile industry demand",
            "Cotton seeds can supplement livestock feed",
          ],
          challenges: ["Pest management required", "Weather dependency", "Quality maintenance crucial"],
          tips: ["Use BT cotton varieties", "Integrated pest management", "Proper spacing for air circulation"],
        },
        {
          id: "4",
          name: "Maize",
          scientificName: "Zea mays",
          suitabilityScore: 82,
          season: "Kharif (Summer)",
          expectedYield: "60-70 quintals/hectare",
          waterRequirement: "Medium",
          soilSuitability: "Well-suited",
          marketDemand: "Medium",
          riskLevel: "Low",
          growingPeriod: "90-120 days",
          profitability: "Medium",
          reasons: [
            "Quick growing cycle",
            "Excellent livestock feed",
            "Multiple varieties available",
            "Good for crop rotation",
          ],
          challenges: ["Storage pest issues", "Price fluctuations"],
          tips: ["Choose hybrid varieties", "Proper post-harvest handling", "Consider value addition"],
        },
        {
          id: "5",
          name: "Soybean",
          scientificName: "Glycine max",
          suitabilityScore: 78,
          season: "Kharif (Summer)",
          expectedYield: "20-25 quintals/hectare",
          waterRequirement: "Medium",
          soilSuitability: "Good",
          marketDemand: "High",
          riskLevel: "Medium",
          growingPeriod: "90-120 days",
          profitability: "Medium",
          reasons: [
            "Nitrogen fixation improves soil",
            "High protein content",
            "Growing oil industry demand",
            "Soybean meal for livestock",
          ],
          challenges: ["Monsoon dependency", "Disease management"],
          tips: ["Ensure good drainage", "Use rhizobium inoculation", "Monitor for yellow mosaic virus"],
        },
      ]

      setRecommendations(mockRecommendations)
      setIsLoading(false)
    }

    loadRecommendations()
  }, [])

  const toggleCropSelection = (cropId: string) => {
    setSelectedCrops((prev) => (prev.includes(cropId) ? prev.filter((id) => id !== cropId) : [...prev, cropId]))
  }

  const handleContinue = () => {
    if (selectedCrops.length > 0) {
      router.push("/financial-planning")
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "text-green-600 bg-green-50"
      case "Medium":
        return "text-yellow-600 bg-yellow-50"
      case "High":
        return "text-red-600 bg-red-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  const getWaterColor = (water: string) => {
    switch (water) {
      case "Low":
        return "text-blue-400"
      case "Medium":
        return "text-blue-600"
      case "High":
        return "text-blue-800"
      default:
        return "text-gray-600"
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-6"></div>
            <h3 className="text-xl font-semibold mb-4">AI is Analyzing Your Farm</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Processing soil and weather data</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Analyzing livestock integration</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-yellow-500 animate-pulse" />
                <span>Generating crop recommendations</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Vriddhi</h1>
          </div>
          <h2 className="text-3xl font-bold mb-2">AI Crop Recommendations</h2>
          <p className="text-muted-foreground">Based on your farm profile, here are the best crops for your land</p>
        </div>

        {/* Analysis Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Farm Analysis Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Sun className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold">Climate</div>
                <div className="text-sm text-muted-foreground">Semi-arid, suitable for multiple crops</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Leaf className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold">Soil Type</div>
                <div className="text-sm text-muted-foreground">Loamy soil, pH 6.8 (Good)</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <Droplets className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="font-semibold">Water</div>
                <div className="text-sm text-muted-foreground">Adequate irrigation available</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold">Market</div>
                <div className="text-sm text-muted-foreground">Good connectivity to markets</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Crop Recommendations */}
        <div className="grid gap-6">
          {recommendations.map((crop) => (
            <Card
              key={crop.id}
              className={`transition-all ${selectedCrops.includes(crop.id) ? "ring-2 ring-primary bg-primary/5" : ""}`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                        <Leaf className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                        {crop.suitabilityScore}%
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl">{crop.name}</CardTitle>
                      <CardDescription className="italic">{crop.scientificName}</CardDescription>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary">{crop.season}</Badge>
                        <Badge className={getRiskColor(crop.riskLevel)}>{crop.riskLevel} Risk</Badge>
                        <div className="flex items-center gap-1">
                          <Droplets className={`h-4 w-4 ${getWaterColor(crop.waterRequirement)}`} />
                          <span className="text-sm">{crop.waterRequirement} Water</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary mb-1">
                      <Star className="h-6 w-6 inline mr-1" />
                      {crop.suitabilityScore}%
                    </div>
                    <div className="text-sm text-muted-foreground">Suitability</div>
                  </div>
                </div>
                <Progress value={crop.suitabilityScore} className="mt-4" />
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="reasons">Why This Crop</TabsTrigger>
                    <TabsTrigger value="challenges">Challenges</TabsTrigger>
                    <TabsTrigger value="tips">Growing Tips</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <div className="font-medium text-sm text-muted-foreground">Expected Yield</div>
                        <div className="text-lg font-semibold">{crop.expectedYield}</div>
                      </div>
                      <div>
                        <div className="font-medium text-sm text-muted-foreground">Growing Period</div>
                        <div className="text-lg font-semibold">{crop.growingPeriod}</div>
                      </div>
                      <div>
                        <div className="font-medium text-sm text-muted-foreground">Market Demand</div>
                        <div className="text-lg font-semibold">{crop.marketDemand}</div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="reasons">
                    <ul className="space-y-2">
                      {crop.reasons.map((reason, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="challenges">
                    <ul className="space-y-2">
                      {crop.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="tips">
                    <ul className="space-y-2">
                      {crop.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 pt-4 border-t">
                  <Button
                    variant={selectedCrops.includes(crop.id) ? "default" : "outline"}
                    onClick={() => toggleCropSelection(crop.id)}
                    className="w-full"
                  >
                    {selectedCrops.includes(crop.id) ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Selected for Financial Planning
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4 mr-2" />
                        Select This Crop
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selection Summary */}
        {selectedCrops.length > 0 && (
          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">
                    {selectedCrops.length} Crop{selectedCrops.length > 1 ? "s" : ""} Selected
                  </h3>
                  <p className="text-muted-foreground">
                    Ready to analyze financial projections for your selected crops
                  </p>
                </div>
                <Button onClick={handleContinue} size="lg">
                  Continue to Financial Planning
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={() => router.back()}>
            Back to Livestock
          </Button>
          {selectedCrops.length === 0 && (
            <Button variant="ghost" onClick={() => router.push("/financial-planning")}>
              Skip to Financial Planning
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
