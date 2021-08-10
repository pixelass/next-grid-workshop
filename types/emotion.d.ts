import "@emotion/react";
import { Theme as ThemeType } from "@/ions/theme/types";

declare module "@emotion/react" {
	export interface Theme extends ThemeType {}
}
