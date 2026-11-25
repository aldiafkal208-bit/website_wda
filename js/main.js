
/* =========================================
   1. MENU NAVIGASI MOBILE
========================================= */

const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.navigation');

if (navToggle && navigation) {

    navToggle.addEventListener('click', () => {

        const opened = navigation.classList.toggle('open');

        navToggle.setAttribute('aria-expanded', String(opened));
        navToggle.textContent = opened ? '×' : '☰';

    });

    // Menutup menu setelah link diklik
    navigation.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {

            navigation.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.textContent = '☰';

        });

    });

}


/* =========================================
   2. TAHUN OTOMATIS PADA FOOTER
========================================= */

document.querySelectorAll('[data-year]').forEach(item => {

    item.textContent = new Date().getFullYear();

});


/* =========================================
   3. FILTER KATEGORI MENU
========================================= */

const filterButtons = document.querySelectorAll('[data-filter]');
const menuCards = document.querySelectorAll('[data-category]');

filterButtons.forEach(button => {

    button.addEventListener('click', () => {

        const category = button.dataset.filter;

        // Mengatur tombol filter aktif
        filterButtons.forEach(item => {

            item.classList.toggle('active', item === button);

        });

        // Menampilkan menu sesuai kategori
        menuCards.forEach(card => {

            card.hidden = (
                category !== 'all' &&
                card.dataset.category !== category
            );

        });

    });

});
