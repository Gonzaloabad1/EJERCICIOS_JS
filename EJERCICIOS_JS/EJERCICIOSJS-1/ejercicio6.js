const goodProducts = [];
const badProducts = [];
const products = [
{ name: "Funko Dr. Strange", sellCount: 18 },
{ name: "Mochila de protones: Ghostbusters", sellCount: 302 },
{ name: "Sable laser FX", sellCount: 23 },
{ name: "Varita de Voldemort", sellCount: 6 }
];
for (let i = 0; i < products.length; i++) {
const product = products[i];
if (product.sellCount > 28) {
goodProducts.push(product);
} else {
badProducts.push(product);
}
}
console.log("Productos buenos:", goodProducts);
console.log("Productos malos:", badProducts);