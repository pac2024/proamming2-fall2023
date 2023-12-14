function convert() {
    let usdAmount = document.getElementById("usdInput").value;
    let currency = document.getElementById("currencies").value;
    let convertedResultDiv = document.getElementById("converted-result")
    
    // let conversionRates = {
    //     EUR: 0.94,
    //     GBP: 0.82,
    //     CAD: 1.38,
    //     CHF: 0.90,
    //     JPY: 1351.52,
    // };

    console.log(currency)

    if(currency == "eur") {
        let newAmount = "€" + usdAmount*0.94;
        convertedResultDiv.innerText = newAmount;
    } 
    else if (currency == "gbp") {
        let newAmount = "£" + usdAmount*.82;
        convertedResultDiv.innerText = newAmount;
    }
    else if (currency == "cad") {
        let newAmount = "CA$" + usdAmount*1.38;
        convertedResultDiv.innerText = newAmount;
    }
    else if (currency == "chf") {
        let newAmount = "₣" + usdAmount*.90;
        convertedResultDiv.innerText = newAmount;
    }
    else if (currency == "jpy") {
        let newAmount = "¥" + usdAmount*151.65;
        convertedResultDiv.innerText = "Choose a value!"
    }
    else {

    }



    // document.getElementById("usdDisplay").innerText = usdAmount + " USD";
    // document.getElementById("eur").innerText = "Converted to EUR: " + (usdAmount * conversionRates.EUR).toFixed(2) + " EUR";
    // document.getElementById("gbp").innerText = "Converted to GBP: " + (usdAmount * conversionRates.GBP).toFixed(2) + " GBP";
    // document.getElementById("cad").innerText = "Converted to CAD: " + (usdAmount * conversionRates.CAD).toFixed(2) + " CAD";
    // document.getElementById("chf").innerText = "Converted to CHF: " + (usdAmount * conversionRates.CHF).toFixed(2) + " CHF";
    // document.getElementById("jpy").innerText = "Converted to JPY: " + (usdAmount * conversionRates.JPY).toFixed(2) + " JPY";
}
