import { createTamagui } from '@tamagui/core'

export const config = createTamagui({
    tokens: {
        size: { sm: 8, md: 12, lg: 20 },
        space: { '-sm': 8 },
        radius: { none: 0, sm: 3 },
        color: { white: '#fff', black: '#000' },
    },

    themes: {
        light: {
            bg: '#f2f2f2',
            color: '#fff',
        },
        dark: {
            bg: '#111',
            color: '#000',
        },
    },
    media: {
        sm: { maxWidth: 860 },
        gtSm: { minWidth: 860 + 1 },
        short: { maxHeight: 820 },
        hoverNone: { hover: 'none' },
        pointerCoarse: { pointer: 'coarse' },
    },

    shorthands: {
        px: 'paddingHorizontal',
    },

    settings: {
        disableSSR: true,
        allowedStyleValues: 'somewhat-strict-web',
    },
})

type AppConfig = typeof config
declare module '@tamagui/core' {
    interface TamaguiCustomConfig extends AppConfig { }
}