import gridDebugger from "@/ions/styles/debug";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { GridColumnProps, GridGridProps, GridRowProps } from "../types";

export const StyledGridGrid = styled.div<GridGridProps>`
	--col-count: 2;

	display: grid;
	grid-column-gap: calc(var(--gutter) * 2);
	grid-template-columns: repeat(var(--col-count), 1fr);
	width: 100%;
	margin: 0 auto;
	padding-right: calc(var(--gutter) + var(--padding));
	padding-left: calc(var(--gutter) + var(--padding));
	${({ theme, colCountXS = 2, colCountS = 4, colCountM = 8, colCountL = 12 }) => css`
		--col-count: ${colCountXS};
		--gutter: ${theme.spaces.xs}px;
		--padding: ${theme.spaces.m}px;

		max-width: ${theme.breakpoints.xl}px;

		${theme.mq.s} {
			--col-count: ${colCountS};
		}

		${theme.mq.m} {
			--col-count: ${colCountM};
		}

		${theme.mq.l} {
			--col-count: ${colCountL};
		}
	`};
`;
export const StyledGridRow = styled.div<GridRowProps>`
	display: grid;
	grid-column-gap: calc(var(--gutter) * 2);
	grid-template-columns: repeat(var(--col-count), 1fr);
	${({
		theme,
		colCountXS = "var(--col-span)",
		colCountS = "var(--col-span)",
		colCountM = "var(--col-span)",
		colCountL = "var(--col-span)",
	}) => css`
		--col-count: ${colCountXS};

		${theme.mq.s} {
			--col-count: ${colCountS};
		}

		${theme.mq.m} {
			--col-count: ${colCountM};
		}

		${theme.mq.l} {
			--col-count: ${colCountL};
		}
	`};
`;

export const StyledGridColumn = styled.div<GridColumnProps>`
	grid-column-end: span var(--col-span, var(--col-count));
	${({
		theme,
		colStartXS,
		colStartS,
		colStartM,
		colStartL,
		colSpanXS = "var(--col-count)",
		colSpanS = colSpanXS,
		colSpanM = colSpanS,
		colSpanL = colSpanM,
	}) => css`
		--col-span: ${colSpanXS};

		${colStartXS &&
		css`
			grid-column-start: ${colStartXS};
		`};

		${theme.mq.s} {
			--col-span: ${colSpanS};

			${colStartS &&
			css`
				grid-column-start: ${colStartS};
			`};
		}

		${theme.mq.m} {
			--col-span: ${colSpanM};

			${colStartM &&
			css`
				grid-column-start: ${colStartM};
			`};
		}

		${theme.mq.l} {
			--col-span: ${colSpanL};

			${colStartL &&
			css`
				grid-column-start: ${colStartL};
			`};
		}
	`};
	${process.env.GRID_DEBUGGER === "on" && gridDebugger};
`;
