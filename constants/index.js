const navLinks = [
	{
		id: "cocktails",
		title: "Menuja",
	},
	{
		id: "about",
		title: "Rreth nesh",
	},
	{
		id: "work",
		title: "Arti ynë",
	},
	{
		id: "contact",
		title: "Kontakt",
	},
];

const cocktailLists = [
	{ name: "Espresso", country: "☕", detail: "Kafe", price: "1.00€" },
	{ name: "Makiato", country: "☕", detail: "Kafe", price: "1.00€" },
	{ name: "Cappuccino", country: "☕", detail: "Kafe", price: "1.50€" },
	{ name: "Coca-Cola", country: "🥤", detail: "Pije Freskuese", price: "2.00€" },
];

const mockTailLists = [
	{ name: "Mojito", country: "🍹", detail: "Koktel", price: "5.00€" },
	{ name: "Blue Lagoon", country: "🍹", detail: "Koktel", price: "5.00€" },
	{ name: "Gin Tonic", country: "🍸", detail: "Mixer", price: "4.00€" },
	{ name: "Birrë Peja", country: "🍺", detail: "Birrë", price: "2.00€" },
];

const profileLists = [
	{
		imgPath: "/images/profile1.png",
	},
	{
		imgPath: "/images/profile2.png",
	},
	{
		imgPath: "/images/profile3.png",
	},
	{
		imgPath: "/images/profile4.png",
	},
];

const featureLists = [
	"Përzierje perfekte",
	"Dekorim me stil",
	"Gjithmonë e ftohtë",
	"E përgatitur me pasion",
];

const goodLists = [
	"Përbërës të freskët",
	"Teknika unike",
	"Mjeshtëri në çdo gotë",
	"Shije që nuk harrohet",
];

const storeInfo = {
	heading: "Ku të na gjeni",
	address: "Rr. Nëna Terezë, Istog, Kosovë",
	contact: {
		phone: "+383 43 777 878",
		email: "hello@fronbar.com",
	},
};

const openingHours = [
	{ day: "Hënë–Shtunë", time: "07:00 - 00:00" },
	{ day: "Diel", time: "09:00 - 22:00" },
];

const socials = [
	{
		name: "Instagram",
		icon: "/images/insta.png",
		url: "https://www.instagram.com/fron.bar/?hl=en",
	},
	{
		name: "Facebook",
		icon: "/images/fb.png",
		url: "https://www.facebook.com/FronBar/",
	},
];

const sliderLists = [
	{
		id: 1,
		name: "Kafe",
		image: "/images/drink1.png",
		title: "Shija e Vërtetë e Kafes",
		description:
			"Nga Espresso deri te Makiato e madhe, shijoni aromën dhe freskinë e kafes sonë të përgatitur me kujdes.",
	},
	{
		id: 2,
		name: "Pije Freskuese",
		image: "/images/drink2.png",
		title: "Freski në Çdo Gurmë",
		description:
			"Pije si Coca-Cola, Fanta, dhe Ice Tea për të shuar etjen tuaj në çdo kohë.",
	},
	{
		id: 3,
		name: "Koktele",
		image: "/images/drink3.png",
		title: "Mjeshtëri në Përzierje",
		description:
			"Mojito, Blue Lagoon dhe Gin Tonic - koktelet tona janë arti i vërtetë në gotë.",
	},
	{
		id: 4,
		name: "Birra & Alkool",
		image: "/images/drink4.png",
		title: "Për Mbrëmje te Këndshme",
		description:
			"Një përzgjedhje e birrave vendore dhe ndërkombëtare, si dhe pijeve të forta alkoolike.",
	},
];

export {
	navLinks,
	cocktailLists,
	mockTailLists,
	profileLists,
	featureLists,
	goodLists,
	openingHours,
	storeInfo,
	socials,
	sliderLists,
};