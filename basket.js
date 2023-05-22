function basketadd(){

    let form = document.getElementById("answer-processor")
    let radio = form.getElementsByTagName('radio')[0];
    radio.addEventListener("change", function(event){
        console.log(radio.value)
    });
}
// document.getElementById('basket').addEventListener('click', function () {

//     let form = document.getElementById("answer-processor")
//     let radio = form.getElementsByTagName('radio')[0];
//     radio.addEventListener("change", function(event){
//         console.log(radio.value)
//     });

//         // console.log(event.target.parentNode.lastElementChild.textContent.trim()); 
//         // let temp = event.target.parentNode.lastElementChild.textContent.trim(); 
//         // let log = localStorage.getItem('login'); 
//         // if(log == null){ 
//         //     alert("Необходимо авторизоваться для того, чтобы положить товар в корзину") 
//         // } 
//         // else{ 
//         // $.ajax('http://localhost:3000/cart', { 
//         // method: 'post', 
//         // data:JSON.stringify({ 
//         //     art: temp, 
//         //     login: localStorage.getItem('login') 
//         // }), 
//         // contentType: "application/json", 
//         // success: function(data){ 
//         //     alert("Товар успешно добавлен в корзину") 
//         //     console.log(data) 
                  
//         // }, 
//         // error: function(err){ 
//         //     console.log(err.responseJSON) 
     
//         // }  
//     // })}  
     
// })