
console.log(null == null); //true
console.log(undefined == undefined); // true
console.log(undefined == null); //true
// therefore we could handle null and undefined by == null

const decorate = (value: string | null | undefined) => {
    if (value == null) {
        return value;
    }
    return `-- ${value.trim()} --`
}

const result = null;
if (result == null) {
    console.log("Null or Undefined", result);
}
if (result != null) {
    console.log('Boolean', result)
}