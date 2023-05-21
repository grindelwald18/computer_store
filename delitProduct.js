function createSelect(optionsArray) {
    let select = document.createElement("select");
    
  
    for (let option of optionsArray) {
      let optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.textContent = option;
      select.appendChild(optionElement);
    }
  
    return select;
}

let form_selectDelit = document.getElementById("selectDelit")
let select_selectDelit = form_selectDelit.getElementsByTagName('select')[0];  
select_selectDelit.addEventListener("change", function (event) {
document.getElementById("answer-selectDelit").innerHTML = ""
let container = document.getElementById("answer-selectDelit");
let form = container.getElementsByTagName("form")[0];
if (form) {
  container.removeChild(form);
}
    switch (select_selectDelit.value) {
        case "computer":
           
            let computer = ["Intel","Ryzen"];
              form = createSelect(computer);
              container.appendChild(form);
              break;

        case "cooling":
            let cooling = ["ВОДЯНОЕ ОХЛАЖНЕНИЕ","ВОЗДУШНОЕ ОХЛАЖДЕНИЕ"];
              form = createSelect(cooling);
              container.appendChild(form);
              break; 
        default: console.log(00)      
    }
})

let form_newselectDelit = document.getElementById("answer-selectDelit")
let select_newselectDelit = form_newselectDelit.getElementsByTagName("select")[0];  
console.log(form_newselectDelit.children)
console.log(select_newselectDelit)
select_newselectDelit.addEventListener("change", function (event) {
document.getElementById("answer-newselectDelit").innerHTML = ""
let container = document.getElementById("answer-newselectDelit");
let form = container.getElementsByTagName("form")[0];
if (form) {
  container.removeChild(form);
}
    switch (select_newselectDelit.value) {
        case "Intel":
           
            let newIntel = ["Intel I3","Intel I5"];
              form = createSelect(newIntel, "Intel");
              container.appendChild(form);
              break;

        case "Ryzen":
            let newRyzen = ["ВОДЯНОЕ ОХЛАЖНЕНИЕ","ВОЗДУШНОЕ ОХЛАЖДЕНИЕ"];
              form = createSelect(newRyzen, "cooling");
              container.appendChild(form);
              break; 
    }
})