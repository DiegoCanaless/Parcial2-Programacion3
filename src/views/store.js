// Store

import { setProductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { openModal } from "./modal";


export const handleGetProductsToStore = () =>{
    const products = handleGetProductLocalStorage()
    handleRenderList(products);

}

export const handleRenderList = (productosIn) =>{
    const burgers = productosIn.filter((el) => el.categoria === "Hamburguesas")

    const papas = productosIn.filter((el) => el.categoria === "Papas")

    const gaseosas = productosIn.filter((el) => el.categoria === "Gaseosas")

    const renderProductGroup = (productos, titulo)=>{
        if(productos.length>0){
            const productosHTML = productos.map((producto, index) => {
                return `<div class="containerTargetItem" id="product-${producto.categoria}-${index}">
                    <div>
                        <img src="${producto.img}"/>
                        <div >
                            <h2>${producto.nombre}</h2>
                        </div>
                        <div class="targetProps">
                            <p><b>Precio:</b>$ ${producto.precio}</p>
                        </div>
                    </div>
                </div>
                `
            })

            return `
                <section class="sectionStore">
                    <div class="containerTitleSection">
                    <h3>${titulo}</h3>
                    </div>
                    <div class="containerProductStore">
                        ${productosHTML.join("")}
                    </div>
                </section>
            `
        } else {
            return ""
        }
    }

    //Renderizado de los productos

    const appContainer = document.getElementById("storeContainer")

    appContainer.innerHTML = `
    ${renderProductGroup(burgers,"Hamburguesas")}
    ${renderProductGroup(papas,"Papas")}
    ${renderProductGroup(gaseosas,"Gaseosas")}
    `;

    const addEvents = (productosIn) => {
        if(productosIn){
            productosIn.forEach((element, index) => {
                const productContainer = document.getElementById(`product-${element.categoria}-${index}`);
                if (productContainer) {
                    productContainer.addEventListener("click", () => {
                        setProductoActivo(element);
                        openModal();
                    });
                }
            });
        }
        
    };

    addEvents(burgers)
    addEvents(papas)
    addEvents(gaseosas)
}