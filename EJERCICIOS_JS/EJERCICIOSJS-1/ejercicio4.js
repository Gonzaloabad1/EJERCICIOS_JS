const productos = [
    { nombre: "Funko Dr. Strange", sellCount: 10 },
    { nombre: "Mochila de protones: Ghostbusters", sellCount: 23 },
    { nombre: "Sable laser FX", sellCount: 6 },
    { nombre: "Varita de Voldemort", sellCount: 302 }
    ];
    let totalVentas = 0;
    for (let i = 0; i < productos.length; i++) {
    totalVentas += productos[i].sellCount;
    }
    console.log(`El total de ventas de todos los productos es: ${totalVentas}`);