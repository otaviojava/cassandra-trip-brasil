 $(function() {
   $('.datepicker').datepicker({
    format: 'dd/mm/yyyy',autoclose:true,startDate: new Date()
});
	carregarAutoComplete();
	
$( "#inserirImagemBtn" ).click(function() {
    inserirImagem();
});
    $("[data-hide]").on("click", function(){
        $("." + $(this).attr("data-hide")).hide();
    });

  });
 
 function carregarAutoComplete(){
 var colors = ["Luiz Edurado Barata", "Eduardo Carmalho", "Luciano Ramalho", "Jéssica Oliveira", "Denise Albertin", "Otávio Santana","Wanilha Souza"];
  $('#nomeInput').typeahead({source: colors,items:8,minLength: 3});
 }
 
 function inserirImagem(){
    limparMensagem();
	var valido=true;
	if($('#nomeInput').val()==''){
		valido=false;
		$('#mensagemNome').show();
	}
	if($('#dataInicioInut').val()==''){
		valido=false;
		$('#mensagemData').show();
	}
	if($('#imagemInput').val()==''){
		valido=false;
		$('#mensagemImagem').show();
	}
	if(valido){
		limparCampos();
		$('#procesoMenagem').show();
	}
	
 }
 function limparCampos(){
 $('#nomeInput').val('');
 $('#dataInicioInut').val('');
 $('#imagemInput').val('');
 }
 function limparMensagem(){
 	$('#mensagemNome').hide();
	$('#mensagemData').hide();
	$('#mensagemImagem').hide();
	$('#procesoMenagem').hide();
 }