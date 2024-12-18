import { v4 as uuid } from "uuid"

type FieldProps = {
    label: string,
    id: string,
}

type SideBarProps = {
    icon: React.ReactNode
} & FieldProps


export const SIDEBAR_MENU: SideBarProps[] = [
    {
        id: uuid(),
        label: 'home',
        icon:
    }
]