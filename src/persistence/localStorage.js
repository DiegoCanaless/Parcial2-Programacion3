// ----- LocalStorage -----

export const handleGetProductLocalStorage = () =>{
    const products = JSON.parse(localStorage.getItem("products"))

    if(products){
        return products
    }else{
        return [];
    }
}

// Guardar LocalStorage

export const setInLocalStorage = (productIn) =>{
    
    if(productIn){
        let producsInLocal = handleGetProductLocalStorage();

        const existingIndex = producsInLocal.findIndex((productsLocal) =>
            productsLocal.id === productIn.id
        )
    
    

        if(existingIndex !== -1){
            producsInLocal[existingIndex] = productIn;
        } else{
            producsInLocal.push(productIn)
        }
    
    
        localStorage.setItem('products', JSON.stringify(producsInLocal))
    }

    
}