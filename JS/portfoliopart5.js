function billingFunction(){
    if(document.getElementById('same').checked){
   var stree1= document.getElementById('street1').value =
    document.getElementById('street2').value;
  var city1= document.getElementById('city1').value =
    document.getElementById('city2').value;
  var state1= document.getElementById('state1').value = 
    document.getElementById('state2').value;
  var zip1= document.getElementById('zip1').value =
    document.getElementById('zip2').value;
}

else{
document.getElementById('street1').value="";
document.getElementById('city1').value="";
document.getElementById('state1').value="";
document.getElementById('zip1').value="";
}
}

function check(){
     
    var email1=document.getElementById('email1');
    var email2=document.getElementById('email2');
    if(email1.value != email2.value){
    alert("Emails Must Match!");
    return false;
}
}