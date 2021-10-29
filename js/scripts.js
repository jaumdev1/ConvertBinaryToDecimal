function Converter(){
    var binary = document.getElementById("binary");
    binary = binary.value
    if(binary.length>8){
        return alert("Você digitou um binário muito grande!");
    }
     
  
   var decimal = parseInt(binary, 2);
   if(decimal){
    document.getElementById("decimal").innerText = decimal;

    document.getElementById("binary").value = ""
   }else{
    var alert = document.getElementById("alert");
    
    var close = document.getElementsByClassName("closebtn");
    
    alert.style.display="initial";
      close.onclick = function(){
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 600);
      }
    
   }
}
   