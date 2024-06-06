import { notifications } from "@mantine/notifications"
import { EXTENDEDCOLORS } from "../DataBuilder"

export const handleNotifSuccess = (title: string, message: string) => {
    notifications.show({
        color: EXTENDEDCOLORS.primary,
        title: title,
        message: message,
        autoClose: 6000,
    })
}