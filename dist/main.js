const API_KEY = "ab11040e85d84d2c91394020231406"
const BASE_url = "https://api.weatherapi.com/v1/current.json"
const inputValue = document.getElementById('inputCity')
const submitButton = document.getElementById('submitButton')
const cities = document.getElementById('cities')

const showedCities = []

let headers = {
    Accept: 'application/json'
};

 document.getElementById("submitButton").addEventListener("click", (event) => {
    event.preventDefault();
    getWeather();
    inputValue.value = ""
  });

async function getWeather(){
    try {
        const response = await axios.get(`${BASE_url}?q=${inputValue.value}&lang=en&key=${API_KEY}`, { headers: headers })
        result = await response.data 
        showedCities.push(result)
        showCities();
    }
    catch (error) {
        alert("Please check your input field")
    }
}


function showCities(){
        for(let i = 0; i < showedCities.length; i++){
          const card = document.createElement('div')
          card.className = 'cardCity'
          cities.appendChild(card)
          const heading = document.createElement('h2')
          card.appendChild(heading)
          heading.innerText = showedCities[i].location.name
          const temp = document.createElement('p')
          card.appendChild(temp)
          temp.innerText = showedCities[i].current.temp_c + '°C'
          const cond = document.createElement('p')
          card.appendChild(cond)
          cond.innerText = showedCities[i].current.condition.text
          const imageCond = document.createElement('img')
          imageCond.setAttribute('src', `${showedCities[i].current.condition.icon}`)
          card.appendChild(imageCond)
          const deleteButton = document.createElement('button')
          deleteButton.innerText = "X"
          deleteButton.classList.add('deleteButton')
          card.appendChild(deleteButton)
          deleteButton.addEventListener('click', function(){
            deleteButton.parentElement.remove(); 
           })
        }

        showedCities.splice(result)
        console.log(showedCities);
    }

    document.getElementById('clear').addEventListener('click', function(event) {
      event.target.classList.contains('cardCity').remove
    });

console.log(showedCities);