import translations from "@/translations.json"
const renderTranslation = (text, isTranslated) => {
    if (isTranslated) {
        if (isNumberAndSymbolOnly(text)) {
            return translateNumber(text)
        }
        return translations[text.toLowerCase()] ?? text
    } else {
        return text
    }
}
const translateNumber = (text) => {
    const arabicNumbers = ['٠', '١' , '٢' , '٣', '٤' , '٥', '٦', '٧', '٨', '٩']
    let finalNumber = ''
    for (let i = text.length - 1; i >= 0; i-- ) {
        if (isNumber(text[i])) {
            finalNumber += arabicNumbers[parseInt(text[i])]
        } else {
            finalNumber += text[i]
        }
    }
    console.log("Final number", finalNumber)
    return finalNumber
}
const isNumberAndSymbolOnly = (text) => {
    let pattern = /^[0-9 .!@#$%&^*\(\)-=+_\\{}"';:,.\/<>?|]+$/;
    return pattern.test(text);
}
const isNumber = (text) => {
    let pattern = /^[0-9]+$/;
    return pattern.test(text);
}
export default renderTranslation
