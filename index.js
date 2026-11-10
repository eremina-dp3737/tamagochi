const action = document.getElementById('action')
const button = document.querySelector('#button')
const result = document.getElementById('result')
let satiety = 1
let energy = 1

button.addEventListener('click', () => {
    const ACTion = action.value 
    if (ACTion === "Food" && satiety < 1) {
        result.innerHTML = "Вы покормили питомца. Теперь он сыт." 
        satiety = satiety + 0.7
        energy = energy + 0.2
    } else if (ACTion === "Food" && satiety >= 1) {
        result.innerHTML = "Питомец уже сыт. Вы не можете его покормить."
    }
    if (ACTion === "Play" && energy >= 1) {
        result.innerHTML = "Вы поиграли с питомцем."
        satiety = satiety - 1.2
        energy = energy - 0.8
    } else if (ACTion === "Play" && energy < 1) {
        result.innerHTML = "Питомец устал и не может играть."
    }
    if (ACTion === "Sleep" && energy < 1) {
        result.innerHTML = "Вы уложили питомца спать. Теперь он спит."
        satiety = satiety - 0.5
        energy = energy + 1.2
    } else if (ACTion === "Sleep" && energy >= 1) {
        result.innerHTML = "Питомец еще не хочет спать."
    }
})