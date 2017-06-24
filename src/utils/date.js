function pad(n) {
    return n < 10 ? `0${n}` : `${n}`;
}

export function today() {
    const date = new Date();
    console.log(date);
    return `${pad(date.getDate())}/${pad(date.getMonth())}/${date.getFullYear()}`;
}
