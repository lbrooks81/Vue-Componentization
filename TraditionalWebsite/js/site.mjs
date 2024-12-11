window.addEventListener('load', () =>
{
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	document.querySelectorAll('[data-toggle="tooltip"]').forEach((tooltip) =>
	{
		new bootstrap.Tooltip(tooltip);
	});

	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	document.querySelectorAll(".main-menu ul li.megamenu").forEach(function (menuItem) {
		menuItem.addEventListener('mouseover', () =>
		{
			if (!menuItem.parentNode.classList.contains("#wrapper"))
			{
				document.getElementById("wrapper").classList.add('overlay');
			}
		});
		menuItem.addEventListener('mouseleave', () =>
		{
			document.getElementById("wrapper").classList.remove('overlay');
		});
	});

	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	window.addEventListener('scroll', function ()
	{
		const scroll = window.scrollY;
		if (scroll >= 100)
		{
			document.getElementById("btn-back-to-top").style.display = "block";
		}
		else
		{
			document.getElementById("btn-back-to-top").style.display = "none";
		}
	});

	document.getElementById("btn-back-to-top").addEventListener("click",  () =>
	{
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});
});