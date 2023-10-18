document.addEventListener("DOMContentLoaded", function() {
    const numberInput = document.getElementById("numberInput");
    const calculateButton = document.getElementById("calculateButton");
    const resultElement = document.getElementById("result");

    calculateButton.addEventListener("click", calculateFactorial);

    function calculateFactorial() {
        const userInput = numberInput.value;
        
        if (isNaN(userInput)) {
            resultElement.textContent = "Porfavor ingrese un numero valido";
        } else {
            const number = parseInt(userInput);
            if (number < 0) {
                resultElement.textContent = "Factorial no definido para numeros negativos";
            } else {
                const factorial = calculateRecursiveFactorial(number);
                resultElement.textContent = `El factorial de ${number} es: ${factorial}`;
            }
        }
    }

    function calculateRecursiveFactorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * calculateRecursiveFactorial(n - 1);
    }
});



