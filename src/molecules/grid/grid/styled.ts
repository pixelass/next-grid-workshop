import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { GridColumnProps, GridRowProps } from "../types";

const StyledGridGridBase = styled.div`
	display: grid;
	grid-column-gap: var(--gutter);
	grid-template-columns: repeat(var(--col-count), 1fr);
	width: 100%;
`;

export const StyledGridGrid = styled(StyledGridGridBase)`
	--col-count: 2;

	margin: 0 auto;
	padding-right: calc(var(--gutter) + var(--padding));
	padding-left: calc(var(--gutter) + var(--padding));
	${({ theme }) => css`
		--gutter: ${theme.spaces.xs}px;
		--padding: ${theme.spaces.m}px;

		max-width: ${theme.breakpoints.l}px;

		${theme.mq.s} {
			--col-count: 4;
		}

		${theme.mq.m} {
			--col-count: 8;
		}

		${theme.mq.l} {
			--col-count: 12;
		}
	`};
`;
export const StyledGridRow = styled(StyledGridGridBase)<GridRowProps>`
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
	${process.env.GRID_DEBUGGER === "on" &&
	css`
		min-height: 3rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
		background: rgba(0, 0, 255, 0.2);
	`};
	${({
		theme,
		colStartXS,
		colStartS,
		colStartM,
		colStartL,
		colSpanXS,
		colSpanS = colSpanXS,
		colSpanM = colSpanS,
		colSpanL = colSpanM,
	}) => css`
		${colSpanXS &&
		css`
			--col-span: ${colSpanXS};
		`};
		${colStartXS &&
		css`
			grid-column-start: ${colStartXS};
		`};

		${theme.mq.s} {
			${colSpanS &&
			css`
				--col-span: ${colSpanS};
			`};
			${colStartS &&
			css`
				grid-column-start: ${colStartS};
			`};
		}

		${theme.mq.m} {
			${colSpanM &&
			css`
				--col-span: ${colSpanM};
			`};
			${colStartM &&
			css`
				grid-column-start: ${colStartM};
			`};
		}

		${theme.mq.l} {
			${colSpanL &&
			css`
				--col-span: ${colSpanL};
			`};
			${colStartL &&
			css`
				grid-column-start: ${colStartL};
			`};
		}
	`};
`;
