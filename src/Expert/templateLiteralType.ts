type CSSValue =
    | number
    | `${number}px`
    | `${number}em`
    | `${number}rem`


const v1:CSSValue = "10em";


type Size = 'small' | 'medium' | 'large';
type Color = 'primary' | 'secondary';
type Style = `${Size}-${Color}`;

const applyStyle = (style: Style) => {
    console.log(style);
}

applyStyle('small-primary');
// applyStyle('medium-primar');
