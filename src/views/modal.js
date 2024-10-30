//-----  POPUP -----

import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/product";

const cancelButton = document.getElementById("cancelButton");

cancelButton.addEventListener("click", ()=>{
    handleCancelButton();
})

const handleCancelButton = ()=>{
    closeModal();
}


// FUNCIONES DEL MODAL

export const openModal = ()=>{
    const modal = document.getElementById('modalPopUP');
    modal.style.display= "flex";
    const buttonDelete = document.getElementById("deleteButton")

    if(productoActivo){
        buttonDelete.style.display = "block"
    }else{
        buttonDelete.style.display = "none"
    }

    if(productoActivo){
        const nombre = document.getElementById("nombre");
        const img = document.getElementById("img");
        const precio = document.getElementById("precio");
        const categoria = document.getElementById("categoria");

        nombre.value = productoActivo.nombre;
        img.value = productoActivo.img;
        precio.value = productoActivo.precio;
        categoria.value = productoActivo.categoria;

    }
}

export const closeModal = ()=>{
    const modal = document.getElementById('modalPopUP');

    modal.style.display= "none";
    setProductoActivo(null);
    resetModal();
}

const resetModal =() =>{
    const nombre = document.getElementById("nombre");

    const img = document.getElementById("img");

    const precio = document.getElementById("precio");

    const categoria = document.getElementById("categoria");

    nombre.value = "";
    img.value = "";
    precio.value = 0;
    categoria.value = "Seleccione una categoria";
};

const deleteButton = document.getElementById('deleteButton')

deleteButton.addEventListener("click", () =>{
    handlebuttonDelete();
})

const handlebuttonDelete = () =>{
    handleDeleteProduct()
}


