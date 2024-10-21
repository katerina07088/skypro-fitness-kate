import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { AppRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";
import { loginUser } from "../../api/apiUser";

export const Login = () => {
    const { setUser } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        // Добавляем класс фона для body
        document.body.classList.add("bg-gray-300");
    
        // Убираем класс при размонтировании компонента
        return () => {
          document.body.classList.remove("bg-gray-300");
        };
      }, []);
    
    const [formValues, setFormValues] = useState({
        login: "",
        password: "",
    });

    const [loginError, setLoginError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);

    const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const onLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setLoginError(null);
        setPasswordError(null);

        let hasError = false;

        if (!formValues.login) {
            setLoginError("Введите логин");
            hasError = true;
        }

        if (!formValues.password) {
            setPasswordError("Введите пароль");
            hasError = true;
        }

        if (hasError) return;

        try {
            const response = await loginUser({
                login: formValues.login,
                password: formValues.password,
            });

            setUser(response);
            navigate(AppRoutes.MAIN);
        } catch (error: unknown) {
            console.error(error);
            setPasswordError("Пароль введен неверно, попробуйте еще раз. Восстановить пароль?")
        }
    }


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-[30px] w-[360px] h-[425px] p-[40px] flex flex-col items-center gap-[48px] max-h-[80vh]">
        <img  className="w-[220px] h-[35px] mx-auto" src="public/logoModal.png" alt="logo_modal" />
          <form onSubmit={onLogin} className="w-full flex flex-col items-center gap-[10px]">
          <div className="flex flex-col w-full mb-4 items-center gap-[10px]">
          <input
            type="text"
            placeholder="Логин"
            name="login"
            value={formValues.login}
            onChange={onInputChange}
            className={`w-[280px] h-[52px] bg-white border rounded-[8px] p-[16px_18px] ${loginError ? 'border-red-500' : 'border-[#D0CECE]'} text-[#D0CECE]`}
          />
          {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
          
          <input
            type="password"
            placeholder="Пароль"
            name="password"
            value={formValues.password}
            onChange={onInputChange}
            className={`w-[280px] h-[52px] bg-white border rounded-[8px] p-[16px_18px] ${passwordError ? 'border-red-500' : 'border-[#D0CECE]'} text-[#D0CECE]`}
          />
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
        </div>

        <div className="mt-[24px] flex flex-col w-full items-center gap-[10px]">
          <button className="bg-[#BCEC30] text-black w-full h-[52px] rounded-[46px] py-[16px] px-[26px] hover:bg-[#C6FF00] border-none active:bg-black active:text-white">
            Войти
          </button>
          <button
            className="border border-black text-black w-full h-[52px] rounded-[46px] py-[16px] px-[26px] bg-white hover:bg-[#F7F7F7] active:bg-[#E9ECED] active:text-black"
            onClick={() => navigate(AppRoutes.REGISTER)}
          >
            Зарегистрироваться
          </button>
        </div>
        </form>
      </div>
    </div>
  )
};