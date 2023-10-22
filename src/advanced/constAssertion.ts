const layout = (settings: {align: 'left' | 'right', padding: number}) => {
   console.log(settings);
}

const layoutA = {
    align: 'left',
    padding: 20
} as const;

layout(layoutA);
layout({
        align: 'left',
        padding: 20
    }
);
