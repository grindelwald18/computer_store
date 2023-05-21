
var allItems=[];
$.ajax('http://localhost:3000/video_card', {
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

//выбор Видеокарта
let form_video_card = document.getElementById("video_card")
let select_video_card = form_video_card.getElementsByTagName('select')[0];
select_video_card.addEventListener("change", function(event){
document.getElementById("answer_video_card").innerHTML=""
    switch(select_video_card.value)
    {    
        case "3050":
                let card_3050=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === '3050'){
                        card_3050.push(allItems[i]);
                    }
                    
                };
                let container_card_3050 = document.getElementById("answer_video_card");
                let form_3050 = container_card_3050.getElementsByTagName("form")[0];
                if(!form_3050){
                    form_3050 = funk(card_3050 ,"video_card","video_card")
                    container_card_3050.appendChild(form_3050)
                }   
            break;

        case "3060TI":
                let card_3060TI=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === '3060TI'){
                        card_3060TI.push(allItems[i]);
                    }
                    
                };
                let container_card_3060TI = document.getElementById("answer_video_card")
                let form_3060TI = container_card_3060TI.getElementsByTagName("form")[0];
                if(!form_3060TI){
                    form_3060TI = funk(card_3060TI ,"video_card","video_card")
                    container_card_3060TI.appendChild(form_3060TI)
                }
                
            break;     
        case "3070":
                let card_3070=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === '3070'){
                        card_3070.push(allItems[i]);
                    }
                    
                };
                let container_card_3070 = document.getElementById("answer_video_card")
                let form_3070 = container_card_3070.getElementsByTagName("form")[0];
                if(!form_3070){
                    form_3070 = funk(card_3070 ,"video_card","video_card")
                    container_card_3070.appendChild(form_3070)
                }
                
            break;     
        case "3070TI":
                let card_3070TI=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === '3070TI'){
                        card_3070TI.push(allItems[i]);
                    }
                    
                };
                let container_card_3070TI = document.getElementById("answer_video_card")
                let form_3070TI = container_card_3070TI.getElementsByTagName("form")[0];
                if(!form_3070TI){
                    form_3070TI = funk(card_3070TI ,"video_card","video_card")
                    container_card_3070TI.appendChild(form_3070TI)
                }
                
            break;     
        case "3080":
                let card_3080=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === '3080'){
                        card_3080.push(allItems[i]);
                    }
                    
                };
                let container_card_3080 = document.getElementById("answer_video_card")
                let form_3080 = container_card_3080.getElementsByTagName("form")[0];
                if(!form_3080){
                    form_3080 = funk(card_3080 ,"video_card","video_card")
                    container_card_3080.appendChild(form_3080)
                }
                
            break;     
        case "3090":
                let card_3090=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === '3090'){
                        card_3090.push(allItems[i]);
                    }
                    
                };
                let container_card_3090 = document.getElementById("answer_video_card")
                let form_3090 = container_card_3090.getElementsByTagName("form")[0];
                if(!form_3090){
                    form_3090 = funk(card_3090 ,"video_card","video_card")
                    container_card_3090.appendChild(form_3090)
                }
                
            break;     
        case "4080":
                let card_4080=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === '4080'){
                        card_4080.push(allItems[i]);
                    }
                    
                };
                let container_card_4080 = document.getElementById("answer_video_card")
                let form_4080 = container_card_4080.getElementsByTagName("form")[0];
                if(!form_4080){
                    form_4080 = funk(card_4080 ,"video_card","video_card")
                    container_card_4080.appendChild(form_4080)
                }
                
            break;     
        case "4090":
                let card_4090=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === '4090'){
                        card_4090.push(allItems[i]);
                    }
                    
                };
                let container_card_4090 = document.getElementById("answer_video_card")
                let form_4090 = container_card_4090.getElementsByTagName("form")[0];
                if(!form_4090){
                    form_4090 = funk(card_4090 ,"video_card","video_card")
                    container_card_4090.appendChild(form_4090)
                }
                
            break;     
    }
})