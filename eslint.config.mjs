import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.config({
		extends: [
			"next",
			"next/core-web-vitals",
			"next/typescript",
			"plugin:prettier/recommended",
			"plugin:jsx-a11y/recommended",
		],
		plugins: ["prettier", "jsx-a11y"],
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
			"prettier/prettier": [
				"error",
				{
					tabWidth: 2,
					endOfLine: "auto",
					printWidth: 120,
					singleQuote: false,
					trailingComma: "all",
					arrowParens: "always",
					bracketSpacing: true,
					semi: true,
					useTabs: true,
					plugins: ["prettier-plugin-tailwindcss"],
				},
				{
					usePrettierrc: false,
				},
			],
			"import/order": [
				"error",
				{
					groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
					"newlines-between": "always",
				},
			],
			"react/react-in-jsx-scope": "off",
			"jsx-a11y/alt-text": "warn",
			"jsx-a11y/aria-props": "warn",
			"jsx-a11y/aria-proptypes": "warn",
			"jsx-a11y/aria-unsupported-elements": "warn",
			"jsx-a11y/role-has-required-aria-props": "warn",
			"jsx-a11y/role-supports-aria-props": "warn",
		},
	}),
];

export default eslintConfig;
