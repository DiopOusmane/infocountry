let urlAll = "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
let url = "https://restcountries.com/v3.1/name/"
let select = document.getElementById("payss")
fetch(urlAll)
    .then(response => response.json())
    .then(data => {
        let pays = data.map(p => p.name.common,)
        pays.sort()
        select = document.getElementById("payss")
        for (let i = 0; i < pays.length; i++) {
            let option = document.createElement("option")
            option.value = pays[i]
            option.innerHTML = pays[i]
            select.appendChild(option)
        }
    })
    .catch(error => console.error('Error:', error));



let vide = document.getElementById("vide")
select.addEventListener("change", function () {

    url = `https://restcountries.com/v3.1/name/${select.value}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let nom = data[0].name.common
            let capital = data[0].capital[0]
            let population = data[0].population.toLocaleString()
            let region = data[0].region
            let drapeau = data[0].flags.png
            vide.innerHTML = `<h3><strong> ${nom}</strong> </h3>
            <img src="${drapeau}" alt='drapeau'/>
            <div id="info2"><h4>La population est de :<br> ${population} habitants</h4>
            <h4>La capital est :  ${capital}</h4><br>
            <h4>La region est : ${region}</h4></div>`

        })
        .catch(error => console.error('Error:', error));
})

