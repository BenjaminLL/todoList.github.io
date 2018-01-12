
$("ul").on("click", ".delete", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});

	event.stopPropagation();
});


$("ul").on("click", "li", function() {
	$(this).toggleClass("crossOut");
})


$(".fa-plus").on("click", function() {
	$("input").fadeToggle(1000);
})


$("input").keypress(function(event) {
	if (event.which === 13) {
		$("ul").append("<li><span class='delete'><i class='fas fa-trash-alt'></i></span> " + $(this).val() + "</li>");
		$(this).val("");
	}
})




