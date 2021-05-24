function showPara() {
    var inputs = [];
    for (var x = 1; x < 7; x++) {
        inputs.push(lastAlphabet(x));
    }
    document.getElementById("Para1").innerHTML = inputs.join(" ");
}

function showPara2() {
    var inputs = [];
    for (var x = 11; x < 17; x++) {
        inputs.push(lastAlphabet(x));
    }
    document.getElementById("Para2").innerHTML = inputs.join(" ");
}

function lastAlphabet(x) //checks for presence of empty string or string with last alphabet "."
// and then appropriately places a "."

{
    var S = document.getElementById(x).value;
    if (!(S == "" || S.slice(-1) == ".")) S = S + ".";
    return S;
}