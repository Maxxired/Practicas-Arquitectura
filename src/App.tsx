import './index.css';
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';

import Sidebar from './components/sidebar';
import Counter from './Pages/useReducer';
import Form from './Pages/Form';
import Welcome from './Pages/welcome';
import Calculo from './Pages/useMemo';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Welcome /> },
    { path: "/counter", element: <Counter /> },
    { path: "/form", element: <Form /> },
    { path: "/Calculo", element: <Calculo /> }
  ]);

  return routes;
};

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="overflow-x-scroll flex-1">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
