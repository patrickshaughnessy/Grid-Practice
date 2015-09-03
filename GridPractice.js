$(document).ready(function(){
	$('.form-control').on('click keyup', function(){
		//get the price of the item
		var price = +$(this).closest('.itemStuff').data('price');
		//get the quantity entered
		var quantity = +$(this).val();
		//set the total to price * quantity 
		$(this).closest('.itemStuff').find('.total').text((price * quantity).toFixed(2));
	});

	$('.form-control').on('change', function(){
		var quantity = +$(this).val();
		if (quantity !== 0){
			$(this).closest('.itemStuff').find('.priceDiv').animate({'top': '-0.1em', 'font-size': '150%'}, 'fast');
			$(this).closest('.itemStuff').find('.theTotal').animate({'top': '-0.1em', 'opacity': '1'}, 'fast');
			} else {
			$(this).closest('.itemStuff').find('.priceDiv').animate({'top': '0.1em', 'font-size': '150%'}, 'fast');
			$(this).closest('.itemStuff').find('.theTotal').animate({'opacity': '0'}, 'fast');}
		});	



});