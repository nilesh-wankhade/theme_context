$('.extra-fields-customer').click(function() {
  $('.customer_records').clone().appendTo('.customer_records_dynamic');
  $('.customer_records_dynamic .customer_records').addClass('single remove');
  $('.single .extra-fields-customer').remove();

  $('.single').append('<a href="#" class="remove-field btn-danger btn minus-icon  btn-remove-customer" ><i class="bi bi-dash-circle"></i> </a>');
  $('.customer_records_dynamic > .single').attr("class", "remove");

  $('.customer_records_dynamic input').each(function() {
    var count = 0;
    var fieldname = $(this).attr("name");
    $(this).attr('name', fieldname + count);
    count++;
  });

});


$(document).on('click', '.remove-field', function(e) {
  $(this).parent('.remove').remove();
  e.preventDefault();
});

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

/*carousel*/
	let items = document.querySelectorAll('.carousel .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 7
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


 $('.product-carousel').slick({
       
        centerPadding: '0',
        dots: false,
        arrows: true,
        infinite: true,
        speed: 800,
        slidesToShow: 5,
        prevArrow:"<span class='prev'><i class='las la-angle-left'></i></span>",
        nextArrow:"<span class='next'><i class='las la-angle-right'></i></span>",

        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                centerMode: false,
                infinite: true,
                arrows: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                infinite: true,
                arrows: true,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                
                 arrows: false,
                 infinite: true,
              }
            }
        ]
    });


 



function show1(){
document.getElementById('div1').style.display ='none';
}
function show2(){
document.getElementById('div1').style.display = 'block';
}



	$(window).on('scroll', function (event) {
	if ($(this).scrollTop() > 500) {
	$('.back-to-top').fadeIn(200)
	} else {
	$('.back-to-top').fadeOut(200)
	}
	});


	//Animate the scroll to yop
	$('.back-to-top').on('click', function (event) {
	event.preventDefault();

	$('html, body').animate({
	scrollTop: 0,
	}, 1500);
	});

$(function(){
  $('#datepicker, #datepicker1, #datepicker2, #datepicker3, #datepicker4, #datepicker5').datepicker();
});


var $contents = $('.tab-content');
$contents.slice(1).hide();
$('.tab').click(function() {
  var $target = $('#' + this.id + 'show').show();
  $contents.not($target).hide();
	
});
		
$(".ads-grid").click(function() {
    $(".tab").removeClass("active");
    $(this).addClass("active");
   });









