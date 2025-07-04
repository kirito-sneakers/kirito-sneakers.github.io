const three_xl = document.querySelector('#three_xl');
const track = document.querySelector('#track');
const runner = document.querySelector('#runner');
const triple_s = document.querySelector('#triple_s');
const paris = document.querySelector('#paris');
const others = document.querySelector('#others');

const balenciagaMainMenu = [
    {
        title: '3xl',
        images: [
            "https://balenciaga.dam.kering.com/m/4db4745c94b6ff59/Large-734731W3XL11010_F.jpg?v=3",
            "https://balenciaga.dam.kering.com/m/3abf32c24abe9661/Large-734734W3XL19000_F.jpg?v=2",
            "https://balenciaga.dam.kering.com/m/5b59212c708e8d14/Large-734734W3XL11210_F.jpg?v=2",
            "https://balenciaga.dam.kering.com/m/b24adf190b4b621/Large-734734W3XL49191_F.jpg?v=3",
            "https://balenciaga.dam.kering.com/m/7398af7893f3cacc/Large-734734W3XL52800_F.jpg?v=2",
            "/balenciaga/img/3xl-red-1.jpg",
            "/balenciaga/img/3xl-pink-1.jpg",
            "https://balenciaga.dam.kering.com/m/4613c58ee926830b/Medium-734734WTRMH9080_F.jpg?v=2",
            "/balenciaga/img/3xl-ripped-1.jpg",
        ],
        colors: 9,
        href: "./3xl.html",
        parent: three_xl,
    },
    {
        title: '3xl multicolor',
        images: [
            "https://balenciaga.dam.kering.com/m/612ece00eb41d4be/Large-734734W3XL11090_F.jpg?v=2",
            "https://balenciaga.dam.kering.com/m/6f889dcc9cc9b0af/Large-734734W3XL49710_F.jpg?v=7",
            "https://balenciaga.dam.kering.com/m/8e8063f68be15dd/Large-734734W3XL51219_F.jpg?v=2",
            "/balenciaga/img/3xl-white_red-1.jpg",
            "https://balenciaga.dam.kering.com/m/2ad73ac34add0ce2/Large-734731W3XL51259_F.jpg?v=1",
            "/balenciaga/img/3xl-black_orange-1.jpg",
            "/balenciaga/img/3xl-yellow_black-1.jpg",
            "https://balenciaga.dam.kering.com/m/10e6ed040d681a1d/Large-734731W2RG39010_F.jpg?v=2",
        ],
        colors: 8,
        href: "./3xl-multicolor.html",
        parent: three_xl,
    },
    {
        title: '3xl extreme laces',
        images: [
            "https://balenciaga.dam.kering.com/m/17883204e082f5a8/Large-778697W3XLL9191_F.jpg?v=1",
            "/balenciaga/img/3xl-extreme-lace-black-1.jpg ",
            "/balenciaga/img/3xl-extreme-lace-black_white-1.jpg",
            "https://balenciaga.dam.kering.com/m/3bb75c154f5bbfd8/Large-778698W3XLL2097_F.jpg?v=2",
            "/balenciaga/img/3xl-extreme-lace-red-1.jpg",
        ],
        colors: 5,
        href: "./3xl-extreme-laces.html",
        parent: three_xl,
    },
    {
        title: '3xl extreme laces b',
        images: [
            "https://balenciaga.dam.kering.com/m/154103c77be60e18/eCom-825601W3XCH1000_F.jpg?v=1",
            "https://balenciaga.dam.kering.com/m/61f8460d886598bc/eCom-825601W3XCH1101_F.jpg?v=3",
            "/balenciaga/img/3xl-extreme-laces-b-white-1.jpg",
            "/balenciaga/img/3xl-extreme-laces-b-light-beige-1.jpg",
            "/balenciaga/img/3xl-extreme-laces-b-black_white-1.jpg",
            "https://balenciaga.dam.kering.com/m/1e8afd11abbaafb/eCom-825601W3XCH1614_F.jpg?v=1",
            "https://balenciaga.dam.kering.com/m/bd46ef8844f97a2/eCom-825599W3XCH9145_F.jpg?v=1",
        ],
        colors: 7,
        href: "./3xl-extreme-laces-b.html",
        parent: three_xl,
    },
    {
        title: '3xl extreme laces logo',
        images: [
            "https://balenciaga.dam.kering.com/m/37bd57c64f2c33e2/eCom-825597W3XHL9010_F.jpg?v=1",
            "/balenciaga/img/3xl-extreme-laces-logo-black-1.jpg",
            "/balenciaga/img/3xl-extreme-laces-logo-white-1.jpg",
            "https://balenciaga.dam.kering.com/m/6814e35dc3990146/eCom-825597W3XHL2162_F.jpg?v=1",
        ],
        colors: 4,
        href: "./3xl-extreme-laces-logo.html",
        parent: three_xl,
    },
    {
        title: 'balenciaga & under armour 3xl',
        images: [
            "https://balenciaga.dam.kering.com/m/102c767026467f20/Large-814419W3XUA1090_F.jpg?v=1",
            "https://balenciaga.dam.kering.com/m/7dd930ced130172e/Large-814419W3XUA9010_F.jpg?v=1",
        ],
        colors: 2,
        href: "./3xl-under_armour.html",
        parent: three_xl,
    },
    {
        title: '3xl Chain',
        images: [
            "/balenciaga/img/3xl-chain-black-1.jpg",
            "/balenciaga/img/3xl-chain-beige-1.jpg",
        ],
        colors: 2,
        href: "./3xl-chain.html",
        parent: three_xl,
    },
    {
        title: '3xl ski',
        images: [
            "https://balenciaga.dam.kering.com/m/3bfa45de6b09a324/Medium-766034W3XR39710_F.jpg?v=1",
            "https://balenciaga.dam.kering.com/m/472b885ecee44197/eCom-766034W3XR21000_F.jpg?v=1",
            "https://balenciaga.dam.kering.com/m/662d727b0ad4af7f/Thumbnail-766034W3XR27010_F.jpg?v=3",
        ],
        colors: 3,
        href: "./3xl-ski.html",
        parent: three_xl,
    },
    {
        title: 'track',
        images: [
            "https://balenciaga.dam.kering.com/m/614246a71e653806/Large-542436W1GB11000_F.jpg?v=5",
            "https://balenciaga.dam.kering.com/m/2aa3a0a429e745c3/Large-542023W1GB19000_F.jpg?v=7",
            "https://balenciaga.dam.kering.com/m/1f84b1ae31bdcdff/Large-542023W2LA29110_F.jpg?v=3",
            "/balenciaga/img/track-pink-1.jpg",
            "/balenciaga/img/track-adidas-white-1.jpg",
            "/balenciaga/img/track-black_white-1.jpg",
            "https://balenciaga.dam.kering.com/m/7b7c9495c7df7055/Large-542436W3AC48071_F.jpg?v=3",
            "https://balenciaga.dam.kering.com/m/5d0d7977338156dc/Large-542436W1GB19059_F.jpg?v=5",
        ],
        colors: 8,
        href: "./track.html",
        parent: track,
    },
    {
        title: 'track graffiti',
        images: [
            "https://balenciaga.dam.kering.com/m/4b9e3467ee30cdb0/Large-542023WTRHW1090_F.jpg?v=2",
            "https://balenciaga.dam.kering.com/m/6e1055a4e22cfd55/Large-542436WTRHW9010_F.jpg?v=1",
            "/balenciaga/img/track-graffiti-black_white-1.jpg",
            "/balenciaga/img/track-grafifiti-whtie_blue-1.jpg",
        ],
        colors: 4,
        href: "./track-graffiti.html",
        parent: track,
    },
    {
        title: 'track laces',
        images: [
            "https://balenciaga.dam.kering.com/m/33d9ddef3f4a347a/eCom-800592WTRHK1000_F.jpg?v=1",
            "https://balenciaga.dam.kering.com/m/795102ba2a8b6bbc/eCom-800592WTRHK7000_F.jpg?v=1",
            "https://balenciaga.dam.kering.com/m/431ac370c5f680ae/eCom-800590WTRHK9050_F.jpg?v=1",
            "https://balenciaga.dam.kering.com/m/5e76a853a5833293/eCom-800590WTRHK1013_F.jpg?v=1",
            "/balenciaga/img/track-laces-1.jpg",
        ],
        colors: 5,
        href: "./track-laces.html",
        parent: track,
    },
    {
        title: 'track led',
        images: [
            "/balenciaga/img/track-led-black-1.jpg",
            "/balenciaga/img/track-led-white-1.jpg",
        ],
        colors: 2,
        href: "./track-led.html",
        parent: track,
    },
    {
        title: 'track 2.0',
        images: [
            "https://balenciaga.dam.kering.com/m/61e97b5971411bf7/Large-690494W3GN11000_F.jpg?v=3",
            "/balenciaga/img/track2-white-1.jpg",
            "/balenciaga/img/track2-beige-1.jpg",
            "/balenciaga/img/track2-grey-1.jpg",
            "/balenciaga/img/track2-orange-1.jpg",
            "/balenciaga/img/track2-lime-1.jpg",
            "/balenciaga/img/track2-pink-1.jpg",
        ],
        colors: 7,
        href: "./track2.html",
        parent: track,
    },
    {
        title: 'track 2.0 multicolor',
        images: [
            "/balenciaga/img/track2-black_white-1.jpg",
            "/balenciaga/img/track2-beige_black-1.jpg",
            "/balenciaga/img/track2-white_orange-1.jpg",
            "/balenciaga/img/track2-white_red-1.jpg",
            "/balenciaga/img/track2-blue_red-1.jpg",
            "/balenciaga/img/track2-grey_red-1.jpg",
            "/balenciaga/img/track2-black_orange-1.jpg",
        ],
        colors: 7,
        href: "./track2-multicolor.html",
        parent: track,
    },
    {
        title: 'runner',
        images: [
            "/balenciaga/img/runner-black-1.jpg",
            "/balenciaga/img/runner-white-1.jpg",
            "/balenciaga/img/runner-grey-1.jpg",
        ],
        colors: 3,
        href: "./runner.html",
        parent: runner,
    },
    {
        title: 'runner multicolor',
        images: [
            "/balenciaga/img/runner-multicolor-white_black-1.jpg",
            "/balenciaga/img/runner-multicolor-white_beige-1.jpg",
            "/balenciaga/img/runner-multicolor-white_blue-1.jpg",
            "/balenciaga/img/runner-multicolor-white_orange-1.jpg",
            "/balenciaga/img/runner-multicolor-white_pink-1.jpg",
            "/balenciaga/img/runner-multicolor-white_red-1.jpg",
            "/balenciaga/img/runner-multicolor-white-1.jpg",
        ],
        colors: 7,
        href: "./runner-multicolor.html",
        parent: runner,
    },
    {
        title: 'runner graffiti',
        images: [
            "/balenciaga/img/runner-graffiti-black-1.jpg",
            "/balenciaga/img/runner-graffiti-white-1.jpg",
        ],
        colors: 2,
        href: "./runner-graffiti.html",
        parent: runner,
    },
    {
        title: 'runner new',
        images: [
            "https://balenciaga.dam.kering.com/m/584174b2c523b16a/Large-772774W3RBT1000_F.jpg?v=6",
            "/balenciaga/img/runner-new-beige-1.jpg",
            "https://balenciaga.dam.kering.com/m/379f355b761781fb/Large-813793WRUCU1000_F.jpg?v=1",
        ],
        colors: 3,
        href: "./runner-new.html",
        parent: runner,
    },
    {
        title: 'runner new multicolor',
        images: [
            "https://balenciaga.dam.kering.com/m/4b34eb8a4d5105cd/Large-772774WRUNG9010_F.jpg?v=1",
            "https://balenciaga.dam.kering.com/m/ab2a5f001bcf853/eCom-772774W3RMU9010_F.jpg?v=6",
            "https://balenciaga.dam.kering.com/m/5d5a8f379ea7be2c/Large-772774WRUNG2410_F.jpg?v=2",
            "https://balenciaga.dam.kering.com/m/16aa470bc3ef5695/Large-772767W3RMU9034_F.jpg?v=2",
            "/balenciaga/img/runner-new-beige_yellow-1.jpg",
            "https://balenciaga.dam.kering.com/m/6f694142d11e732a/Large-772774W3RNY9012_F.jpg?v=4",
            "https://balenciaga.dam.kering.com/m/39772bfec61de839/Large-772774W3RNY4912_F.jpg?v=7",
            "https://balenciaga.dam.kering.com/m/1e4455c8dbbc0b5a/Large-772767W3RBW9645_F.jpg?v=5",
            "https://balenciaga.dam.kering.com/m/1b6a9d5789e85144/Large-772774W3RMU8123_F.jpg?v=5",
            "https://balenciaga.dam.kering.com/m/204a268ba70874ee/Large-772767W3RMU1745_F.jpg?v=5",
        ],
        colors: 10,
        href: "./runner-new-multicolor.html",
        parent: runner,
    },
    {
        title: 'runner 2.0',
        images: [
            "https://balenciaga.dam.kering.com/m/200868570badeafa/Large-779066W3RXP2000_F.jpg?v=4",
            "https://balenciaga.dam.kering.com/m/2377b3b124a8bba/Large-779064W3RXP9260_F.jpg?v=4",
            "https://balenciaga.dam.kering.com/m/fc6ce49278b9c55/Large-779066W3RXP9710_F.jpg?v=2",
            "https://balenciaga.dam.kering.com/m/27f9289740b44d42/Large-779066W3RXP9074_F.jpg?v=4",
        ],
        colors: 4,
        href: "./runner2.html",
        parent: runner,
    },
    {
        title: 'triple s',
        images: [
            "https://balenciaga.dam.kering.com/m/3854d991a1d9606c/Large-524039W2FW19700_F.jpg?v=4",
            "https://balenciaga.dam.kering.com/m/3af9cb97f6786d10/Large-533882W09OM1000_F.jpg?v=5",
            "/balenciaga/img/triple-s-white_red-1.jpg",
            "/balenciaga/img/triple-s-beige_red-1.jpg",
            "/balenciaga/img/triple-s-white_green-1.jpg",
            "/balenciaga/img/triple-s-black-1.jpg",
            "/balenciaga/img/triple-s-white-1.jpg",
        ],
        colors: 7,
        href: "./triple-s.html",
        parent: triple_s,
    },
    {
        title: 'triple s logotypes',
        images: [
            "/balenciaga/img/triple-s-logotype-white-1.jpg",
            "/balenciaga/img/triple-s-allover-black-1.jpg",
            "/balenciaga/img/triple-s-allover-white-1.jpg",
            "/balenciaga/img/triple-s-allover-pink-1.jpg",
        ],
        colors: 4,
        href: "./triple-s-logotypes.html",
        parent: triple_s,
    },
    {
        title: 'balenciaga & adidas triple s',
        images: [
            "/balenciaga/img/triple-s-adidas-black-1.jpg",
            "/balenciaga/img/triple-s-adidas-white-1.jpg",
            "/balenciaga/img/triple-s-adidas-blue-1.jpg",
        ],
        colors: 3,
        href: "./triple-s-adidas.html",
        parent: triple_s,
    },
    {
        title: 'triple s faded',
        images: [
            "/balenciaga/img/triple-s-faded-black-1.jpg",
            "/balenciaga/img/triple-s-faded-beige-1.jpg",
            "/balenciaga/img/triple-s-faded-blue-1.jpg",
            "/balenciaga/img/triple-s-faded-red-1.jpg",
        ],
        colors: 4,
        href: "./triple-s-faded.html",
        parent: triple_s,
    },
    {
        title: 'Paris High',
        images: [
            "/balenciaga/img/paris-high-black-milk-1.jpg",
            "/balenciaga/img/paris-high-black-1.jpg",
            "/balenciaga/img/paris-high-beige-1.jpg",
            "/balenciaga/img/paris-high-brown-milk-1.jpg",
            "/balenciaga/img/paris-high-blue-milk-1.jpg",
            "/balenciaga/img/paris-high-red-milk-1.jpg",
            "/balenciaga/img/paris-high-pink-milk-1.jpg",
            "/balenciaga/img/paris-high-denim-milk-1.jpg",
        ],
        colors: 8,
        href: "./paris-high.html",
        parent: paris,
    },
        {
        title: 'Paris Low',
        images: [
            "/balenciaga/img/paris-low-black-milk-1.jpg",
            "/balenciaga/img/paris-low-black-1.jpg",
            "/balenciaga/img/paris-low-beige-1.jpg",
            "/balenciaga/img/paris-low-brown-milk-1.jpg",
            "/balenciaga/img/paris-low-blue-milk-1.jpg",
            "/balenciaga/img/paris-low-red-milk-1.jpg",
            "/balenciaga/img/paris-low-pink-milk-1.jpg",
            "/balenciaga/img/paris-low-denim-milk-1.jpg",
        ],
        colors: 8,
        href: "./paris-low.html",
        parent: paris,
    },
    {
        title: 'defender',
        images: [
            "https://balenciaga.dam.kering.com/m/27ee2e98d9a41441/Large-685613W2RA61000_F.jpg?v=4",
            "https://balenciaga.dam.kering.com/m/53dc0467b734d93f/Large-685613W2RA69700_F.jpg?v=6",
            "/balenciaga/img/defender-grey-1.jpg",
            "/balenciaga/img/defender-dark-green-1.jpg",
            "/balenciaga/img/defender-white-1.jpg",
        ],
        colors: 5,
        href: "./defender.html",
        parent: others,
    },
    {
        title: '10xl',
        images: [
            "/balenciaga/img/10xl-white-1.jpg",
            "https://balenciaga.dam.kering.com/m/560e23f9969803e4/eCom-792779W2MV21000_F.jpg?v=2",
            "/balenciaga/img/10xl-white_orange-1.jpg",
            "/balenciaga/img/10xl-grey_pink-1.jpg"
        ],
        colors: 4,
        href: "./10xl.html",
        parent: others,
    },
    {
        title: '6xl',
        images: [
            "https://balenciaga.dam.kering.com/m/617971650f6142f1/Large-815859W2MV21012_F.jpg?v=1",
            "https://balenciaga.dam.kering.com/m/4f46d9a6f4fa8b25/Large-815859W2MV29000_F.jpg?v=2",
            "https://balenciaga.dam.kering.com/m/7db9fd2107849461/eCom-815853W2MV22211_F.jpg?v=1",
            "/balenciaga/img/6xl-grey_green-1.jpg",
            "/balenciaga/img/6xl-white_purple-1.jpg",
        ],
        colors: 5,
        href: "./6xl.html",
        parent: others,
    },
    {
        title: 'cargo',
        images: [
            "/balenciaga/img/cargo-white-1.jpg",
            "/balenciaga/img/cargo-black-1.jpg",
            "/balenciaga/img/cargo-white_grey-1.jpg",
            "/balenciaga/img/cargo-grey_white-1.jpg",
            "/balenciaga/img/cargo-white_yellow-1.jpg",
            "/balenciaga/img/cargo-white_blue-1.jpg",
            "/balenciaga/img/cargo-white_pink-1.jpg",
            "/balenciaga/img/cargo-beige_red-1.jpg",
            "/balenciaga/img/cargo-yellow_blue-1.jpg",
        ],
        colors: 9,
        href: "./cargo.html",
        parent: others,
    },
    {
        title: 'circuit',
        images: [
            "https://balenciaga.dam.kering.com/m/74a33619c016a3e8/Large-793944WFLGY1000_F.jpg?v=1",
            "https://balenciaga.dam.kering.com/m/16c960c55f04497c/Large-793944WFLGC9000_F.jpg?v=1",
            "https://balenciaga.dam.kering.com/m/2ec73fef5082a501/Large-793944WFLGY9100_F.jpg?v=1",
            "https://balenciaga.dam.kering.com/m/77352996dd19cf4d/eCom-793944WFLGY1950_F.jpg?v=1",
        ],
        colors: 4,
        href: "./circuit.html",
        parent: others,
    },
    {
        title: 'stapler',
        images: [
            "https://balenciaga.dam.kering.com/m/2e0ee84686216d11/Large-803681W3ST41000_F.jpg?v=6",
            "https://balenciaga.dam.kering.com/m/7ee51a00d6097a7b/Large-803681W3ST49191_F.jpg?v=5",
            "/balenciaga/img/stapler-grey-1.jpg",
            "https://balenciaga.dam.kering.com/m/1aad72d936194d08/eCom-803681W3ST49571_F.jpg?v=6",
            "https://balenciaga.dam.kering.com/m/5d4848a5f455347f/Large-803682W3ST41457_F.jpg?v=6",
        ],
        colors: 5,
        href: "./stapler.html",
        parent: others,
    },
    {
        title: 'x-pander',
        images: [
            "/balenciaga/img/x-pander-black-1.jpg",
            "/balenciaga/img/x-pander-white-1.jpg",
            "/balenciaga/img/x-pander-grey-1.jpg",
            "/balenciaga/img/x-pander-white_black-1.jpg",
            "/balenciaga/img/x-pander-yellow_black-1.jpg",
            "/balenciaga/img/x-pander-white_orange-1.jpg",
            "/balenciaga/img/x-pander-white_pink-1.jpg",
            "/balenciaga/img/x-pander-grey_blue-1.jpg",
        ],
        colors: 8,
        href: "./x-pander.html",
        parent: others,
    },
    {
        title: 'hike',
        images: [
            "https://balenciaga.dam.kering.com/m/5bfd2f3a6a33b201/Large-804921WHIKE1000_F.jpg?v=1",
            "https://balenciaga.dam.kering.com/m/6c722f8913e47b23/Large-804921WHIKE2070_F.jpg?v=2",
            "https://balenciaga.dam.kering.com/m/f632d0f8c55de15/Large-804921WHIKE6010_F.jpg?v=2",
        ],
        colors: 3,
        href: "./hike.html",
        parent: others,
    },
    {
        title: 'monday',
        images: [
            "https://balenciaga.dam.kering.com/m/57f59bb74e499132/eCom-825417WDTSC9110_F.jpg?v=3",
            "https://balenciaga.dam.kering.com/m/6e00d804e4fbde4e/eCom-825417WDTSC1000_F.jpg?v=2",
            "https://balenciaga.dam.kering.com/m/ec7055796be4297/eCom-825418WMNSS1011_F.jpg?v=2",
            "https://balenciaga.dam.kering.com/m/4d8253724e8a8f68/eCom-825418WDWTS4090_F.jpg?v=1",
            "https://balenciaga.dam.kering.com/m/4d108f29f41d4730/eCom-825418WDWTS1971_F.jpg?v=1",
            "https://balenciaga.dam.kering.com/m/363744a903b241a8/eCom-825417WDTSC5191_F.jpg?v=2",
        ],
        colors: 6,
        href: "./monday.html",
        parent: others,
    },
    {
        title: 'platform',
        images: [
            "https://balenciaga.dam.kering.com/m/6f6f768fcb7089f6/eCom-821137WPLTF1160_F.jpg?v=4",
            "https://balenciaga.dam.kering.com/m/28b401829727991b/eCom-821137WPLTF1011_F.jpg?v=5",
        ],
        colors: 2,
        href: "./platform.html",
        parent: others,
    },
];

const BRAND_KEYWORDS = {
    'rick-owens': ['geobasket', 'ramones', 'dunk', 'vintage'],
    'balenciaga': ['3xl', 'track', 'runner', 'triple s', 'defender', '10xl', '6xl', 'cargo', 'circuit', 'stapler', 'x-pander', 'hike', 'monday', 'platform', 'paris'],
    'maison-margiela': ['replica', 'tabi', 'future']
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
balenciagaMainMenu.forEach(item => {
    new MainMenu(item.title, item.images, item.href, item.parent, item.colors).render();
});
