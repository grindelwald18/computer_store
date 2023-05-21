function funk(my_arr, name) {
    let form = document.createElement("form")
    form.id = "IntelSelect"
    for (k of my_arr) {
        let label = document.createElement("label")
        let div = document.createElement("div")
        label.setAttribute("for", k)
        label.textContent = k
        // label.style.width="400px"
        label.className = "li_label"
        let radio = document.createElement("input")
        radio.type = "radio"
        radio.id = k
        radio.name = name
        radio.value = k
        // console.log(radio, form)
        div.appendChild(radio)
        div.appendChild(label)
        form.appendChild(div)
        console.log(radio)
    }
    return form
}

let form_selectType = document.getElementById("selectType")
let select_selectType = form_selectType.getElementsByTagName('select')[0];  
select_selectType.addEventListener("change", function (event) {
document.getElementById("answer-selectType").innerHTML = ""
let container = document.getElementById("answer-selectType");
let form = container.getElementsByTagName("form")[0];
if (form) {
  container.removeChild(form);
}
    switch (select_selectType.value) {
        case "computer":
           
            let computer = ["processorIntel","processorRyzen"];
              form = funk(computer, "computer");
              container.appendChild(form);
              break;

        case "cooling":
            let cooling = ["air","water"];
              form = funk(cooling, "cooling");
              container.appendChild(form);
              break; 
    }
})



document.getElementById('add').addEventListener('click', function () {
    // if (localStorage.getItem('addvalid') == "true") {
        typePr = document.querySelector(`input[name="${select_selectType.value}"]:checked`).value;

        $.ajax('http://localhost:3000/addProduct' , {
            statusCode: {
                404: function () { // выполнить функцию если код ответа HTTP 404 
                    alert("страница не найдена");
                }
            },
            method: 'post',
            data: JSON.stringify({
                addItems:{
                    name: document.getElementById('namePr').value,
                    type: typePr,
                    price: parseFloat(document.getElementById('pricePr').value)
                },
                collection:select_selectType.value

            }),
            contentType: "application/json",
            success: function (data) {

                alert("Добавление прошло успешно!")

            },
            error: function (err) {
                alert(err.responseJSON)
                console.log(err)
            }
        })
    // }
    // else {
    //     alert("Введите данные корректно!")
    // }

})

// function addIsValid() {
//     if (document.getElementById('namePr').checkValidity() &&
//         document.getElementById('typePr').checkValidity() &&
//         document.getElementById('pricePr').checkValidity()
//     ) {
//         return true;
//     }
//     else { return false; }
// }

// function disableAdd() {
//     localStorage.setItem('addvalid', addIsValid());
// }

// disableAdd();

// const inputss = document.getElementsByTagName("input");
// for (let input of inputss) {
//     input.addEventListener('change', disableAdd);
// }
//   const selectss = document.getElementsByTagName("select");
//   for (let select of selectss) {
//     select.addEventListener('change', disableAdd);
//   }