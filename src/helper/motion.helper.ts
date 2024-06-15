export const variantsFadeInOutFormLeft = {
    hidden: { x: "-100%", opacity: 0, width: 0 },
    visible: { x: 0, opacity: 1, width: 'auto' },
    exit: { x: "-100%", opacity: 0, width: 0 },
};

export const variantsFilterDataUMKM = {
    hidden: { x: "-100%", opacity: 0, width: 0 },
    visible: { x: 0, opacity: 1, width: '19rem' },
    exit: { x: "-100%", opacity: 0, width: 0 },
};

export const variantsFilterInfoModal = {
    hidden: { x: "-100%", opacity: 0, width: 0 },
    visible: { x: 0, opacity: 1, width: '22rem' },
    exit: { x: "-100%", opacity: 0, width: 0 },
};
export const variantsFadeInOutFormBottom = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
};

export const rowVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
};

export const variantsBadgeFilter = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
};

export const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.3,
        },
    },
    exit: { opacity: 0, height: 0 },
};

export const dropdownItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

export const variantsOpacity = {
    hidden: { opacity: 0, },
    visible: { opacity: 1, },
    exit: { opacity: 0, },
};

export const menuItemVariants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
        },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};