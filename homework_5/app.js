(function(){
    
    let form = document.forms.namedItem("converter"),
        bynValueEl = form.elements.namedItem("bynValue"),
        selectedCurrencyEl = form.elements.namedItem("selectedCurrency"),
        outputEl = document.getElementById("result"),
        submitBtn = form.querySelector("button"),
        currencyData = new Map();
    
    selectedCurrencyEl.addEventListener("change", () => {
        let currencyCode = selectedCurrencyEl.value;
        toggleSubmit(false)
         nbApi(`Rates/${currencyCode}?ParamMode=2`,
            (err, currency) =>{
                if(!err){
                    currencyData.set(currencyCode, currency)
                    let byn = bynValueEl.value;
                    if(byn){
                        convert();
                    }
                }
                 toggleSubmit(true);
            }
         );
    });
 
    bynValueEl.addEventListener("input", () => {
        convert();
    });


    form.addEventListener("submit" , (event) => {
         event.preventDefault();
         convert();
    });
    
    function convert(){
        let bynValue = bynValueEl.valueAsNumber || 0,
        {Cur_Scale, Cur_OfficialRate} = currencyData.get(selectedCurrencyEl.value);
        let result = bynValue/Cur_OfficialRate * Cur_Scale;
        outputEl.textContent = result.toFixed(2);

    }

    

    nbApi("Currencies", (error, currencies)=>{
        if(error){
            return;
        }
        fillOptions(currencies);
        selectedCurrencyEl.dispatchEvent(new Event("change"))
    });

    function fillOptions(currencies){
         selectedCurrencyEl.append(currencies.reduce((fragment, currency)=>{
             let option = document.createElement("option");
             option.textContent = currency.Cur_Name;
             option.value = currency.Cur_Abbreviation;
             fragment.append(option);
             return fragment;
         }, document.createDocumentFragment()))
    }

    function nbApi (type, callback){
          let xhr = new XMLHttpRequest();
          xhr.open("GET", `http://www.nbrb.by/API/ExRates/${type}`, true);
          xhr.responseType = "json";
          xhr.onload = () => callback(false, xhr.response);
          xhr.onerror = () => callback(true,null);
          xhr.send();

    }
    
    function toggleSubmit(state){
        submitBtn.disabled = typeof state === "boolean"? !state :!submitBtn.disabled;
    }
    
//TODO trigger convert on change select or event input
// dont convert if empty field
// remove convert button
})();