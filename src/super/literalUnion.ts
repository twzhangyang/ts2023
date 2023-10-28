type Paddings = "small" | "medium" | "large" | (string & {})
const getPadding = (padding: Paddings) => {
    if(padding === "small") return 0
    if(padding === "medium") return 10
    if(padding === "large") return 20
    return padding
}

const padding1:Paddings = "small"
const padding2:Paddings = "8px"
