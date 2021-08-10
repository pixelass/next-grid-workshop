import { Theme } from "@/ions/theme/types";

const breakpoints = {
	s: 320,
	m: 640,
	l: 800,
	xl: 1280,
};

const spaces = {
	xs: 8,
	s: 16,
	m: 24,
	l: 48,
	xl: 96,
};

const mq = {
	s: `@media (min-width: ${breakpoints.s}px)`,
	m: `@media (min-width: ${breakpoints.m}px)`,
	l: `@media (min-width: ${breakpoints.l}px)`,
	xl: `@media (min-width: ${breakpoints.xl}px)`,
};

const theme: Theme = {
	breakpoints,
	mq,
	spaces,
};

export default theme;
