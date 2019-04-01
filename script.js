
// immediate invoked function expression
// will create local scope so does not pollute global scope
// createHex as a call back function

(function () {

    const hexValue = document.getElementById('hex-value');
    const btn = document.getElementById('btn');
    btn.addEventListener('click', createHex);


    function createHex() {
        const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

        let hexColor = '#';

        //loop over hexValues
        for (let i = 0; i < 6; i++) {
            let random = Math.floor(Math.random() * hexValues.length)
            // console.log(random)

            hexColor += hexValues[random];
        }
        document.body.style.backgroundColor = hexColor;
        hexValue.textContent = hexColor;
    }

})();