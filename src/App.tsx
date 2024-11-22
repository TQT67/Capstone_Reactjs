import useRouteElements from './routes/useRouteElemenst';

function App() {
  const { routes } = useRouteElements();
  return <>{routes}</>;
}

export default App;
