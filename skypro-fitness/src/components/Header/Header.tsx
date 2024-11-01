import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import { useUserContext } from "../../hooks/useUserContext";
import { useState } from "react";
import { MyProfile } from "../MyProfile/MyProfile";

function Header() {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginButton = () => {
    navigate(AppRoutes.LOGIN);
  };

  const toggleProfileClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLogoClick = () => {
    navigate(AppRoutes.MAIN);
  };

  return (
    <div className="container">
      <div className="h-50 flex flex-row items-center place-content-between mb-3">
        <img
          src="/img/logo.png"
          className="h-[35px] w-[220px] cursor-pointer"
          onClick={handleLogoClick}
        ></img>

        {!user && (
          <button
            className="btn-primary md:w-26 h-9 md:h-13"
            onClick={handleLoginButton}
          >
            Войти
          </button>
        )}

        {user && (
          <div className="relative">
            <div className="flex flex-row items-center w-42 gap-3">
              <img src="/img/profile.png" className="w-12 h-12"></img>
              <p className="text-2xl font-normal text-black">{user.email}</p>
              <img
                src="/img/rectangle.png"
                className="w-4 h-3 cursor-pointer"
                onClick={toggleProfileClick}
              ></img>
            </div>
            {isOpen && <MyProfile setIsOpen={setIsOpen}/>}
          </div>
        )}
      </div>
      <p className="hidden md:block md:text-lg/5 md:font-normal  md:text-gray ">
        Онлайн-тренировки для занятий дома
      </p>
    </div>
  );
}

export default Header;
