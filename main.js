window.addEventListener("load", function () {
    var ingridients = document.getElementById("ingridients")
    var pizzaEl = document.getElementsByClassName("pizza")
    var size = document.getElementsByClassName("size");

    console.log (pizzaEl.length);
    console.log (ingridients);
    for (let index = 0; index < ingridients.length; index++) {
        ingridients[index].addEventListener("click", checkerIngidient);
    }
    for (let index = 0; index < size.length; index++) {
        size[index].addEventListener("click", checkerIngidient);
    }

    function checkerIngidient (e) {
        var totalCoast = 0;
        for (let i = 0; i < ingridients.length; i++) {
            if (ingridients[i].checked == true) {
                pizzaEl[i+1].style.visibility = "visible";
                var a = parseInt(ingridients[i].value);
                totalCoast += a;
            }
            else {
                pizzaEl[i+1].style.visibility = "hidden";
            }
        }
        for (let i = 0; i < size.length; i++) {
            if (size[i].checked == true) {
                var a = parseInt(size[i].value);
                totalCoast += a;          
            }
        }
        console.log (totalCoast);
        document.getElementById("pizzaResult").innerHTML = totalCoast;
        
       
    }

    var coast = document.getElementById("coast");
    coast.addEventListener("click", checkerIngidient);
    coast.addEventListener("click", function(){
        for (let i = 0; i < size.length; i++) {
            if (size[i].checked == true) {
                switch (i) {
                    case 0 : document.getElementById("pizzaOrder").innerHTML = "<strong>Маленькая пицца 30 см</strong<br/>";  break;
                    case 1 : document.getElementById("pizzaOrder").innerHTML = "<strong>Средняя пицца 35 см</strong><br/>";  break;
                    case 2 : document.getElementById("pizzaOrder").innerHTML = "<strong>Большая пицца 40 см</strong><br/>";  break;
                }
                       
            }
        }
        for (let i = 0; i < ingridients.length; i++) {
            if (ingridients[i].checked == true) {
                switch (i) {
                    case 0 : document.getElementById("pizzaOrder").innerHTML += "С сыром " + "<br/>";  break;
                    case 1 : document.getElementById("pizzaOrder").innerHTML += "С томатами" + "<br/>";  break;
                    case 2 : document.getElementById("pizzaOrder").innerHTML += "С беконом" + "<br/>";  break;
                    case 3 : document.getElementById("pizzaOrder").innerHTML += "С лососем" + "<br/>";  break;
                    case 4 : document.getElementById("pizzaOrder").innerHTML += "С грибами" + "<br/>";  break;
                    case 5 : document.getElementById("pizzaOrder").innerHTML += "С оливками" + "<br/>"; break;
                    case 6 : document.getElementById("pizzaOrder").innerHTML += "С рукколой" + "<br/>";  break;
                    case 7 : document.getElementById("pizzaOrder").innerHTML += "С зеленью" + "<br/>"; break;
                } 
            }
        }
        
    });

    //=============== Map ===============
    var map;

    DG.then(function () {
        map = DG.map('map', {
            center: [50.4681857431544, 30.514483451843265],
            zoom: 16,
            touchZoom: false,
            scrollWheelZoom: false,
            doubleClickZoom: false,
            boxZoom: false,
            geoclicker: false,
            fullscreenControl: false,
        });
        var myIcon = DG.icon({
            iconUrl: 'img/my-marker.png',
            iconSize: [70, 70],
        });
        DG.marker([50.4681857431544, 30.514483451843265],{icon: myIcon}).addTo(map).bindPopup('Pizza Roman.io</br>Здесь!');

    });

    //=============== Validation ===============
    var sub = document.getElementById("submit");
    myForm.name.onchange = nameOnChange;
    myForm.phone.onchange = phoneOnChange;
    myForm.onsubmit = onsubmiHandler;
    
    function nameOnChange() {
        var pattern = /[a-zA-Zа-яА-я]/;
        validate(this, pattern);
    }
    
    function phoneOnChange() {
        var pattern = /\d{3}-\d{3}-\d{2}-\d{2}/;
        validate(this, pattern);
    }
    function validate(elem, pattern) {
        var res = elem.value.search(pattern);
        var valId = elem.dataset.valId;
        if (res == -1) {elem.style.backgroundColor = "tomato"; elem.style.color = "white";
            document.getElementById(valId).style.display = "block";
        }
        else {elem.style.backgroundColor = "#28A745"; elem.style.color = "white";
            document.getElementById(valId).style.display = "none";
        }
    }
    
    function onsubmiHandler() {
        var invalid = false;

        var login = document.getElementsByName("name")[0],
            phone = document.getElementsByName("phone")[0];
        if (login.value.length == 0) {
            isValid = true;
        }
        if (phone.value.length == 0) {
            isValid = true;
        }

        for (var i = 0; i < myForm.elements.length; ++i) {
            var e = myForm.elements[i];
            // проверка типа элемента и наличия обработчика события onchange.
            if (e.type == "text" && e.onchange) {
                e.onchange(); // запуск события onchanhe
                if (e.style.backgroundColor == "tomato") invalid = true;
            }
        }

        if (invalid) {
            return false; // отмена отправки формы.
        }
        }

});
//=============== Parallax ===============
jQuery(document).ready(function(){
    jQuery(".parallax-layer").parallax({
        mouseport: jQuery("#test1"),
        
    },
    {//1st
        xparallax: '200px',
        yparallax: '100px',
        width: 200,
        xorigin: 0.2,
        yorigin: 0.5 
    },
    {//2
        xparallax: '1000px',
        yparallax: '400px',
        xorigin: 0.8
    },
    {//3
        xparallax: '400px',
        yparallax: '300px',
        width: 400,
        xorigin: 0,
        yorigin: 0 
    },
    {//4
        xparallax: '600px',
        yparallax: '800px',
        decay: 0.6,
        xorigin: 0.7,
        yorigin: 0.7 
    });

});
