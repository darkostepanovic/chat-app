import { DefaultTheme } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        fontSizes: { regular: string, small: string, large: string },
        fontFamily: { sansSerif: string, serif?: string }
    }
}

export const theme: DefaultTheme = {
    fontSizes: {
        large: '18px',
        regular: '16px',
        small: '14px'
    },
    fontFamily: {
        sansSerif: "'Roboto', sans-serif"
    }
}