// $(".set-bg").each(function(){
//     var bg=$(this).data(setbg);
//     $(this).css("background-image", "url(" + bg + ")");

// const { Console } = require("console");

// });
// AOS.init({
//     disable: "mobile",
//     duration: 800,
//     anchorPlacement: "center-bottom",
// });

var allItems=[];
$.ajax('http://localhost:3000/computer', {
    method: 'get',
    success: function(data){
        // console.log(data);
        for(var i=0; i<data.length; i++){
            var Items = {
                name: data[i].name,
                type: data[i].type,
                price: data[i].price 
            };
            allItems.push(Items);
        };
        // console.log(Items)

    },
    error: function(err){

    } 
})

let selected = 0
let obj={

}

// Create a handler object to intercept operations
const handler = {
  set(target, property, value) {
    // Perform the default property assignment
    let sumobj=0
    target[property] = value;
    for(let sum of Object.values(target)){
        sumobj+=Number(sum);
    }
    // Update the HTML page with the new value
    updateHtml(sumobj);
    

    // Indicate the operation was successful
    return true;
  }
};

// Create a proxy object with the handler
obj = new Proxy(obj, handler);


// Function to update the HTML page
function updateHtml(value) {
  // Update the HTML element with the given property and value
  const element = document.getElementById('sum');
  if (element) {
    element.textContent = value;
    element.classList.add('animate-increment'); // Add the animation class
    setTimeout(() => {
      element.classList.remove('animate-increment'); // Remove the animation class after the animation is finished
    }, 300);
  }
}

const inputElement = document.getElementById('sum');
inputElement.addEventListener('input', (event) => {
const newValue = parseInt(event.target.value) || 0;
    obj.selected = newValue;
});

function funk(my_arr, name, category){
    let form = document.createElement("form")
    form.id="IntelSelect"
    for(k of my_arr){
        let label = document.createElement("label")
        let div = document.createElement("div")
        label.setAttribute("form", k.name)
        label.textContent=k.name
        // label.style.width="400px"
        label.className="li_label"
        let radio= document.createElement("input")
        radio.type="radio"
        radio.id=k.name
        radio.name=name
        radio.value = k.price
        // console.log(radio, form)
        div.appendChild(radio)
        div.appendChild(label)
        form.appendChild(div)
        // console.log(radio)
        radio.addEventListener("change", function(event){
            // selected += Number(radio.value)
            obj[category]=radio.value
            // console.log(selected)
        })
    }
    return form
}

//выбор процессора
let form = document.getElementById("processor")
let select = form.getElementsByTagName('select')[0];
// console.log(select)
select.addEventListener("change", function(event){
document.getElementById("answer-processor").innerHTML=""
    switch(select.value)
    {    
        case "Intel":
                let intel_device=[];
                // console.log(allItems.length)
                for(var i=0; i<allItems.length; i++){
                    // console.log(allItems[i])
                    if (allItems[i].type === 'processorIntel'){
                        intel_device.push(allItems[i]);
                        // console.log(allItems[i].price)
                    }
                    
                };
                let container = document.getElementById("answer-processor")
                let form = container.getElementsByTagName("form")[0];
                if(!form){
                    form=funk(intel_device, 'Intel','processor')           
                    container.appendChild(form)
                }
                // console.log(container)
            break;

        case "Ryzen":
                let amd_device = [];
                for(var i=0; i<allItems.length; i++){
                    // console.log(allItems[i])
                    if (allItems[i].type === 'processorRyzen'){
                        amd_device.push(allItems[i]);
                    }
                    
                };
                let container_amd = document.getElementById("answer-processor")
                let form_amd = container_amd.getElementsByTagName("form")[0];
                if(!form_amd){
                    form_amd=funk(amd_device ,"Ryzen",'processor')
                    container_amd.appendChild(form_amd)
                }            
            break;    
    }
})

//выбор охлаждения
let form_cooling = document.getElementById("cooling")
let select_cooling = form_cooling.getElementsByTagName('select')[0];
select_cooling.addEventListener("change", function(event){
document.getElementById("answer-cooling").innerHTML=""
switch(select_cooling.value)
    {    
        case "water":
                let water_cooling=[]
                for(var i=0; i<allItems.length; i++){
                    if (allItems[i].type === 'water'){
                        water_cooling.push(allItems[i]);
                    }
                    
                };
                let container_water_cooling = document.getElementById("answer-cooling");
                let form_water_cooling = container_water_cooling.getElementsByTagName("form")[0];
                if(!form_water_cooling){
                    form_water_cooling = funk(water_cooling ,"Water",'cooling')
                    container_water_cooling.appendChild(form_water_cooling)
                }   
            break;

        case "air":
                let air_cooling=[]
                for(var i=0; i<allItems.length; i++){
                    // console.log(allItems[i])
                    if (allItems[i].type === 'air'){
                        air_cooling.push(allItems[i]);
                    }
                    
                };
                let container_air = document.getElementById("answer-cooling")
                let form_air = container_air.getElementsByTagName("form")[0];
                if(!form_air){
                    form_air = funk(air_cooling ,"Air",'cooling')
                    container_air.appendChild(form_air)
                }
                
            break;    
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                // console.log(allItems[i])
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
                // console.log(allItems[i])
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
                // console.log(allItems[i])
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
                // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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
                    // console.log(allItems[i])
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