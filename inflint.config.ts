import { Config } from 'inflint';

const inflintConfig: Config = {
	rules: {
		'{assets,scripts}/**/*': [2, 'kebab-case'],
		'{src,tests}/**/*': [2, 'kebab-case.point'],
		'{src,tests}/**/*.js': 2,
		'**/*.yml': 2,
		'@types/**/*': [2, 'index.d', { onlyFiles: true }],
	},
};

export default inflintConfig;
