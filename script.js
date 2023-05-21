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
                console.log(allItems.length)
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
                    if (allItems[i].type === 'processorIntel'){
                        intel_device.push(allItems[i]);
                        console.log(allItems[i].price)
                    }
                    
                };
                let container = document.getElementById("answer-processor")
                let form = container.getElementsByTagName("form")[0];
                if(!form){
                    form=funk(intel_device, 'Intel','processor')           
                    container.appendChild(form)
                }
                console.log(container)
            break;

        case "Ryzen":
                let amd_device = [];
                for(var i=0; i<allItems.length; i++){
                    console.log(allItems[i])
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
                    console.log(allItems[i])
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
                    console.log(allItems[i])
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


