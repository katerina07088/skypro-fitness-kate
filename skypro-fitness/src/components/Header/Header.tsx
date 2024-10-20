function Header() {
  const isAuth = false;

  return (
    <div className="container">
      <div className="h-50 flex flex-row items-center place-content-between mb-3">
        <img src="/img/logo.png" className="h-[35px] w-[220px]" />

        {!isAuth && (
          <button className="btn-primary md:w-26 h-9 md:h-13">Войти</button>
        )}

        {isAuth && (
          <div className="flex flex-row items-center w-42 gap-3">
            <img src="/img/profile.png" className="w-12 h-12"></img>
            <p className="text-2xl font-normal text-black">Сергей</p>
            <img src="/img/rectangle.png" className="w-4 h-3 "></img>
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
