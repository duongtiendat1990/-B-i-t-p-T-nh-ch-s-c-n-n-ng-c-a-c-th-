function Calculate() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    bmi = weight / (height*height)
    if (bmi<18.5) {
        Result = "UnderWeight"
    } else if (bmi>=18.5 && bmi<25) {
        Result = "Normal"
    } else if (bmi>=25 && bmi<30) {
        Result = "OverWeight"
    } else {
        Result = "Obese"
    }
    document.getElementById("result").innerHTML = Result;
}