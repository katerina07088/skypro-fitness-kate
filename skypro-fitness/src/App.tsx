import Routing from "./components/Routing/Routing";
import UserProvider from "./context/UserContext.tsx";

function App() {
  return (
  <UserProvider>
    <Routing />
  </UserProvider>
  );
}

export default App;
