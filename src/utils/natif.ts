import { notifications } from "@mantine/notifications"
import { EXTENDEDCOLORS } from "../DataBuilder"

export const handleNotifSuccess = (title: string, message: string) => {
    notifications.show({
        color: EXTENDEDCOLORS.primary,
        title: title,
        message: message,
        autoClose: 5000,
    })
}

export const handleErrorNotif = (title: string, message: string) => {
    notifications.show({
        color: EXTENDEDCOLORS.accent5,
        title: title,
        message: message,
        autoClose: 5000,
    })
}
