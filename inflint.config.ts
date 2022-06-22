import { Config } from '@exlint.io/inflint';

const inflintConfig: Config = {
	rules: {
		'src/**/*': [2, 'kebab-case.point'],
		'**/*.yml': 2,
	},
};

export default inflintConfig;
