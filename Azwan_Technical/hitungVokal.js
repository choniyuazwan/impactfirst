function hitungVokal(str) {
    let vokal = str.match(/[aeiou]/gi);
    return vokal == null ? 0 : vokal.length;
}

console.log(hitungVokal('menghitung huruf vokal dari sebuah string'));