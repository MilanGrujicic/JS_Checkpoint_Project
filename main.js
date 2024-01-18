let c = 0
for (let i = 2000; i<3001; i++) {
    if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
        console.log(i)
        c += 1
    }
}
console.log(c)