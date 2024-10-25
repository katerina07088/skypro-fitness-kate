import "../App.css";

export default function SelectWorkoutPage() {
    return (
        <div className=" w-[460px] h-[609px] top-[1131px] left-[7211px] p-[40px] gap-[48px] rounded-[30px] bg-[#f8fafc]">
            <h2 className="text-4xl font-normal leading-[2.20rem] mb-10">Выберите тренировку</h2>
            <div className="workoutbox">
                   <ul className="w-96 h-96 gap-[2.13rem] overflow-y-scroll  mb-3 ">
                   <li className="w-96 h-16 gap-[0.63rem] flex items-center mb-1 relative mt-1  hover:bg-[#ecfccb] active:bg-[#d9f99d] cursor-pointer">
                        <div>
                        <p className="text-2xl font-normal leading-[1.65rem]  w-80 h-7 mb-2">Утренняя практика</p>
                        <p className="text-base font-normal leading-[1.10rem]  h-5 ">Йога на каждый день / 1 день</p>
                        </div>
                    </li>
                      <div className="border w-80"></div>
  
                      <li className="w-96 h-16 gap-[0.63rem] flex items-center mb-1 relative mt-1  hover:bg-[#ecfccb] active:bg-[#d9f99d] cursor-pointer">
                        <div>
                        <p className="text-2xl font-normal leading-[1.65rem]  w-80 h-7 mb-2">Утренняя практика</p>
                        <p className="text-base font-normal leading-[1.10rem]  h-5">Йога на каждый день / 1 день</p>
                        </div>
                    </li>
                    <div className="border w-80"></div>
  
                      <li className="w-96 h-16 gap-[0.63rem] flex items-center mb-1 relative mt-1  hover:bg-[#ecfccb] active:bg-[#d9f99d] cursor-pointer">
                        <div>
                        <p className="text-2xl font-normal leading-[1.65rem]  w-80 h-7 mb-2">Утренняя практика</p>
                        <p className="text-base font-normal leading-[1.10rem]  h-5">Йога на каждый день / 1 день</p>
                        </div>
                    </li>
                    <div className="border w-80"></div>
  
                      <li className="w-96 h-16 gap-[0.63rem] flex items-center mb-1 relative mt-1  hover:bg-[#ecfccb] active:bg-[#d9f99d] cursor-pointer">
                        <div>
                        <p className="text-2xl font-normal leading-[1.65rem]  w-80 h-7 mb-2">Утренняя практика</p>
                        <p className="text-base font-normal leading-[1.10rem]  h-5">Йога на каждый день / 1 день</p>
                        </div>
                    </li>
                    <div className="border w-80"></div>
  
                      <li className="w-96 h-16 gap-[0.63rem] flex items-center mb-1 relative mt-1  hover:bg-[#ecfccb] active:bg-[#d9f99d] cursor-pointer">
                        <div>
                        <p className="text-2xl font-normal leading-[1.65rem]  w-80 h-7 mb-2">Утренняя практика</p>
                        <p className="text-base font-normal leading-[1.10rem] h-5">Йога на каждый день / 1 день</p>
                        </div>
                    </li>
                    <div className="border w-80"></div>
  
                      <li className="w-96 h-16 gap-[0.63rem] flex items-center mb-1 relative mt-1  hover:bg-[#ecfccb] active:bg-[#d9f99d] cursor-pointer">
                        <div>
                        <p className="text-2xl font-normal leading-[1.65rem]  w-80 h-7 mb-2">Утренняя практика</p>
                        <p className="text-base font-normal leading-[1.10rem]  h-5">Йога на каждый день / 1 день</p>
                        </div>
                    </li>
                    <div className="border w-80"></div>
                    
                  </ul>
                 
            </div>
        </div>
    )
  }
  
// Страница на стилях CSS:

 /* export default function SelectWorkoutPage() {
    return (
        <div className="background">
            <h2 className="choicetraining">Выберите тренировку</h2>
            <div className="workoutbox">
                   <ul className="trainingbox">
  
                   <li className="training">
                      <input className="custom-checkbox" type="checkbox" value="t1" id="t1"/>
                      <label  htmlFor="t1">
                        <div>
                        <p className="trainingname">Утренняя практика</p>
                        <p className="tainingselect">Йога на каждый день / 1 день</p>
                        </div>
                      </label>
                    </li>
                      <div className="line"></div>
  
                      <li className="training">
                      <input className="custom-checkbox" type="checkbox" value="t2" id="t2"/>
                      <label  htmlFor="t2">
                        <div>
                        <p className="trainingname">Утренняя практика</p>
                        <p className="tainingselect">Йога на каждый день / 1 день</p>
                        </div>
                      </label>
                    </li>
                      <div className="line"></div>
  
                      <li className="training">
                      <input className="custom-checkbox" type="checkbox" value="t3" id="t3"/>
                      <label  htmlFor="t3">
                        <div>
                        <p className="trainingname">Утренняя практика</p>
                        <p className="tainingselect">Йога на каждый день / 1 день</p>
                        </div>
                      </label>
                    </li>
                      <div className="line"></div>
  
                      <li className="training">
                      <input className="custom-checkbox" type="checkbox" value="t4" id="t4"/>
                      <label  htmlFor="t4">
                        <div>
                        <p className="trainingname">Утренняя практика</p>
                        <p className="tainingselect">Йога на каждый день / 1 день</p>
                        </div>
                      </label>
                    </li>
                      <div className="line"></div>
  
                      <li className="training">
                      <input className="custom-checkbox" type="checkbox" value="t5" id="t5"/>
                      <label  htmlFor="t5">
                        <div>
                        <p className="trainingname">Утренняя практика</p>
                        <p className="tainingselect">Йога на каждый день / 1 день</p>
                        </div>
                      </label>
                    </li>
                      <div className="line"></div>
  
                      <li className="training">
                      <input className="custom-checkbox" type="checkbox" value="t6" id="t6"/>
                      <label  htmlFor="t6">
                        <div>
                        <p className="trainingname">Утренняя практика</p>
                        <p className="tainingselect">Йога на каждый день / 1 день</p>
                        </div>
                      </label>
                    </li>
                      <div className="line"></div>
                    
                  </ul>
                  <button className="buutontraining">Начать</button>
            </div>
        </div>
    )
  }*/

 // Шаблон тренировки  на tailwindcss:
/*
    <li className="w-96 h-16 gap-[0.63rem] flex items-center mb-1 relative mt-1">
    <input className="custom-checkbox" type="checkbox" value="t2" id="t2"/>
    <label  htmlFor="t2">
      <div>
      <p className="text-2xl font-normal leading-[1.65rem] text-left w-80 h-7 mb-2">Утренняя практика</p>
      <p className="text-base font-normal leading-[1.10rem] text-left h-5">Йога на каждый день / 1 день</p>
      </div>
    </label>
  </li>
*/

// CSS стили:

/*.background{
  width: 460px;
  height: 609px;
  top: 1131px;
  left: 7211px;
  padding: 40px;
  gap: 48px;
  border-radius: 30px;
  background-color: rgb(248 248 248);
  }
  
  .choicetraining{
  font-family:Inter, sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 35.2px;
  text-align: left;
  margin-bottom: 40px;
  }
  
  .trainingbox{
    width: 380px;
    height: 400px;
    gap: 34px;
    overflow-y: scroll;
   margin-bottom: 10px;
   scrollbar-width: thin;
  }
  
  .training{
    width: 354px;
    height: 64px;
    gap: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    position: relative;
    margin-top: 5px;
  }
  
  .trainingname{
    font-family:  Inter, sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 26.4px;
    text-align: left;
    width: 320px;
    height: 26px; 
    margin-bottom: 8px;
  }
  
  .tainingselect{
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 17.6px;
  text-align: left;
  height: 18px;
  }
  
  .buutontraining{
    width:380px;
  height: 52px;
  padding: 16px 26px;
  gap: 10px;
  border-radius: 46px;
  background: #BCEC30;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 19.8px;
  text-align: left;
  display: flex;
  justify-content: center;
  }
  
  .traininginfo{
    width: 320px;
  height: 54px;
  gap: 10px;
  }
  
  .trainingcheck{
  padding: 2px;
  width: 20px;
  height: 20px;
  top: 2px;
  left: 2px;
  background: #BCEC30;
  }
  
  .td {
  width: 23px;
  top: 2px;
  left: 2px;
  border: 2px;
  border-color: black;
  border-radius: 46px;
  background: #BCEC30;
   }
   
   .line{
    width: 320px;
    border: 1px solid #38383629;
   }
  
   .custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  
  .custom-checkbox+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  
  
  .custom-checkbox+label::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  
  .custom-checkbox:checked+label::before {
    border-color:  #80a21a;
    background-color: #BCEC30;
    width: 22px;
    height: 22px;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }*/