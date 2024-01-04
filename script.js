const convertBtn = document.getElementById('convert-btn');
const input = document.getElementById('number');
const output = document.getElementById('output');


const convertToRoman = (number) => {
    const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const numeralValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = '';

    for (let i = 0; i < numeralValues.length; i++) {
        while (number >= numeralValues[i]) {
            result += romanNumerals[i];
            number -= numeralValues[i];
        }
    }

    return result;
}


const handleConversion = () => {
    const inputValue = parseInt(input.value);

    if(isNaN(inputValue) || inputValue < 1 || inputValue > 3999){
      output.style.display = 'block';
      output.style.backgroundColor = '#FFADAD';
      output.style.border = '2px solid #850000';
      output.style.color = "#850000";

      if (isNaN(inputValue)) {
            output.textContent = "Please enter a valid number";
        } else if (inputValue < 1) {
            output.textContent = "Please enter a number greater than or equal to 1";
        } else {
            output.textContent = "Please enter a number less than or equal to 3999";
        }

        input.value = '';
    } else{
        output.style.display = 'flex';
        output.style.color = 'white'; 
        output.style.fontSize = '2rem'; 
        output.style.justifyContent = 'center';
        output.style.alignItems = 'center';
        output.style.backgroundColor = '#3B3B4F';
        output.style.border = '2px solid white';
        output.textContent = convertToRoman(inputValue);
        input.value = '';
    }
}

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleConversion();
    }
})

convertBtn.addEventListener('click', handleConversion);