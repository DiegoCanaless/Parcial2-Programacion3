
import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";

// Guardar o modificar elementos


const acceptButton = document.getElementById("acceptButton")

acceptButton.addEventListener('click',() =>{
    handleSaveOrModifyElements();
})

const handleSaveOrModifyElements = ()=>{
    const nombre = document.getElementById("nombre").value;
    const img = document.getElementById("img").value;
    const precio = document.getElementById("precio").value;
    const categoria = document.getElementById("categoria").value;

    let object = null;

    if(productoActivo){
        object={
            ...productoActivo,
            nombre,
            img,
            precio,
            categoria,
        }
    }else{
        object = {
            id:new Date().toISOString(),
            nombre,
            img,
            precio,
            categoria,
        };
    }


    Swal.fire({
        title: "Correcto",
        text: "Producto guardado exitosamente!",
        icon: "success"
      });

    

    setInLocalStorage(object)
    handleGetProductsToStore();
    closeModal();
};

export const handleDeleteProduct = () =>{
    
    Swal.fire({
        title: "¿Estas seguro?",
        text: "Si lo eliminas sera permanente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el) => el.id !== productoActivo.id);
            
            localStorage.setItem('products', JSON.stringify(result));
        
            const newProducts = handleGetProductLocalStorage();
        
            handleRenderList(newProducts);
            closeModal();
        }else{
            closeModal();
        }
      });
    
    
    
    
}