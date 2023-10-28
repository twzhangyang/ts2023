type RecordX<X extends keyof any, Y> = {
    [P in X]: Y;
}

type Pages = RecordX<'home' | 'contact', {id: string, title: string}>

const pages: Pages = {
    home: {
        id: '1',
        title: 'Home'
    },
    contact: {
        id: '2',
        title: 'Contact'
    }
};