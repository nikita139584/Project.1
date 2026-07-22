import "/src/App.css";
import { useState } from "react";

function Store({ add }) {


    const movies = [
        {
            id: 19,
            image: "/PhotoMac/Mac1.jpg",
            h1: "MacBook Air",
            h2: "Небесно-голубой.",
            p: "От 999 $."
        },
        {
            id: 20,
            image: "/PhotoMac/Mac2.jpg",
            h1: "MacBook Air",
            h2: "Лёгкий. Быстрый. Готов к работе.",
            p: "От 999 $."
        },
        {
            id: 21,
            image: "/PhotoMac/Mac3.jpg",
            h1: "MacBook Pro",
            h2: "Мощность для профессионалов.",
            p: "От 1599 $."
        },
        {
            id: 22,
            image: "/PhotoMac/Mac4.jpg",
            h1: "iMac",
            h2: "Синий.",
            p: "От 1299 $."
        },
        {
            id: 23,
            image: "/PhotoMac/Mac5.jpg",
            h1: "Mac mini",
            h2: "Компактный размер. Огромная мощность.",
            p: "От 599 $."
        },
        {
            id: 24,
            image: "/PhotoMac/Mac6.jpg",
            h1: "Mac Studio",
            h2: "Создан для профессионального творчества.",
            p: "От 1999 $."
        },
        {
            id: 25,
            image: "/PhotoMac/Mac7.jpg",
            h1: "Studio Display",
            h2: "Потрясающее изображение.",
            p: "От 1599 $."
        },
        {
            id: 26,
            image: "/PhotoMac/Mac8.jpg",
            h1: "Studio Display с нанотекстурным стеклом",
            h2: "Чёткость при любом освещении.",
            p: "От 1899 $."
        }
    ];


    // Второй слайдер
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
                <h1>Mac</h1>
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