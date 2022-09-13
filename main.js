const prendas =[];
const carrito =[];

const carta= document.querySelector(".carta");

class Prenda{
    constructor(id, tipo, color, talle, precio, url){
        this.id= id;
        this.tipo= tipo;
        this.color= color;
        this.talle= talle;
        this.precio= parseFloat(precio);
        this.url= url;
    }
    sumarIva(){
        return this.precio += 1.21;
    }
}

function cargarPrendas(){
prendas.push(new Prenda(1, "Buzo", "Negro", "L", 4200, "https://http2.mlstatic.com/D_NQ_NP_979127-MLA45406881553_032021-O.webp"));
prendas.push(new Prenda(2, "Pantalon", "Negro", 38, 3500, "https://www.tradeinn.com/f/13809/138097991/only---sons-pantalones-leo-linen-mix-gw-3002.jpg"));
prendas.push(new Prenda(3, "Remera", "Gris", "S", 3000, "https://royalpadel.com.ar/web2/wp-content/uploads/2019/10/REMERA-MADRID-1.jpg"));
prendas.push(new Prenda(4, "Campera", "Azul", "M", 13000, "https://www.tiendalibero.com.ar/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/a/_/a_63_6.jpg"))
prendas.push(new Prenda(5, "Conjunto", "Negro", 38, 11500, "https://images-na.ssl-images-amazon.com/images/I/61hHRlvzgPL._AC_UX522_.jpg"));
}

cargarPrendas();

console.log(prendas);


for (const prendita of prendas) {
    let div = document.createElement('div')

    div.innerHTML=`
    <h3>${prendita.tipo}</h3>
    <p>${prendita.color}</p>
    <p>${prendita.talle}</p>
    <p>$${prendita.precio}</p>
    <img src="${prendita.url}" alt="">`
    
    carta.append(div)
}
