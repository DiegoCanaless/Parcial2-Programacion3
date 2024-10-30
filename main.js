import { setInLocalStorage } from "./src/persistence/localStorage";
import { renderCategories } from "./src/services/categories";
import { openModal } from "./src/views/modal";
import { handleSearchProductByName } from "./src/views/searchBar";
import { handleGetProductsToStore } from "./src/views/store";
import "./style.css"


// --- Aplicacion ---

export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn)=>{
    categoriaActiva = categoriaIn
}

export let productoActivo = null;

export const setProductoActivo = (productoIn)=>{
    productoActivo = productoIn
}

handleGetProductsToStore();


renderCategories();


const buttonAdd = document.getElementById('buttonAddElement')

buttonAdd.addEventListener("click", ()=>{
    openModal();
})


//Search button

const buttonSearch = document.getElementById("buttonSearch");

buttonSearch.addEventListener("click", () =>{
    handleSearchProductByName();
})
 
