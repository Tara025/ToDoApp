import CenteredButton from "./CenteredButton";
import Header from "./Header/Header";
import Info from "./Info";
import TodosLogic from "./TodosLogic";
import About from "./About/About";
import Contact from "./Contact/Contact";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import TodoDetail from "./TodoDetail";
import ThemeChanger from "./ThemeChanger";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";


const TodoApp = () => {
  const {theme,setTheme} = useContext(ThemeContext);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="wrapper">
             {/* style={{theme} = "standard"? {backgroundColor: "pink"}: {backgroundColor:"wrapper"}} */}
            <div className="todos">
              <ThemeChanger />

              <Header />
              <TodosLogic />
            </div>
          </div>
        }
      />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/info" element={<Info/>}/> */}
      {/* <Route path="/button" element={<CenteredButton/>}/> */}
      <Route path="*" element={<PageNotFound />} />
      <Route path="/todo/:id" element={<TodoDetail />} />
      {/* dynamische Route mit dynamischer id 
    wir können jede andere Bezeichnung (anstatt id) verwenden,
    z.B path="/todo/:number", path="/todo/:name".
    
    => in der URL kann alles mögliche nach "/todo/"" eingegeben werden
    z.B. "/todo/2", "/todo/meinText", usw.
    => all das rendert unser element
    */}

      {/* <Info />
      <CenteredButton>REFRESH</CenteredButton> */}
    </Routes>
  );
};

export default TodoApp;
