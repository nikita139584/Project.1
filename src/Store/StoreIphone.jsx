import "/src/App.css";


function Store({ add }) {


    const movies = [
        {
            id: 14,
            image: "/PhotoIphone/Iphone1.jpg",
            h1: "iPhone 16 Pro",
            h2: "Смелый и энергичный.",
            p: "От 999 $."
        },
        {
            id: 15,
            image: "/PhotoIphone/Iphone2.jpg",
            h1: "iPhone 16",
            h2: "Свежий и стильный.",
            p: "От 799 $."
        },
        {
            id: 16,
            image: "/PhotoIphone/Iphone3.jpg",
            h1: "iPhone 16",
            h2: "Нежный и элегантный.",
            p: "От 799 $."
        },
        {
            id: 17,
            image: "/PhotoIphone/Iphone4.jpg",
            h1: "iPhone 16",
            h2: "Тёплый и привлекательный.",
            p: "От 799 $."
        },
        {
            id: 18,
            image: "/PhotoIphone/Iphone5.jpg",
            h1: "iPhone 16",
            h2: "Яркий. Смелый. Великолепный.",
            p: "От 799 $."
        }


    ];


    // Второй слайдер


    return (
        <div className="storeProducts">
            <div className="storeProducts-header">
                <h1>iPhone</h1>
                <h2>Все модели. Выберите свой.</h2>
            </div>

            <div className="storeProducts-slider">

                <div className="storeProducts-window">
                    <div
                        className="storeProducts-track"
                    >
                        {movies.map((movie) => (
                            <div className="storeProducts-card">
                                <h1>{movie.h1}</h1>
                                <h2>{movie.h2}</h2>
                                <p>{movie.p}</p>
                                <img src={movie.image} alt={movie.title} />
                                <button onClick={() => add(movie)}>
                                    Добавить в корзину
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Store;