import "/src/App.css";

function Store({ add }) {


    const movies = [
        {
            id: 1,
            image: "/PhotoAirPods/airpods1.png",
            h1: "AirPods 4 Pro",
            h2: "Премиальный звук на весь день.",
            p: "От 549 $."
        },
        {
            id: 2,
            image: "PhotoAirPods/airpods2.jpg",
            h1: "AirPods Max",
            h2: "Полное погружение в звук.",
            p: "От 129 $."
        }

    ];


    // Второй слайдер


    return (
        <div className="storeProducts">
            <div className="storeProducts-header">
                <h1>Наушники</h1>
                <h2>Все модели. Выберите свои.</h2>
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