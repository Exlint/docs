// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Exlint docs',
	tagline: 'Dinosaurs are cool',
	url: 'http://localhost:3000',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/icon.png',
	organizationName: 'Exlint.io',
	projectName: 'Exlint docs',

	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					breadcrumbs: true,
					routeBasePath: '/',
					editUrl: 'https://github.com/Exlint/docs',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				logo: {
					alt: 'Exlint Logo',
					src: 'img/darkLogo.png',
					srcDark: 'img/whiteLogo.png',
				},
				items: [
					{
						type: 'search',
						position: 'right',
					},
					{
						href: 'https://github.com/Exlint',
						position: 'right',
						className: 'navbar-menu',
					},
					{
						href: 'https://app.exlint.io',
						position: 'right',
						label: 'Sign up | Login',
					},
				],
			},
			footer: {
				logo: {
					alt: 'Exlint Logo',
					src: 'img/icon.png',
				},
				style: 'dark',
				links: [
					{
						title: 'Community',
						items: [
							{
								label: 'GitHub',
								href: 'https://github.com/Exlint',
							},
							{
								label: 'Discord',
								href: 'https://discord.gg/sqtbwvgzek',
							},
						],
					},
					{
						title: 'Sitemap',
						items: [
							{
								label: 'Getting started',
								href: '/',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Exlint.io`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			algolia: {
				appId: '2LJRR4TT00',
				// Public API key: it is safe to commit it
				apiKey: 'fa678c90b5b05bc60710efad9b5811fd',
				indexName: 'Exlint',
				contextualSearch: true,
				searchPagePath: 'search',
				container: 'div',
			},
			zoom: {
				selector: '.markdown :not(em) > img',
				config: {
					// options you can specify via https://github.com/francoischalifour/medium-zoom#usage
					background: {
						light: 'rgb(255, 255, 255)',
						dark: 'rgb(50, 50, 50)',
					},
				},
			},
		}),
};

module.exports = config;
