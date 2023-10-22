let suffix: string | null = 'hello';

if (suffix != null) {
    let exampleOne: string = 'jane' + suffix.toUpperCase();
    const suffixLocal = suffix;

    ['jane', 'john'].forEach((name) => {
        // let exampleTwo: string = name + suffix.toUpperCase();
        let exampleTwo: string = name + suffixLocal.toUpperCase();
    });
}