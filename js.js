function limpar() {
    // var objeto = document.getElementById("medidor")
    location.reload();
    
}


function indicador() {
  
    var glicemia = Number(document.getElementById("glicemia").value)
    var objeto = document.getElementById("medidor")
    // var bom = objeto.className = "bom";
    // var baixa = objeto.className= 'baixa';
    // var alta = objeto.className = 'alta';
    
    if (glicemia > 125) {
        objeto.classList.add("alta");
        txt_info.innerHTML = "Seu nível de glicose está alto,potencial para possível diabetes,tomar insulina para abaixar seu índice glicêmico";
        console.log("maior q 125"); 
        
    } else if (glicemia < 100){
        objeto.classList.add("baixa");
        txt_info.innerHTML = "Seu nível de glicose esta baixo, possível risco de hipoglicemia,consuma algum doce para nivelar sua glicose"; 
        
    } else if (glicemia >= 100 || glicemia <= 125){
        objeto.classList.add("bom");
        txt_info.innerHTML = "Seu nível de glicose está ok!";
        
}
}
