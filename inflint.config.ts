import { Config } from 'inflint';

const inflintConfig: Config = {
	rules: {
		'{src}/**/*': [2, 'kebab-case.point'],
		'**/*.yml': 2,
	},
};

export default inflintConfig;
