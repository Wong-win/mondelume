export const categories = [
	{
		slug: 'fashion',
		label: 'Mode',
		number: '01',
		tagline: 'L’allure, au-delà des tendances.',
		description: 'Silhouettes, matières et créateurs qui donnent forme à notre époque.',
	},
	{
		slug: 'beauty',
		label: 'Beauté',
		number: '02',
		tagline: 'Les gestes qui font du bien.',
		description: 'Soins, parfums et rituels choisis avec curiosité et exigence.',
	},
	{
		slug: 'travel',
		label: 'Voyage',
		number: '03',
		tagline: 'Partir pour mieux regarder.',
		description: 'Adresses singulières, horizons proches et manières de voyager autrement.',
	},
	{
		slug: 'home-garden',
		label: 'Maison & Jardin',
		number: '04',
		tagline: 'Habiter avec intention.',
		description: 'Des intérieurs vivants, des objets durables et un peu de nature partout.',
	},
	{
		slug: 'technology',
		label: 'Technologie',
		number: '05',
		tagline: 'Le progrès à hauteur de vie.',
		description: 'Les idées et les objets qui rendent le quotidien plus fluide, plus humain.',
	},
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];

export const categoryMap = Object.fromEntries(
	categories.map((category) => [category.slug, category]),
) as Record<CategorySlug, (typeof categories)[number]>;
