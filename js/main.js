function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;

     //Verificando se a variavel cep tem somente numeros    
     if(!isNaN(cep)){
        
        //verificando de a variavel tem 8 caracteres
        if ((cep.length < 8) || (cep.length > 8) ){
        
            $("#titulo_cep").html("DIGITE UM CEP VALIDO<br>POR FAVOR");
                    
            $("#logradouro").html(" ");
    
            $("#bairro").html(" ");
    
            $("#localidade").html(" ");
    
            $("#uf").html("");
    
            $(".barra-progresso").hide();
    
            $(".cep").show();
    
        }else{
            var url = "https://viacep.com.br/ws/" + cep + "/json/";
    
            console.log(cep);
            console.log(url);
        
            $.ajax({
                url:url,
                type: "GET", 
                success: function(response){
                    console.log(response);
                    console.log("Segundo: "+response.bairro);
                    console.log("Terceiro: "+response.cep);
                    
                    //verifica se o cep é valido
                    if(response.erro){
    
                        $("#titulo_cep").html("CEP: "+ cep +" NÃO ENCONTRADO");
                        
                        $("#logradouro").html(" ");
    
                        $("#bairro").html(" ");
    
                        $("#localidade").html(" ");
    
                        $("#uf").html("");
    
                        $(".barra-progresso").hide();
    
                        $(".cep").show();
    
                        
                    }else{
                    $("#logradouro").html(response.logradouro);
    
                        $("#bairro").html(response.bairro);
    
                        $("#localidade").html(response.localidade);
    
                        $("#uf").html(response.uf);
    
                        $("#titulo_cep").html("CEP: "+response.cep);
    
                        $(".cep").show();

                        $(".barra-progresso").hide();
                    }
                }
            });
        }
    }else{

        $("#titulo_cep").html("POR FAVOR, DIGITE SOMENTE NUMEROS");
                    
        $("#logradouro").html(" ");

        $("#bairro").html(" ");

        $("#localidade").html(" ");

        $("#uf").html("");

        $(".barra-progresso").hide();

        $(".cep").show();
    }
    
    


}
$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});