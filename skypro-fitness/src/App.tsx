import Routing from "./components/Routing/Routing";
import CoursesProvider from "./context/CoursesContext";
import UserProvider from "./context/UserContext";


function App() {
  return (
    <>
      <UserProvider>
        <CoursesProvider>
          <Routing />
        </CoursesProvider>
      </UserProvider>
    </>
  );
}

export default App;
