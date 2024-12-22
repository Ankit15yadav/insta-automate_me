import { getAllAutomations } from "@/actions/automations"
import { useQuery } from "@tanstack/react-query"

export const userQueryAutomations = () => {
    return useQuery({
        queryKey: ['user-automations'],
        queryFn: getAllAutomations,
    })
}