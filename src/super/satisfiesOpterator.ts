type ColorX = ColorString | ColorRGB
type ColorString = "red" | "green" | "blue"
type ColorRGB = [ r: number, g: number, b: number ]

type Theme = Record<string, ColorX>

const theme: Theme = {
    foreground: "red",
    background: [ 0, 0, 0 ],
    body: "green"
}

const [r, g, b] = theme.background;


const theme2 = {
    foreground: "red",
    background: [ 0, 0, 0 ],
    // body: "gren"
} satisfies Theme

const [r1, g1, b1] = theme.background;

