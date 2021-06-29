var getAll = document.getElementById("getall");
getAll.addEventListener("click", getEntireData);
function getEntireData() {
    var req = new XMLHttpRequest();
    req.open("GET", "https://restcountries.eu/rest/v2/all", true);
    req.onload = function () {
        if (this.status === 200) {
            var data = JSON.parse(this.responseText);
            var div_1 = document.getElementById("demo");
            for (var key in data) {
                var div1 = document.createElement("div");
                div1.className = "countryInfo";
                var p1 = document.createElement("p");
                var p2 = document.createElement("p");
                var p3 = document.createElement("p");
                var p4 = document.createElement("p");
                var p5 = document.createElement("p");
                var img = document.createElement("img");
                var input = document.createElement("input");
                input.className = "input";
                var edit = document.createElement("button");
                edit.className = "edit";
                edit.type = "button";
                edit.innerText = "EDIT";
                var deleete = document.createElement("button");
                deleete.className = "delete";
                deleete.type = "button";
                deleete.innerText = "DELETE";
                p1.innerHTML = "Name:" + data[key].name;
                p2.innerHTML = "Capital:" + data[key].capital;
                p3.innerHTML = "Region:" + data[key].region;
                p4.innerHTML = "Population:" + data[key].population;
                p5.innerHTML = "Currency:" + data[key].currencies[0].code + " " + data[key].currencies[0].name
                    + " " + data[key].currencies[0].symbol;
                img.src = "" + data[key].flag;
                input.value = "" + data[key].population;
                div1.appendChild(p1);
                div1.appendChild(p2);
                div1.appendChild(p3);
                div1.appendChild(p4);
                div1.appendChild(p5);
                div1.appendChild(img);
                div1.appendChild(input);
                div1.appendChild(edit);
                div1.appendChild(deleete);
                div_1.appendChild(div1);
            }
        }
    };
    req.send();
}
var clearAll = document.getElementById("clearall");
clearAll.addEventListener("click", clearEntireData);
function clearEntireData() {
    var div = document.getElementById("demo").innerHTML = "";
}
var div = document.getElementById("demo").addEventListener('click', function (e) {
    var target = e.target;
    if (target && target.className == "delete") {
        target.parentElement.remove();
    }
    if (target && target.className == "edit") {
        var div_2 = target.parentElement;
        var input = div_2.querySelector('.input');
        if (input.hasAttribute('readOnly')) {
            input.removeAttribute('readOnly');
        }
        else {
            input.setAttribute('readOnly', 'readOnly');
        }
    }
});
