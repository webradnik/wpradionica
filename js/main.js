/* main.js */

jQuery(".btn-form-klinci").on("click", function() {
	jQuery(".form-klinci").show();
	jQuery(".form-mentori").hide();
});

jQuery(".btn-form-mentori").on("click", function() {
	jQuery(".form-klinci").hide();
	jQuery(".form-mentori").show();
});