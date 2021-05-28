function dvigubinu(list) {
    const dvigubasSarasas = [];

    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        dvigubasSarasas.push(item * 2)

    }
    return dvigubasSarasas;
}
module.exports = dvigubinu;

