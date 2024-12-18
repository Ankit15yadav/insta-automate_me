import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
    {
        name: "Free",
        price: "$0",
        description: "Basic features for personal use",
        features: [
            "1 user",
            "5 projects",
            "2GB storage",
            "Basic support",
        ],
    },
    {
        name: "Pro",
        price: "$19",
        description: "Advanced features for professionals",
        features: [
            "Unlimited users",
            "Unlimited projects",
            "100GB storage",
            "Priority support",
            "Advanced analytics",
            "Custom integrations",
        ],
    },
]

export function PricingSection() {
    return (
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2">Simple, Transparent Pricing</h2>
                    <p className="text-xl text-gray-600">Choose the plan that's right for you</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {plans.map((plan) => (
                        <Card key={plan.name} className={plan.name === "Pro" ? "border-primary shadow-lg" : ""}>
                            <CardHeader>
                                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                <CardDescription>{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold mb-4">{plan.price}<span className="text-xl font-normal text-gray-600">/month</span></div>
                                <ul className="space-y-2">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center">
                                            <Check className="h-5 w-5 text-green-500 mr-2" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant={plan.name === "Pro" ? "default" : "outline"}>
                                    {plan.name === "Free" ? "Get Started" : "Upgrade to Pro"}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

