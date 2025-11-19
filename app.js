// your code goes here
const KgInput = document.getElementById("inputKG");
const CmInput = document.getElementById("inputCM");
const convertButton = document.getElementById("ConvertButton");
const outputContainer = document.getElementById("output");
let historyItemList = document.getElementById("historyItemList")

convertButton.addEventListener('click', onButtonClicked)

function onButtonClicked() {
    let kgValue = KgInput.value
    let cmValue = CmInput.value

    let BMI = (kgValue / (cmValue * cmValue ) * 10000) ;
    let BMItext = "";

    if (BMI < 18.5) {
        BMItext = "Nepietiekama ķermena masa"
    } else if (BMI <= 24.99 ) {
        BMItext = "Normāla ķermena masa"
    } else if (BMI<= 29.99) {
        BMItext = "Lieka ķermena masa"
    } else if ( BMI > 30 ) { 
        BMItext = "Aptaukošanās"
    }
    
    outputContainer.innerHTML = `Jūsu ĶMI ir ${BMI} ${BMItext}`

    let outputNumber = BMI;
    let outputBMIText = BMItext;
    let historyItem = document.createElement('li');
    historyItem.innerHTML = `Jūsu ĶMI ir ${outputNumber} ${outputBMIText} Masa: ${kgValue} kg Augums: ${cmValue} cm`;
    historyItemList.append(historyItem);




}