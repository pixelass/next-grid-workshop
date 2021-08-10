import { cache } from "@/ions/services/emotion/cache";
import globalStyles from "@/ions/styles/global";
import theme from "@/ions/theme";
import {
	CacheProvider as EmotionCacheProvider,
	Global,
	ThemeProvider as EmotionThemeProvider,
} from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import pkg from "../../package.json";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title key="title">Grid Workshop</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="version" content={pkg.version} />
				<link rel="shortcut icon" href={`/favicon.ico?${pkg.version}`} />
			</Head>
			<Global styles={globalStyles} />
			<EmotionCacheProvider value={cache}>
				<EmotionThemeProvider theme={theme}>
					<Component {...pageProps} />
				</EmotionThemeProvider>
			</EmotionCacheProvider>
		</>
	);
};
export default App;
