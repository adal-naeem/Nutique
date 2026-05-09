//===========================nav bar k upr wala==========================
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.ticker-track');
    
    // Pause on hover
    track.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
    });
    
    track.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
    });
});



//=======================nav bar====================================
// Standalone Navbar Functionality
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.nutique-nav');
    const menuBtn = document.getElementById('navMenuBtn');

    // 1. Scroll Effect (Shadow on scroll)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });

    // 2. Mobile Menu Trigger
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            console.log("NUTIQUE: Opening mobile drawer...");
            // Yahan aap apna menu toggle kar sakte hain
        });
    }
});






//===============================hero section===============================



/*=================================product section==================================*/
document.addEventListener('DOMContentLoaded', function() {
    // 1. Accordion Logic
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    // 2. Quantity Selector Logic
    const plus = document.querySelector(".plus");
    const minus = document.querySelector(".minus");
    const qtyInput = document.querySelector(".qty-input");

    if(plus && minus && qtyInput) {
        plus.addEventListener("click", () => {
            qtyInput.value = parseInt(qtyInput.value) + 1;
        });

        minus.addEventListener("click", () => {
            if(qtyInput.value > 1) {
                qtyInput.value = parseInt(qtyInput.value) - 1;
            }
        });
    }
});