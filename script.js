let input = document.getElementById('inputbox'); //input id = inputbox
let button = document.querySelectorAll('button');

let string = "";
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{ 
        if(e.target.innerHTML == '=')  //calcualte
        {
            string = eval(string);  //javascript evaluate function
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC')  //All clear
        {
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL')  //delete last digit
        {
            
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        
        else{
            string += e.target.innerHTML;    //when give the input, put in string
            input.value = string;
        }

    })
})