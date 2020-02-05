import Typography from "typography"
import Moraga from "typography-theme-moraga"

Moraga.googleFonts = [
  {
    name: "Bungee",
    styles: ["400", "400i", "700", "700i"],
  },
]
Moraga.headerFontFamily = ["Bungee"]

const typography = new Typography(Moraga)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
