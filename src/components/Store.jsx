import "/src/App.css";
import { useState } from "react";
import {Link} from "react-router-dom";

function Store({ add}) {
    const movies = [
        { title: "Ноутбуки", image: "/PhotoStore/store1.png",Link: "/mac" },
        { title: "Планшеты", image: "/PhotoStore/store3.png",Link: "/iPad" },
        { title: "Телефоны", image: "/PhotoStore/store2.png",Link: "/iPhone" },
        { title: "Часы", image: "/PhotoStore/store4.png",Link: "/Watch" },
        { title: "Наушники", image: "/PhotoStore/store6.png",Link: "/AirPods" },
        { title: "Чехлы", image: "/PhotoStore/store10.png",Link: "/Case" },
    ];

    const movies2 = [
        {
            id: 30,
            image: "PhotoCard/store2.1.jpg",
            h1: "iPhone 17 Pro",
            h2: "Полный профессионализм.",
            p: "От 1099 $ или 45,79 $/мес. на 24 месяца."
        },
        {
            id: 31,
            image: "PhotoCard/store2.2.jpg",
            h1: "MacBook Neo",
            h2: "Магия Mac по удивительно доступной цене.",
            p: "От 699 $ или 58,25 $/мес. на 12 месяцев."
        },
        {
            id: 32,
            image: "PhotoCard/store2.3.jpg",
            h1: "iPhone 17e",
            h2: "Максимум возможностей по отличной цене.",
            p: "От 599 $ или 24,95 $/мес. на 24 месяца."
        },
        {
            id: 33,
            image: "PhotoCard/store2.4.jpg",
            h1: "AirPods Max 2",
            h2: "Новые интеллектуальные функции. Ещё более глубокое погружение в звук.",
            p: "549 $ или 91,50 $/мес. на 6 месяцев."
        },
        {
            id: 34,
            image: "PhotoCard/store2.5.jpg",
            h1: "MacBook Pro",
            h2: "Теперь с M5, M5 Pro и M5 Max.",
            p: "От 1999 $ или 166,58 $/мес. на 12 месяцев."
        },
        {
            id: 35,
            image: "PhotoCard/store2.6.jpg",
            h1: "MacBook Air",
            h2: "Теперь ещё мощнее благодаря M5.",
            p: "От 1299 $ или 108,25 $/мес. на 12 месяцев."
        },
        {
            id: 36,
            image: "PhotoCard/store2.7.jpg",
            h1: "iPad Air",
            h2: "Теперь ещё мощнее благодаря M4.",
            p: "От 749 $ или 62,41 $/мес. на 12 месяцев."
        },
        {
            id: 37,
            image: "PhotoCard/store2.8.jpg",
            h1: "Apple Watch Series 11",
            h2: "Лучший способ заботиться о своём здоровье.",
            p: "От 399 $ или 33,25 $/мес. на 12 месяцев."
        },
        {
            id: 38,
            image: "PhotoCard/store2.9.jpg",
            h1: "iPhone 17",
            h2: "Невероятно яркий.",
            p: "От 799 $ или 33,29 $/мес. на 24 месяца."
        },
        {
            id: 39,
            image: "PhotoCard/store2.10.jpg",
            h1: "iPhone Air",
            h2: "Самый тонкий iPhone в истории.",
            p: "От 999 $ или 41,62 $/мес. на 24 месяца."
        },
        {
            id: 40,
            image: "PhotoCard/store2.11.jpg",
            h1: "Studio Display",
            h2: "Изображение, которое впечатляет.",
            p: "От 1599 $ или 133,25 $/мес. на 12 месяцев."
        },
        {
            id: 41,
            image: "PhotoCard/store2.12.jpg",
            h1: "Studio Display XDR",
            h2: "Безупречная чёткость каждого пикселя.",
            p: "От 3299 $ или 274,91 $/мес. на 12 месяцев."
        },
        {
            id: 42,
            image: "PhotoCard/store2.13.jpg",
            h1: "Apple Watch SE 3",
            h2: "Ходите. Общайтесь. Следите за активностью. Любите.",
            p: "От 249 $ или 20,75 $/мес. на 12 месяцев."
        }
    ];

    // Первый слайдер


    // Второй слайдер
    const [index2, setIndex2] = useState(0);

    function next2() {
        setIndex2(prev => {
            if (prev === movies2.length - 1) {
                return 0;
            }
            return prev + 1;
        });
    }

    function prev2() {
        setIndex2(prev => {
            if (prev === 0) {
                return movies2.length - 1;
            }
            return prev - 1;
        });
    }

    return (
        <div className="Store">
            <div className="Store-Header">
                <h1>Магазин</h1>
            </div>

            {/* Первый слайдер */}
            <div className="slider-Store">

                <div className="window-Store">
                    <div className="track-Store">

                        {movies.map((movie) => (
                            //Тут Link нужен для перехода на другой сайт через параметр массива title
                            <Link key={movie.title} to={movie.Link}>
                                <div className="card-Store">


                                    <img src={movie.image} alt={movie.title} />
                                    <h3>{movie.title}</h3>

                                </div>
                            </Link>
                        ))}
                    </div>
                </div>


            </div>

            <div className="Store-H1">
                <h1>Новинки.</h1>
                <p>Посмотрите, что нового прямо сейчас.</p>
            </div>

            {/* Второй слайдер */}
            <div className="slider-Store">
                <button className="arrow left-Store" onClick={prev2}>
                    ←
                </button>

                <div className="window-Store">
                    <div
                        className="track-Store"
                        style={{
                            transform: `translateX(-${index2 * 345}px)`
                        }}
                    >
                        {movies2.map((movie) => {
                            //find Ищет 1 элемент который подходит под условие
                            //item Это 1 элемент из массива cart
                            //И условие что бы id из массива item =  id элемента из movie


                            return (
                                <div key={movie.id} className="card-Store">
                                    <div className="card-Store-body">
                                        <h1>{movie.h1}</h1>
                                        <h2>{movie.h2}</h2>
                                        <p>{movie.p}</p>
                                        <button onClick={() => add(movie)}>
                                            Добавить в корзину
                                        </button>
                                        <img src={movie.image} alt={movie.h1} />
#
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <button className="arrow right-Store" onClick={next2}>
                    →
                </button>
            </div>
        </div>
    );
}

export default Store;