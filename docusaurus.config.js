// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Exlint docs',
	tagline: 'Dinosaurs are cool',
	url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.png',
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
					src: 'img/Exlint-logo.png',
					srcDark: 'img/logo-dark.png',
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
						href: 'https://Exlint.io',
						position: 'right',
						label: 'Sign up | Login',
					},
				],
			},
			// footer
			footer: {
				logo: {
					alt: 'Exlint Logo',
					src: 'img/logo-dark.png',
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
				appId: 'VBCXPB7UFQ',

				// Public API key: it is safe to commit it
				apiKey: '6a129ce5a599323761caf4ac37846eac',

				indexName: 'Exlint',

				// Optional: see doc section below
				contextualSearch: true,

				// Optional: path for search page that enabled by default (`false` to disable it)
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
