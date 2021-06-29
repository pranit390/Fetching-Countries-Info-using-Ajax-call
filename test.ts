let getAll = document.getElementById("getall")
getAll.addEventListener("click", getEntireData);

function getEntireData() {

    let req = new XMLHttpRequest();
    req.open("GET", "https://restcountries.eu/rest/v2/all", true)

    req.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText)




            let div = document.getElementById("demo")


            for (let key in data) {
                let div1 = document.createElement("div")
                div1.className = "countryInfo"
                let p1 = document.createElement("p")
                let p2 = document.createElement("p")
                let p3 = document.createElement("p")
                let p4 = document.createElement("p")
                let p5 = document.createElement("p")
                let img = document.createElement("img");
                let input = document.createElement("input")
                input.className = "input"
                let edit = document.createElement("button")
                edit.className = "edit"
                edit.type = "button"
                edit.innerText = "EDIT"

                let deleete = document.createElement("button")
                deleete.className = "delete"
                deleete.type = "button"
                deleete.innerText = "DELETE"

                p1.innerHTML = "Name:" + data[key].name;
                p2.innerHTML = "Capital:" + data[key].capital;
                p3.innerHTML = "Region:" + data[key].region;
                p4.innerHTML = "Population:" + data[key].population;
                p5.innerHTML = "Currency:" + data[key].currencies[0].code + " " + data[key].currencies[0].name
                    + " " + data[key].currencies[0].symbol;
                img.src = "" + data[key].flag;

                input.value = "" + data[key].population;


                div1.appendChild(p1)
                div1.appendChild(p2)
                div1.appendChild(p3)
                div1.appendChild(p4)
                div1.appendChild(p5)
                div1.appendChild(img)
                div1.appendChild(input)
                div1.appendChild(edit)
                div1.appendChild(deleete)
                div.appendChild(div1)





            }





        }
    }
    req.send()


}
//=============================================================clear all
let clearAll = document.getElementById("clearall")
clearAll.addEventListener("click", clearEntireData);


function clearEntireData() {
    let div = document.getElementById("demo").innerHTML = ""

}

let div = document.getElementById("demo").addEventListener('click', (e) => {

    const target = <HTMLElement>e.target;
    if (target && target.className == "delete") {
        target.parentElement.remove()
    }

    if (target && target.className == "edit") {
        let div = target.parentElement;
        let input = div.querySelector('.input');
        if (input.hasAttribute('readOnly')) {
            input.removeAttribute('readOnly');
        }
        else {
            input.setAttribute('readOnly', 'readOnly');
        }
    }
})






