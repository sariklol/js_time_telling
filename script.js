let time = +prompt('Введите время от 0 до 24.')

switch (true) {
    case (time >= 0 && time <= 6):
        alert(time + ' часа ночи')
        break

    case (time === 24):
        alert(time - 24 + " часов ночи")
        break

    case (time >= 7 && time <= 11):
        alert(time + ' часов утра')
        break

    case (time === 12):
        alert(time + ' часов дня')
        break

    case (time >= 13 && time <= 17):
        alert(time - 12 + ' часа дня')
        break

    case (time >= 18 && time <= 23):
        alert(time - 12 + ' часов вечера')
        break

    default:
        alert('Что то пошло не так друг мой.')
        break
}