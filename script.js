function innit () {
    addListeners();
    document.getElementById('elements'); 
    var clearButton = document.getElementById('clear');
    clearButton.addEventListener("click", onClickClear);
    var submitCustom = document.getElementById('generate2');
    submitCustom.addEventListener("click", onClickCustom); 
    var showFizz = document.getElementById('FizzGen');
    showFizz.addEventListener("click", OnClickFizz);
    var showBuzz = document.getElementById('BuzzGen');
    showBuzz.addEventListener("click", OnClickBuzz);
    var showFizzBuzz = document.getElementById('FizzBuzzGen')
    showFizzBuzz.addEventListener("click", OnClickFizzBuzz);
}

/*------------------------------------------------------------------------------------------------------*/

function addListeners() {
    const submit = document.getElementById('generate');
    submit.onclick = onClick;
}

/*------------------------------------------------------------------------*/

function onClickClear () {
    while (elements.firstChild) {
        elements.removeChild(elements.firstChild);
    }
}

/*-----------------------------------------------------------------------*/

function onClick() {
    onClickClear();
        for(let i = 1; i<101; i++){
            const element = document.createElement('div');
            element.className="element" + i;
            elements.appendChild(element);
                if (i % 3 ===0 && i % 5 === 0){
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "FizzBuzz");
                    element.innerText="FizzBuzz " + i;
                }
                else if (i % 3 === 0 && i % 5 !== 0) {
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "Fizz");
                    element.innerText="Fizz " + i;   
                }
                else if (i % 5 === 0 && i % 3 !== 0){
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "Buzz");
                    element.innerText="Buzz " + i; 
                }
                else if (i % 3 !== 0 && i % 5 !== 0){
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "Empty");
                    element.innerText=i;
                }
        }
}

/*------------------------------------------------------------------------*/

function onClickCustom (){
    onClickClear();
    var startValue = document.getElementById('startValue').value;
    var endValue = document.getElementById('endValue').value;   
    var fizzValue = document.getElementById('fizzValue').value;
    var buzzValue = document.getElementById('buzzValue').value;
        for (startValue; startValue<=endValue; startValue++){
            const element = document.createElement('div');
            element.id="element" + startValue;
            elements.appendChild(element);
                if (startValue % fizzValue === 0 && startValue % buzzValue === 0){
                    element.setAttribute("id", "element" +startValue);
                    element.setAttribute("class", "FizzBuzz");
                    element.innerText="FizzBuzz " + startValue;
                }
                else if (startValue % fizzValue === 0 && startValue % buzzValue !== 0) {
                    element.setAttribute("id", "element" +startValue);
                    element.setAttribute("class", "Fizz");
                    element.innerText="Fizz " + startValue;
                }
                else if (startValue % buzzValue === 0 && startValue % fizzValue !== 0){
                    element.setAttribute("id", "element" +startValue);
                    element.setAttribute("class", "Buzz");
                    element.innerText="Buzz " + startValue;
                }
                else if (startValue % fizzValue !== 0 && startValue % buzzValue !== 0){
                    element.setAttribute("id", "element" +startValue);
                    element.setAttribute("class", "Empty");
                    element.innerText=startValue;
                }
        }
    }

/*------------------------------------------------------------------------*/

function OnClickFizz (){
    onClickClear();
    var startValue = document.getElementById('startValue').value;
    var endValue = document.getElementById('endValue').value;   
    var fizzValue = document.getElementById('fizzValue').value;
    var buzzValue = document.getElementById('buzzValue').value;
    for (startValue; startValue<=endValue; startValue++){
        const element = document.createElement('div');
        element.id="element" + startValue;
        elements.appendChild(element);
        if (startValue % fizzValue === 0 && startValue % buzzValue !== 0) {
            element.setAttribute("id", "element" +startValue);
            element.setAttribute("class", "Fizz");
            element.innerText="Fizz " + startValue;
        }
    }    
}

/*------------------------------------------------------------------------*/

function OnClickBuzz () {
    onClickClear();
    var startValue = document.getElementById('startValue').value;
    var endValue = document.getElementById('endValue').value;   
    var fizzValue = document.getElementById('fizzValue').value;
    var buzzValue = document.getElementById('buzzValue').value;
    for (startValue; startValue<=endValue; startValue++){
        const element = document.createElement('div');
        element.id="element" + startValue;
        elements.appendChild(element);
        if (startValue % buzzValue === 0 && startValue % fizzValue !== 0){
            element.setAttribute("id", "element" +startValue);
            element.setAttribute("class", "Buzz");
            element.innerText="Buzz " + startValue;
        }
       
    }    
}

/*------------------------------------------------------------------------*/

function OnClickFizzBuzz () {
    onClickClear();
    var startValue = document.getElementById('startValue').value;
    var endValue = document.getElementById('endValue').value;   
    var fizzValue = document.getElementById('fizzValue').value;
    var buzzValue = document.getElementById('buzzValue').value;
    for (startValue; startValue<=endValue; startValue++){
        const element = document.createElement('div');
        element.id="element" + startValue;
        elements.appendChild(element);
        if (startValue % fizzValue === 0 && startValue % buzzValue === 0){
            element.setAttribute("id", "element" +startValue);
            element.setAttribute("class", "FizzBuzz");
            element.innerText="FizzBuzz " + startValue;
        }  
        
    }
}

/*------------------------------------------------------------------------*/

innit();
