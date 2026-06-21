let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value == '=') {
            try {
                string = eval(string).toString();
                input.value = string;
            } catch (err) {
                input.value = "Error";
                string = "";
            }
        }
        else if (value == 'AC') {
            string = "";
            input.value = "";
            input.placeholder = "0";
        }
        else if (value == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
            if (string == "") input.placeholder = "0";
        }
        else if (value == '%') {
            string = (parseFloat(string) / 100).toString();
            input.value = string;
        }
        else {
            string += value;
            input.value = string;
        }
    });
});