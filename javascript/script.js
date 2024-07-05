document.addEventListener('DOMContentLoaded', () => {
    const check = document.getElementById('inputCheck');
    const btnScrollToTop = document.getElementById('btnScrollToTop');

    // NAV
    const nav = document.querySelectorAll('.header header section article:nth-child(2) a');
    const nav1 = document.querySelector('.header header section article:nth-child(2) a:nth-child(1)');
    const picture = document.querySelector('#main main:nth-child(1) section article picture::before');


    nav.forEach(navLink => {

        navLink.addEventListener('click', () => {

            nav.forEach(link => link.classList.remove('active'));

            navLink.classList.add('active');

        });


    })

    nav1.classList.add('active');


    window.scroll(0, 0);

    check.addEventListener('input', (e) => {
        if (e.target.checked === true) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');

        }
    })


    window.addEventListener('scroll', () => {
        const value = scrollY;


        if (value === 0) {
            btnScrollToTop.style.opacity = '0';
            setTimeout(() => {
                btnScrollToTop.style.display = 'none';

            }, 1000);
        } else {
            btnScrollToTop.style.opacity = '1';
            btnScrollToTop.style.display = 'block';



        }
    })

    btnScrollToTop.addEventListener('click', () => {
        window.scroll(0, 0);
    })

});


