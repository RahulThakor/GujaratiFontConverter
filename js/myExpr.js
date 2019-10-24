function UnicodeToGopika(isArpita) {

    
   var array_one = new Array(
   
       //"ર્ીં" , "hTª",
       //"ર્ી" , "hTe",
       //"િં" , "®",
   
   


       "ૐ" , "H",

       "ઈં" , "#",
       "ઇં" , "$",
       "ઉં" , "ô",
       "ઊં" , "Ÿ",
   
       "અ" , "y",
       "આ" , "yt",
       "ઇ" , "R",
       "ઈ" , "E",
       "ઉ" , "W",
       "ઊ" , "Q",
       "ઋ" , "É",
       "ઝ્ર" , "C",
       "ઌ" , "Ý",
       "એ" , "yu",
       "ઐ" , "yi",
       "ઓ" , "ytu",
       "ઔ" , "yti",
       "ઍ" , "yì",
       "ઑ" , "ytì",
   
       "સ્ત્ર્" , "MºtT",
       "સ્ત્ર" , "Mºt",
   
       "ક્ષ્" , "ûtT",
       "ત્ર્" , "ºtT",
       "જ્ઞ્" , "¿tT",
   
       "ક્ષ" , "ût",
       "ત્ર" , "ºt",
       "જ્ઞ" , "¿t",
   
   
   
      // "્રુ" , "úw",
      // "્રૂ" , "úq",
   
       "ટ્રુ" , "x›",
       "ટ્રૂ" , "x‰",
       "ટ્ર" , "xÙ",
       "ડ્રુ" , "z›",
       "ડ્રૂ" , "z‰",
       "ડ્ર" , "zÙ",
       "જ્રુ" , "@w",
       "જ્રૂ" , "@q",
       "જ્રા" , "@t",
       "જ્ર" , "@",
   
       "સ્ર્" , "²tT",
       "સ્ર" , "²t",
       "પ્ર" , "«",
   
       "દ્ર" , "ÿ",
       "શ્ર્વ" , "©Tð",
       "શ્ર" , "©",
       "ક્ર" , "¢",
       "ફ્ર" , "£",
       "હ્ર" , "´",
   
      // "વ્ર" , "ðú",
   
       "્ર" , "ú",
   
       //"ર્" , "hT",
   
       "ક્ન" , "õ™",
       "ટ્ટ" , "è",
       "ટ્ઠ" , "a",
       "ડ્ડ" , "œ",
       "ડ્ડ" , "œ",
       "ત્ન" , "J",
   
       "દૃ" , "á",
       "દૃ" , "á",
       "ઢ્ઢ" , "ë",
       "" , "",
       "ડ્ઢ" , "D",
       //"ડ્ઢ" , "D",
       "હ્ન" , "ö",
       "હ્ય્" , "ÌtT",
       "હ્ય" , "Ìt",
       //"હ્ય" , "Ìt",
       "શ્ન" , "§",
       "ઙ્ક" , "Ñ",
       "ઙ્ખ" , "Ö",
       "ઙ્ગ" , "Ü",
       "ઙ્ઘ" , "d",
       "હ્ણ" , "nTý",
       "હ્મ" , "ñ",
       "હ્વ" , "b",
       "દૃ" , "á",
       "દ્ઘ" , "j",
       "દ્બ" , "m",
       "દ્ભ" , "K",
       "દ્મ" , "È",
       "દ્વ" , "î",
       "ઠ્ઠ" , "ê",
       "દ્ગ" , "N",
       "દ્ધ" , "Ø",
       "ન્ન્" , "ÒtT",
       "ન્ન" , "Òt",
       "પ્ત" , "ó",
       "પ્ન" , "¡",
       "જી" , "S",
   
   
   
       "જા" , "ò",
   
       "ત્ત્" , "¥tT",
       "ત્ત" , "¥t",
   
       "ષ્ટ" , "ü",
       "ષ્ઠ" , "c",
       "શ્ચ" , "ù",
       "શ્વ" , "ï",
       "સ્ન્" , "M™T",
       "સ્ન" , "M™",
       "દ્દ" , "Æ",
       "હૃ" , "Ó",
       "ક્ક" , "¬",
       "દ્ય" , "ã",
   
       //"્ય" , "â",
   /*
ક્ખ્ગ્ઘ્ઝ઼ચ્જ્ઞ્ણ્ત્થ્ધ્ન્પ્ફ્બ્ભ્મ્ય્લ્વ્શ્સ્ષ્હ્ળ્

//////////////////////////////
   ક્
ખ્
ગ્
ઘ્
ઝ઼
ચ્
જ્
ઞ્
ણ્
ત્
થ્
ધ્
ન્
પ્
ફ્
બ્
ભ્
મ્
ય્
લ્
વ્
શ્
સ્
ષ્
હ્
ળ્
   */ 
       "ક્" , "õ",
       "ખ્" , "Ï",
       "ગ્" , "ø",
       "ઘ્" , "Î",
       "ઝ઼" , "Í|",
       "ચ્" , "å",
       "જ્" , "ß",
       "ઞ્" , "Å",
       "ણ્" , "Û",
       "ત્" , "í",
       "થ્" , "Ú",
       "ધ્" , "æ",
       "ન્" , "L",
      // "ન્" , "™T",
       "પ્" , "Ã",
       "ફ્" , "^",
       "બ્" , "ç",
       "ભ્" , "Ç",
       "મ્" , "B",
       "ય્" , "G",
       "લ્" , "Õ",
       "વ્" , "Ô",
       "શ્" , "~",
      // "શ્" , "þT",
       "સ્" , "M",
       "ષ્" , "»",
       "હ્" , "nT",
       "ળ્" , "é",
   
       "ણુ" , "ýw",
       "ણૂ" , "ýq",
       "ફુ" , "Vw",
       "ફૂ" , "Vq",
       "રુ" , "Á",
       "રૂ" , "Y",
   
       "ફ઼" , "V|",
       "ક" , "f",
       "ખ" , "¾",
       "ગ" , "„",
       "ઘ" , "½",
       "ઙ" , "Ê",
       "ચ" , "[",
       "છ" , "A",
       "જ" , "s",
       "ઝ્" , "ÍT",
       "ઝ" , "Í",
       "ઞ" , "Åt",
   
       "ટ" , "x",
       "ઠ" , "X",
       "ડ" , "z",
       "ઢ" , "Z",
       "ણ" , "ý",
       "ત" , "‚",
       "થ" , "Út",
       "દ" , "Œ",
       "ધ" , "Ä",
       "ન" , "™",
   
       "પ" , "…",
       "ફ" , "V",
       "બ" , "ƒ",
       "ભ" , "¼",
       "મ" , "{",
   
       "ય" , "Þ",
       //"ર્ " , "hT ",
       "ર" , "h",
       "લ" , "÷",
       "વ" , "ð",
       "શ" , "þ",
       "ષ" , "»t",
       "સ" , "Ë",
       "હ" , "n",
       "ળ" , "¤",
   
       "઼" , "|",
       "ૅં" , "ìk",
   
       "ા" , "t",
       "ૅ" , "ì",
       "ૉ" , "tì",
      // "િ" , "r",
       "ીં" , "ª",
       "ી" , "e",
       "ુ" , "w",
       "ૂ" , "q",
       //"ુ" , "w",
      // "ૂ" , "q",
       "ૃ" , "]",
       "ે" , "u",
       "ૈ" , "i",
       "ો" , "tu",
       "ૌ" , "ti",
       //"ઁ" , "P",
       "ઁ" , "P",
      // "ં" , "k",
       "ં" , "k",
       "ઃ" , ":",
       "ઽ" , "à",
       "્" , "T",
       "ëm" , "ëm",
   
       "।" , ">",
       "‘" , "‘",
       "’" , "’",
   
       "૦", "0",
       "૧", "1",
       "૨", "2",
       "૩", "3",
       "૪", "4",
       "૫", "5",
       "૬", "6",
       "૭", "7",
       "૮", "8",
       "૯", "9"
              )
   
   
   var array_one_length = array_one.length ;
   
       document.getElementById("box3").value = "You have chosen SIMPLE TEXT in Unicode to convert into Chanakya font. Conversion in progress.."  ;  
   
   var modified_substring = document.getElementById("box1").value  ;
   //***************************************************
   //  Break the long text into small bunches of max. max_text_size  characters each.
   //***************************************************
       var text_size = document.getElementById("box1").value.length ;
   
       var processed_text = '' ;  //blank
   
       var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
    
    // var max_text_size = chunksize;	
   
       var max_text_size = 6000;
     
    // alert(max_text_size);
   
       while ( chale_chalo == 1 ) 
       {
        sthiti1 = sthiti2 ;
   
        if ( sthiti2 < ( text_size - max_text_size ) )  
        { 
         sthiti2 +=  max_text_size ;
         while (document.getElementById("box1").value.charAt ( sthiti2 ) != ' ') {sthiti2--;}
        } 
        else  { sthiti2 = text_size  ;  chale_chalo = 0 }
   
        var modified_substring = document.getElementById("box1").value.substring ( sthiti1, sthiti2 )  ;
   
       Replace_Symbols( ) ;
   
       processed_text += modified_substring ;
   
   //**************************************
   //  Breaking part code over
   //**************************************
   
       document.getElementById("box3").value = processed_text  ;
      }
   
   
   //**************************************************
   
   
   function Replace_Symbols( )
      {
       // if string to be converted is non-blank then no need of any processing.
       if (modified_substring != "" )  
          {
   
   // These two to avoid conversion of ર્ into ó.
   modified_substring = modified_substring.replace ( /ત્ર્/g , "ºtT" )  ; 
   modified_substring = modified_substring.replace ( /શ્ર્/g , "©T" )  ;
   
   modified_substring = modified_substring.replace( /ર્/g , "hT" ) ;
   
   modified_substring = modified_substring.replace ( /ºtT/g , "ત્ર્" )  ; 
   modified_substring = modified_substring.replace ( /©T/g , "શ્ર્" ) ;
   
   // following statements for adjusting postion of i maatraas.
   
   modified_substring = modified_substring.replace( /િં/g , "®" ) ;
   modified_substring = modified_substring.replace( /િ/g , "r" ) ;
   modified_substring = modified_substring.replace( /ર્િ/g , "Š" ) ;
   
   // ã = long  િ  --> following code to be corrected accordingly
   
   //modified_substring = modified_substring.replace( /([ક્ ખ્ ગ્ ઘ્ ઝ઼ ચ્ જ્ ઞ્ ણ્ ત્ થ્ ધ્ ન્ પ્ ફ્ બ્ ભ્ મ્ ય્ લ્ વ્ શ્ સ્ ષ્ હ્ ળ્])([કખગઘઙચછજઝઞટઠડઢણતથદધનપફબભમયરલવશષસહળ])([Š])/g , "$3$1$2" ) ;

   //modified_substring = modified_substring.replace( /([કખગઘઙચછજઝઞટઠડઢણતથદધનપફબભમયરલવશષસહળ])([Š])/g , "$2$1" ) ;

   //modified_substring = modified_substring.replace( /([ક્ ખ્ ગ્ ઘ્ ઝ઼ ચ્ જ્ ઞ્ ણ્ ત્ થ્ ધ્ ન્ પ્ ફ્ બ્ ભ્ મ્ ય્ લ્ વ્ શ્ સ્ ષ્ હ્ ળ્])([કખગઘઙચછજઝઞટઠડઢણતથદધનપફબભમયરલવશષસહળ])([r])/g , "$3$1$2" ) ;
  
   //modified_substring = modified_substring.replace( /([કખગઘઙચછજઝઞટઠડઢણતથદધનપફબભમયરલવશષસહળ])([r])/g , "$2$1" ) ;

   modified_substring = modified_substring.replace( /([કખગઘઙચછજઝઞટઠડઢણતથદધનપફબભમયરલવશષસહળ])([®])/g , "$2$1" ) ;
   
   modified_substring = modified_substring.replace( /([કખગઘઙચછજઝઞટઠડઢણતથદધનપફબભમયરલવશષસહળ])(્)([®])/g , "$3$1$2" ) ;
   
   modified_substring = modified_substring.replace( /([કખગઘઙચછજઝઞટઠડઢણતથદધનપફબભમયરલવશષસહળ])(્)([®])/g , "$3$1$2" ) ;
   
   
   // Eliminating "ર્" and putting  reph (ó)  at proper position for this.
   
   modified_substring = modified_substring.replace( /hTr/g , "rhT" ) ;
   
   modified_substring = modified_substring.replace( /hT([કખગઘઙચછજઝઞટઠડઢણતથદધનપફબભમયરલવશષસહળ])([્])/g , "$1$2o" ) ;
   
   modified_substring = modified_substring.replace( /hT([કખગઘઙચછજઝઞટઠડઢણતથદધનપફબભમયરલવશષસહળ])([્])/g , "$1$2o" ) ;
   
   modified_substring = modified_substring.replace( /hT([કખગઘઙચછજઝઞટઠડઢણતથદધનપફબભમયરલવશષસહળ])([ાીુૂૃેૈોૌંઁૅૉ઼]*)/g , "$1$2o" ) ;
   
   

   modified_substring = modified_substring.replace( /ીંhT/g , "`" ) ;
   modified_substring = modified_substring.replace( /ીhT/g , "hTe" ) ;
   
   modified_substring = modified_substring.replace( /ંhT/g , "hTk" ) ;
   
   // Halanta after which there is no constant but space, hypen, comma or full-stop etc
   modified_substring = modified_substring.replace ( /[્]([ \,\;\.।\n\-\:])/g , "T$1" ) ;
   
   modified_substring = modified_substring.replace( /([કછટઢફ])્ય/g , "$1â" ) ;
   
   
   //substitute roman charecters in place of corresponding Gujarati Unicode Characters
   
           for( input_symbol_idx = 0; input_symbol_idx < array_one_length-1; input_symbol_idx=input_symbol_idx+2 )
              {
               idx = 0  ;  // index of the symbol being searched for replacement
   
               while (idx != -1 ) //whie-00
                  {
                   modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_one[input_symbol_idx+1] )
                   idx = modified_substring.indexOf( array_one[input_symbol_idx] )
                  } // end of while-00 loop
              } // end of for loop
   
           } // end of IF  statement  meant to  supress processing of  blank  string.
   
       } // end of the function  Replace_Symbols( )
   
   if (isArpita == true){  
   
      var G2A = document.getElementById('box3').value;
   
     G2A = G2A.replace(/Œ/g, "Ë");                  // દ  -->  સ
     G2A = G2A.replace(/‚/g, "Œ");                 // સ --> t
     G2A = G2A.replace(/k/g, "shriji_rrrrrr");    // .  -->  shriji_rrrrrr
     G2A = G2A.replace(/t/g, "k");               // |  -->  .
     G2A = G2A.replace(/shriji_rrrrrr/g, "t");  // shriji_rrrrrr  -->  |
      
      document.getElementById('box3').value = G2A;
   
   }
   
   
     } // end of Convert_Unicode_to_Krishna function
   