export type SiteConfig = typeof siteConfig

export const siteConfig = {
	name: 'Puffer staking',
	description: 'Make beautiful websites regardless of your design experience.',
	navItems: [
		{
			label: 'Stake',
			href: '/',
		},
    {
      label: 'Withdraw',
      href: '/withdraw',
    },
    {
      label: 'Leaderboard',
      href: '/leaderboard',
    },
	],
	navMenuItems: [
		{
			label: 'Profile',
			href: '/profile',
		},
		{
			label: 'Stake',
			href: '/stake',
		},
		{
			label: 'Withdraw',
			href: '/withdraw',
		},
		{
			label: 'Leaderboard',
			href: '/leaderboard',
		},
	],
	links: {
		github: 'https://github.com/nextui-org/nextui',
		twitter: 'https://twitter.com/getnextui',
		docs: 'https://nextui-docs-v2.vercel.app',
		discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev'
	},
};
