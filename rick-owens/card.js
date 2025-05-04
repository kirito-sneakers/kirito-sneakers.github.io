const geobasket = document.querySelector('#geobasket'),
      dunks = document.querySelector('#dunks'),
      ramones = document.querySelector('#ramones');

const rickMainMenu = [
    {
        title: 'Geobasket',
        images: [
            "./img/geobasket-black-milk-1.jpg",
            "./img/geobasket-milk-black-1.jpg",
            "./img/geobasket-red-milk-1.jpg",
            "./img/geobasket-pink-milk-1.jpg",
            "./img/geobasket-red-milk-1.jpg",
            "./img/geobasket-olive-green-white-1.jpg",
            "./img/geobasket-milk-1.jpg",
        ],
        colors: 7,
        href: "./geobasket.html",
        parent: geobasket,
    },
    {
        title: 'Geobasket Jumbolace',
        images: [
            "./img/geobasket-jumbolace-black-milk-1.jpg",
            "./img/geobasket-jumbolace-pink-milk-1.jpg",
            "./img/geobasket-jumbolace-milk-1.jpg",
            "./img/geobasket-jumbolace-black-1.jpg",
            "./img/geobasket-jumbolace-light-grey-1.jpg",
            "./img/geobasket-jumbolace-grey-1.jpg",
        ],
        colors: 6,
        href: "./geobasket-jumbolace.html",
        parent: geobasket,
    },
    {
        title: 'Geobasket Megalace',
        images: [
            "./img/geobasket-pentagram-black-white-1.jpg",
            "./img/geobasket-pentagram-white-black-1.jpg",
        ],
        colors: 2,
        href: "./geobasket-megalace.html",
        parent: geobasket,
    },
    {
        title: 'Geobasket Fur',
        images: [
            "./img/geobasket-fur-green-milk-1.jpg",
            "./img/geobasket-fur-black-milk-1.jpg",
            "./img/geobasket-fur-pink-milk-1.jpg",
            "./img/geobasket-fur-grey-milk-1.jpg",
            "./img/geobasket-fur-dark-green-milk-1.jpg",
            "./img/geobasket-fur-pink-white-1.jpg",
            "./img/geobasket-fur-green-white-1.jpg",
        ],
        colors: 7,
        href: "./geobasket-fur.html",
        parent: geobasket,
    },
    {
        title: 'Geobasket Suede',
        images: [
            "./img/geobasket-suede-black-milk-1.jpg",
            "./img/geobasket-suede-brown-milk-1.jpg",
            "./img/geobasket-suede-pink-milk-1.jpg",
        ],
        colors: 3,
        href: "./geobasket-suede.html",
        parent: geobasket,
    },
    {
        title: 'Geobasket Megabumper',
        images: [
            "./img/geobasket-megabumper-black-milk-1.jpg",
            "./img/geobasket-megabumper-black-1.jpg",
        ],
        colors: 2,
        href: "./geobasket-megabumper.html",
        parent: geobasket,
    },
    {
        title: 'Rick Owens & Chrome Hearts Geobasket',
        images: [
            "./img/geobasket-chrome-hearts-geobasketblack-milk-1.jpg",
        ],
        colors: 1,
        href: "./geobasket-chrome-hearts.html",
        parent: geobasket,
    },
    {
        title: 'Dunk',
        images: [
            "./img/dunk-milk-black-1.jpg",
            "./img/dunk-black-milk-1.jpg",
            "./img/dunk-black-1.jpg",
            "./img/dunk-milk-1.jpg",
        ],
        colors: 4,
        href: "./dunks.html",
        parent: dunks,
    },
    {
        title: 'Rick Owens & Chrome Hearts Dunk',
        images: [
            "./img/dunk-chrome-hearts-milk-black-1.jpg",
        ],
        colors: 1,
        href: "./dunks-chrome-hearts.html",
        parent: dunks,
    },
    {
        title: 'Ramones',
        images: [
            "./img/ramones-black-milk-1.jpg",
            "./img/ramones-olive-denim-milk-1.jpg",
            "./img/ramones-olive-milk-1.jpg",
            "./img/ramones-milk-1.jpg",
            "./img/ramones-black-1.jpg",
            "./img/ramones-taped-milk-1.jpg",
        ],
        colors: 6,
        href: "./ramones.html",
        parent: ramones,
    },
    {
        title: 'Ramones Leather',
        images: [
            "./img/ramones-leather-black-white-1.jpg",
            "./img/ramones-leather-black-light-gum-1.jpg",
            "./img/ramones-leather-olive-milk-1.jpg",
            "./img/ramones-leather-black-1.jpg",
            "./img/ramones-leather-milk-1.jpg",
        ],
        colors: 5,
        href: "./ramones-leather.html",
        parent: ramones,
    },
    {
        title: 'Ramones Suede',
        images: [
            "./img/ramones-suede-black-white-1.jpg",
            "./img/ramones-suede-brown-milk-1.jpg",
        ],
        colors: 2,
        href: "./ramones-suede.html",
        parent: ramones,
    },
    {
        title: 'Ramones Wax and Satin',
        images: [
            "./img/ramones-wax-black-milk-1.jpg",
            "./img/ramones-suede-brown-milk-1.jpg",
        ],
        colors: 3,
        href: "./ramones-wax-satin.html",
        parent: ramones,
    },
    {
        title: 'Ramones Hexagram',
        images: [
            "./img/ramones-hexagram-black-milk-1.jpg",
            "./img/ramones-hexagram-blue-milk-1.jpg",
            "./img/ramones-hexagram-milk-1.jpg",
            "./img/ramones-hexagram-jumbolace-black-milk-1.jpg",
        ],
        colors: 4,
        href: "./ramones-hexagram.html",
        parent: ramones,
    },
    {
        title: 'Ramones Pentagram',
        images: [
            "./img/ramones-pentagram-black-milk-1.jpg",
            "./img/ramones-pentagram-white-milk-1.jpg",
        ],
        colors: 2,
        href: "./ramones-pentagram.html",
        parent: ramones,
    },
    {
        title: 'Ramones Monochrome',
        images: [
            "./img/ramones-monochrome-black-milk-1.jpg",
            "./img/ramones-monochrome-olive-denim-milk-1.jpg",
            "./img/ramones-monochrome-black-1.jpg",
            "./img/ramones-monochrome-milk-1.jpg",
        ],
        colors: 4,
        href: "./ramones-monochrome.html",
        parent: ramones,
    },
    {
        title: 'Ramones DRKSHDW',
        images: [
            "./img/ramones-drkshdw-black-milk-1.jpg",
            "./img/ramones-drkshdw-white-milk-1.jpg",
            "./img/ramones-drkshdw-orange-milk-1.jpg",
            "./img/ramones-drkshdw-olive-denim-milk-1.jpg",
            "./img/ramones-drkshdw-blue-milk-1.jpg",
            "./img/ramones-drkshdw-logo-black-milk-1.jpg",
        ],
        colors: 6,
        href: "./ramones-drkshdw.html",
        parent: ramones,
    },
    {
        title: 'Ramones 4 Holes and Eyelets',
        images: [
            "./img/ramones-4holes-black-milk-1.jpg",
            "./img/ramones-4holes-olive-milk-1.jpg",
            "./img/ramones-eyelets-black-milk-1.jpg",
        ],
        colors: 3,
        href: "./ramones-4holes-eyelets.html",
        parent: ramones,
    },
    {
        title: 'Ramones Fur',
        images: [
            "./img/ramones-fur-olive-milk-1.jpg",
            "./img/ramones-fur-black-milk-1.jpg",
            "./img/ramones-fur-grey-milk-1.jpg",
            "./img/ramones-fur-red-milk-1.jpg",
            "./img/ramones-fur-orange-milk-1.jpg",
            "./img/ramones-fur-pink-milk-1.jpg",
        ],
        colors: 6,
        href: "./ramones-fur.html",
        parent: ramones,
    },
    {
        title: 'Ramones Megabumper',
        images: [
            "./img/ramones-megabumper-black-milk-1.jpg",
            "./img/ramones-megabumper-black-1.jpg",
            "./img/ramones-leather-megabumper-black-milk-1.jpg",
            "./img/ramones-leather-megabumper-black-1.jpg",
            "./img/ramones-pentagram-megabumper-black-milk-1.jpg",
            "./img/ramones-pentagram-black-1.jpg",
        ],
        colors: 6,
        href: "./ramones-megabumper.html",
        parent: ramones,
    },
    {
        title: 'Ramones Abstract',
        images: [
            "./img/ramones-abstract-black-milk-1.jpg",
            "./img/ramones-abstract-black-1.jpg",
            "./img/ramones-abstract-clear-sole-black-milk-1.jpg",
            "./img/ramones-abstract-clear-sole-black-1.jpg",
            "./img/ramones-abstract-jumbolace-black-milk-1.jpg",
        ],
        colors: 5,
        href: "./ramones-abstract.html",
        parent: ramones,
    },
    {
        title: 'Ramones Jumbolace',
        images: [
            "./img/ramones-jumbolace-black-milk-1.jpg",
            "./img/ramones-jumbolace-white-milk-1.jpg",
            "./img/ramones-jumbolace-orange-milk-1.jpg",
            "./img/ramones-jumbolace-olive-denim-milk-1.jpg",
            "./img/ramones-jumbolace-black-1.jpg",
        ],
        colors: 5,
        href: "./ramones-jumbolace.html",
        parent: ramones,
    },
    {
        title: 'Ramones Leather Jumbolace',
        images: [
            "./img/ramones-leather-jumbolace-black-milk-1.jpg",
            "./img/ramones-leather-jumbolace-orange-milk-1.jpg",
            "./img/ramones-leather-jumbolace-grey-milk-1.jpg",
            "./img/ramones-leather-jumbolace-black-1.jpg",
            "./img/ramones-leather-jumbolace-milk-1.jpg",
        ],
        colors: 5,
        href: "./ramones-leather-jumbolace.html",
        parent: ramones,
    },
    {
        title: 'Ramones Puffer',
        images: [
            "./img/ramones-puffer-black-milk-1.jpg",
            "./img/ramones-puffer-leather-black-milk-1.jpg",
        ],
        colors: 2,
        href: "./ramones-puffer.html",
        parent: ramones,
    },
];

class MainMenu {
    constructor(title, images, href, parent, colors) {
        this.title = title;
        this.images = images;
        this.href = href;
        this.parent = parent;
        this.colors = colors;
    }

    render() {
        const element = document.createElement('article');
        element.classList.add('list-item', 'secondary-list');

        const slides = this.images.map(imgSrc =>
            `<a href="${this.href}" class="swiper-slide"><img src="${imgSrc}" alt="${this.title}" /></a>`
        ).join('');

        element.innerHTML = `
            <div class="swiper">
                <div class="swiper-wrapper">
                    ${slides}
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <h3 class="oswald-medium">${this.title}</h3>
            <p class="montserrat-light">${this.colors} colors</p>
            <div class="save-card">
                <label class="container">
                    <input type="checkbox" class="save-card-checkbox" />
                    <svg class="save-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"></path>
                    </svg>
                    <svg class="save-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path>
                    </svg>
                </label>
            </div>
        `;

        this.parent.append(element);

        // Чекбокс
        const checkbox = element.querySelector('.save-card-checkbox');
        const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
        const isCardSaved = savedCards.some(card => card.title === this.title);
        checkbox.checked = isCardSaved;

        checkbox.addEventListener('change', (event) => {
            const cardData = {
                title: this.title,
                images: this.images.map(img => {
                    return img.startsWith('./') || img.startsWith('http') ? img : `./balenciaga/img/${img}`;
                }),
                href: this.href.replace('./', './balenciaga/'),
                colors: this.colors
            };

            let savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];

            if (event.target.checked) {
                savedCards.push(cardData);
            } else {
                savedCards = savedCards.filter(card => card.title !== this.title);
            }

            localStorage.setItem('savedCards', JSON.stringify(savedCards));
        });

        // Swiper
        new Swiper(element.querySelector('.swiper'), {
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: element.querySelector('.swiper-pagination'),
                clickable: true
            },
            navigation: {
                nextEl: element.querySelector('.swiper-button-next'),
                prevEl: element.querySelector('.swiper-button-prev'),
            },
            allowTouchMove: true,
            simulateTouch: true,
        });
    }
}

// Инициализация карточек
rickMainMenu.forEach(item => {
    new MainMenu(item.title, item.images, item.href, item.parent, item.colors).render();
});
