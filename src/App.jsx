import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Photo from "./components/Photo";
import PhotoMini from "./components/PhotoMini";
import Menu from "./components/Menu";
import Store from "./components/Store";
import StoreMac from "/src/Store/StoreMac.jsx";
import IPad from "/src/Store/StoreIpad.jsx";
import Case from "/src/Store/StoreCase.jsx";
import IPhone from "/src/Store/StoreIPhone.jsx";
import Support from "/src/Store/Support.jsx";
import Watch from "/src/Store/StoreWatch.jsx";
import AirPods from "/src/Store/StoreAirPods.jsx";
import Cart from "./components/Cart";
import Form from "/src/Form/Form.jsx";

function Home() {
    return (
        <>
            <Header />
            <Photo />
            <PhotoMini />
        </>
    );
}

function App() {

    const [cart, setcart] = useState(() => {
        // Берёт корзину из localStorage если она там уже есть
        const savedCart = localStorage.getItem("cart");

        // Если корзина есть то превращает строку обратно в массив
        // Если нет то создаёт пустой массив
        return savedCart ? JSON.parse(savedCart) : [];
    });

// Каждый раз когда корзина меняется сохраняет её в localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

// Функция добавления товара в корзину
    function Add(product) {

        // prev это старая корзина до изменения
        setcart(prev => {

            // Проверяет есть ли уже такой товар в корзине
            const exists = prev.find(item => item.id === product.id);

            // Если товар уже есть
            if (exists) {

                // Проходит по всей корзине
                return prev.map(item =>

                    // Если id совпал то увеличивает количество на 1
                    item.id === product.id
                        ? { ...item, count: item.count + 1 }

                        // Остальные товары не изменяет
                        : item
                );
            }

            // Если такого товара ещё нет то добавляет его в конец корзины
            // count сразу ставится 1
            return [...prev, { ...product, count: 1 }];
        });
    }

// Удаляет последний товар из корзины
    function Del() {

        // slice(0,-1) копирует массив кроме последнего элемента
        setcart(prev => prev.slice(0, -1));
    }

    return (
        <>
            <Menu />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store cart={cart} add={Add} />} />
                <Route path="/cart" element={<Cart cart={cart} del={Del} />} />

                <Route path="/mac" element={<StoreMac cart={cart} add={Add} />} />
                <Route path="/iPad" element={<IPad cart={cart} add={Add}/>} />
                <Route path="/Case" element={<Case cart={cart} add={Add}/>} />
                <Route path="/AirPods" element={<AirPods cart={cart} add={Add}/>} />
                <Route path="/iPhone" element={<IPhone cart={cart} add={Add}/>} />
                <Route path="/Watch" element={<Watch cart={cart} add={Add}/>} />
                <Route path="/Support" element={<Support cart={cart} add={Add}/>} />
                <Route path="/Form" element={<Form cart={cart} add={Add}/>} />
            </Routes>
        </>
    );
}

export default App;