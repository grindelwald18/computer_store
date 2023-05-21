var allItems=[];
$.ajax('http://localhost:3000/motherboard', {
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

//выбор материнской платы
let form_motherboard = document.getElementById("Motherboard")
let select_motherboard = form_motherboard.getElementsByTagName('select')[0];
select_motherboard.addEventListener("change", function(event){
document.getElementById("answer-motherboard").innerHTML=""
    switch(select_motherboard.value)
    {    
        case "ASUS":

                let asus_motherboard=[];
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === 'asus'){
                        asus_motherboard.push(allItems[i]);
                    }  
                };
                let container_asus_motherboard = document.getElementById("answer-motherboard");
                let form_asus_motherboard = container_asus_motherboard.getElementsByTagName("form")[0];
                if(!form_asus_motherboard){
                    form_asus_motherboard = funk(asus_motherboard ,"ASUS","Motherboard")
                    container_asus_motherboard.appendChild(form_asus_motherboard)
                }   
            break;

        case "GIGABYTE":
                let gigabyte_motherboard=[]
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === 'gigabyte'){
                        gigabyte_motherboard.push(allItems[i]);
                    }  
                };
                let container_gigabyte_motherboard = document.getElementById("answer-motherboard")
                let form_gigabyte_motherboard = container_gigabyte_motherboard.getElementsByTagName("form")[0];
                if(!form_gigabyte_motherboard){
                    form_gigabyte_motherboard = funk(gigabyte_motherboard ,"GIGABYTE","Motherboard")
                    container_gigabyte_motherboard.appendChild(form_gigabyte_motherboard)
                }
                
            break;     
    }
})