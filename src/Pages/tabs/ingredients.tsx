export interface Ingredient {
	icon: string;
	label: string;
}

export const allIngredients = [
	{
		icon: "🍅",
		label: "Tomato",
	},
	{
		icon: "🥬",
		label: "Lettuce",
	},
	{
		icon: "🧀",
		label: "Cheese",
	},
	{
		icon: "🥕",
		label: "Carrot",
	},
	{
		icon: "🍌",
		label: "Banana",
	},
	{
		icon: "🫐",
		label: "Blueberries",
	},
	{
		icon: "🥂",
		label: "Champers?",
	},
];

const [tomato, lettuce, cheese, carrot, banana, blueberries, champers] =
	allIngredients;
export const initialTabs = [
	tomato,
	lettuce,
	cheese,
	carrot,
	banana,
	blueberries,
	champers,
];

export function getNextIngredient(
	ingredients: Ingredient[]
): Ingredient | undefined {
	const existing = new Set(ingredients);
	return allIngredients.find((ingredient) => !existing.has(ingredient));
}
