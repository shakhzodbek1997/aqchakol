(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);
    document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll('a[href^="#"]');
        for (const link of links) {
            link.addEventListener("click", clickHandler);
        }

        function clickHandler(e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            const target = document.querySelector(href);

            target.scrollIntoView({
                behavior: "smooth",
            });
        }
    });


    emailjs.init("-ET9vfvBRjCvzmm37");

    document.addEventListener("DOMContentLoaded", function () {
        emailjs.init("your_user_id"); // Replace with your actual Email.js user ID
    
        const form = document.getElementById("contactForm");
    
        form.addEventListener("submit", function (event) {
            event.preventDefault();
    
            // Collect form data
            const formData = new FormData(form);
    
            // Send the email
            emailjs.send("your_service_id", "your_template_id", formData)
                .then(function (response) {
                    console.log("Email sent successfully:", response);
                    // Optionally, redirect to a thank you page or show a success message.
                })
                .catch(function (error) {
                    console.log("Email sending failed:", error);
                    // Handle the error, display an error message, or retry the submission.
                });
        });
    });
    

function sendMail(){
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        subject_id: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_c9a3ynh", "template_qxublsx", params).then(function(res){
        alert("Success!" + res.status);
    })
}


$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
      selectedClass = $(this).attr("data-rel");
      $("#gallery").fadeTo(100, 0.1);
      $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
      setTimeout(function() {
        $("."+selectedClass).fadeIn().addClass('animation');
        $("#gallery").fadeTo(300, 1);
      }, 300);
    });
  });