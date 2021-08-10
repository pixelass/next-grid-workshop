import { ColumnProps, RowProps } from "@/molecules/grid/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledGrid = styled.div`
	--col-count: 2;

	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin: auto;
	${({ theme }) => css`
		--gutter: ${theme.spaces.xs}px;
		--padding: ${theme.spaces.m}px;

		max-width: ${theme.breakpoints.l}px;
		padding-right: var(--padding);
		padding-left: var(--padding);

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

export const StyledRow = styled.div<RowProps>`
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

export const StyledColumn = styled.div<ColumnProps>`
	width: calc(100% / var(--col-count) * var(--col-span) - var(--gutter) * 2);
	margin-right: var(--gutter);
	margin-left: var(--gutter);
	${process.env.GRID_DEBUGGER === "on" &&
	css`
		min-height: 3rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
		background: rgba(0, 0, 255, 0.2);
	`};
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
`;
