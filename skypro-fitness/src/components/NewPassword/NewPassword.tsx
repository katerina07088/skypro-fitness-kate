const NewPassword = () => {
    return (
      <div className="w-full h-full overflow-x-hidden bg-[#eaeef6]">
        <div className="block w-full min-h-screen mx-auto my-0">
          <div className="h-screen flex items-center">
            <div className="block bg-white w-[360px] h-[363px] shadow-[0px_4px_67px_-12px_rgba(0,0,0,0.13)] mx-auto my-0 px-[60px] py-[50px] rounded-[30px] border-[0.7px] border-solid border-[#d4dbe5]">
              <div className="">
                <img src="/logoModal.png" alt="logo_modal" />
              </div>
  
              <div
                className="w-full flex flex-col items-center justify-center pt-[42px]"
               >
                <div className="gap-2.5">
                  <input
                    className="h-[52px] w-[280px] gap-2.5 px-[18px] py-4 rounded-lg border-[0.7px] border-solid border-[rgba(148,166,190,0.4)] first:mb-2.5 placeholder:font-normal placeholder:text-lg 
                   placeholder:text-[#94a6be] focus:outline-none bg-white"
                    type="password"
                    name="password"
                    placeholder="Новый пароль"
                    value=""
                  ></input>
                  <input
                    className="h-[52px] w-[280px] gap-2.5 px-[18px] py-4 rounded-lg border-[0.7px] border-solid border-[rgba(148,166,190,0.4)] first:mb-2.5 placeholder:font-normal placeholder:text-lg 
                   placeholder:text-[#94a6be] focus:outline-none bg-white"
                    type="password"
                    name="password"
                    placeholder="Повторите пароль"
                    value=""
                  ></input>
                </div>
  
                <button
                  className="btn-primary w-[280px] h-[52px] flex items-center justify-center leading-[19.8px] tracking-[-0.14px] mt-8 mb-2.5"
                  id="btnEnter"
                  type="submit"
                >
                  Подтвердить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NewPassword;