$( document ).ready(function() {

  $( "#ingreso_datepicker" ).datepicker();

  $(".pacient_form_page").click(function(event){
  	event.preventDefault();
  	$(this).parent().parent().children().removeClass("active");
  	$(this).parent().addClass("active");
  	$(this).parent().parent().parent().children(".text_page").addClass("hide");
  	var pageIdToShow = "#text_"+$(this).attr("id");
  	$(pageIdToShow).removeClass("hide");

  });

  $("#pacient_search").keyup(function(){
  	$("#pacient_list").children().addClass("hide");
  	var currentSearchValue = $("#pacient_search").val();
	$("#pacient_list").children().each(function(){
		if($(this).html().toLowerCase().indexOf(currentSearchValue.toLowerCase()) >= 0 ){
			$(this).removeClass("hide");
		}
	});

  });

});