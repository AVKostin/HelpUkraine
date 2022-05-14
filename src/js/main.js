jQuery( document ).ready( function($)
{
    $('.mobile__menu-open').click( function()
	{
        $('.mobile__menu').fadeIn();
    });

    $('.mobile__menu-close').click( function()
	{
        $('.mobile__menu').fadeOut();
    });
});


jQuery(document).ready(function($)
{
	$(function()
		{
		var oTop = $('#numbers__section').offset().top - window.innerHeight;
		var truek = 0;

			$(window).scroll(function()
				{
					var pTop = $(window).scrollTop();
					if( pTop > oTop && truek == 0)
					{
					truek++;
					$('.counter').each(function ()
						{
						$(this).prop('Counter',0).animate(
							{
								Counter: $(this).text()
							},
							{
								duration: 4000,
								easing: 'swing',
								step: function (now)
								{
									$(this).text(Math.ceil(now));
								}
							});
						});
					}
				}
			);
		}
	);
});