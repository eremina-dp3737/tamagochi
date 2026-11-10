const action = document.getElementById('action')
const button = document.querySelector('#button')
const result = document.getElementById('result')
const chars = document.getElementById('chars')
let satiety = 1
let energy = 1
let clean = 1
let happy = 0

button.addEventListener('click', () => {
    const ACTion = action.value 
    if (ACTion === "Food" && satiety < 1) {
        satiety = satiety + 0.7
        energy = energy + 0.2
        happy = happy + 0.5
        result.innerHTML = "Вы покормили питомца. Его сытость = " + satiety
        chars.innerHTML = `Сытость равна ${satiety}`
    } else if (ACTion === "Food" && satiety >= 1) {
        result.innerHTML = "Питомец уже сыт. Вы не можете его покормить. Его сытость = " + satiety
    }
    if (ACTion === "Treat" && satiety < 2) {
        satiety = satiety + 0.5
        energy = energy + 0.2
        happy = happy + 1
        result.innerHTML = "Вы дали питомцу вкусняшку. Он стал счастливее на " + happy
    } else if (ACTion === "Treat" && satiety >= 2) {
        result.innerHTML = "Питомцу нельзя много вкусняшек. Его сытость = " + satiety
    }
    if (ACTion === "Play" && energy >= 1) {
        satiety = satiety - 1.2
        energy = energy - 0.8
        clean = clean - 0.2
        happy = happy + 1
        result.innerHTML = "Вы поиграли с питомцем. Его энергия = " + energy
    } else if (ACTion === "Play" && energy < 1) {
        result.innerHTML = "Питомец устал и не может играть. Его энергия = " + energy
    }
    if (ACTion === "Sleep" && energy < 1) {
        satiety = satiety - 0.5
        energy = energy + 1.2
        happy == 0
        result.innerHTML = "Вы уложили питомца спать. Теперь он спит. Его энергия = " + energy
        
    } else if (ACTion === "Sleep" && energy >= 1) {
        result.innerHTML = "Питомец еще не хочет спать. Его энергия = " + energy
    }
    if (ACTion === "Bath" && clean < 1) {
        clean = clean + 1
        satiety = satiety - 0.2
        energy = energy - 0.2
        happy = happy - 1
        result.innerHTML = "Вы искупали питомца в ванне. Его чистота = " + clean
    } else if (ACTion === "Bath" && clean >= 1) {
        result.innerHTML = "Питомец чистый и не нуждается в купании. Его чистота = " + clean
    }
    if (ACTion === "Walk" && energy >= 1) {
        satiety = satiety - 1
        energy = energy - 0.8
        clean = clean - 0.7
        happy = happy + 0.3
        result.innerHTML = "Вы вышли на прогулку с питомцем. Он стал счастливее на " + happy
    } else if (ACTion === "Walk" && energy < 1) {
        result.innerHTML = "Питомец устал и не может пойти гулять. Его энергия = " + energy
    }
    if (ACTion === "Study" && energy >= 1) {
        satiety = satiety - 0.7
        energy = energy - 0.6
        clean = clean - 0.5
        happy = happy - 1
        result.innerHTML = "Вы поучили питомца новым командам. Его энергия = " + energy
    } else if (ACTion === "Study" && energy < 1) {
        result.innerHTML = "Питомец устал и не может обучаться новым командам. Его энергия = " + energy
    }
    if (ACTion === "Shop" && energy >= 0.7) {
        satiety = satiety - 0.3
        energy = energy - 0.3
        clean = clean - 0.5
        happy = happy - 0.3
        result.innerHTML = "Вы отправили питомца в магазин. Его энергия = " + energy
    } else if (ACTion === "Shop" && energy < 0.7) {
        result.innerHTML = "Питомец устал и не может пойти в магазин. Его энергия = " + energy
    }
    chars.innerHTML = `Сытость равна ${satiety}\n` + `Энергия равна ${energy}\n` + `Чистота равна ${clean}\n` + `Счастье равнo ${happy}\n`


    
})