const $codeNumbers = document.querySelector('.random-code__numbers');
const $generateNew = document.querySelector('.random-code__generate');
const $copy = document.querySelector('.random-code__button');
let codeList = null;
const codeLength = 5;

renderCode(codeLength);

$generateNew.onclick = (event) => {
    event.stopPropagation();
    renderCode(codeLength);
}

$copy.onclick = (event) => {
    alert(codeList.join(""))
}

function renderCode(codeLength = 5) {
    $codeNumbers.innerHTML = "";

    codeList = new Array(codeLength).fill("0");

    for (let i = 0; i < codeList.length; i++) {
        const $codeNumber = renderNumber();
        
        codeList[i] = getRandomNumberString();
        $codeNumber.textContent = codeList[i];

        $codeNumbers.appendChild($codeNumber);

        $codeNumber.onclick = (event) => {
            event.stopPropagation();
            codeList[i] = getRandomNumberString();
            $codeNumber.textContent = codeList[i];
        }
    }


}

function renderNumber() {
    const $codeNumber = document.createElement('div');
    $codeNumber.className = "random-code__number";
    return $codeNumber;
}

function updateNumber() {
    
}

function getRandomNumberString() {
    const randomNumber = Math.floor(Math.random() * 10);
    return String(randomNumber);
}

