const inches = document.getElementById('inches') as HTMLInputElement
const centimeter = document.getElementById('centimeter') as HTMLInputElement

type fnListener = (this: HTMLInputElement, e: Event) => void

const convertToCentimeter : fnListener = function(e) {
    centimeter.value = String(calcCm(parseFloat(this.value)))
}
const convertToInches: fnListener = function(e) {
    inches.value = String((calcIn(parseFloat(this.value))))
}

inches.addEventListener('input', convertToCentimeter)
centimeter.addEventListener('input', convertToInches)


function calcCm(inche: number) {
    return inche * 2.54
}

function calcIn(cm: number) {
    return cm * 0.393700787
}
