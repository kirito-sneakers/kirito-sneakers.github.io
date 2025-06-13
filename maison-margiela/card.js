const replica = document.querySelector('#replica'),
      tabi = document.querySelector('#tabi'),
      future = document.querySelector('#future')

const maisonMainMenu = [
    {
        title: 'Replica',
        images: [
            '/maison-margiela/img/replica-white-grey-1.jpg',
            "/maison-margiela/img/replica-black-grey-1.jpg",
            "/maison-margiela/img/replica-white-1.jpg",
            "/maison-margiela/img/replica-black-1.jpg",
            "/maison-margiela/img/replica-red-1.jpg",
            "/maison-margiela/img/replica-purple-1.jpg",
            "/maison-margiela/img/replica-yellow-1.jpg",
            "/maison-margiela/img/replica-light-blue-1.jpg",
            "/maison-margiela/img/replica-cracking-silver-1.jpg",

        ],
        colors: 9,
        href: "./replica.html",
        parent: replica,
    },
    {
        title: 'Replica Painted',
        images: [
            "/maison-margiela/img/replica-painted-black-1.jpg",
            "/maison-margiela/img/replica-painted-black-white-1.jpg",
        ],
        colors: 2,
        href: "./replica-painted.html",
        parent: replica,
    },
    {
        title: 'Tabi',
        images: [
            "/maison-margiela/img/tabi-black-white-1.jpg",
            "/maison-margiela/img/tabi-white-1.jpg",
            "/maison-margiela/img/tabi-black-1.jpg",
        ],
        colors: 3,
        href: "./tabi.html",
        parent: tabi,
    },
    {
        title: 'Future',
        images: [
            "/maison-margiela/img/future-black-1.jpg",
            "/maison-margiela/img/future-white-1.jpg",
            "/maison-margiela/img/future-red-1.jpg",
        ],
        colors: 3,
        href: "./future.html",
        parent: future,
    },
        {
        title: 'Future Low',
        images: [
            "/maison-margiela/img/future-low-black-1.jpg",
            "/maison-margiela/img/future-low-white-1.jpg",
        ],
        colors: 2,
        href: "./future-low.html",
        parent: future,
    },
];

const BRAND_KEYWORDS = {
    'maison-margiela': ['replica', 'tabi', 'future'],
    'rick-owens': ['geobasket', 'ramones', 'dunk', 'vans'],
    'balenciaga': ['3xl', 'track', 'runner', 'triple s', 'defender', '10xl', '6xl', 'cargo', 'circuit', 'stapler', 'x-pander', 'hike'],
};

class MainMenu {
    constructor(title, images, href, parent, colors) {
        this.title = title;
        this.images = images;
        this.parent = parent;
        this.colors = colors;

        this.brand = this.getBrandFromTitle(title);
        const filename = href.split('/').pop().replace(/^\//, '');
        this.href = `./${filename}`; // без бренда — для UI
        this.cardHref = `./${this.brand}/${filename}`; // с брендом — для сохранения
    }

    getBrandFromTitle(title) {
        const lower = title.toLowerCase();
        for (const [brand, keywords] of Object.entries(BRAND_KEYWORDS)) {
            if (keywords.some(keyword => lower.includes(keyword))) {
                return brand;
            }
        }
        return 'unknown';
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

        const checkbox = element.querySelector('.save-card-checkbox');
        const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
        const isCardSaved = savedCards.some(card => card.title === this.title);
        checkbox.checked = isCardSaved;

        checkbox.addEventListener('change', (event) => {
            const cardData = {
                title: this.title,
                images: this.images.map(img => {
                    try {
                        const url = new URL(img, location.origin);
                        return url.pathname.startsWith('/img/') ? url.pathname : url.href;
                    } catch {
                        const filename = img.split('/').pop();
                        return `/${this.brand}/img/${filename}`;
                    }
                }),
                href: this.cardHref, // сохраняем с папкой бренда
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

        // Swiper init
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

// Пример инициализации
maisonMainMenu.forEach(item => {
    new MainMenu(item.title, item.images, item.href, item.parent, item.colors).render();
});
