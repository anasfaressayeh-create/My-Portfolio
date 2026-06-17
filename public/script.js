window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

/* =========================
   Typing Effect
========================= */

const typingText = document.querySelector(".typing");

const words = [
    "Front-End Developer",
    "UI / UX Designer",
    "JavaScript Developer",
    "Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();

/* =========================
   Custom Cursor
========================= */

const cursor =
    document.querySelector(".cursor");

const blur =
    document.querySelector(".cursor-blur");

document.addEventListener("mousemove", e => {

    cursor.style.left =
        e.clientX + "px";

    cursor.style.top =
        e.clientY + "px";

    blur.style.left =
        e.clientX + "px";

    blur.style.top =
        e.clientY + "px";
});

/* =========================
   Hover Cursor Grow
========================= */

const links =
document.querySelectorAll(
"a, button, .project-card"
);

links.forEach(item => {

    item.addEventListener(
        "mouseenter",
        () => {

            cursor.style.transform =
                "scale(2)";
        }
    );

    item.addEventListener(
        "mouseleave",
        () => {

            cursor.style.transform =
                "scale(1)";
        }
    );

});

/* =========================
   Reveal Animation
========================= */

const revealElements =
document.querySelectorAll(
".section, .service-card, .project-card"
);

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0)";
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform =
        "translateY(60px)";

    el.style.transition =
        "all .8s ease";

    observer.observe(el);

});

/* =========================
   Skills Animation
========================= */

const bars =
document.querySelectorAll(
".progress span"
);

const skillsObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const bar =
                entry.target;

            const width =
                bar.dataset.width;

            bar.style.width =
                width;
        }

    });

});

bars.forEach(bar => {

    skillsObserver.observe(bar);

});

/* =========================
   Navbar Scroll Effect
========================= */

const navbar =
document.querySelector(".navbar");

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 50
        ) {

            navbar.style.padding =
                "18px 8%";

            navbar.style.background =
                "rgba(5,8,22,.95)";

        } else {

            navbar.style.padding =
                "25px 8%";

            navbar.style.background =
                "rgba(5,8,22,.4)";
        }

    }
);

/* =========================
   Smooth Scroll
========================= */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e) {

            e.preventDefault();

            const target =
            document.querySelector(
                this.getAttribute("href")
            );

            target.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

});

/* =========================
   Parallax Hero
========================= */

window.addEventListener(
    "mousemove",
    e => {

        const heroImage =
        document.querySelector(
            ".image-box"
        );

        const x =
        (window.innerWidth / 2 -
        e.pageX) / 40;

        const y =
        (window.innerHeight / 2 -
        e.pageY) / 40;

        heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

    }
);

/* =========================
   3D Project Cards
========================= */

const cards =
document.querySelectorAll(
".project-card"
);

cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        e => {

            const rect =
            card.getBoundingClientRect();

            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;

            const rotateY =
            (x / rect.width - 0.5)
            * 25;

            const rotateX =
            (0.5 - y / rect.height)
            * 25;

            card.style.transform =
            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.05)
            `;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
            `
            perspective(1000px)
            rotateX(0)
            rotateY(0)
            scale(1)
            `;
        }
    );

});

/* =========================
   Floating Background
========================= */

const circles =
document.querySelectorAll(
".bg-animation span"
);

window.addEventListener(
    "scroll",
    () => {

        const value =
        window.scrollY;

        circles.forEach(
            (circle,index) => {

                circle.style.transform =
                `translateY(${
                value *
                (0.1 + index * 0.05)
                }px)`;

            }
        );

    }
);

/* =========================
   Mobile Menu
========================= */

const menuBtn =
document.querySelector(
".menu-btn"
);

const navLinks =
document.querySelector(
".nav-links"
);

menuBtn.addEventListener(
    "click",
    () => {

        if (
            navLinks.style.display
            === "flex"
        ) {

            navLinks.style.display =
            "none";

        } else {

            navLinks.style.display =
            "flex";

            navLinks.style.flexDirection =
            "column";

            navLinks.style.position =
            "absolute";

            navLinks.style.top =
            "90px";

            navLinks.style.right =
            "20px";

            navLinks.style.padding =
            "25px";

            navLinks.style.borderRadius =
            "20px";

            navLinks.style.background =
            "#0f172a";
        }

    }
);

/* =========================
   Console Signature
========================= */

console.log(
"Portfolio By Fares Sayeh"
);
// =========================
// Contact Form
// =========================

const contactForm =
document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async (e) => {

            e.preventDefault();

            const name =
            contactForm.querySelector(
                'input[type="text"]'
            ).value;

            const email =
            contactForm.querySelector(
                'input[type="email"]'
            ).value;

            const message =
            contactForm.querySelector(
                "textarea"
            ).value;

            try {

                const response =
                await fetch(
                    "https://fares-portfolio.up.railway.app/contact",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                            "application/json"
                        },
                        body: JSON.stringify({
                            name,
                            email,
                            message
                        })
                    }
                );

                const data =
                await response.json();

                if (data.success) {

                    alert(
                        "Message sent successfully!"
                    );

                    contactForm.reset();

                } else {

                    alert(
                        "Failed to send message."
                    );

                }

            } catch (error) {

                console.error(error);

                alert(
                    "Server connection error."
                );

            }

        }
    );

}
