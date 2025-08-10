$(document).ready(function () {
	$('.category').on('click', function () {
		// highlight selected category
		$('.category').removeClass('category_active');
		$(this).addClass('category_active');

		// get clicked category name
		const category = $(this).data('name');
		const selectedCategories = category.split(',');

		// find all projects w category
		$('.project').each(function () {
			const projectType = $(this).data('type').split(',');
			let showProject = false;

			for (const pType of projectType) {
				if (selectedCategories.includes(pType)) {
					showProject = true;
					break;
				}
			}
			if (showProject) {
				$(this).addClass('show');
			} else {
				$(this).removeClass('show');
			}
		});
	});
	$('a').attr('target', '_blank')
});
