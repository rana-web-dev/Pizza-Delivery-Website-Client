import './App.css';
import 'react-photo-view/dist/react-photo-view.css';
import router from './router/Routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
