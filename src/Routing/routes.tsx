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
			{
				path: "/keyframes",
				element: <h1>KeyFrames</h1>,
			},
		],
	},
]);

export default function BaseRoutes() {
	return <RouterProvider router={routes} />;
}
