'use server'

import { onCurrentUser } from "../user"
import { CreateAutomation } from "./queries";

export const getAllAutomations = async () => {
    const user = await onCurrentUser();

    try {

        const create = await CreateAutomation(user.id);

        if (create) return { status: 200, data: 'Automation created  ' }

        return { status: 404, data: "oops ! something went wrong" }

    } catch (error) {
        return { status: 500, data: "somethig went wrong" }
    }
}