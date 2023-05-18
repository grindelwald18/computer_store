var allItems=[];
$.ajax('http://localhost:3000/Monitor', {
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

//выбор монитор
let form_monitor = document.getElementById("monitor")
let select_monitor = form_monitor.getElementsByTagName('select')[0];
select_monitor.addEventListener("change", function(event){
document.getElementById("answer_monitor").innerHTML=""
    switch(select_monitor.value)
    {    
        case "22":
                let inch22=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === 'inch22'){
                        inch22.push(allItems[i]);
                    }
                    
                };
                let container_inch22 = document.getElementById("answer_monitor");
                let form_inch22 = container_inch22.getElementsByTagName("form")[0];
                if(!form_inch22){
                    form_inch22 = funk(inch22 ,"inch22","monitor")
                    container_inch22.appendChild(form_inch22)
                }   
            break;
        case "24":
                let inch24=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === 'inch24'){
                        inch24.push(allItems[i]);
                    }
                    
                };
                let container_inch24 = document.getElementById("answer_monitor");
                let form_inch24 = container_inch24.getElementsByTagName("form")[0];
                if(!form_inch24){
                    form_inch24 = funk(inch24 ,"inch24","monitor")
                    container_inch24.appendChild(form_inch24)
                }   
            break;
        case "27":
                let inch27=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === 'inch27'){
                        inch27.push(allItems[i]);
                    }
                    
                };
                let container_inch27 = document.getElementById("answer_monitor");
                let form_inch27 = container_inch27.getElementsByTagName("form")[0];
                if(!form_inch27){
                    form_inch27 = funk(inch27 ,"inch27","monitor")
                    container_inch27.appendChild(form_inch27)
                }   
            break;
        case "30":
                let inch30=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === 'inch30'){
                        inch30.push(allItems[i]);
                    }
                    
                };
                let container_inch30 = document.getElementById("answer_monitor");
                let form_inch30 = container_inch30.getElementsByTagName("form")[0];
                if(!form_inch30){
                    form_inch30 = funk(inch30 ,"inch30","monitor")
                    container_inch30.appendChild(form_inch30)
                }   
            break;
        case "34":
                let inch34=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === 'inch34'){
                        inch34.push(allItems[i]);
                    }
                    
                };
                let container_inch34 = document.getElementById("answer_monitor");
                let form_inch34 = container_inch34.getElementsByTagName("form")[0];
                if(!form_inch34){
                    form_inch34 = funk(inch34 ,"inch34","monitor")
                    container_inch34.appendChild(form_inch34)
                }   
            break;
      
    }
})