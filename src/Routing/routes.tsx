import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import GestureAnimation from "../Pages/gesture-animation/gesture-animation";
import Drag from "../Pages/drag/drag";
import Scroll from "../Pages/scroll/scroll";

const Layout = () => {
	return (
		<>
			<Sidebar />
			<div className="h-screen overflow-y-scroll">
				<Outlet />
			</div>
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
				element: <Drag />,
			},
			{
				path: "/scroll",
				element: <Scroll />,
			},
		],
	},
]);

export default function BaseRoutes() {
	return <RouterProvider router={routes} />;
}
