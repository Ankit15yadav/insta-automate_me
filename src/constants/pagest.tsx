import { AutomationDuoToneBlue, ContactsDuoToneBlue, HomeDuoToneBlue, RocketDuoToneBlue } from "@/icons"

export const PAGE_BREAD_CURMBS: string[] = [
    'contacts',
    'automations',
    'integrations',
    'settings',
]

type Props = {
    [page in string]: React.ReactNode
}

export const PAGE_ICON: Props = {
    AUTOMATIONS: <AutomationDuoToneBlue />,
    CONTACTS: <ContactsDuoToneBlue />,
    INTEGRATIONS: <RocketDuoToneBlue />,
    SETTINGS: <ContactsDuoToneBlue />,
    HOME: <HomeDuoToneBlue />

}

export const PLANS = [
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
