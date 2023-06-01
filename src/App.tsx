import Container from './Container';
import About from './About';
import Recorded from './Recorded';
import Entries from './Entries';
import View from './View';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router  = createBrowserRouter(
  [
    {
      path: "/",
      element: <Container/>,
    },
    {
      path: "about",
      element: <About/>,
    },
    {
      path: "recorded",
      element: <Recorded/>,
    },
    {
      path: "entries",
      element: <Entries/>,
    },
    {
      path: "view",
      element: <View/>,
    },
  ]
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
