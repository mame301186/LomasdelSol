$(function () {
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();
	$('.carousel').carousel({
		interval:2000
	});

    $("#contacto-1").on("show.bs.modal", function(e){
    	console.log("comienza al abrirse");
    	$("#contacto-1-btn").removeClass("btn-outline-light");
    	$("#contacto-1-btn").addClass("btn-outline-warning");  
	});
	$("#contacto-1").on("shown.bs.modal", function(e){
    	console.log("comienza despues de abierto");
    	$("#contacto-1-btn").prop("disabled", true);  
	});
	$("#contacto-1").on("hide.bs.modal", function(e){
    	console.log("comienza al cerrarse");
    	$("#contacto-1-btn").prop("disabled", false);  
	});
	$("#contacto-1").on("hidden.bs.modal", function(e){
    	console.log("comienza despues de cerrado");
    	$("#contacto-1-btn").removeClass("btn-outline-warning");
    	$("#contacto-1-btn").addClass("btn-outline-light");
	});

	$("#contacto-2").on("show.bs.modal", function(e){
    	console.log("comienza al abrirse");
    	$("#contacto-2-btn").removeClass("btn-outline-light");
    	$("#contacto-2-btn").addClass("btn-outline-warning");   
	});
	$("#contacto-2").on("shown.bs.modal", function(e){
    	console.log("comienza despues de abierto");
    	$("#contacto-2-btn").prop("disabled", true);  
	});
	$("#contacto-2").on("hide.bs.modal", function(e){
    	console.log("comienza al cerrarse");
    	$("#contacto-2-btn").prop("disabled", false);   
	});
	$("#contacto-2").on("hidden.bs.modal", function(e){
    	console.log("comienza despues de cerrado");
    	$("#contacto-2-btn").removeClass("btn-outline-warning");
    	$("#contacto-2-btn").addClass("btn-outline-light");  
	});


	$("#contacto-3").on("show.bs.modal", function(e){
    	console.log("comienza al abrirse");
    	$("#contacto-3-btn").removeClass("btn-outline-light");
    	$("#contacto-3-btn").addClass("btn-outline-warning");   
	});
	$("#contacto-3").on("shown.bs.modal", function(e){
    	console.log("comienza despues de abierto");
    	$("#contacto-3-btn").prop("disabled", true);  
	});
	$("#contacto-3").on("hide.bs.modal", function(e){
    	console.log("comienza al cerrarse");
    	$("#contacto-3-btn").prop("disabled", false);   
	});
	$("#contacto-3").on("hidden.bs.modal", function(e){
    	console.log("comienza despues de cerrado");
    	$("#contacto-3-btn").removeClass("btn-outline-warning");
    	$("#contacto-3-btn").addClass("btn-outline-light");  
	});

});