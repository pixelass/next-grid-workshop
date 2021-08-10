module.exports = {
	presets: ["next/babel"],
	plugins: [
		[
			"@emotion/babel-plugin",
			{
				autoLabel: "dev-only",
				labelFormat: "[local]",
				cssPropOptimization: true,
			},
		],
	],
};
