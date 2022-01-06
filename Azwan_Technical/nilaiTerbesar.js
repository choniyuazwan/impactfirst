function nilaiTerbesar(list) {
    if (list.length == 1) return list[0];
    if (list[0] > list[1]) list[1] = list[0];
    list = list.splice(1);
    return nilaiTerbesar(list);
}

console.log(nilaiTerbesar([2,3,1,5,4,6,7,7,6]))