<!DOCTYPE html>
<html>
<head>
	<title>Visor de libros y cartillas</title>
</head>
<body>
	<?php
		//Funcionalidad para ver las cartillas dinamicamente.
		// Variables
		$id_cartilla = $_GET['id'];
		$rutaImagenes = "assets/libros/imagenes/";
		$rutaCompleta = $rutaImagenes.$id_cartilla."/";
		$png = ".png";
		$pdf = ".pdf";
		$rutaPDF = "assets/libros/pdf/";
		//Contar imagenes en el directorio .png
		$totalImagenes = count(glob($rutaImagenes.$id_cartilla.'/{*.png}', GLOB_BRACE));
	?>
	<script type="text/javascript" src="assets/extras/jquery.min.1.7.js"></script>
	<script type="text/javascript" src="assets/extras/modernizr.2.5.3.min.js"></script>
	<script type="text/javascript" src="assets/lib/hash.js"></script>
	<div id="totalPaginas" data-paginas="<?php echo $totalImagenes; ?>"></div>
	<div id="canvas">
		<div class="zoom-icon zoom-icon-in">
			<i class="material-icons"></i>
		</div>
		<div class="libro-viewport">
			<div class="container">
				<div class="libro">
					<div depth="5" class="hard" style="background-image:url(<?php echo $rutaCompleta."1".$png; ?>)"></div>
					<div class="hard" style="background-image:url(<?php echo $rutaCompleta."2".$png; ?>)"></div>
					<?php for ($i=3; $i <= ($totalImagenes - 1); $i++) { ?>
						<div style="background-image:url(<?php echo $rutaCompleta.$i.$png; ?>)"></div>
					<?php } ?>
					<div class="hard" style="background-image:url(<?php echo $rutaCompleta.$totalImagenes.$png; ?>)"></div>
					<div id="slider-bar" class="turnjs-slider">
						<div id="slider"></div>
					</div>
					<!-- Next button -->
					<div ignore="1" class="next-button"></div>
					<!-- Previous button -->
					<div ignore="1" class="previous-button"></div>
				</div>
			</div>
		</div>
		<a target="_blank" href="<?php echo $rutaPDF.$id_cartilla.$pdf; ?>" style="position: fixed; bottom: 10px; right: 10px;">Descargar en PDF</a>
	</div>
	<script type="text/javascript">
		function loadApp() {
			$("#prev").click(function(e){
			    e.preventDefault();
			    $('.libro').turn("previous");
			});

			$("#next").click(function(e){
			    e.preventDefault();
			    $('.libro').turn("next");
			});

		 	$('#canvas').fadeIn(1000);
		 	var flipbook = $('.libro');
		 	// Check if the CSS was already loaded
			if (flipbook.width()==0 || flipbook.height()==0) {
				setTimeout(loadApp, 10);
				return;
			}
			// Create the flipbook
			flipbook.turn({
					// Magazine width
					width: 1300,
					// Magazine height
					height: 800,
					// Duration in millisecond
					duration: 1000,
					// Hardware acceleration
					acceleration: !isChrome(),
					// Enables gradients
					gradients: true,
					// Auto center this flipbook
					autoCenter: true,
					// Elevation from the edge of the flipbook when turning a page
					elevation: 50,
					// The number of pages
					pages: $("#totalPaginas").attr("data-paginas"),
					next:true,
					// Events
					when: {
						turning: function(event, page, view) {
							var book = $(this),
							currentPage = book.turn('page'),
							pages = book.turn('pages');
							// Update the current URI
							Hash.go('page/' + page).update();
							// Show and hide navigation buttons
							disableControls(page);
							$('.thumbnails .page-'+currentPage).
								parent().
								removeClass('current');
							$('.thumbnails .page-'+page).
								parent().
								addClass('current');
						},
						turned: function(event, page, view) {
							disableControls(page);
							$(this).turn('center');
							if (page==1) {
								$(this).turn('peel', 'br');
							}
						},
						missing: function (event, pages) {
							// Add pages that aren't in the magazine
							for (var i = 0; i < pages.length; i++)
								addPage(pages[i], $(this));
						}
					}
			});
			// Zoom.js
			$('.libro-viewport').zoom({
				flipbook: $('.libro'),
				max: function() {
					return largeMagazineWidth()/$('.libro').width();
				},
				when: {
					swipeLeft: function() {
						$(this).zoom('flipbook').turn('next');
					},
					swipeRight: function() {
						$(this).zoom('flipbook').turn('previous');
					},
					resize: function(event, scale, page, pageElement) {
						if (scale==1)
							loadSmallPage(page, pageElement);
						else
							loadLargePage(page, pageElement);
					},
					zoomIn: function () {
						$('.thumbnails').hide();
						$('.made').hide();
						$('.libro').removeClass('animated').addClass('zoom-in');
						$('.zoom-icon').removeClass('zoom-icon-in').addClass('zoom-icon-out');

						if (!window.escTip && !$.isTouch) {
							escTip = true;

							$('<div />', {'class': 'exit-message'}).
								html('<div>Press ESC to exit</div>').
									appendTo($('body')).
									delay(2000).
									animate({opacity:0}, 500, function() {
										$(this).remove();
									});
						}
					},
					zoomOut: function () {
						$('.exit-message').hide();
						$('.thumbnails').fadeIn();
						$('.made').fadeIn();
						$('.zoom-icon').removeClass('zoom-icon-out').addClass('zoom-icon-in');

						setTimeout(function(){
							$('.libro').addClass('animated').removeClass('zoom-in');
							resizeViewport();
						}, 0);
					}
				}
			});
			// Zoom event
			if ($.isTouch)
				$('.libro-viewport').bind('zoom.doubleTap', zoomTo);
			else
				$('.libro-viewport').bind('zoom.tap', zoomTo);
			// Using arrow keys to turn the page
			$(document).keydown(function(e){
				var previous = 37, next = 39, esc = 27;
				switch (e.keyCode) {
					case previous:
						// left arrow
						$('.libro').turn('previous');
						e.preventDefault();

					break;
					case next:
						//right arrow
						$('.libro').turn('next');
						e.preventDefault();

					break;
					case esc:
						$('.libro-viewport').zoom('zoomOut');
						e.preventDefault();
					break;
				}
			});
			// URIs - Format #/page/1
			Hash.on('^page\/([0-9]*)$', {
				yep: function(path, parts) {
					var page = parts[1];

					if (page!==undefined) {
						if ($('.libro').turn('is'))
							$('.libro').turn('page', page);
					}

				},
				nop: function(path) {

					if ($('.libro').turn('is'))
						$('.libro').turn('page', 1);
				}
			});
			$(window).resize(function() {
				resizeViewport();
			}).bind('orientationchange', function() {
				resizeViewport();
			});
			// Events for thumbnails
			$('.thumbnails').click(function(event) {
				var page;
				if (event.target && (page=/page-([0-9]+)/.exec($(event.target).attr('class'))) ) {

					$('.libro').turn('page', page[1]);
				}
			});
			$('.thumbnails li').
				bind($.mouseEvents.over, function() {
					$(this).addClass('thumb-hover');
				}).bind($.mouseEvents.out, function() {
					$(this).removeClass('thumb-hover');
				});
			if ($.isTouch) {
				$('.thumbnails').
					addClass('thumbanils-touch').
					bind($.mouseEvents.move, function(event) {
						event.preventDefault();
					});
			} else {
				$('.thumbnails ul').mouseover(function() {
					$('.thumbnails').addClass('thumbnails-hover');
				}).mousedown(function() {
					return false;
				}).mouseout(function() {
					$('.thumbnails').removeClass('thumbnails-hover');
				});
			}
			// Regions
			if ($.isTouch) {
				$('.libro').bind('touchstart', regionClick);
			} else {
				$('.libro').click(regionClick);
			}
			// Events for the next button
			$('.next-button').bind($.mouseEvents.over, function() {
				$(this).addClass('next-button-hover');
			}).bind($.mouseEvents.out, function() {
				$(this).removeClass('next-button-hover');
			}).bind($.mouseEvents.down, function() {
				$(this).addClass('next-button-down');
			}).bind($.mouseEvents.up, function() {
				$(this).removeClass('next-button-down');
			}).click(function() {
				$('.libro').turn('next');
			});
			// Events for the next button
			$('.previous-button').bind($.mouseEvents.over, function() {
				$(this).addClass('previous-button-hover');
			}).bind($.mouseEvents.out, function() {
				$(this).removeClass('previous-button-hover');
			}).bind($.mouseEvents.down, function() {
				$(this).addClass('previous-button-down');
			}).bind($.mouseEvents.up, function() {
				$(this).removeClass('previous-button-down');
			}).click(function() {
				$('.libro').turn('previous');
			});
			resizeViewport();
			$('.libro').addClass('animated');
		}
		// Zoom icon
		$('.zoom-icon').bind('mouseover', function() {
			if($(this).hasClass('zoom-icon-in'))
				$(this).addClass('zoom-icon-in-hover');
			if($(this).hasClass('zoom-icon-out'))
				$(this).addClass('zoom-icon-out-hover');
		}).bind('mouseout', function() {
			if($(this).hasClass('zoom-icon-in'))
				$(this).removeClass('zoom-icon-in-hover');
			if($(this).hasClass('zoom-icon-out'))
				$(this).removeClass('zoom-icon-out-hover');
		}).bind('click', function() {
			if($(this).hasClass('zoom-icon-in'))
				$('.libro-viewport').zoom('zoomIn');
			else if ($(this).hasClass('zoom-icon-out'))
			$('.libro-viewport').zoom('zoomOut');
		});
		$('#canvas').hide();
		// Load the HTML4 version if there's not CSS transform
		yepnope({
			test : Modernizr.csstransforms,
			yep: ['assets/lib/turn.js'],
			nope: ['assets/lib/turn.html4.min.js'],
			both: ['assets/lib/zoom.min.js', 'assets/js/libro.js', 'assets/css/libro.css'],
			complete: loadApp
		});
	</script>
</body>
</html>