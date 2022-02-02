//============================= reverse And Mirror =========================================
//
//Given 2 string parameters, show a concatenation of:
//
// the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
// a separator in between both strings: @@@
// the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER

const reverseAndMirror = (s1, s2) => {
    //I think this is best solution , it's run time is minimal,
    // we do just 3 seps, I dont want to use methods
    let str1 = '';
    let str2 = '';
    let str3 = '';
    for(let el of s1){
        if(/[A-Z]/.test(el)){
            str1 = el.toLowerCase() + str1;
        }else str1 = el.toUpperCase() + str1;
    }
    for(let el of s1){
        if(/[A-Z]/.test(el)){
            str3 += el.toLowerCase() ;
        }else str3 += el.toUpperCase() ;
    }
    for(let el of s2){
        if(/[A-Z]/.test(el)){
            str2 = el.toLowerCase() + str2;
        }else str2 = el.toUpperCase() + str2;
    }
    return str2 + '@@@'+ str1 + str3;
}
console.log(reverseAndMirror("FizZ", "buZZ"));//"zzUB@@@zZIffIZz"
console.log(reverseAndMirror("String Reversing", "Changing Case"));//"ESAc GNIGNAHc@@@GNISREVEr GNIRTssTRING rEVERSING"