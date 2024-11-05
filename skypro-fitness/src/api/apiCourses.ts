import { child, get, ref, set } from "firebase/database";
import { db } from "../lib/firebaseConfig";
import { CourseType } from "../types/CourseType.type";

const baseHost =
  "https://fitness-cee19-default-rtdb.europe-west1.firebasedatabase.app";

export async function getCourses(): Promise<Array<CourseType>> {
  const response = await fetch(baseHost + "/courses.json", {
    method: "GET",
  });

  if (response.status === 500) {
    throw new Error("Ошибка при получении данных");
  }

  const snapshot = await get(child(ref(db), `courses`));
  return snapshot.val();
}


//получение курса по id
export async function getCourse(): Promise<CourseType> {
  const response = await fetch(baseHost + "/courses/_id.json", {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Ошибка при получении данных");
  }

  const snapshot = await get(child(ref(db), `courses/_id`));
  const data = snapshot.val();
  return data;
}

export const getCourse2 = async (itemId: string) => {
  // let result: CourseType | null = null;

  try {
    const snapshot = await get(child(ref(db), `courses/${itemId}`));

    if (snapshot.exists()) {
      return snapshot.val();
    }
  } catch (e) {
    console.error(e);
  }
};












export const fetchAddCourseToUser = async (
  userId: string,
  courseId: string
) => {
  const snapshot = await get(child(ref(db), `scheme/${courseId}`));
  if (snapshot.exists()) {
    set(ref(db, `users/${userId}/${courseId}`), snapshot.val());
  }
};







// import { getDatabase, ref, push, set } from "firebase/database";

// // Create a new post reference with an auto-generated id
// const db = getDatabase();
// const postListRef = ref(db, "posts");
// const newPostRef = push(postListRef);
// set(newPostRef, {
//   // ...
// });

// import { getDatabase, ref, onValue } from "firebase/database";

// const db = getDatabase();
// const starCountRef = ref(db, 'posts/' + postId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });

// получение задачи по id
// export const getCardById = async (token, taskData) => {
//   const response = await fetch(apiUrlOfOneTask, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(taskData),
//   });
//   if (!response.ok) {
//     throw new Error("Не удалось найти задачу");
//   }
//   return response.json();
// };

//добавление задачи
// export const addTask = async (tasksData, token) => {
//   const response = await fetch(apiUrl, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(tasksData),
//   });

//   if (!response.ok) {
//     throw new Error("Не удалось добавить задачу, попробуйте позже");
//   }
//   return response.json();
// };
