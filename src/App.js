import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Route/Routes';
import { Loader } from './components';
import { useSelector } from 'react-redux';

function App() {
  const { loading } = useSelector((state) => state.loaders);
  return (
    <div>
      {loading && <Loader />}
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
