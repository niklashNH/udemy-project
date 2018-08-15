(() => {

    const mobileWidth = 680;

    const addMenuBackground = () => {
        // adds the menu background if scrolling starts
        const pageWidth = window.innerWidth;

        const bodyOffset = document.body.scrollTop || document.documentElement.scroll;
        const navigation = document.querySelector("header nav");

        if(pageWidth > mobileWidth) {
            bodyOffset > 0 ? navigation.classList.add("aw-nav-background") : navigation.classList.remove("aw-nav-background");
        }

    };

    const onClickScrollItem = () => {
        // adding Click Listener for all aw-scroll-link element
        const itemlist = document.querySelectorAll(".aw-scroll-link");
        const items = [...itemlist];

        items.forEach(item => {
            item.addEventListener("click", event => {
                event.preventDefault();

                const sectionId = event.target.getAttribute("href") || event.target.dataset.href;

                scrollToSection(sectionId);
            });
        });
    }

    const scrollToSection = sectionId => {
        // actually scroll to the supplied section
        let sectionPosition, sectionOffset;
        const navigationHeight = document.querySelector("header nav").offsetHeight;
        const pageWidth = window.innerWidth;

        if (sectionId !== "#") {

            sectionOffset = document.querySelector(sectionId).offsetTop;
            sectionPosition = pageWidth > mobileWidth ? sectionOffset - navigationHeight : sectionOffset;

        } else {
            sectionPosition = 0;
        }

        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': sectionPosition
        })

    }

    const onTestimonialChange = () => {
        let lastChild, firstChild;
        const prevArrow = document.querySelector("#aw-testimonials-prev");
        const nextArrow = document.querySelector("#aw-testimonials-next");
        const testimonials = document.querySelector(".aw-testimonials-container ul");

        document.addEventListener("click", () => {
           if (event.target === prevArrow) {
               lastChild = testimonials.lastElementChild;
               testimonials.insertAdjacentElement("afterbegin", lastChild);
           }  else if (event.target === nextArrow) {
               firstChild = testimonials.firstElementChild;
               testimonials.insertAdjacentElement("beforeend", firstChild);
           }
        });


    }

    window.addEventListener("scroll", () => {
        addMenuBackground();
    });

    onClickScrollItem();
    onTestimonialChange();

})();