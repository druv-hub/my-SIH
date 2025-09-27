"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Leaf,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Tractor,
  Droplets,
  Zap,
  PieChart,
  BarChart3,
  Calculator,
  CheckCircle,
} from "lucide-react"

interface CostBreakdown {
  category: string
  amount: number
  percentage: number
  items: { name: string; cost: number; unit: string }[]
}

interface FinancialProjection {
  cropName: string
  landArea: number
  totalCosts: number
  expectedRevenue: number
  netProfit: number
  profitMargin: number
  breakEvenPoint: string
  roi: number
  costBreakdown: CostBreakdown[]
  revenueProjection: {
    conservative: number
    realistic: number
    optimistic: number
  }
}

export default function FinancialPlanningPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [projections, setProjections] = useState<FinancialProjection[]>([])
  const [selectedCrop, setSelectedCrop] = useState<string>("")
  const router = useRouter()

  useEffect(() => {
    const loadFinancialData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2500))

      // Mock financial projections for selected crops
      const mockProjections: FinancialProjection[] = [
        {
          cropName: "Wheat",
          landArea: 5, // hectares
          totalCosts: 125000, // INR
          expectedRevenue: 180000,
          netProfit: 55000,
          profitMargin: 30.6,
          breakEvenPoint: "32 quintals",
          roi: 44,
          costBreakdown: [
            {
              category: "Seeds & Planting",
              amount: 15000,
              percentage: 12,
              items: [
                { name: "Certified Seeds", cost: 12000, unit: "300 kg" },
                { name: "Seed Treatment", cost: 3000, unit: "Per hectare" },
              ],
            },
            {
              category: "Labor Costs",
              amount: 45000,
              percentage: 36,
              items: [
                { name: "Land Preparation", cost: 15000, unit: "5 hectares" },
                { name: "Sowing", cost: 8000, unit: "5 hectares" },
                { name: "Weeding & Care", cost: 12000, unit: "Season" },
                { name: "Harvesting", cost: 10000, unit: "5 hectares" },
              ],
            },
            {
              category: "Fertilizers & Inputs",
              amount: 35000,
              percentage: 28,
              items: [
                { name: "NPK Fertilizer", cost: 20000, unit: "1000 kg" },
                { name: "Urea", cost: 8000, unit: "400 kg" },
                { name: "Pesticides", cost: 7000, unit: "Season" },
              ],
            },
            {
              category: "Equipment & Machinery",
              amount: 20000,
              percentage: 16,
              items: [
                { name: "Tractor Rental", cost: 12000, unit: "Season" },
                { name: "Threshing", cost: 5000, unit: "5 hectares" },
                { name: "Transportation", cost: 3000, unit: "To market" },
              ],
            },
            {
              category: "Irrigation & Utilities",
              amount: 10000,
              percentage: 8,
              items: [
                { name: "Electricity", cost: 6000, unit: "Season" },
                { name: "Water Charges", cost: 4000, unit: "Season" },
              ],
            },
          ],
          revenueProjection: {
            conservative: 160000,
            realistic: 180000,
            optimistic: 200000,
          },
        },
        {
          cropName: "Cotton",
          landArea: 3, // hectares
          totalCosts: 95000,
          expectedRevenue: 150000,
          netProfit: 55000,
          profitMargin: 36.7,
          breakEvenPoint: "12 quintals",
          roi: 58,
          costBreakdown: [
            {
              category: "Seeds & Planting",
              amount: 18000,
              percentage: 19,
              items: [
                { name: "BT Cotton Seeds", cost: 15000, unit: "15 kg" },
                { name: "Seed Treatment", cost: 3000, unit: "Per hectare" },
              ],
            },
            {
              category: "Labor Costs",
              amount: 32000,
              percentage: 34,
              items: [
                { name: "Land Preparation", cost: 9000, unit: "3 hectares" },
                { name: "Sowing", cost: 6000, unit: "3 hectares" },
                { name: "Picking", cost: 17000, unit: "3 hectares" },
              ],
            },
            {
              category: "Fertilizers & Inputs",
              amount: 28000,
              percentage: 29,
              items: [
                { name: "NPK Fertilizer", cost: 15000, unit: "600 kg" },
                { name: "Pesticides", cost: 13000, unit: "Season" },
              ],
            },
            {
              category: "Equipment & Machinery",
              amount: 12000,
              percentage: 13,
              items: [
                { name: "Tractor Rental", cost: 8000, unit: "Season" },
                { name: "Transportation", cost: 4000, unit: "To market" },
              ],
            },
            {
              category: "Irrigation & Utilities",
              amount: 5000,
              percentage: 5,
              items: [
                { name: "Electricity", cost: 3000, unit: "Season" },
                { name: "Water Charges", cost: 2000, unit: "Season" },
              ],
            },
          ],
          revenueProjection: {
            conservative: 130000,
            realistic: 150000,
            optimistic: 170000,
          },
        },
      ]

      setProjections(mockProjections)
      setSelectedCrop(mockProjections[0].cropName)
      setIsLoading(false)
    }

    loadFinancialData()
  }, [])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getTotalProjection = () => {
    return projections.reduce(
      (total, proj) => ({
        costs: total.costs + proj.totalCosts,
        revenue: total.revenue + proj.expectedRevenue,
        profit: total.profit + proj.netProfit,
      }),
      { costs: 0, revenue: 0, profit: 0 },
    )
  }

  const selectedProjection = projections.find((p) => p.cropName === selectedCrop)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-6"></div>
            <h3 className="text-xl font-semibold mb-4">Calculating Financial Projections</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Analyzing market prices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Calculating input costs</span>
              </div>
              <div className="flex items-center gap-2">
                <Calculator className="h-4 w-4 text-yellow-500 animate-pulse" />
                <span>Generating profit projections</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const totalProjection = getTotalProjection()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 p-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Vriddhi</h1>
          </div>
          <h2 className="text-3xl font-bold mb-2">Financial Planning Dashboard</h2>
          <p className="text-muted-foreground">
            Comprehensive cost analysis and revenue projections for your selected crops
          </p>
        </div>

        {/* Overall Summary */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">{formatCurrency(totalProjection.revenue)}</div>
              <div className="text-sm text-muted-foreground">Total Expected Revenue</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <TrendingDown className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-600">{formatCurrency(totalProjection.costs)}</div>
              <div className="text-sm text-muted-foreground">Total Investment</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{formatCurrency(totalProjection.profit)}</div>
              <div className="text-sm text-muted-foreground">Net Profit</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">
                {((totalProjection.profit / totalProjection.costs) * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-muted-foreground">Overall ROI</div>
            </CardContent>
          </Card>
        </div>

        {/* Crop Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select Crop for Detailed Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              {projections.map((proj) => (
                <Button
                  key={proj.cropName}
                  variant={selectedCrop === proj.cropName ? "default" : "outline"}
                  onClick={() => setSelectedCrop(proj.cropName)}
                >
                  {proj.cropName}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Analysis */}
        {selectedProjection && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cost Breakdown */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    {selectedProjection.cropName} - Cost Breakdown
                  </CardTitle>
                  <CardDescription>
                    Detailed analysis of all farming costs for {selectedProjection.landArea} hectares
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {selectedProjection.costBreakdown.map((category) => (
                      <div key={category.category} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {category.category === "Seeds & Planting" && <Leaf className="h-4 w-4 text-green-600" />}
                            {category.category === "Labor Costs" && <Users className="h-4 w-4 text-blue-600" />}
                            {category.category === "Fertilizers & Inputs" && (
                              <Zap className="h-4 w-4 text-yellow-600" />
                            )}
                            {category.category === "Equipment & Machinery" && (
                              <Tractor className="h-4 w-4 text-purple-600" />
                            )}
                            {category.category === "Irrigation & Utilities" && (
                              <Droplets className="h-4 w-4 text-cyan-600" />
                            )}
                            <span className="font-medium">{category.category}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">{formatCurrency(category.amount)}</div>
                            <div className="text-sm text-muted-foreground">{category.percentage}%</div>
                          </div>
                        </div>
                        <Progress value={category.percentage} className="h-2" />
                        <div className="ml-6 space-y-1">
                          {category.items.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm text-muted-foreground">
                              <span>
                                {item.name} ({item.unit})
                              </span>
                              <span>{formatCurrency(item.cost)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Revenue & Profit Analysis */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Projections</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Conservative</span>
                      <span className="font-medium">
                        {formatCurrency(selectedProjection.revenueProjection.conservative)}
                      </span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Realistic</span>
                      <span className="font-medium text-primary">
                        {formatCurrency(selectedProjection.revenueProjection.realistic)}
                      </span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Optimistic</span>
                      <span className="font-medium">
                        {formatCurrency(selectedProjection.revenueProjection.optimistic)}
                      </span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Investment</span>
                    <span className="font-semibold text-red-600">{formatCurrency(selectedProjection.totalCosts)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expected Revenue</span>
                    <span className="font-semibold text-green-600">
                      {formatCurrency(selectedProjection.expectedRevenue)}
                    </span>
                  </div>

                  <div className="flex justify-between border-t pt-2">
                    <span className="font-medium">Net Profit</span>
                    <span className="font-bold text-primary">{formatCurrency(selectedProjection.netProfit)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Profit Margin</span>
                    <span className="font-semibold">{selectedProjection.profitMargin}%</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ROI</span>
                    <span className="font-semibold text-blue-600">{selectedProjection.roi}%</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Break-even Point</span>
                    <span className="font-semibold">{selectedProjection.breakEvenPoint}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-green-800 mb-1">Profitable Investment</div>
                  <div className="text-sm text-green-700">This crop shows strong potential for good returns</div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={() => router.back()}>
            Back to Crop Recommendations
          </Button>
          <div className="flex gap-4">
            <Button variant="secondary" onClick={() => router.push("/dashboard")}>
              Save & Go to Dashboard
            </Button>
            <Button onClick={() => router.push("/dashboard")}>Complete Setup</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
