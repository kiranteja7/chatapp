import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login/Login.jsx';
import { ChatPage } from './pages/ChatPage/ChatPage.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login/>,
    },
    {
      path : '/chat',
      element : <ChatPage/>
    }
  ])

  return (
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
