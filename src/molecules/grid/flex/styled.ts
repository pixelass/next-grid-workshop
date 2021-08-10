import gridDebugger from "@/ions/styles/debug";
import { FlexColumnProps, FlexGridProps, FlexRowProps } from "@/molecules/grid/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledFlexGrid = styled.div<FlexGridProps>`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin: auto;
	${({ theme, colCountXS = 2, colCountS = 4, colCountM = 8, colCountL = 12 }) => css`
		--col-count: ${colCountXS};
		--gutter: ${theme.spaces.xs}px;
		--padding: ${theme.spaces.m}px;

		max-width: ${theme.breakpoints.xl}px;
		padding-right: var(--padding);
		padding-left: var(--padding);

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

export const StyledFlexRow = styled.div<FlexRowProps>`
	display: flex;
	flex-wrap: wrap;
	margin-right: calc(var(--gutter) * -1);
	margin-left: calc(var(--gutter) * -1);

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

export const StyledFlexColumn = styled.div<FlexColumnProps>`
	width: calc(100% / var(--col-count) * var(--col-span) - var(--gutter) * 2);
	margin-right: var(--gutter);
	margin-left: var(--gutter);
	${({
		theme,
		colSpanXS = "var(--col-count)",
		colSpanS = colSpanXS,
		colSpanM = colSpanS,
		colSpanL = colSpanM,
	}) => css`
		--col-span: ${colSpanXS};

		${theme.mq.s} {
			--col-span: ${colSpanS};
		}

		${theme.mq.m} {
			--col-span: ${colSpanM};
		}

		${theme.mq.l} {
			--col-span: ${colSpanL};
		}
	`};
	${process.env.GRID_DEBUGGER === "on" && gridDebugger};
`;
