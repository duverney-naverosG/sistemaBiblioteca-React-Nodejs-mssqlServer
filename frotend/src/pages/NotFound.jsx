import './NotFound.css'

function NotFound() {
    return (<>
        <a href="https://codepen.io/uiswarup/full/yLzypyY" target="_blank">
            <header class="top-header">
            </header>

            <div>
                <div class="starsec"></div>
                <div class="starthird"></div>
                <div class="starfourth"></div>
                <div class="starfifth"></div>
            </div>


            <div class="lamp__wrap">
                <div class="lamp">
                    <div class="cable"></div>
                    <div class="cover"></div>
                    <div class="in-cover">
                        <div class="bulb"></div>
                    </div>
                    <div class="light"></div>
                </div>
            </div>
            <section class="error">

                <div class="error__content">
                    <div class="error__message message">
                        <h1 class="message__title">404</h1>
                        <p class="message__text">PAGINA NO EONTRADA</p>
                    </div>
                    <div class="error__nav e-nav">
                        <a href="/" class="e-nav__link"></a>
                    </div>
                </div>

            </section>

        </a>
    </>);
}

export default NotFound;