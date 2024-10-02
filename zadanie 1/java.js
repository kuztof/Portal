function skrypt() {
    liczba = document.querySelector("#liczba").value
    check = document.querySelector("#check")
    if (liczba < 50 && liczba > 0) {
        if (check.checked) {
            wynik = (liczba * 2) - (liczba * 0.20)
        }
        else {
            wynik = (liczba * 2)
        }
    }
    else if (liczba > 50) {
        if (check.checked) {
            wynik = (liczba * 1) - (liczba * 0.20)
        }
        else {
            wynik = (liczba * 1)
        }
    }
    document.querySelector("#wynik").innerHTML=wynik

}