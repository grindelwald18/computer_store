// $(".set-bg").each(function(){
//     var bg=$(this).data(setbg);
//     $(this).css("background-image", "url(" + bg + ")");

// });
// AOS.init({
//     disable: "mobile",
//     duration: 800,
//     anchorPlacement: "center-bottom",
// });
function funk(my_arr,name){
    let form = document.createElement("form")
    for(k of my_arr){
        let label = document.createElement("label")
        let div = document.createElement("div")
        label.setAttribute("for", k)
        label.textContent=k
        label.style.width="400px"
        let radio= document.createElement("input")
        radio.type="radio"
        radio.id=k
        radio.name=name
        radio.value = k
        console.log(radio, form)
        div.appendChild(radio)
        div.appendChild(label)
        form.appendChild(div)
    }
    return form
}

//выбор процессора
let form = document.getElementById("processor")
let select = form.getElementsByTagName('select')[0];
select.addEventListener("change", function(event){
document.getElementById("answer-processor").innerHTML=""
    switch(select.value)
    {    
        case "Intel":
                let intel_device= ["Intel core i3","Intel core i5","Intel core i7","Intel core i9"]
                let container = document.getElementById("answer-processor")
                let form = container.getElementsByTagName("form")[0];
                if(!form){
                    form=funk(intel_device, "Intel")           
                    container.appendChild(form)
                }
                console.log(container)
                
            break;
        case "Ryzen":
                let amd_device = ["AMD Ryzen5","AMD Ryzen7","AMD Ryzen9"]
                let container_amd = document.getElementById("answer-processor")
                let form_amd = container_amd.getElementsByTagName("form")[0];
                if(!form_amd){
                    form_amd=funk(amd_device ,"Ryzen")
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
                let water_cooling=["ID-COOLING AURAFLOW 120","ID-COOLING AURAFLOW 240","EKWB AIO 240 D-RGB","ID-COOLING AURAFLOW X 360","Thermaltake TH360 ARGB Sync","DeepCool LS720 X360","EKWB AIO 360 D-RGB","ARCTIC Liquid Freezer II 360 RGB","ASUS ROG RYUJIN 360"]
                let container_water_cooling = document.getElementById("answer-cooling");
                let form_water_cooling = container_water_cooling.getElementsByTagName("form")[0];
                if(!form_water_cooling){
                    form_water_cooling = funk(water_cooling ,"Water")
                    container_water_cooling.appendChild(form_water_cooling)
                }   
            break;

        case "air":
                let air_cooling=["Intel Box","DeepCool Mini","Deepcool GAMMAXX 300 R","AMD Original TM","ID-COOLING SE-224-RGB","Cooler Master MasterAir MA410P","ID COOLING SE-226-XT","Noctua NH-D15 Chromax Black","Noctua NH-D15"]
                let container_air = document.getElementById("answer-cooling")
                let form_air = container_air.getElementsByTagName("form")[0];
                if(!form_air){
                    form_air = funk(air_cooling ,"Air")
                    container_air.appendChild(form_air)
                }
                
            break;    
        // case "2":  func(2) break;
        // case "3":  func(3) break;   
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
                let asus_motherboard=["ASUS PRIME B450M","ASUS PRIME H510M","ASUS PRIME A520M","ASUS PRIME H610M-K D4","ASUS PRIME H460M","ASUS PRIME H550M","ASUS TUF GAMING B550M-PLUS","ASUS PRIME B650-PLUS","ASUS TUF GAMING B650M"]
                let container_asus_motherboard = document.getElementById("answer-motherboard");
                let form_asus_motherboard = container_asus_motherboard.getElementsByTagName("form")[0];
                if(!form_asus_motherboard){
                    form_asus_motherboard = funk(asus_motherboard ,"ASUS")
                    container_asus_motherboard.appendChild(form_asus_motherboard)
                }   
            break;

        case "GIGABYTE":
                let gigabyte_motherboard=["Gigabyte A520M","Gigabyte B450M","Gigabyte H410M","Gigabyte B460M","Gigabyte B550","Gigabyte B550 Gaming X","Gigabtye X670 Gaming X","Gigabyte B560 HD3","Gigabyte Z790 Gaming X D5"]
                let container_gigabyte_motherboard = document.getElementById("answer-motherboard")
                let form_gigabyte_motherboard = container_gigabyte_motherboard.getElementsByTagName("form")[0];
                if(!form_gigabyte_motherboard){
                    form_gigabyte_motherboard = funk(gigabyte_motherboard ,"GIGABYTE")
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
                let HyperX=["8Гб Kingston HyperX Fury 3000МГц","8Гб Kingston HyperX Fury RGB 3000МГц","8Гб Kingston HyperX Fury 3600МГц","8 GB Gigabyte Aorus RGB 3200МГц","16Gb Kingston HyperX Fury 3000МГц","16Гб Kingston HyperX Fury RGB 3000МГц","16Гб Kingston HyperX Fury 3600МГц","16 Гб Kingston Hyperx Fury 6000МГц"]
                let container_HyperX = document.getElementById("answer_ram");
                let form_HyperX = container_HyperX.getElementsByTagName("form")[0];
                if(!form_HyperX){
                    form_HyperX = funk(HyperX ,"HyperX")
                    container_HyperX.appendChild(form_HyperX)
                }   
            break;

        case "THERMALTAKE":
                let THERMALTAKE=["8 Гб TOUGHRAM RGB 3000МГц","8 Гб TOUGHRAM Z-ONE RGB 3600МГц","8 Гб TOUGHRAM 4000МГц","8 Гб TOUGHRAM RGB 4000МГц"]
                let container_THERMALTAKE = document.getElementById("answer_ram")
                let form_THERMALTAKE = container_THERMALTAKE.getElementsByTagName("form")[0];
                if(!form_THERMALTAKE){
                    form_THERMALTAKE = funk(THERMALTAKE ,"THERMALTAKE")
                    container_THERMALTAKE.appendChild(form_THERMALTAKE)
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
                let card_3050=["GEFORCE RTX 3050 8 Гб","ASUS RTX 3050 8 Гб ROG STRIX"]
                let container_card_3050 = document.getElementById("answer_video_card");
                let form_3050 = container_card_3050.getElementsByTagName("form")[0];
                if(!form_3050){
                    form_3050 = funk(card_3050 ,"HyperX")
                    container_card_3050.appendChild(form_3050)
                }   
            break;

        case "3060TI":
                let card_3060TI=["PALIT GЕFORCE RTX 3060 12Гб","GIGABYTE GEFORCE RTX 3060 12Гб GAMING","ASUS GЕFORCE RTX 3060 12Гб TUF GAMING","ASUS GЕFORCE RTX 3060 12Гб ROG STRIX","GIGABYTE GЕFORCE RTX 3060 TI 8Гб GAMING","ASUS GЕFORCE RTX 3060 TI 8Гб ROG STRIX"]
                let container_card_3060TI = document.getElementById("answer_video_card")
                let form_3060TI = container_card_3060TI.getElementsByTagName("form")[0];
                if(!form_3060TI){
                    form_3060TI = funk(card_3060TI ,"THERMALTAKE")
                    container_card_3060TI.appendChild(form_3060TI)
                }
                
            break;     
        case "3070":
                let card_3070=["PALIT GEFORCE RTX 3070 8Гб GAMING PRO","GIGABYTE GЕFORCE RTX 3070 8Гб GAMING","ASUS GЕFORCE RTX 3070 DUAL 8Гб ОС","ASUS GEFORCE RTX 3070 8Гб TUF GAMING","MSI GEFORCE RTX 3070 8 Гб GAMING TRIO","ASUS GEFORCE RTX 3070 8 Гб ROG STRIX"]
                let container_card_3070 = document.getElementById("answer_video_card")
                let form_3070 = container_card_3070.getElementsByTagName("form")[0];
                if(!form_3070){
                    form_3070 = funk(card_3070 ,"THERMALTAKE")
                    container_card_3070.appendChild(form_3070)
                }
                
            break;     
        case "3070TI":
                let card_3070TI=["PALIT RTX 3070Ti 8Гб GAMING PRO","GIGABYTE GEFORCE RTX 3070 Ti 8Гб GAMING"]
                let container_card_3070TI = document.getElementById("answer_video_card")
                let form_3070TI = container_card_3070TI.getElementsByTagName("form")[0];
                if(!form_3070TI){
                    form_3070TI = funk(card_3070TI ,"THERMALTAKE")
                    container_card_3070TI.appendChild(form_3070TI)
                }
                
            break;     
        case "3080":
                let card_3080=["MSI GEFORCE RTX VENTUS 3080 10 Гб","PALIT RTX 3080 GAMING PRO 12 Гб","ASUS GEFORCE RTX 3080 Ti TUF GAMING 12Гб","ASUS GEFORCE RTX 3080 Ti STRIX GAMING 12Гб","GIGABYTE GEFORCE RTX 3080 Ti AORUS 12 Гб","ASUS GEFORCE RTX 3080 STRIX GAMING 10Гб","ASUS GEFORCE RTX 3080 TUF GAMING 10Гб"]
                let container_card_3080 = document.getElementById("answer_video_card")
                let form_3080 = container_card_3080.getElementsByTagName("form")[0];
                if(!form_3080){
                    form_3080 = funk(card_3080 ,"THERMALTAKE")
                    container_card_3080.appendChild(form_3080)
                }
                
            break;     
        case "3090":
                let card_3090=["NVIDIA GЕFORCE RTX 3090 24Гб","ASUS GEFORCE RTX 3090 TUF GAMING 24Гб","ASUS GEFORCE RTX 3090 ROG STRIX GAMING 24Гб","GIGABYTE GEFORCE ETX 3090 AORUS 24ГБ","GIGABYTE GEFORCE RTX 3090Ti GAMING 24ГБ"]
                let container_card_3090 = document.getElementById("answer_video_card")
                let form_3090 = container_card_3090.getElementsByTagName("form")[0];
                if(!form_3090){
                    form_3090 = funk(card_3090 ,"THERMALTAKE")
                    container_card_3090.appendChild(form_3090)
                }
                
            break;     
        case "4080":
                let card_4080=["PALIT RTX 4080 GAMING PRO 16 Гб","GIGABYTE GEFORCE RTX 4080 GAMING 16 Гб"]
                let container_card_4080 = document.getElementById("answer_video_card")
                let form_4080 = container_card_4080.getElementsByTagName("form")[0];
                if(!form_4080){
                    form_4080 = funk(card_4080 ,"THERMALTAKE")
                    container_card_4080.appendChild(form_4080)
                }
                
            break;     
        case "4090":
                let card_4090=["PALIT GEFORCE RTX 4090 24 Гб","GIGABYTE GEFORCE RTX 4090 24 Гб","ASUS ROG GEFORCE RTX 4090 24 STRIX","GIGABYTE GEFORCE RTX 4090 24 Гб AORUS MASTER"]
                let container_card_4090 = document.getElementById("answer_video_card")
                let form_4090 = container_card_4090.getElementsByTagName("form")[0];
                if(!form_4090){
                    form_4090 = funk(card_4090 ,"THERMALTAKE")
                    container_card_4090.appendChild(form_4090)
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
                let tb1=["1 Тб Western Digital Gold","1 Тб Western Digital Black","1 Тб Western Digital Purple","1 Тб Seagate","1 Тб Western Digital","1 Тб Toshiba"]
                let container_tb1 = document.getElementById("answer_hard_driv");
                let form_tb1 = container_tb1.getElementsByTagName("form")[0];
                if(!form_tb1){
                    form_tb1 = funk(tb1 ,"1 ТБ")
                    container_tb1.appendChild(form_tb1)
                }   
            break;

        case "2":
                let tb2=["2 Тб Western Digital Black","2 Тб WesternDigital Gold","2 Тб Seagate","2 Тб Western Digital","2 Тб Toshiba"]
                let container_tb2 = document.getElementById("answer_hard_driv")
                let form_tb2 = container_tb2.getElementsByTagName("form")[0];
                if(!form_tb2){
                    form_tb2 = funk(tb2 ,"2 ТБ")
                    container_tb2.appendChild(form_tb2)
                }
                
            break; 

        case "4":
                let tb4=["4 Тб WesternDigital Gold","4 Тб WesternDigital Red","4 Тб Seagate"]
                let container_tb4 = document.getElementById("answer_hard_driv")
                let form_tb4 = container_tb2.getElementsByTagName("form")[0];
                if(!form_tb4){
                    form_tb4 = funk(tb4 ,"4 ТБ")
                    container_tb4.appendChild(form_tb4)
                }
                
            break;

        case "6":
            let tb6=["6 Тб WesternDigital Gold","6 Тб WesternDigital Purple","6 Тб Western Digital","6 Тб Seagate"]
            let container_tb6 = document.getElementById("answer_hard_driv")
            let form_tb6 = container_tb6.getElementsByTagName("form")[0];
            if(!form_tb6){
                form_tb6 = funk(tb6 ,"6 ТБ")
                container_tb6.appendChild(form_tb6)
            }
            
        break;

        case "8":
            let tb8=["8 Тб Seagate","8 Тб WesternDigital Purple","8 Тб WesternDigital Gold"]
            let container_tb8 = document.getElementById("answer_hard_driv")
            let form_tb8 = container_tb8.getElementsByTagName("form")[0];
            if(!form_tb8){
                form_tb8 = funk(tb8 ,"8 ТБ")
                container_tb8.appendChild(form_tb8)
            }
            
            break;
        
        case "10":
            let tb10=["10 Тб Seagate IRONWOLF","10 Тб WesternDigital Gold","10 Тб WesternDigital Purple"]
            let container_tb10 = document.getElementById("answer_hard_driv")
            let form_tb10 = container_tb10.getElementsByTagName("form")[0];
            if(!form_tb10){
                form_tb10 = funk(tb10 ,"10 ТБ")
                container_tb10.appendChild(form_tb10)
            }
        
            break;
            
        case "12":
            let tb12=["12 Тб Seagate","12 Тб WesternDigital Purple"]
            let container_tb12 = document.getElementById("answer_hard_driv")
            let form_tb12 = container_tb12.getElementsByTagName("form")[0];
            if(!form_tb12){
                form_tb12 = funk(tb12 ,"12 ТБ")
                container_tb12.appendChild(form_tb12)
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
                let gb120=["120 Гб Kingston","120 Гб Kingston M.2"]
                let container_gb120 = document.getElementById("answer_SSD1");
                let form_gb120 = container_gb120.getElementsByTagName("form")[0];
                if(!form_gb120){
                    form_gb120 = funk(gb120 ,"120 ГБ")
                    container_gb120.appendChild(form_gb120)
                }   
            break;
        
        case "240GB":
            let gb240=["250 Гб Samsung 970 EVO Plus","240 Гб Kingston M.2","240 Гб Kingston"]
            let container_gb240 = document.getElementById("answer_SSD1");
            let form_gb240 = container_gb240.getElementsByTagName("form")[0];
            if(!form_gb240){
                form_gb240 = funk(gb240 ,"240 ГБ")
                container_gb240.appendChild(form_gb240)
            }   
            break;

        case "480GB":
                let gb480=["500Gb Samsung 980 Pro","500 Гб Gigabyte Aorus","480 Гб Kingston","480 Гб Netac"]
                let container_gb480 = document.getElementById("answer_SSD1");
                let form_gb480 = container_gb480.getElementsByTagName("form")[0];
                if(!form_gb480){
                    form_gb480 = funk(gb480 ,"480 ГБ")
                    container_gb480.appendChild(form_gb480)
                }   
            break;
        case "1TB":
                let tb1=["960 Гб Kingston","1000 Гб NETAC N930e PRO M.2","1000 Гб SSD Samsung 980 Pro M.2","1000 Гб Samsung 970 EVO Plus M.2","1000 Гб Hewlett-Packard (HP) M.2"]
                let container_tb1 = document.getElementById("answer_SSD1");
                let form_tb1 = container_tb1.getElementsByTagName("form")[0];
                if(!form_tb1){
                    form_tb1 = funk(tb1 ,"1 ТБ")
                    container_tb1.appendChild(form_tb1)
                }   
            break;
        
        case "2TB":
            let tb2=["WD BLACK SN850X 2000 ГБ M.2","2000 Гб Samsung 980 PRO М.2","2000 Гб Gigabyte Aorus M.2","2000 Гб Kingston M.2","2000 Гб HP EX900 plus М.2"]
            let container_tb2 = document.getElementById("answer_SSD1");
            let form_tb2 = container_tb2.getElementsByTagName("form")[0];
            if(!form_tb2){
                form_tb2 = funk(tb2 ,"2 ТБ")
                container_tb2.appendChild(form_tb2)
                }   
            break;    
        case "4TB":
            let tb4=["4000 Гб WD Red SN700 M.2","4000 Гб Kingston Fury Renegade M.2"]
            let container_tb4 = document.getElementById("answer_SSD1");
            let form_tb4 = container_tb4.getElementsByTagName("form")[0];
            if(!form_tb4){
                form_tb4 = funk(tb4 ,"4 ТБ")
                container_tb4.appendChild(form_tb4)
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
                let W500=["500W Zalman","500W AeroCool KCAS","500W Thermaltake Smart RGB","500W be quiet!"]
                let container_W500 = document.getElementById("answer_power");
                let form_W500 = container_W500.getElementsByTagName("form")[0];
                if(!form_W500){
                    form_W500 = funk(W500 ,"500W")
                    container_W500.appendChild(form_W500)
                }   
            break;
        case "600W":
                let W600=["600W AeroCool KCAS","600W Zalman","600W be quiet!","650W Seasonic Platinum FanLess"]
                let container_W600 = document.getElementById("answer_power");
                let form_W600 = container_W600.getElementsByTagName("form")[0];
                if(!form_W600){
                    form_W600 = funk(W600 ,"600W")
                    container_W600.appendChild(form_W600)
                }   
            break;
        case "700W":
                let W700=["700W Zalman","700w be quiet!","750W Gigabyte GP-P750GM","750W ASUS TUF Gaming 750B"]
                let container_W700 = document.getElementById("answer_power");
                let form_W700 = container_W700.getElementsByTagName("form")[0];
                if(!form_W700){
                    form_W700 = funk(W700 ,"700W")
                    container_W700.appendChild(form_W700)
                }   
            break;
        case "800W":
                let W800=["850W Thermaltake PRO RGB","850W MSI mpg a850g","850W Corsair RM850","850W Gigabyte Aorus","850W Be Quiet Straight Power 11","850W ASUS ROG-THOR-850P"]
                let container_W800 = document.getElementById("answer_power");
                let form_W800 = container_W800.getElementsByTagName("form")[0];
                if(!form_W800){
                    form_W800 = funk(W800 ,"800W")
                    container_W800.appendChild(form_W800)
                }   
            break;
        case "1000W":
                let W1000=["1000W Zalman","1000W PHANTEKS GOLD","1000W Corsair RM1000","1000W Super Flower Leadex Platinum","1200W Be Quiet ST Power 11","1200W ASUS ROG-THOR-1200P"]
                let container_W1000 = document.getElementById("answer_power");
                let form_W1000 = container_W1000.getElementsByTagName("form")[0];
                if(!form_W1000){
                    form_W1000 = funk(W1000 ,"1000W")
                    container_W1000.appendChild(form_W1000)
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
                let inch22=["Philips 223V7QSB","BENQ GW2283"]
                let container_inch22 = document.getElementById("answer_monitor");
                let form_inch22 = container_inch22.getElementsByTagName("form")[0];
                if(!form_inch22){
                    form_inch22 = funk(inch22 ,"inch22")
                    container_inch22.appendChild(form_inch22)
                }   
            break;
        case "24":
                let inch24=["Dell E2420H","BenQ GL2480","Samsung S24R650FDI","LG 24GL650"]
                let container_inch24 = document.getElementById("answer_monitor");
                let form_inch24 = container_inch24.getElementsByTagName("form")[0];
                if(!form_inch24){
                    form_inch24 = funk(inch24 ,"inch24")
                    container_inch24.appendChild(form_inch24)
                }   
            break;
        case "27":
                let inch27=["Acer QG271bii","LG 27GL650F-B","Acer VG271Pbmiipx Nitro","LG 27UL500-W","ASUS VG279QM TUF Gaming"]
                let container_inch27 = document.getElementById("answer_monitor");
                let form_inch27 = container_inch27.getElementsByTagName("form")[0];
                if(!form_inch27){
                    form_inch27 = funk(inch27 ,"inch27")
                    container_inch27.appendChild(form_inch27)
                }   
            break;
        case "30":
                let inch30=["Acer K300HLEbd"]
                let container_inch30 = document.getElementById("answer_monitor");
                let form_inch30 = container_inch30.getElementsByTagName("form")[0];
                if(!form_inch30){
                    form_inch30 = funk(inch30 ,"inch30")
                    container_inch30.appendChild(form_inch30)
                }   
            break;
        case "34":
                let inch34=["Samsung C49RG90SSI"]
                let container_inch34 = document.getElementById("answer_monitor");
                let form_inch34 = container_inch34.getElementsByTagName("form")[0];
                if(!form_inch34){
                    form_inch34 = funk(inch34 ,"inch34")
                    container_inch34.appendChild(form_inch34)
                }   
            break;
      
    }
})