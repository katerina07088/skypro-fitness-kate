import { createContext, useState } from "react";
import { CourseType } from "../types/CourseType.type";

type CoursesProviderProps = {
  children: React.ReactNode;
};

type CoursesContextData = {
  courses: Array<CourseType>;
  loading: boolean;
  error: string | null;
  setCourses: (courses: Array<CourseType>) => void;
  setLoading: (prevState: boolean) => void;
  setError: (prevState: string | null) => void;
};

export const CoursesContext = createContext<CoursesContextData | null>(null);

export default function CoursesProvider({ children }: CoursesProviderProps) {
  const [courses, setCourses] = useState<Array<CourseType>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <CoursesContext.Provider
      value={{ courses, setCourses, loading, setLoading, error, setError }}
    >
      {children}
    </CoursesContext.Provider>
  );
}