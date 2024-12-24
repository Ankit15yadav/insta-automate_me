import { createAutomations } from "@/actions/automations"
import { useMutationData } from "./use-mutation-data"

export const useCreateAutomation = () => {
    const { isPending, mutate } = useMutationData(
        ['create-mutation'],
        () => createAutomations(),
        "user-automations"
    )

    return { isPending, mutate }
}