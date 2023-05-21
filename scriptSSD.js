var allItems=[];
$.ajax('http://localhost:3000/SSD', {
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
//выбор SSD диск
let form_SSD1 = document.getElementById("SSD1")
let select_SSD1 = form_SSD1.getElementsByTagName('select')[0];
select_SSD1.addEventListener("change", function(event){
document.getElementById("answer_SSD1").innerHTML=""
    switch(select_SSD1.value)
    {    
        case "120GB":
                let gb120=[]
                for(var i=0; i<allItems.length; i++){
                    if (allItems[i].type === 'gb120'){
                        gb120.push(allItems[i]);
                    }
                    
                };
                let container_gb120 = document.getElementById("answer_SSD1");
                let form_gb120 = container_gb120.getElementsByTagName("form")[0];
                if(!form_gb120){
                    form_gb120 = funk(gb120 ,"120 ГБ","SSD1")
                    container_gb120.appendChild(form_gb120)
                }   
            break;
        
        case "240GB":
            let gb240=[]
            for(var i=0; i<allItems.length; i++){
                if (allItems[i].type === 'gb240'){
                    gb240.push(allItems[i]);
                }
                
            };
            let container_gb240 = document.getElementById("answer_SSD1");
            let form_gb240 = container_gb240.getElementsByTagName("form")[0];
            if(!form_gb240){
                form_gb240 = funk(gb240 ,"240 ГБ","SSD1")
                container_gb240.appendChild(form_gb240)
            }   
            break;

        case "480GB":
                let gb480=[]
                for(var i=0; i<allItems.length; i++){
                    if (allItems[i].type === 'gb480'){
                        gb480.push(allItems[i]);
                    }
                    
                };
                let container_gb480 = document.getElementById("answer_SSD1");
                let form_gb480 = container_gb480.getElementsByTagName("form")[0];
                if(!form_gb480){
                    form_gb480 = funk(gb480 ,"480 ГБ","SSD1")
                    container_gb480.appendChild(form_gb480)
                }   
            break;
        case "1TB":
                let tb1=[]
                for(var i=0; i<allItems.length; i++){
                    if (allItems[i].type === 'ssdtb1'){
                        tb1.push(allItems[i]);
                    }
                    
                };
                let container_tb1 = document.getElementById("answer_SSD1");
                let form_tb1 = container_tb1.getElementsByTagName("form")[0];
                if(!form_tb1){
                    form_tb1 = funk(tb1 ,"1 ТБ","SSD1")
                    container_tb1.appendChild(form_tb1)
                }   
            break;
        
        case "2TB":
            let tb2=[]
            for(var i=0; i<allItems.length; i++){
                if (allItems[i].type === 'ssdtb2'){
                    tb2.push(allItems[i]);
                }
                
            };
            let container_tb2 = document.getElementById("answer_SSD1");
            let form_tb2 = container_tb2.getElementsByTagName("form")[0];
            if(!form_tb2){
                form_tb2 = funk(tb2 ,"2 ТБ","SSD1")
                container_tb2.appendChild(form_tb2)
                }   
            break;    
        case "4TB":
            let tb4=[]
            for(var i=0; i<allItems.length; i++){
                if (allItems[i].type === 'ssdtb4'){
                    tb4.push(allItems[i]);
                }
                
            };
            let container_tb4 = document.getElementById("answer_SSD1");
            let form_tb4 = container_tb4.getElementsByTagName("form")[0];
            if(!form_tb4){
                form_tb4 = funk(tb4 ,"4 ТБ","SSD1")
                container_tb4.appendChild(form_tb4)
                }   
            break;    
    }
})