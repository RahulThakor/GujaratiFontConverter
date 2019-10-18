﻿ var A2G;
 function ArpitaToGopikaTwo() {
   A2G = document.getElementById('box1').value;
 
   A2G = A2G.replace(/Ë/g, "Œ");                  // સ  -->  દ
   A2G = A2G.replace(/k/g, "shriji_rrrrrr");    // .  -->  shriji_rrrrrr
   A2G = A2G.replace(/t/g, "k");               // |  -->  .
   A2G = A2G.replace(/shriji_rrrrrr/g, "t");  // shriji_rrrrrr  -->  |
	  
	  document.getElementById('box3').value = A2G;
 }

 var G2A;
 function GopikaTwoToArpita() {
  G2A = document.getElementById('box1').value;

  G2A = G2A.replace(/Œ/g, "Ë");                  // દ  -->  સ
  G2A = G2A.replace(/k/g, "shriji_rrrrrr");    // .  -->  shriji_rrrrrr
  G2A = G2A.replace(/t/g, "k");               // |  -->  .
  G2A = G2A.replace(/shriji_rrrrrr/g, "t");  // shriji_rrrrrr  -->  |
   
   document.getElementById('box3').value = G2A;
}


var sftext;	
function UnicodeToGopikaTwo() {
	sftext = document.getElementById('box1').value;

sftext = sftext.replace(/\[/g, "[[[");
sftext = sftext.replace(/\]/g, "");
sftext = sftext.replace(/ૐ/g, "H");
sftext = sftext.replace(/ઁ/g, "P");
sftext = sftext.replace(/ઁ/g, "P");
sftext = sftext.replace(/ં/g, "k");
sftext = sftext.replace(/અ/g, "y");
sftext = sftext.replace(/ઇ/g, "R");
sftext = sftext.replace(/ઇં/g, "$");
sftext = sftext.replace(/ઈ/g, "E");
sftext = sftext.replace(/ઈ/g, "E");
sftext = sftext.replace(/ઈં/g, "#");
sftext = sftext.replace(/ઉ/g, "W");
sftext = sftext.replace(/ઉં/g, "ô");
sftext = sftext.replace(/ઊ/g, "Q");
sftext = sftext.replace(/ઊ/g, "Q");
sftext = sftext.replace(/ઊં/g, "Ÿ");
sftext = sftext.replace(/ઋ/g, "É");
sftext = sftext.replace(/ૡ/g, "ૡ");
sftext = sftext.replace(/ક/g, "f");
sftext = sftext.replace(/ક્ક/g, "¬");
sftext = sftext.replace(/ક્ત/g, "õ‚");
sftext = sftext.replace(/ક્ર/g, "¢");
sftext = sftext.replace(/ક્ર/g, "<");
sftext = sftext.replace(/ક્લ/g, "õ÷");
sftext = sftext.replace(/ક્ષ/g, "ût");
sftext = sftext.replace(/ક્ષ/g, "ût");
sftext = sftext.replace(/ક્ષ્/g, "ûtT");
sftext = sftext.replace(/ક્ષ્ય/g, "ûÞ");
sftext = sftext.replace(/ખ/g, "¾");
sftext = sftext.replace(/ખ્/g, "Ï");
sftext = sftext.replace(/ખ્ત/g, "g");
sftext = sftext.replace(/ગ/g, "„");
sftext = sftext.replace(/ગ્/g, "ø");
sftext = sftext.replace(/ઘ/g, "½");
sftext = sftext.replace(/ઙ/g, "Ê");
sftext = sftext.replace(/ઙ્ખ/g, "Ö");
sftext = sftext.replace(/ઙ્ગ/g, "Ü");
sftext = sftext.replace(/ઙ્ઘ/g, "d");
sftext = sftext.replace(/ઙ્મ/g, "l");
sftext = sftext.replace(/ચ/g, "[");
sftext = sftext.replace(/ચ્/g, "å");
sftext = sftext.replace(/છ/g, "A");
sftext = sftext.replace(/જ/g, "s");
sftext = sftext.replace(/જા/g, "ò");
sftext = sftext.replace(/જ્/g, "ß");
sftext = sftext.replace(/જ્ઞ/g, "¿t");
sftext = sftext.replace(/જ્ઞ્/g, "¿tT");
sftext = sftext.replace(/જ્ઞ્ય/g, "¿Þ");
sftext = sftext.replace(/જ્ર/g, "@");
sftext = sftext.replace(/ઝ/g, "Í");
sftext = sftext.replace(/ઝ્ર/g, "C");
sftext = sftext.replace(/ઝ્ર/g, "C");
sftext = sftext.replace(/ટ/g, "x");
sftext = sftext.replace(/ટ્ટ/g, "è");
sftext = sftext.replace(/ઠ/g, "X");
sftext = sftext.replace(/ઠ્ઠ/g, "ê");
sftext = sftext.replace(/ડ/g, "z");
sftext = sftext.replace(/ડ્ડ/g, "œ");
sftext = sftext.replace(/ડ્ઢ/g, "D");
sftext = sftext.replace(/ઢ/g, "Z");
sftext = sftext.replace(/ઢ્ઢ/g, "ë");
sftext = sftext.replace(/ણ/g, "ý");
sftext = sftext.replace(/ણુ/g, "ýw");
sftext = sftext.replace(/ણ્/g, "Û");
sftext = sftext.replace(/ત/g, "‚");
sftext = sftext.replace(/ત્/g, "í");
sftext = sftext.replace(/ત્ત/g, "¥t");
sftext = sftext.replace(/ત્ત્ય/g, "¥Þ");
sftext = sftext.replace(/ત્ર/g, "ºt");
sftext = sftext.replace(/ત્ર્/g, "ºtT");
sftext = sftext.replace(/ત્ર્ય/g, "ºÞ");
sftext = sftext.replace(/થ/g, "Út");
sftext = sftext.replace(/થ્/g, "Ú");
sftext = sftext.replace(/દ/g, "Œ");
sftext = sftext.replace(/દ્ઘ/g, "j");
sftext = sftext.replace(/દ્દ/g, "Æ");
sftext = sftext.replace(/દ્દ/g, "Æ");
sftext = sftext.replace(/દ્બ/g, "m");
sftext = sftext.replace(/દ્મ/g, "È");
sftext = sftext.replace(/દ્ય/g, "ã");
sftext = sftext.replace(/દ્ર/g, "ÿ");
sftext = sftext.replace(/દ્ર/g, "á");
sftext = sftext.replace(/દ્રૃ/g, "ÿ]");
sftext = sftext.replace(/દ્વ/g, "î");
sftext = sftext.replace(/દ્વ/g, "î");
sftext = sftext.replace(/ધ/g, "Ä");
sftext = sftext.replace(/ધ્/g, "æ");
sftext = sftext.replace(/ન/g, "™");
sftext = sftext.replace(/ન્/g, "L");
sftext = sftext.replace(/ન્ન/g, "Òt");
sftext = sftext.replace(/૫/g, "5");
sftext = sftext.replace(/પ્/g, "Ã");
sftext = sftext.replace(/પ્ત/g, "ó");
sftext = sftext.replace(/ફ/g, "V");
sftext = sftext.replace(/ફ્ર/g, "£");
sftext = sftext.replace(/બ/g, "ƒ");
sftext = sftext.replace(/બ્/g, "ç");
sftext = sftext.replace(/ભ/g, "¼");
sftext = sftext.replace(/ભ્/g, "Ç");
sftext = sftext.replace(/મ/g, "{");
sftext = sftext.replace(/મ્/g, "B");
sftext = sftext.replace(/ય/g, "Þ");
sftext = sftext.replace(/ય્/g, "ÞT");
sftext = sftext.replace(/ર/g, "h");
sftext = sftext.replace(/રૂ/g, "Y");
sftext = sftext.replace(/ર્/g, "hT");
sftext = sftext.replace(/લ/g, "÷");
sftext = sftext.replace(/લ્/g, "Õ");
sftext = sftext.replace(/લ્ટ/g, "Õx");
sftext = sftext.replace(/વ/g, "ð");
sftext = sftext.replace(/વ્/g, "Ô");
sftext = sftext.replace(/શ/g, "þ");
sftext = sftext.replace(/શ્/g, "~");
sftext = sftext.replace(/શ્/g, "&");
sftext = sftext.replace(/શ્ચ/g, "ù");
sftext = sftext.replace(/શ્ન/g, "§");
sftext = sftext.replace(/શ્ર/g, "©");
sftext = sftext.replace(/શ્ર/g, "©");
sftext = sftext.replace(/ષ/g, "»t");
sftext = sftext.replace(/ષ્/g, "»");
sftext = sftext.replace(/ષ્ટ/g, "ü");
sftext = sftext.replace(/સ/g, "Ë");
sftext = sftext.replace(/સ્/g, "M");
sftext = sftext.replace(/સ્ત્ર/g, "Mºt");
sftext = sftext.replace(/હ/g, "n");
sftext = sftext.replace(/હ્ન/g, "ö");
sftext = sftext.replace(/હ્મ/g, "ñ");
sftext = sftext.replace(/હ્ય/g, "nT");
sftext = sftext.replace(/હ્ર/g, "´");
sftext = sftext.replace(/હ્ર/g, "Ó");
sftext = sftext.replace(/હ્લ/g, "F");
sftext = sftext.replace(/હ્વ/g, "b");
sftext = sftext.replace(/ળ/g, "¤");
sftext = sftext.replace(/ળ્/g, "é");
sftext = sftext.replace(/ા/g, "t");
sftext = sftext.replace(/િ/g, "r");
sftext = sftext.replace(/િ/g, "Â");
sftext = sftext.replace(/િ/g, "r");
sftext = sftext.replace(/ી/g, "e");
sftext = sftext.replace(/ી/g, "e");
sftext = sftext.replace(/ુ/g, "w");
sftext = sftext.replace(/ુ/g, "š");
sftext = sftext.replace(/ૂ/g, "q");
sftext = sftext.replace(/ૂ/g, "q");
sftext = sftext.replace(/ૃ/g, "]");
sftext = sftext.replace(/ૃ/g, "]");
sftext = sftext.replace(/ૅ/g, "ì");
sftext = sftext.replace(/ે/g, "u");
sftext = sftext.replace(/ૈ/g, "i");
sftext = sftext.replace(/ો/g, "tu");
sftext = sftext.replace(/ૌ/g, "ti");
sftext = sftext.replace(/્/g, "T");
sftext = sftext.replace(/્ર/g, "ú");
sftext = sftext.replace(/્ર/g, "ú");
sftext = sftext.replace(/卐/g, "卐");
sftext = sftext.replace(/પ્ર/g, "«");
sftext = sftext.replace(/રુ/g, "Á");
sftext = sftext.replace(/ટ્ર/g, "xÙ");
sftext = sftext.replace(/સ્/g, "");
sftext = sftext.replace(/ીં/g, "ª");
sftext = sftext.replace(/ન્/g, "™T");
sftext = sftext.replace(/ખ્/g, "¾T");
sftext = sftext.replace(/શ્/g, "þT");
sftext = sftext.replace(/ક્/g, "õ");
sftext = sftext.replace(/જ્/g, "sT");
sftext = sftext.replace(/ત્/g, "¥");
sftext = sftext.replace(/હ્ન/g, "Ì");
sftext = sftext.replace(/મ્/g, "{T");
sftext = sftext.replace(/ધ્/g, "ÄT");
sftext = sftext.replace(/વ્/g, "ðT");
sftext = sftext.replace(/પ/g, "…");
sftext = sftext.replace(/ફ/g, "^");
sftext = sftext.replace(/જી/g, "S");
sftext = sftext.replace(/ો/g, "tU");
sftext = sftext.replace(/લ્/g, "÷T");
sftext = sftext.replace(/ય/g, "â");
sftext = sftext.replace(/સ્ત/g, "M‚");
sftext = sftext.replace(/િં/g, "®");
sftext = sftext.replace(/ભ્/g, "¼T");
sftext = sftext.replace(/ચ્/g, "[T");
sftext = sftext.replace(/ગ્/g, "„");
sftext = sftext.replace(/પ/g, "Ãt");
sftext = sftext.replace(/થ્/g, "ÚkT");
sftext = sftext.replace(/ું/g, "wk");
sftext = sftext.replace(/પ્/g, "…T");
sftext = sftext.replace(/ળ્/g, "¤T");
sftext = sftext.replace(/ર/g, "Ù");
sftext = sftext.replace(/આ/g, "yt");
sftext = sftext.replace(/એ/g, "yu");
sftext = sftext.replace(/ઓ/g, "ytu");
sftext = sftext.replace(/ગ્ર/g, "„ú");
sftext = sftext.replace(/ૉ/g, "tì");
sftext = sftext.replace(/ષ્/g, "»tT");
sftext = sftext.replace(/દ્ધ/g, "Ø");
sftext = sftext.replace(/શ્વ/g, "ï");
sftext = sftext.replace(/બ્ધ/g, "çÄ");
sftext = sftext.replace(/ર્તિ/g, "Š‚");
sftext = sftext.replace(/હ્યુ/g, "Ìš");
sftext = sftext.replace(/ેં/g, "U");
sftext = sftext.replace(/ત્ન/g, "J");
sftext = sftext.replace(/િર્/g, "Š");
sftext = sftext.replace(/ર્વિ/g, "Šð");
sftext = sftext.replace(/જ્જ/g, "ä");
sftext = sftext.replace(/ષ્ઠ/g, "c");
sftext = sftext.replace(/ષ્ટ્ર/g, "üÙ");
sftext = sftext.replace(/બ્/g, "ƒT");
sftext = sftext.replace(/ત્ર/g, "º");
sftext = sftext.replace(/ઘ્/g, "Î");
sftext = sftext.replace(/ક્ષ/g, "û");
sftext = sftext.replace(/ણ્/g, "ýT");
sftext = sftext.replace(/ો/g, "tuu");
sftext = sftext.replace(/ુ/g, "ww");
sftext = sftext.replace(/પ્ન/g, "¡");
sftext = sftext.replace(/ં/g, "kk");
sftext = sftext.replace(/ષુ/g, "»š");
sftext = sftext.replace(/ર્વિં/g, "‹ð");
sftext = sftext.replace(/રુ/g, "²");
sftext = sftext.replace(/ઐ/g, "yi");
sftext = sftext.replace(/ત/g, "‚T");
sftext = sftext.replace(/ઔ/g, "yti");
sftext = sftext.replace(/ું/g, "kw");
sftext = sftext.replace(/|/g, "|");
sftext = sftext.replace(/૨/g, "2");
sftext = sftext.replace(/ઃ/g, ":");
sftext = sftext.replace(/હૃ/g, "Ó");
sftext = sftext.replace(/પ/g, "5");
sftext = sftext.replace(/ગ/g, "„");
sftext = sftext.replace(/ન/g, "™");
sftext = sftext.replace(/સ/g, "Ë");
sftext = sftext.replace(/બ/g, "ƒ");
sftext = sftext.replace(/ોં/g, "");
sftext = sftext.replace(/ે/g, "u");
sftext = sftext.replace(/દ્‌/g, "");
sftext = sftext.replace(/ડ્ર/g, "");
sftext = sftext.replace(/ઘ્ર/g, "");
sftext = sftext.replace(/ર્ષ/g, "");
sftext = sftext.replace(/ર્/g, "hT");
sftext = sftext.replace(/ં/g, "kk");
sftext = sftext.replace(/ર્ં/g, "");
sftext = sftext.replace(/સ્ત્ર/g, "Mºt");
sftext = sftext.replace(/ષ/g, "»t");

	document.getElementById('box3').value = sftext;
	}