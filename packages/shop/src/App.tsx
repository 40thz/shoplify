import { RouterProvider } from 'react-router-dom';
import { router } from './components/App/Router';

const App = () => {

  return <RouterProvider router={router} />;
};

export default App;
