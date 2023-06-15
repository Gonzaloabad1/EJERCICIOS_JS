const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 382 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 1 }
    ];
    let totalVentas = 0;
    for (let i = 0; i < products.length; i++) {
    totalVentas += products[i].sellCount;
    }
    const mediaVentas = totalVentas / products.length;
    console.log(`El total de ventas de todos los productos es: ${totalVentas}`);
    console.log(`La media de ventas de todos los productos es: ${mediaVentas}`);    