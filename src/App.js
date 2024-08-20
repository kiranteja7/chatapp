import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login/Login.jsx';
import { ChatPage } from './pages/ChatPage/ChatPage.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { useEffect } from 'react';
import { setupSocketListeners } from './redux/socketManager.js';

function App() {

  // useEffect(() => {
  //   console.log("ON MOUNT APP CALLED!");
  //   setupSocketListeners();
  // }, []);

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
