'use strict';
$(document).ready(function() {
	var $showPokemonButton = $('#show_pokemon')
		, show3dButton = $('#show_3d')
		, $movePlatformButton = $('#move_platform')
		, buttonActiveClass = 'active'
		, $hero = $('#hero')
		, showHeroClass = 'hero-is-hide'
		, $platform = $('#platform')
		, platformMoveClass = 'platform-move';

		var activeOption = function (button, element, elmentActiveClass) {
			button.on('click', function(event) {
				event.preventDefault();

				button.toggleClass(buttonActiveClass);
				element.toggleClass(elmentActiveClass);
			});
		};

		activeOption($showPokemonButton, $hero, showHeroClass);
		activeOption($movePlatformButton, $platform, platformMoveClass);
});