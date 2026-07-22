import "/src/App.css";
import { useState } from "react";

function Store({ add }) {


    const movies = [
        {
            id: 3,
            image: "/PhotoCase/Сase1.png",
            h1: "Лесной зелёный",
            h2: "Идеально для любителей природы.",
            p: "От 59 $."
        },
        {
            id: 4,
            image: "/PhotoCase/Case2.jpg",
            h1: "Закатный оранжевый",
            h2: "Создан, чтобы выделяться.",
            p: "От 59 $."
        },
        {
            id: 5,
            image: "/PhotoCase/Case3.jpg",
            h1: "Глубокий фиолетовый",
            h2: "Элегантность вне времени.",
            p: "От 59 $."
        },
        {
            id: 6,
            image: "/PhotoCase/Case4.jpg",
            h1: "Лимонно-жёлтый",
            h2: "Делает каждый день ярче.",
            p: "От 49 $."
        },
        {
            id: 7,
            image: "/PhotoCase/Case5.jpg",
            h1: "Полночный чёрный",
            h2: "Классика для любого стиля.",
            p: "От 49 $."
        },
        {
            id: 8,
            image: "/PhotoCase/Case6.jpg",
            h1: "Кораллово-розовый",
            h2: "Яркий, смелый и красочный.",
            p: "От 49 $."
        },
        {
            id: 9,
            image: "/PhotoCase/Case7.jpg",
            h1: "Океанский синий",
            h2: "Свежий цвет. Комфорт каждый день.",
            p: "От 59 $."
        }
    ];


    // Второй слайдер
    const [index, setIndex] = useState(0);


    function next() {
        setIndex(prev => {
            if (prev === movies.length - 2) {
                return 0;
            }
            return prev + 1;
        });
    }

    function prev() {
        setIndex(prev => {
            if (prev === 0) {
                return movies.length - 2;
            }
            return prev - 1;
        });
    }

    return (
        <div className="storeProducts">
            <div className="storeProducts-header">
                <h1>Чехлы</h1>
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