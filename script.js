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


function showPremiumAlert() {
    Swal.fire({
        title: 'SYSTEM UPDATE',
        html: `
            <div style="padding: 10px;">
                <p style="color: #4c4c4c; font-family: 'Montserrat', sans-serif; font-size: 14px; line-height: 1.6; text-transform: uppercase; letter-spacing: 1px;">
                    We are currently refining our digital experience to serve you better.
                </p>
                <div style="width: 40px; height: 2px; background: #edce87; margin: 20px auto;"></div>
                <p style="font-family: 'Montserrat', sans-serif; color: #313131; font-size: 13px;">
                    <strong style="letter-spacing: 1px;">HOW TO ORDER:</strong><br>
                    Orders are currently accepted via <br>
                    <b>WhatsApp</b> or <b>Instagram</b>.
                </p>
            </div>
        `,
        icon: 'info',
        iconColor: '#edce87', // Gold accent color from your footer/border
        confirmButtonText: 'CLOSE',
        confirmButtonColor: '#313131', // Dark Charcoal from your footer
        background: '#f6eee4', // Brand theme background
        width: '400px', // Responsive fixed width
        padding: '2em',
        color: '#313131',
        buttonsStyling: true,
        customClass: {
            popup: 'nutique-alert-popup',
            title: 'nutique-alert-title',
            confirmButton: 'nutique-alert-button'
        },
        showClass: {
            popup: 'animate__animated animate__fadeInUp animate__faster'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutDown animate__faster'
        }
    });
}