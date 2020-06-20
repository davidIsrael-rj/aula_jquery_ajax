function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
        url:url,
        type: "GET", 
        success: function(response){
            console.log(response);
            console.log("Segundo: "+response.bairro);
            console.log("Terceiro: "+response.cep);
            
            $("#logradouro").html(response.logradouro);

            $("#bairro").html(response.bairro);

            $("#localidade").html(response.localidade);

            $("#uf").html(response.uf);

            $("#titulo_cep").html("CEP: "+response.cep);

            $(".cep").show();
            $(".barra-progresso").hide();
        }
        /*
        document.getElementById("logradouro").innerHTML = response.logradouro;

        document.getElementById("bairro").innerHTML = response.bairro;

        document.getElementById("localidade").innerHTML = response.localidade;

        document.getElementById("uf").innerHTML = response.uf;
        */
    });
};

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});