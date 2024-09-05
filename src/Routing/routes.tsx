import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import GestureAnimation from "../Pages/gesture-animation/gesture-animation";

const Layout = () => {
	return (
		<>
			<Sidebar />
			<Outlet />
		</>
	);
};

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <GestureAnimation />,
			},
		],
	},
]);

export default function BaseRoutes() {
	return <RouterProvider router={routes} />;
}
