function Header() {
    const isAuth = false;
  
    return (
      <div className="container mx-auto">
        <div className="h-50 flex flex-row items-center place-content-between mb-4">
          <img src="/img/logo.png" className="w-55" />
  
          {!isAuth && (
            <button className="bg-green w-26 h-13 text-black hover:bg-light-green">
              Войти
            </button>
          )}
  
          {isAuth && (
            <div className="flex flex-row items-center w-42 gap-3">
              <img src="/img/profile.png" className="w-12 h-12"></img>
              <p className="text-2xl font-normal text-black">Сергей</p>
              <img src="/img/rectangle.png" className="w-4 h-3 "></img>
            </div>
          )}
  
        </div>
        <p className="text-lg/5 font-normal text-gray">
          Онлайн-тренировки для занятий дома
        </p>
      </div>
    );
  }
  
  export default Header;
  