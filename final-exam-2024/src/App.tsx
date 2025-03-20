import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { JSX } from 'react';

export default function App(): JSX.Element {
  return <RouterProvider router={router} />;
}
