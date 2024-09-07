import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
	return (
		<Link to={i.link} style={{ textDecoration: "none", color: "inherit" }}>
			<motion.li
				variants={variants}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}>
				<div
					className="rounded-full p-2 flex items-center justify-center mr-5"
					style={{ border: `4px solid white` }}>
					<i.icon color="white" fontSize={20} />
				</div>
				<div className="" style={{ borderBottom: "4px solid white" }}>
					<p className="text-lg font-bold text-white">{i.label}</p>
				</div>
			</motion.li>
		</Link>
	);
};
