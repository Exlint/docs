module.exports = {
	'**/*.{ts,js,json}': 'prettier --write',
	'**/*': 'inflint -c inflint.config.ts',
};
