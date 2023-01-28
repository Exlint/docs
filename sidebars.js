/*
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	// sidebar: [{ type: 'autogenerated', dirName: '.' }],
	// But you can create a sidebar manually
	docs: [
		{
			type: 'category',
			label: '👋\xa0\xa0Welcome',
			collapsed: true,
			items: ['welcome/getting-started/index', 'welcome/how-exlint-works/index'],
		},
		{
			type: 'category',
			label: 'Setup',
			collapsed: true,
			items: [
				'setup/groups/index',
				'setup/policies/index',
				'setup/cli-output/index',
				'setup/cli-argument/index',
				'setup/token-management/index',
			],
		},
		{
			type: 'category',
			label: 'CI',
			collapsed: true,
			items: ['ci/github-action/index'],
		},
		{
			type: 'doc',
			label: 'Supported Libraries',
			id: 'supported-libraries/index',
		},
		{
			type: 'category',
			label: 'Data Privacy',
			collapsed: true,
			items: ['data-privacy/cli-usage/index', 'data-privacy/user-account-data/index'],
		},
		{
			type: 'doc',
			label: 'Troubleshooting & Support',
			id: 'troubleshooting-and-support/index',
		},
		{
			type: 'link',
			label: 'Discord Community',
			href: 'https://discord.gg/sqtbwvgzek',
		},
	],
};

module.exports = sidebars;
