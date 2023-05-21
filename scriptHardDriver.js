var allItems=[];
$.ajax('http://localhost:3000/Hard_drive', {
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

//выбор Жёсткий диск
let form_hard_drive = document.getElementById("Hard_drive")
let select_hard_drive = form_hard_drive.getElementsByTagName('select')[0];
select_hard_drive.addEventListener("change", function(event){
document.getElementById("answer_hard_driv").innerHTML=""
    switch(select_hard_drive.value)
    {    
        case "1":
                let tb1=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === 'tb1'){
                        tb1.push(allItems[i]);
                    }
                    
                };
                let container_tb1 = document.getElementById("answer_hard_driv");
                let form_tb1 = container_tb1.getElementsByTagName("form")[0];
                if(!form_tb1){
                    form_tb1 = funk(tb1 ,"1 ТБ","Hard_drive")
                    container_tb1.appendChild(form_tb1)
                }   
            break;

        case "2":
                let tb2=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === 'tb2'){
                        tb2.push(allItems[i]);
                    }
                    
                };
                let container_tb2 = document.getElementById("answer_hard_driv")
                let form_tb2 = container_tb2.getElementsByTagName("form")[0];
                if(!form_tb2){
                    form_tb2 = funk(tb2 ,"2 ТБ","Hard_drive")
                    container_tb2.appendChild(form_tb2)
                }
                
            break; 

        case "4":
                let tb4=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === 'tb4'){
                        tb4.push(allItems[i]);
                    }
                    
                };
                let container_tb4 = document.getElementById("answer_hard_driv")
                let form_tb4 = container_tb2.getElementsByTagName("form")[0];
                if(!form_tb4){
                    form_tb4 = funk(tb4 ,"4 ТБ","Hard_drive")
                    container_tb4.appendChild(form_tb4)
                }
                
            break;

        case "6":
            let tb6=[]
            for(var i=0; i<allItems.length; i++){
                console.log(allItems[i])
                if (allItems[i].type === 'tb6'){
                    tb6.push(allItems[i]);
                }
                
            };
            let container_tb6 = document.getElementById("answer_hard_driv")
            let form_tb6 = container_tb6.getElementsByTagName("form")[0];
            if(!form_tb6){
                form_tb6 = funk(tb6 ,"6 ТБ","Hard_drive")
                container_tb6.appendChild(form_tb6)
            }
            
        break;

        case "8":
            let tb8=[]
            for(var i=0; i<allItems.length; i++){
                console.log(allItems[i])
                if (allItems[i].type === 'tb8'){
                    tb8.push(allItems[i]);
                }
                
            };
            let container_tb8 = document.getElementById("answer_hard_driv")
            let form_tb8 = container_tb8.getElementsByTagName("form")[0];
            if(!form_tb8){
                form_tb8 = funk(tb8 ,"8 ТБ","Hard_drive")
                container_tb8.appendChild(form_tb8)
            }
            
            break;
        
        case "10":
            let tb10=[]
            for(var i=0; i<allItems.length; i++){
                console.log(allItems[i])
                if (allItems[i].type === 'tb10'){
                    tb10.push(allItems[i]);
                }
                
            };
            let container_tb10 = document.getElementById("answer_hard_driv")
            let form_tb10 = container_tb10.getElementsByTagName("form")[0];
            if(!form_tb10){
                form_tb10 = funk(tb10 ,"10 ТБ","Hard_drive")
                container_tb10.appendChild(form_tb10)
            }
        
            break;
            
        case "12":
            let tb12=[]
            for(var i=0; i<allItems.length; i++){
                console.log(allItems[i])
                if (allItems[i].type === 'tb12'){
                    tb12.push(allItems[i]);
                }
                
            };
            let container_tb12 = document.getElementById("answer_hard_driv")
            let form_tb12 = container_tb12.getElementsByTagName("form")[0];
            if(!form_tb12){
                form_tb12 = funk(tb12 ,"12 ТБ","Hard_drive")
                container_tb12.appendChild(form_tb12)
            }
        
            break;
    }
})