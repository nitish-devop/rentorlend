{
    let createProduct = function(){
        let productFormData = $("#createProductForm");
        console.log(productFormData)

        
        productFormData.submit(function(e){
            e.preventDefault();
            console.log(...productFormData);

            $.ajax({
                type : 'post',
                url : '/products/create',
                data : productFormData.serialize(),
                success : function(data){
                    console.log(data); 
                },
                error : function(error){
                    console.log(error.responseText);
                }
            })
        })

        
    }
    createProduct();
}