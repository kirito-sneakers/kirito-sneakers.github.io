window.addEventListener('DOMContentLoaded', () => {

    const header = document.createElement('header');
    header.innerHTML = `
        <label class="burger" for="burger">
            <input type="checkbox" id="burger">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <nav class="header-info">
            <a href="/" class="montserrat-light underline-animated">Головна</a>
            <a href="/info.html" class="montserrat-light underline-animated">Про нас</a>
            <a href="https://t.me/kirito_ls" class="montserrat-light underline-animated" target="_blank">Написати нам</a>
            <div class="dropdown">
                <span class="dropdown-title montserrat-light">
                    Бренди 
                    <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                        <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/>
                    </svg>
                </span>
                <div class="dropdown-menu">
                    <a href="/balenciaga" class="montserrat-light underline-animated dd">Balenciaga</a>
                    <a href="/rick-owens" class="montserrat-light underline-animated dd">Rick Owens</a>
                    <a href="/maison-margiela" class="montserrat-light underline-animated dd">Maison Margiela</a>
                </div>
            </div>
            <a href="https://kirito-cloth.com/" class="montserrat-light underline-animated">Одяг</a>
        </nav>
        <a href="/" class="logo-icon">
            <img loading="lazy" src="/img/logotype.png" alt="Logo">
        </a>
        <div class="header-icons">
            <div class="dropdown">
                <span class="dropdown-title montserrat-light lang">
                    <svg style="fill: #000; width: 16px; height: 16px; margin-right: 3px;" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512">
                        <path d="M195.708 268.059c-.821-4.11-29.103-145.52-30-150.001C164.307 111.047 158.15 106 151 106h-30c-7.15 0-13.307 5.047-14.708 12.058-.911 4.557-29.222 146.111-30 150-1.625 8.124 3.644 16.026 11.767 17.65 8.123 1.625 16.026-3.644 17.65-11.767L115.297 226h41.406l9.588 47.942c1.625 8.127 9.531 13.392 17.65 11.767 8.123-1.625 13.392-9.527 11.767-17.65zM121.297 196l12-60h5.406l12 60h-29.406zM436 226h-45v-15c0-8.284-6.716-15-15-15s-15 6.716-15 15v15h-45c-8.284 0-15 6.716-15 15s6.716 15 15 15h3.63c8.547 27.612 21.415 48.806 35.575 65.79-11.525 10.542-23.187 19.187-33.575 27.497-6.469 5.175-7.518 14.614-2.342 21.083 5.178 6.472 14.618 7.515 21.083 2.342 10.446-8.357 22.967-17.644 35.629-29.264 12.671 11.628 25.215 20.932 35.629 29.264 6.469 5.176 15.909 4.126 21.083-2.342 5.175-6.469 4.126-15.909-2.342-21.083-10.361-8.291-22.038-16.945-33.575-27.497 14.16-16.984 27.028-38.178 35.575-65.79H436c8.284 0 15-6.716 15-15s-6.716-15-15-15zm-60 73.745c-9.575-12.02-18.189-26.367-24.683-43.845h49.365c-6.493 17.478-15.107 31.825-24.682 43.845z"></path>
                        <path d="M467 91H250.599l-6.43-51.582C241.36 16.946 222.164 0 199.517 0H45C20.187 0 0 20.187 0 45v331c0 24.813 20.187 45 45 45h126.483l6.348 51.582c2.804 22.427 22 39.418 44.653 39.418H467c24.813 0 45-20.187 45-45V136c0-24.813-20.187-45-45-45zM45 391c-8.271 0-15-6.729-15-15V45c0-8.271 6.729-15 15-15h154.517c7.549 0 13.948 5.648 14.883 13.134 2.174 17.436 41.208 330.57 43.364 347.866H45zm161.724 70.75L201.709 421h40.244l-35.229 40.75zM482 467c0 8.271-6.729 15-15 15H228.874l57.104-66.053c2.923-3.297 4.233-7.674 3.629-12.024L254.339 121H467c8.271 0 15 6.729 15 15v331z"></path>
                    </svg>
                    Ukr
                    <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                        <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/>
                    </svg>
                </span>
                <div class="dropdown-menu lang">
                    <a data-lang='rus' class="montserrat-light underline-animated dd">Rus</a>
                    <a data-lang='eng' class="montserrat-light underline-animated dd">Eng</a>
                </div>
            </div>
            <a href="/saved.html" class="saved-icon">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M0 0h48v48H0z" fill="none"></path> 
                        <g id="Shopicon"> 
                            <path d="M14,4c-2.2,0-4,1.8-4,4v36l14-8l14,8V8c0-2.2-1.8-4-4-4H14z"></path> 
                        </g> 
                    </g>
                </svg>
            </a>
        </div>
    `;

    document.querySelector('body').prepend(header);

    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="footer-logo"><a href="/"><img loading="lazy"src="/img/logotype.png" alt=""></a></div>
        <div class="footer-info">
            <a href="https://t.me/kirito_ls" class="oswald-light underline-animated-black" target="_blank">Написати нам</a>
            <a href="/info.html" class="oswald-light underline-animated-black">Про нас</a>
            <a href="/" class="oswald-light underline-animated-black">Головна</a>
        </div>
        <div class="footer-contacts">
            <a href="https://www.instagram.com/kirito_sneakers/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
                <p class="oswald-light underline-animated-black">kirito_sneakers</p>
            </a>
            <a href="https://t.me/kirito_sneakers" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
                    <path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 34.087891 14.035156 C 33.403891 14.035156 32.635328 14.193578 31.736328 14.517578 C 30.340328 15.020578 13.920734 21.992156 12.052734 22.785156 C 10.984734 23.239156 8.9960938 24.083656 8.9960938 26.097656 C 8.9960938 27.432656 9.7783594 28.3875 11.318359 28.9375 C 12.146359 29.2325 14.112906 29.828578 15.253906 30.142578 C 15.737906 30.275578 16.25225 30.34375 16.78125 30.34375 C 17.81625 30.34375 18.857828 30.085859 19.673828 29.630859 C 19.666828 29.798859 19.671406 29.968672 19.691406 30.138672 C 19.814406 31.188672 20.461875 32.17625 21.421875 32.78125 C 22.049875 33.17725 27.179312 36.614156 27.945312 37.160156 C 29.021313 37.929156 30.210813 38.335938 31.382812 38.335938 C 33.622813 38.335938 34.374328 36.023109 34.736328 34.912109 C 35.261328 33.299109 37.227219 20.182141 37.449219 17.869141 C 37.600219 16.284141 36.939641 14.978953 35.681641 14.376953 C 35.210641 14.149953 34.672891 14.035156 34.087891 14.035156 z M 34.087891 16.035156 C 34.362891 16.035156 34.608406 16.080641 34.816406 16.181641 C 35.289406 16.408641 35.530031 16.914688 35.457031 17.679688 C 35.215031 20.202687 33.253938 33.008969 32.835938 34.292969 C 32.477938 35.390969 32.100813 36.335938 31.382812 36.335938 C 30.664813 36.335938 29.880422 36.08425 29.107422 35.53125 C 28.334422 34.97925 23.201281 31.536891 22.488281 31.087891 C 21.863281 30.693891 21.201813 29.711719 22.132812 28.761719 C 22.899812 27.979719 28.717844 22.332938 29.214844 21.835938 C 29.584844 21.464938 29.411828 21.017578 29.048828 21.017578 C 28.923828 21.017578 28.774141 21.070266 28.619141 21.197266 C 28.011141 21.694266 19.534781 27.366266 18.800781 27.822266 C 18.314781 28.124266 17.56225 28.341797 16.78125 28.341797 C 16.44825 28.341797 16.111109 28.301891 15.787109 28.212891 C 14.659109 27.901891 12.750187 27.322734 11.992188 27.052734 C 11.263188 26.792734 10.998047 26.543656 10.998047 26.097656 C 10.998047 25.463656 11.892938 25.026 12.835938 24.625 C 13.831938 24.202 31.066062 16.883437 32.414062 16.398438 C 33.038062 16.172438 33.608891 16.035156 34.087891 16.035156 z"></path>
                </svg>
                <p class="oswald-light underline-animated-black">kirito_sneakers</p>
            </a>
            <a href="https://www.tiktok.com/@kirito_sneakers" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
                    <path d="M 9 4 C 6.2495759 4 4 6.2495759 4 9 L 4 41 C 4 43.750424 6.2495759 46 9 46 L 41 46 C 43.750424 46 46 43.750424 46 41 L 46 9 C 46 6.2495759 43.750424 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.671576 6 44 7.3284241 44 9 L 44 41 C 44 42.671576 42.671576 44 41 44 L 9 44 C 7.3284241 44 6 42.671576 6 41 L 6 9 C 6 7.3284241 7.3284241 6 9 6 z M 26.042969 10 A 1.0001 1.0001 0 0 0 25.042969 10.998047 C 25.042969 10.998047 25.031984 15.873262 25.021484 20.759766 C 25.016184 23.203017 25.009799 25.64879 25.005859 27.490234 C 25.001922 29.331679 25 30.496833 25 30.59375 C 25 32.409009 23.351421 33.892578 21.472656 33.892578 C 19.608867 33.892578 18.121094 32.402853 18.121094 30.539062 C 18.121094 28.675273 19.608867 27.1875 21.472656 27.1875 C 21.535796 27.1875 21.663054 27.208245 21.880859 27.234375 A 1.0001 1.0001 0 0 0 23 26.240234 L 23 22.039062 A 1.0001 1.0001 0 0 0 22.0625 21.041016 C 21.906673 21.031216 21.710581 21.011719 21.472656 21.011719 C 16.223131 21.011719 11.945313 25.289537 11.945312 30.539062 C 11.945312 35.788589 16.223131 40.066406 21.472656 40.066406 C 26.72204 40.066409 31 35.788588 31 30.539062 L 31 21.490234 C 32.454611 22.653646 34.267517 23.390625 36.269531 23.390625 C 36.542588 23.390625 36.802305 23.374442 37.050781 23.351562 A 1.0001 1.0001 0 0 0 37.958984 22.355469 L 37.958984 17.685547 A 1.0001 1.0001 0 0 0 37.03125 16.6875 C 33.886609 16.461891 31.379838 14.012216 31.052734 10.896484 A 1.0001 1.0001 0 0 0 30.058594 10 L 26.042969 10 z M 27.041016 12 L 29.322266 12 C 30.049047 15.2987 32.626734 17.814404 35.958984 18.445312 L 35.958984 21.310547 C 33.820114 21.201935 31.941489 20.134948 30.835938 18.453125 A 1.0001 1.0001 0 0 0 29 19.003906 L 29 30.539062 C 29 34.707538 25.641273 38.066406 21.472656 38.066406 C 17.304181 38.066406 13.945312 34.707538 13.945312 30.539062 C 13.945312 26.538539 17.066083 23.363182 21 23.107422 L 21 25.283203 C 18.286416 25.535721 16.121094 27.762246 16.121094 30.539062 C 16.121094 33.483274 18.528445 35.892578 21.472656 35.892578 C 24.401892 35.892578 27 33.586491 27 30.59375 C 27 30.64267 27.001859 29.335571 27.005859 27.494141 C 27.009759 25.65271 27.016224 23.20692 27.021484 20.763672 C 27.030884 16.376775 27.039186 12.849206 27.041016 12 z"></path>
                </svg>
                <p class="oswald-light underline-animated-black">kirito_sneakers</p>
            </a>
        </div>
    `;
    document.querySelector('body').append(footer);

    const mobileNav = document.createElement('nav');
    mobileNav.id = 'mobile-nav';
    mobileNav.className = '';
    mobileNav.innerHTML = `
        <div class="oswald-medium">Меню</div>
        <a href="/" class="montserrat-light">Головна</a>
        <a href="/info.html" class="montserrat-light">Про нас</a>
        <a href="https://t.me/kirito_ls" class="montserrat-light" target="_blank">Написати нам</a>
        <a href="https://kirito-cloth.com/" class="montserrat-light" target="_blank">Одяг</a>
        <div class="oswald-medium">Бренди</div>
        <a href="/balenciaga" class="montserrat-light">Balenciaga</a>
        <a href="/rick-owens" class="montserrat-light">Rick Owens</a>
        <a href="/maison-margiela" class="montserrat-light">Maison Margiela</a>
        <div class="oswald-medium">Мова</div>
        <a data-lang='eng' class="montserrat-light">Eng</a>
        <a data-lang='ukr' class="montserrat-light">Ukr</a>
        <a data-lang='rus' class="montserrat-light">Rus</a>
    `;

    // // Создаём overlay
    const mobileOverlay = document.createElement('div');
    mobileOverlay.className = 'overlay';

    // // Добавляем в body
    document.body.appendChild(mobileNav);
    document.body.appendChild(mobileOverlay);

const burger = document.querySelector('#burger');
const mbNav = document.querySelector('#mobile-nav');
const overlay = document.querySelector('.overlay');

let lastScroll = 0;
let scrollTop = 0;

window.addEventListener('scroll', () => {
  if (mbNav.classList.contains('nav-opened')) return;

  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }

  lastScroll = currentScroll;
});

overlay.addEventListener('click', () => {
    closeMenu();
    mbNav.classList.remove('nav-opened');
    burger.checked = false
})

function closeMenu() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    overlay.classList.remove('nav-opened')

    // Ключ: отключаем smooth scroll
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, scrollTop);

    // И восстанавливаем smooth на след. тик
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 0);
}

burger.addEventListener('click', () => {
  const isOpen = mbNav.classList.toggle('nav-opened');

  if (isOpen) {
    scrollTop = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollTop}px`;
    document.body.style.width = '100%';
    header.classList.remove('hide');
    overlay.classList.add('nav-opened');
  } else {
    closeMenu();
  }
});

function switchLanguage(newLang) {
  const host = window.location.origin;
  let path = window.location.pathname;

  // Удаляем текущий языковой префикс, если он есть
  path = path.replace(/^\/(eng|rus|ukr)/, '');

  // Если выбран язык (не "ukr"), добавляем префикс
  const newPath = newLang && newLang !== 'ukr' ? `/${newLang}${path}` : path;

  // Перенаправление
  window.location.href = host + newPath;
}

// Навешиваем обработчик на все <a data-lang>
document.querySelectorAll('a[data-lang]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const lang = this.getAttribute('data-lang');
    switchLanguage(lang);
  });
});


});