function clearForm() { 
        document.getElementById('box1').value = ''
        document.getElementById('box3').value = ''
        
        //Disable Button
        $("#btnNonUnicodeToUnicode").prop("disabled", !this.value);
        $("#btnClear").prop("disabled", !this.value);
        $("#but-copy1").prop("disabled", !this.value);
        $("#but-copy2").prop("disabled", !this.value);
        
}

function settBoxFon(){

     var v1 = document.getElementById('drpFont1');
     var v2 = document.getElementById('drpFont2');
     var valOfv1 = v1.options[v1.selectedIndex].innerHTML;
     var valOfv2 = v2.options[v2.selectedIndex].innerHTML;

     if (valOfv2 == "Arpita") {
         document.getElementById("box3").style.fontFamily = "GopikaTwoArpita";
     }
     else if (valOfv2 == "GopikaTwo") {
         document.getElementById("box3").style.fontFamily = "GopikaTwoBhashabharti";
     }

     if (valOfv1 == "Arpita") {
         document.getElementById("box1").style.fontFamily = "GopikaTwoArpita";
     }
     else if (valOfv1 == "GopikaTwo") {
         document.getElementById("box1").style.fontFamily = "GopikaTwoBhashabharti";
     }
     else {
         document.getElementById("box1").style.fontFamily = "GopikaTwoBhashabharti";
     }
}

function copy2clip(id) {
    var copyText = document.getElementById(id);
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }


function paste_text(id) {
//document.getElementById(id).value = ''

//document.getElementById(id).focus;
//pasteText.focus();
//document.execCommand("paste");

//document.querySelector(id).focus();
//document.execCommand("paste");
//document.execCommand("paste");

//document.getElementById(id).value = document.execCommand("paste")
}

 

function startText() {
    var a, b, c;
    text = document.txtBox.box1.value;
    for (var d = 0; d < specialConsonants.length; d++) {
        text = text.replace(specialConsonants[d], specialConsonantsUni[d])
    }
    for (var d = 0; d < specialCharUni.length; d++) {
        for (var e = 0; e < consonants.length; e++) {
            a = consonants[e] + specialChar[d];
            c = consonantsUni[e] + specialCharUni[d];
            b = new RegExp(a, "g");
            text = text.replace(b, c)
        }
    }
    for (var e = 0; e < consonants.length; e++) {
        for (var d = 0; d < vowels.length; d++) {
            a = consonants[e] + "r" + vowels[d];
            c = consonantsUni[e] + "්‍ර" + vowelModifiersUni[d];
            b = new RegExp(a, "g");
            text = text.replace(b, c)
        }
        a = consonants[e] + "r";
        c = consonantsUni[e] + "්‍ර";
        b = new RegExp(a, "g");
        text = text.replace(b, c)
    }
    for (var d = 0; d < consonants.length; d++) {
        for (var e = 0; e < nVowels; e++) {
            a = consonants[d] + vowels[e];
            c = consonantsUni[d] + vowelModifiersUni[e];
            b = new RegExp(a, "g");
            text = text.replace(b, c)
        }
    }
    for (var d = 0; d < consonants.length; d++) {
        b = new RegExp(consonants[d], "g");
        text = text.replace(b, consonantsUni[d] + "්")
    }
    for (var d = 0; d < vowels.length; d++) {
        b = new RegExp(vowels[d], "g");
        text = text.replace(b, vowelsUni[d])
    }
    document.txtBox.box2.value = text
}

function copyit(theField) {
    var tempval = eval("document." + theField);
    tempval.focus();
    tempval.select();
    therange = tempval.createTextRange();
    therange.execCommand("Copy")
}

function changeVisibility() {
    if (schemeVisible) {
        document.getElementById("scheme").style.visibility = "hidden";
        document.getElementById("link").innerHTML = " Show Transliteration Scheme ";
        schemeVisible = 0
    } else {
        document.getElementById("scheme").style.visibility = "visible";
        document.getElementById("link").innerHTML = "  Hide Transliteration Scheme ";
        schemeVisible = 1
    }
}
var text;
var nVowels;
var consonants = new Array;
var consonantsUni = new Array;
var vowels = new Array;
var vowelsUni = new Array;
var vowelModifiersUni = new Array;
var specialConsonants = new Array;
var specialConsonantsUni = new Array;
var specialCharUni = new Array;
var specialChar = new Array;
vowelsUni[0] = "ક";
vowels[0] = "હેલ્લો";
vowelModifiersUni[0] = "ખ";
vowelsUni[1] = "ખખખખ";
vowels[1] = "o\\)";
vowelModifiersUni[1] = "ෝ";
vowelsUni[2] = "ඕ";
vowels[2] = "oe";
vowelModifiersUni[2] = "ෝ";
vowelsUni[3] = "ආ";
vowels[3] = "aa";
vowelModifiersUni[3] = "ා";
vowelsUni[4] = "ආ";
vowels[4] = "a\\)";
vowelModifiersUni[4] = "ා";
vowelsUni[5] = "ඈ";
vowels[5] = "Aa";
vowelModifiersUni[5] = "ෑ";
vowelsUni[6] = "ඈ";
vowels[6] = "A\\)";
vowelModifiersUni[6] = "ෑ";
vowelsUni[7] = "ඈ";
vowels[7] = "ae";
vowelModifiersUni[7] = "ෑ";
vowelsUni[8] = "ඊ";
vowels[8] = "ii";
vowelModifiersUni[8] = "ී";
vowelsUni[9] = "ඊ";
vowels[9] = "i\\)";
vowelModifiersUni[9] = "ී";
vowelsUni[10] = "ඊ";
vowels[10] = "ie";
vowelModifiersUni[10] = "ී";
vowelsUni[11] = "ඊ";
vowels[11] = "ee";
vowelModifiersUni[11] = "ී";
vowelsUni[12] = "ඒ";
vowels[12] = "ea";
vowelModifiersUni[12] = "ේ";
vowelsUni[13] = "ඒ";
vowels[13] = "e\\)";
vowelModifiersUni[13] = "ේ";
vowelsUni[14] = "ඒ";
vowels[14] = "ei";
vowelModifiersUni[14] = "ේ";
vowelsUni[15] = "ඌ";
vowels[15] = "uu";
vowelModifiersUni[15] = "ූ";
vowelsUni[16] = "ඌ";
vowels[16] = "u\\)";
vowelModifiersUni[16] = "ූ";
vowelsUni[17] = "ඖ";
vowels[17] = "au";
vowelModifiersUni[17] = "ෞ";
vowelsUni[18] = "ඇ";
vowels[18] = "/a";
vowelModifiersUni[18] = "ැ";
vowelsUni[19] = "අ";
vowels[19] = "a";
vowelModifiersUni[19] = "";
vowelsUni[20] = "ඇ";
vowels[20] = "A";
vowelModifiersUni[20] = "ැ";
vowelsUni[21] = "ඉ";
vowels[21] = "i";
vowelModifiersUni[21] = "ි";
vowelsUni[22] = "එ";
vowels[22] = "e";
vowelModifiersUni[22] = "ෙ";
vowelsUni[23] = "උ";
vowels[23] = "u";
vowelModifiersUni[23] = "ු";
vowelsUni[24] = "ඔ";
vowels[24] = "o";
vowelModifiersUni[24] = "ො";
vowelsUni[25] = "ඓ";
vowels[25] = "I";
vowelModifiersUni[25] = "ෛ";
nVowels = 26;
specialConsonantsUni[0] = "ං";
specialConsonants[0] = /\\n/g;
specialConsonantsUni[1] = "ඃ";
specialConsonants[1] = /\\h/g;
specialConsonantsUni[2] = "ඞ";
specialConsonants[2] = /\\N/g;
specialConsonantsUni[3] = "ඍ";
specialConsonants[3] = /\\R/g;
specialConsonantsUni[4] = "ර්" + "‍";
specialConsonants[4] = /R/g;
specialConsonantsUni[5] = "ර්" + "‍";
specialConsonants[5] = /\\r/g;
consonantsUni[0] = "ඬ";
consonants[0] = "nnd";
consonantsUni[1] = "ඳ";
consonants[1] = "nndh";
consonantsUni[2] = "ඟ";
consonants[2] = "nng";
consonantsUni[3] = "ථ";
consonants[3] = "Th";
consonantsUni[4] = "ධ";
consonants[4] = "Dh";
consonantsUni[5] = "ඝ";
consonants[5] = "gh";
consonantsUni[6] = "ඡ";
consonants[6] = "Ch";
consonantsUni[7] = "ඵ";
consonants[7] = "ph";
consonantsUni[8] = "භ";
consonants[8] = "bh";
consonantsUni[9] = "ශ";
consonants[9] = "sh";
consonantsUni[10] = "ෂ";
consonants[10] = "Sh";
consonantsUni[11] = "ඥ";
consonants[11] = "GN";
consonantsUni[12] = "ඤ";
consonants[12] = "KN";
consonantsUni[13] = "ළු";
consonants[13] = "Lu";
consonantsUni[14] = "ද";
consonants[14] = "dh";
consonantsUni[15] = "ච";
consonants[15] = "ch";
consonantsUni[16] = "ඛ";
consonants[16] = "kh";
consonantsUni[17] = "ත";
consonants[17] = "th";
consonantsUni[18] = "ට";
consonants[18] = "t";
consonantsUni[19] = "ක";
consonants[19] = "k";
consonantsUni[20] = "ඩ";
consonants[20] = "d";
consonantsUni[21] = "න";
consonants[21] = "n";
consonantsUni[22] = "ප";
consonants[22] = "p";
consonantsUni[23] = "බ";
consonants[23] = "b";
consonantsUni[24] = "ම";
consonants[24] = "m";
consonantsUni[25] = "‍ය";
consonants[25] = "\\u005C" + "y";
consonantsUni[26] = "‍ය";
consonants[26] = "Y";
consonantsUni[27] = "ය";
consonants[27] = "y";
consonantsUni[28] = "ජ";
consonants[28] = "j";
consonantsUni[29] = "ල";
consonants[29] = "l";
consonantsUni[30] = "ව";
consonants[30] = "v";
consonantsUni[31] = "ව";
consonants[31] = "w";
consonantsUni[32] = "ස";
consonants[32] = "s";
consonantsUni[33] = "හ";
consonants[33] = "h";
consonantsUni[34] = "ණ";
consonants[34] = "N";
consonantsUni[35] = "ළ";
consonants[35] = "L";
consonantsUni[36] = "ඛ";
consonants[36] = "K";
consonantsUni[37] = "ඝ";
consonants[37] = "G";
consonantsUni[38] = "ඨ";
consonants[38] = "T";
consonantsUni[39] = "ඪ";
consonants[39] = "D";
consonantsUni[40] = "ඵ";
consonants[40] = "P";
consonantsUni[41] = "ඹ";
consonants[41] = "B";
consonantsUni[42] = "ෆ";
consonants[42] = "f";
consonantsUni[43] = "ඣ";
consonants[43] = "q";
consonantsUni[44] = "ග";
consonants[44] = "g";
consonantsUni[45] = "ර";
consonants[45] = "r";
specialCharUni[0] = "ෲ";
specialChar[0] = "ruu";
specialCharUni[1] = "ෘ";
specialChar[1] = "ru";
var schemeVisible = 0

