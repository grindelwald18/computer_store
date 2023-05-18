var allItems=[];
$.ajax('http://localhost:3000/ram', {
    method: 'get',
    success: function(data){
        console.log(data);
        for(var i=0; i<data.length; i++){
            var Items = {
                name: data[i].name,
                type: data[i].type,
                price: data[i].price
            };
            allItems.push(Items);
        };
        console.log(Items)

    },
    error: function(err){

    } 
})
//выбор Оперативная память
let form_ram = document.getElementById("RAM")
let select_ram = form_ram.getElementsByTagName('select')[0];
select_ram.addEventListener("change", function(event){
document.getElementById("answer_ram").innerHTML=""
    switch(select_ram.value)
    {    
        case "HyperX":
                let HyperX=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === 'HyperX'){
                        HyperX.push(allItems[i]);
                    }
                    
                };
                let container_HyperX = document.getElementById("answer_ram");
                let form_HyperX = container_HyperX.getElementsByTagName("form")[0];
                if(!form_HyperX){
                    form_HyperX = funk(HyperX ,"HyperX","RAM")
                    container_HyperX.appendChild(form_HyperX)
                }   
            break;

        case "THERMALTAKE":
            let THERMALTAKE=[]
            for(var i=0; i<allItems.length; i++){
                console.log(allItems[i])
                if (allItems[i].type === 'THERMALTAKE'){
                    THERMALTAKE.push(allItems[i]);
                }
                
            };
            let container_THERMALTAKE = document.getElementById("answer_ram")
            let form_THERMALTAKE = container_THERMALTAKE.getElementsByTagName("form")[0];
            if(!form_THERMALTAKE){
                form_THERMALTAKE = funk(THERMALTAKE ,"THERMALTAKE","RAM")
                container_THERMALTAKE.appendChild(form_THERMALTAKE)
            }
                
            break;     
    }
})