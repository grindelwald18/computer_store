var allItems=[];
$.ajax('http://localhost:3000/Power', {
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

//выбор Блок питания
let form_power = document.getElementById("power")
let select_power = form_power.getElementsByTagName('select')[0];
select_power.addEventListener("change", function(event){
document.getElementById("answer_power").innerHTML=""
    switch(select_power.value)
    {    
        case "500W":
                let W500=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === 'W500'){
                        W500.push(allItems[i]);
                    }
                    
                };
                let container_W500 = document.getElementById("answer_power");
                let form_W500 = container_W500.getElementsByTagName("form")[0];
                if(!form_W500){
                    form_W500 = funk(W500 ,"500W","power")
                    container_W500.appendChild(form_W500)
                }   
            break;
        case "600W":
                let W600=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === 'W600'){
                        W600.push(allItems[i]);
                    }
                    
                };
                let container_W600 = document.getElementById("answer_power");
                let form_W600 = container_W600.getElementsByTagName("form")[0];
                if(!form_W600){
                    form_W600 = funk(W600 ,"600W","power")
                    container_W600.appendChild(form_W600)
                }   
            break;
        case "700W":
                let W700=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === 'W700'){
                        W700.push(allItems[i]);
                    }
                    
                };
                let container_W700 = document.getElementById("answer_power");
                let form_W700 = container_W700.getElementsByTagName("form")[0];
                if(!form_W700){
                    form_W700 = funk(W700 ,"700W","power")
                    container_W700.appendChild(form_W700)
                }   
            break;
        case "800W":
                let W800=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === 'W800'){
                        W800.push(allItems[i]);
                    }
                    
                };
                let container_W800 = document.getElementById("answer_power");
                let form_W800 = container_W800.getElementsByTagName("form")[0];
                if(!form_W800){
                    form_W800 = funk(W800 ,"800W","power")
                    container_W800.appendChild(form_W800)
                }   
            break;
        case "1000W":
                let W1000=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === 'W1000'){
                        W1000.push(allItems[i]);
                    }
                    
                };
                let container_W1000 = document.getElementById("answer_power");
                let form_W1000 = container_W1000.getElementsByTagName("form")[0];
                if(!form_W1000){
                    form_W1000 = funk(W1000 ,"1000W","power")
                    container_W1000.appendChild(form_W1000)
                }   
            break;
    }
})