// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {
	var lang_to		= "English";
	var lang_from		= "Spanish";
	var current_dict	= dicts[lang_to][lang_from]; // keys: words in @lang_to, values: corresponding words in @lang_from 	

	let randomEngRijec = "";
	let spanjolskaRijec = "";
	let userInput = "";

	let rijeci = Object.keys(current_dict);


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

		randomEngRijec = EngleskeRijeci[randomIndex];

		spanjolskaRijec = current_dict[randomEngRijec];

		$("#langFrom3").html(spanjolskaRijec);

	}

	randomRijec(current_dict);



	function submitRijec(){

		$("#brisiInput").val("");

		randomRijec(current_dict);

	}

	$("#submitBtn").click(function() {
		prosliPokusaj();
		submitRijec();
		$("#rezultatiPretrage").hide();
		
	});


	
	function prosliPokusaj() {
		userInput = $("#brisiInput").val().trim();

		if( userInput == randomEngRijec){

			var div = $.parseHTML(`
				<div class="row">
					<p class="cell blue-bold">${spanjolskaRijec}</p>
					<p class="cell blue-bold">${randomEngRijec}</p>
					<p class="cell">&#10003;</p>
				</div>
			`);
			$("#wrapper").prepend(div);

		}
		else{

			var div = $.parseHTML(`
				<div class="row">
					<p class="cell red-bold">${spanjolskaRijec}</p>
					<p class="cell red-bold precrtano">${userInput}</p>
					<p class="cell red-bold">${randomEngRijec}</p>
				</div>
			`);
			$("#wrapper").prepend(div);

		}
		
	}



	$("#brisiInput").on("input", function(){
		let trenutniUnos = $(this).val();

		if( trenutniUnos.length >= 2){

			let pretraga = rijeci.filter(rijec => rijec.includes(trenutniUnos));
			console.log(pretraga);

			var search = "";

			pretraga.forEach(rijec => {
				search += `
				<div>
				<p>${rijec}</p>
				</div>
				`
			});

			$("#rezultatiPretrage").html(search).show();

		}else{
			$("#rezultatiPretrage").empty().hide();

		}
	});
	

	
	$("#rezultatiPretrage").on("click", "p", function() {
		let odabraniPrijedlog = $(this).text();

		$("#brisiInput").val(odabraniPrijedlog);

		prosliPokusaj();
		submitRijec();

		$("#rezultatiPretrage").hide();
	});
	
    });

	
