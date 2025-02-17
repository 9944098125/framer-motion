import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";
import { routeItems } from "./route-items";

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

export const Navigation = ({ isOpen }: any) => (
	<motion.ul variants={variants} style={{ zIndex: isOpen ? "199" : "-1" }}>
		{routeItems.map((i) => (
			<MenuItem i={i} key={i} />
		))}
	</motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
