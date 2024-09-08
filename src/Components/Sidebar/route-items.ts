import { FaDragon, FaScroll } from "react-icons/fa";
import {
	MdDraw,
	MdGesture,
	MdSwitchAccessShortcut,
	MdTab,
} from "react-icons/md";

export const routeItems = [
	{
		link: "/",
		label: "Gesture Animation",
		icon: MdGesture,
	},
	{
		link: "/keyframes",
		label: "In-Bound Drag",
		icon: FaDragon,
	},
	{
		link: "/scroll",
		label: "Scroll Animations",
		icon: FaScroll,
	},
	{
		link: "/switch",
		label: "Toggle Switch",
		icon: MdSwitchAccessShortcut,
	},
	{
		link: "/tabs",
		label: "Tabs",
		icon: MdTab,
	},
	{
		link: "/draw",
		label: "Draw Lines",
		icon: MdDraw,
	},
];
