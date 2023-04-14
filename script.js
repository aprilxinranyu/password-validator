function pwValidation() {

    //get the password in an array
    pwStr = String(document.getElementById("password").value)
    pwArr = pwStr.split("")
    
    //initiate constant arrays 
    //rule1-lowercase
    lowerCaseStr = "abcdefghijklmnopqrstuvwxyz"
    lowerCaseArr = lowerCaseStr.split("")
    //rule2-uppercase
    upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    upperCaseArr = upperCaseStr.split("")
    //rule3-numeric value
    numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    //rule4-special characters
    specCharArr = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+","-", "=", "[", "]", "{", "}", ";", "'", ":", "|", ".", "<", ">", "/", "?", "~"]

    //initiate check result arrays
    rule1Arr = []
    rule2Arr = []
    rule3Arr = []
    rule4Arr = []
    rule0Val = false
    rule1Val = false
    rule2Val = false
    rule3Val = false
    rule4Val = false
    
    // perform checks according to password rules and return "password is valid or invalid"
    //default rules to all trues
    
    //Rule (0) at least 8 characters
    rule0Val = (pwArr.length>= 8)
    
    //Rule (1-4) 
    // (1) check each character in the password against rule 1-4
    for (i=0; i<pwArr.length; i++) {
        rule1Arr.push(lowerCaseArr.includes(pwArr[i]))
        rule2Arr.push(upperCaseArr.includes(pwArr[i]))
        rule3Arr.push(numArr.includes(Number(pwArr[i])))  
        rule4Arr.push(specCharArr.includes(pwArr[i]))  
    }  
    console.log(rule1Arr, rule2Arr, rule3Arr, rule4Arr)
    // (2) rule 1-4 is met when check on at least one of the characters in the password is true
    // ruleVal - true, met; false, unmet
    for (i=0; i<pwArr.length; i++) {
        rule1Val = rule1Val || rule1Arr[i]
        rule2Val = rule2Val || rule2Arr[i]
        rule3Val = rule3Val || rule3Arr[i]
        rule4Val = rule4Val || rule4Arr[i]
    }
    //if rule1val, if any one is false, then bold the rule
    // document.getElementByID("rule1").style.color = "blue"
    ruleValArr = [rule0Val, rule1Val, rule2Val, rule3Val, rule4Val]
    console.log(ruleValArr)
    if (rule0Val && rule1Val && rule2Val && rule3Val && rule4Val) {
        alert("Password is valid!")
    } else {
        alert("Password is invalid!")
        for (i=0; i<5; i++) {
           if (ruleValArr[i] === false) { 
                document.getElementById(String("rule"+i)).style.fontWeight = "bold"
                document.getElementById(String("rule"+i)).style.color = "blue"
            }  
        }
    }
}
