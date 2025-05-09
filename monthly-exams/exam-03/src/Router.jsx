import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Root from './routes/Root';
import About from './routes/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}></Route>
      <Route path="about" element={<About />} />
    </>
  )
);

export default router;
