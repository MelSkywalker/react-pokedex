function addZeros(num: number): string {
    let str = num.toString();
    while (str.length < 3) {
        str = "0" + str;
    }
    return str;
}

function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export { addZeros, capitalize };
