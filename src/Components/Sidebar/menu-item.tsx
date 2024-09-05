import * as React from "react";
import { motion } from "framer-motion";

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

export const MenuItem = ({ i }: any) => {
	const style = { borderBottom: `4px solid white` };
	return (
		<motion.li
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}>
			<div className="icon-placeholder" style={{ border: `4px solid white` }} />
			<div className="text-placeholder" style={style} />
		</motion.li>
	);
};
