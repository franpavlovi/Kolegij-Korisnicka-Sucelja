// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {
	var lang_to		= "English";
	var lang_from		= "Spanish";
	var current_dict	= dicts[lang_to][lang_from]; // keys: words in @lang_to, values: corresponding words in @lang_from 	



	function umetniLangFrom(lang_from){
		$("#langFrom1").html(lang_from);
		$("#langFrom2").html(lang_from);
	}

	umetniLangFrom(lang_from);



	function umetniLangTo(lang_to){
		$("#langTo1").html(lang_to);
		$("#langTo2").html(lang_to);
	}

	umetniLangTo(lang_to);



	$("input[type='text']").focus();



	function randomRijec(current_dict){
		let EngleskeRijeci = Object.keys(current_dict);
		let randomIndex = Math.floor(Math.random() * EngleskeRijeci.length);

		let randomEngRijec = EngleskeRijeci[randomIndex];

		let prijevodEngRijeciNaSpanjolski = current_dict[randomEngRijec];

		$("#langFrom3").html(prijevodEngRijeciNaSpanjolski);

	}

	randomRijec(current_dict);



	function submitRijec(){

		$("#brisiInput").val(" ");
		randomRijec(current_dict);

	}

	$("#submitBtn").click(function() {
		submitRijec();
	});




    });
