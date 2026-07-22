// Form/Form.jsx
import { useNavigate } from "react-router-dom"; // Добовляем хук useNavigate для перехода между маршрутами
import '/src/App.css';
import { useForm } from "react-hook-form";
function onSubmit(data) {
    console.log(data);
}
function Form() {
    const navigate = useNavigate();{/* Здесь переменая navigate хранит функцию useNavigate   */}
    const { register, handleSubmit } = useForm();
    function closeForm() { {/*Создай функцию closeForm которая при вызове перейдёт на главную страницу  */}
        navigate("/");
    }

    return (
        <div className="modal-overlay" onClick={closeForm}>
            {/*Тут stopPropagation не даёт закрыть форму если нажать по ней самой  */}
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                  {/*Тут закрываеться форма через вызов closeForm и переходв на главную страницу  */}
                <button className="modal-close" onClick={closeForm}>
                    ×
                </button>

                <h2>
                    Введите свой адрес электронной почты, чтобы зарегистрироваться в качестве
                    участника программы apple или войти в свой личный кабинет.
                </h2>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Электронная почта *</p>
                      <input {...register("email")} placeholder="Email" />
                    <button type="submit">Войти</button>
                </form>

                <p>Все данные хранятся в безопасности.</p>
            </div>
        </div>
    );
}

export default Form;