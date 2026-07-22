import "/src/App.css";
import {useState} from "react";


function Store({ add }) {


    const movies = [
        {
            id: 10,
            image: "/PhotoIpad/Ipad1.png",
            h1: "iPad Pro",
            h2: "Невероятно тонкий. Поразительно мощный.",
            p: "От 999 $ или 83,25 $/мес. на 12 месяцев."
        },
        {
            id: 11,
            image: "/PhotoIpad/Ipad2.png",
            h1: "iPad Air",
            h2: "Мощный. Яркий. Великолепный.",
            p: "От 599 $ или 49,91 $/мес. на 12 месяцев."
        },
        {
            id: 12,
            image: "/PhotoIpad/Ipad3.png",
            h1: "iPad",
            h2: "Любимый. Для творчества. Волшебный.",
            p: "От 349 $ или 29,08 $/мес. на 12 месяцев."
        },
        {
            id: 13,
            image: "/PhotoIpad/Ipad4.png",
            h1: "iPad mini",
            h2: "Максимум мощности. Минимум размера.",
            p: "От 499 $ или 41,58 $/мес. на 12 месяцев."
        }

    ];

    const [index, setIndex] = useState(0);


    function next() {
        setIndex(prev => {
            if (prev === movies.length - 3) {
                return 0;
            }
            return prev + 1;
        });
    }

    function prev() {
        setIndex(prev => {
            if (prev === 0) {
                return movies.length - 3;
            }
            return prev - 1;
        });
    }

    return (
        <div className="storeProducts">
            <div className="storeProducts-header">
                <h1>iPad</h1>
                <h2>Все модели. Выберите свой.</h2>
            </div>

            <div className="storeProducts-slider">
                <button
                    className="arrow storeProducts-leftArrow"
                    onClick={prev}
                >
                    ←
                </button>

                <div className="storeProducts-window">
                    <div
                        className="storeProducts-track"
                        style={{
                            transform: `translateX(-${index * 345}px)`
                        }}
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

                <button
                    className="arrow storeProducts-rightArrow"
                    onClick={next}
                >
                    →
                </button>
            </div>
        </div>

    );
}

export default Store;