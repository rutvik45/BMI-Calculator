function calculate(){
    var bmi;
    var answer = document.getElementById("result");

    var weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-value").textContent = weight + " KG";


    var height = parseInt(document.getElementById("height").value);
    document.getElementById("height-value").textContent = height + " CMS";

    bmi = (weight / Math.pow((height/100),2)).toFixed(1);
    answer.textContent = bmi ;

    if(bmi < 18.5){
        group = "UNDERWEIGHT";
        answer.style.color = "#87b1d9";
    }
    else if (bmi > 18.5 && bmi <=24.9){
        group = "NORMAL WEIGHT";
        answer.style.color = "#3dd365";
    }
    else if (bmi > 25 && bmi <=29.9){
        group = "OVER WEIGHT";
        answer.style.color = "#eee133"
    }
    else if (bmi > 30 && bmi <=34.9){
        group = "OBESE";
        answer.style.color = "#fd802e"
    }
    else if (bmi > 35){
        group = "EXTREMELY OBESE";
        answer.style.color = "#f95353"
    }
    document.getElementById("group").textContent = "YOU ARE "+group;
}