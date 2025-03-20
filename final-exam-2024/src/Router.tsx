import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { FinalExam } from './routes/todo-app/index.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/todo-app" element={<FinalExam />}></Route>
    </>
  )
);

export default router;
