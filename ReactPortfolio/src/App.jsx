import "./App.css";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Form from "./components/FormComponents/Form";

import { Outlet } from 'react-router-dom';

function App() {
  return (
  <> 

  <Form />;
  <Header />;
  <Outlet />;
  <Footer />;
  </>
  );
}

export default App;
