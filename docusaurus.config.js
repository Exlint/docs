// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Exlint Docs',
	url: 'http://localhost:3000',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'images/icon.png',
	organizationName: 'Exlint.io',
	projectName: 'Exlint Docs',

	presets: [
		[
			'@docusaurus/preset-classic',
			{
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
					filename: 'sitemap.xml',
				},
				gtag: {
					trackingID: 'G-GW6NMY47QH',
					anonymizeIP: true,
				},
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					breadcrumbs: true,
					routeBasePath: '/',
					editUrl: 'https://github.com/Exlint/docs/blob/main',
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
					src: 'images/dark-logo.png',
					srcDark: 'images/white-logo.png',
				},
				items: [
					{
						type: 'search',
						position: 'right',
					},
					{
						href: 'https://app.exlint.io',
						position: 'right',
						label: 'Sign up | Login',
					},
					{
						'href': 'https://github.com/Exlint/cli',
						'position': 'right',
						'className': 'header-github-link',
						'aria-label': 'GitHub repository',
					},
				],
			},
			footer: {
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
								label: 'Slack',
								href: 'https://join.slack.com/t/exlint-io/shared_invite/zt-1ombwjchz-iKziYNc~eZuNUy2gH68N1w',
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
							{
								label: 'Setup',
								href: '/setup/compliances',
							},
							{
								label: 'CI',
								href: '/ci/github-action',
							},
							{
								label: 'Supported Libraries',
								href: '/supported-libraries',
							},
							{
								label: 'Data Privacy',
								href: '/data-privacy/cli-usage',
							},
							{
								label: 'Troubleshooting',
								href: '/troubleshooting-and-support',
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
				selector: '.markdown img',
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
