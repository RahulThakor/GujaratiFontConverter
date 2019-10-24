 var A2G;
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