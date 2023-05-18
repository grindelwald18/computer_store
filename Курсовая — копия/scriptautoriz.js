$('.tabs .tab').click(function(){
    if ($(this).hasClass('signin')) {
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active');
        $('.cont').hide();
        $('.signin-cont').show();
    } 
    if ($(this).hasClass('signup')) {
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active');
        $('.cont').hide();
        $('.signup-cont').show();
    }
});
$('.container .bg').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 30);
    var amountMovedY = (e.pageY * -1 / 9);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});

// document.getElementById("loginb").addEventListener('click', function() {
//     $.ajax('http://localhost:3000/login', {
//         method: 'post',
//         data: JSON.stringify({
//             login: document.getElementById("login").value,
//             password: document.getElementById("pwd").value
//         }),
//         contentType: "application/json",
//         success: function(data){

//             localStorage.setItem('login', data.login);
//             console.log(data)
//             window.close()
//            window.open('index.html')
//            console.log(data)
//         },
//         error: function(err){
//             alert(err.responseJSON)
//             console.log(err)
//         } 
//     })

// })
document.getElementById('loginb').addEventListener('click', function () { 
         
    $.ajax('http://localhost:3000/login', { 
        statusCode: { 
            404: function () { // выполнить функцию если код ответа HTTP 404 
                alert("страница не найдена"); 
            } 
        }, 
         
        method: 'post', 
        data: JSON.stringify({ 
            login: document.getElementById('login').value, 
            password: document.getElementById('pwd').value 
        }), 
        contentType: "application/json", 
        success: function (data) { 
            // console.log(data.login) 
            localStorage.setItem('login', data); 
            // alert("Вы успешно вошли в аккаунт"); 
            // if(data.isAdmin == true) { 
            //     window.open('admin.html') 
            // } 
            // else{ 
            window.location.replace('index.html') 
            // } 
        }, 
        error: function (err) { 
            alert("Не удалось войти в аккаунт... Убедитесь, что вы правильно ввели логин и пароль") 
            console.log(err) 
        } 
    }) 
 
})
document.getElementById('registbnt').addEventListener('click', function () { 
    $.ajax('http://localhost:3000/regist', { 
        statusCode: { 
            404: function () { // выполнить функцию если код ответа HTTP 404 
                alert("страница не найдена"); 
            } 
        }, 
        method: 'post', 
        data: JSON.stringify({ 
            name: document.getElementById('reg-name').value, 
            login: document.getElementById('reg-log').value, 
            password: document.getElementById('reg-password').value,
            cart: []
        }), 
        contentType: "application/json", 
        success: function (data) { 
            localStorage.setItem('login', data); 
            window.close() 
            window.open('index.html') 
        }, 
        error: function (err) { 
            alert(err.responseJSON) 
            console.log(err) 
        } 
    }) 
 
})
// document.getElementById('add').addEventListener('click', function () { 
//     $.ajax('http://localhost:3000/addProduct', { 
//         statusCode: { 
//             404: function () { // выполнить функцию если код ответа HTTP 404 
//                 alert("страница не найдена"); 
//             } 
//         }, 
//         method: 'post', 
//         data: JSON.stringify({ 
//             name: document.getElementById('namePr').value, 
//             type: document.getElementById('typePr').value, 
//             price: document.getElementById('pricePr').value,
//             img: document.getElementById('imgPr').value
//         }), 
//         contentType: "application/json",
//success: function (data) { 
    //             localStorage.setItem('login', data); 
    //             window.close() 
    //             window.open('index.html') 
    //         }, 
    //         error: function (err) { 
    //             alert(err.responseJSON) 
    //             console.log(err) 
    //         } 
    //     }) 
     
    // })