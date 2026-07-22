import "/src/App.css";


function Header({ add }) {
    return (
        <header className="header">

            {/* ===== 1. НАВИГАЦИЯ ===== */}

            {/* ===== 2. HERO ===== */}
            <section className="hero">

                {/* ===== MAC ===== */}
                <div className="hero-content hero-mac big">

                    <h1 className="hero-title">MacBook Air</h1>
                    <h2>Теперь ещё мощнее благодаря M5.</h2>

                    <div className="hero-buttons">


                        <button
                            onClick={add}

                        >
                            Купить
                        </button>
                    </div>
                    <a
                        href="https://apple.com/macbook-air"
                        className="hero-image-wrapper"
                        aria-label="MacBook Air"
                    >
                        <img
                            className="hero-image"
                            src="/img/MackbockHeader.png"
                            alt="MacBook Air"
                        />
                    </a>
                </div>


                {/* ===== iPHONE ===== */}
                <div className="hero-content hero-iphone big">

                    <a
                        href="https://apple.com/iphone"
                        className="hero-image-wrapper"
                        aria-label="iPhone"
                    >
                        <img
                            className="hero-image"
                            src="img/hero_iphone_family__be5jkzxszb1e_large_2x.jpg"
                            alt="iPhone"
                        />
                    </a>

                    <h1 className="hero-title">iPhone</h1>
                    <h2>Познакомьтесь с новой линейкой iPhone.</h2>

                    <div className="hero-buttons">

                        <a
                            href="https://www.apple.com/shop/buy-iphone"
                            className="hero-button-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Купить
                        </a>
                    </div>



                </div>
                {/* ===== Ipad ===== */}
                <div className="hero-content hero-ipad big">

                    <a
                        href="https://apple.com/iphone"
                        className="hero-image-wrapper"
                        aria-label="iPad"
                    >
                        <img
                            className="hero-image"
                            src="/img/iPadHeader.jpg"
                            alt="iPad"
                        />
                    </a>

                    <h1 className="hero-title">Ipad</h1>
                    <h2>Теперь ещё мощнее благодаря M4.</h2>

                    <div className="hero-buttons">

                        <a
                            href="https://www.apple.com/shop/buy-iphone"
                            className="hero-button-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Купить
                        </a>
                    </div>


                </div>


                {/* ===== Mackbook ===== */}
                <div className="hero-content-mini dark">

                    <a
                        href="https://apple.com/iphone"
                        className="hero-image-wrapper"
                        aria-label="MackbookProHeader"
                    >
                        <img
                            className="hero-image"
                            src="img/MackbookProHeader.jpg"
                            alt="MackbookProHeader"
                        />
                    </a>

                    <h1 className="hero-title">MackBook Pro</h1>
                    <h2>Теперь с M5, M5 Pro и M5 Max.</h2>

                    <div className="hero-buttons">


                        <a
                            href="https://www.apple.com/shop/buy-iphone"
                            className="hero-button-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Купить
                        </a>
                    </div>


                </div>

                {/* ===== Airpodspro===== */}
                <div className="hero-content-mini dark">

                    <a
                        href="https://apple.com/iphone"
                        className="hero-image-wrapper"
                        aria-label="AirpodsproHeader"
                    >
                        <img
                            className="hero-image"
                            src="img/AirpodsproHeader.jpg"
                            alt="AirpodsproHeader"
                        />
                    </a>

                    <h1 className="hero-title">AirPods Pro 3</h1>
                    <h2>Лучшее в мире активное шумоподавление среди внутриканальных наушников.</h2>

                    <div className="hero-buttons">
                        <a
                            href="https://apple.com/iphone"
                            className="hero-button-primary"
                        >
                            Купить
                        </a>



                    </div>


                </div>




                {/* ===== Watchseries11===== */}
                <div className="hero-content-mini dark">

                    <a
                        href="https://apple.com/iphone"
                        className="hero-image-wrapper"
                        aria-label="Watchseries11"
                    >
                        <img
                            className="hero-image"
                            src="img/Watchseries11Header.jpg"
                            alt="Watchseries11"
                        />
                    </a>

                    <h1 className="hero-title">𝗪𝗔𝗧𝗖𝗛 SERIES 11</h1>
                    <h2>Лучший способ заботиться о своём здоровье.</h2>

                    <div className="hero-buttons">
                        <a
                            href="https://apple.com/iphone"
                            className="hero-button-primary"
                        >
                            Купить
                        </a>
                    </div>


                </div>



                {/* ===== ipadPro===== */}
                <div className="hero-content-mini">

                    <a
                        href="https://apple.com/iphone"
                        className="hero-image-wrapper"
                        aria-label="ipadPro"
                    >
                        <img
                            className="hero-image"
                            src="img/ipadProHeader.jpg"
                            alt="ipadPro"
                        />
                    </a>

                    <h1 className="hero-title">iPad Pro</h1>
                    <h2>Передовой искусственный интеллект и революционные возможности.</h2>

                    <div className="hero-buttons">
                        <a
                            href="https://apple.com/iphone"
                            className="hero-button-primary"
                        >
                            Купить
                        </a>
                    </div>


                </div>


                {/* ===== Apple Card===== */}


            </section>
            <div className="Endes">
                <h1>Безграничные развлечения.
                </h1>


            </div>
        </header>
    );
}

export default Header;