import { Toaster } from "react-hot-toast";
import useRouteElements from "./routes/useRouteElemenst";
function App() {
	const { routes } = useRouteElements();
	return (
		<>
			<Toaster />
			{routes}
		</>
	);
}

export default App;
