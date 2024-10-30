type CourseSimple = {
  id: number;
  imgUrl: string;
  courseName: string;
  duration: string;
  time: string;
  difficulty: string;
};

function Card({ course }: {course: CourseSimple}) {
  
  return (
    <div className="flex flex-col gap-7 bg-white rounded-3xl relative cursor-pointer shadow-md">
      {/* <img className="w-full" src={`/img.workout_${course.order}`} /> */}
      <img className="w-full" src={course.imgUrl} />
      <img className="absolute top-4 right-4" src="/img/circle.png" />
      <div className="mx-7">
        <h3 className="text-3xl font-semibold pb-6 text-black">
          {course.courseName}
        </h3>
        <div className="flex flex-row flex-wrap gap-1 mb-2">
          <div className="flex flex-row flex-wrap gap-2 w-28 h-9 bg-light-gray rounded-3xl items-center pl-2.5">
            <img className="h-4 w-4" src="./img/calendar.png"></img>
            <p className="text-black">{course.duration}</p>
          </div>
          <div className="flex flex-row gap-2 w-44 h-9 bg-light-gray rounded-3xl items-center pl-2.5">
            <img className="h-4 w-4" src="./img/time.png"></img>
            <p className="text-black">{course.time}</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 w-32 h-9 bg-light-gray rounded-3xl items-center pl-2.5 mb-2">
          <img
            className="h-4 w-4"
            src={`/img/difficulty_${course.difficulty}`}
          ></img>
          <p className="text-black">Сложность</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
