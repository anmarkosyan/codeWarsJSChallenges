//====================== validate PIN ==========================================
//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot
//contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
    //#1
    // if(pin.match(/\D/g)) return false;
    // return pin.split(/\D*/g).length === 4 || pin.split(/\D*/g).length === 6;
    //#2
    return /^(\d{4}|\d{6})$/.test(pin);// /^\d{4}$|^\d{6}$/.test(pin)

}
console.log(validatePIN('-1234'));//false
console.log(validatePIN("000000"))//true
console.log(validatePIN("123456"));//true
console.log(validatePIN(".234"));//false