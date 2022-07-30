function limpar() {
    
    location.reload();
    
}

function funcionaKRL () {
 const ctx = document.getElementById('myChart')


    
    var VetorDias = [];
     
    VetorDias[0] =Number(document.getElementById("segunda").value)
    VetorDias[1] = Number(document.getElementById("terça").value),
    VetorDias[2] = Number(document.getElementById("quarta").value),
    VetorDias[3] = Number(document.getElementById("quinta").value),
    VetorDias[4] = Number(document.getElementById("sexta").value),
    VetorDias[5] = Number(document.getElementById("sabado").value),
    VetorDias[6] = Number(document.getElementById("domingo").value);

    
    const labels = [
        'segunda',
        'terça',
        'quarta',
        'quinta',
        'sexta',
        'sabado',
        'domingo'
    ] 
     
    const data = {
        labels,
        
        datasets: [{data : [
            VetorDias[0],VetorDias[1],
            VetorDias[2],VetorDias[3],
            VetorDias[4],VetorDias[5],
            VetorDias[6]],
        label:'Glicemia'}]
    }
            
            
    
    const config = {
        type: 'line',
        data,
        options: {
        }
    };
    const myChart = new Chart(ctx,config)
    
}

    // function show_pos(){
    //     var seg_var = Number(document.getElementById("segunda").value)
    //     var ter_var = Number(document.getElementById("terça").value)
    //     var qua_var = Number(document.getElementById("quarta").value)
    //     var qui_var = Number(document.getElementById("quinta").value)
    //     var sex_var = Number(document.getElementById("sexta").value)
    //     var sab_var = Number(document.getElementById("sabado").value)
    //     var dom_var = Number(document.getElementById("domingo").value)

    //     const data = {
    //         labels,
    //         datasets: [{data : [seg_var,ter_var,qua_var,qui_var, sex_var, sab_var, dom_var],
    //         label:'Glicemia'}]
    // }
