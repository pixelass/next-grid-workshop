import gridDebugger from "@/ions/styles/debug";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { FC } from "react";

const StyledGrid = styled.div`
	--col-count: 4;

	display: flex;
	flex-wrap: wrap;

	@media (min-width: 480px) {
		--col-count: 8;
	}

	@media (min-width: 960px) {
		--col-count: 12;
	}
`;

interface ColumnProps {
	colSpanS?: string | number;
	colSpanM?: string | number;
	colSpanL?: string | number;
}

const StyledColumn = styled.div<ColumnProps>`
	width: calc(100% / var(--col-count) * var(--col-span));
	${({ colSpanS = "var(--col-count)", colSpanM = colSpanS, colSpanL = colSpanM }) => css`
		--col-span: ${colSpanS};

		@media (min-width: 480px) {
			--col-span: ${colSpanM};
		}

		@media (min-width: 960px) {
			--col-span: ${colSpanL};
		}
	`};
	${process.env.GRID_DEBUGGER === "on" && gridDebugger};
`;

/**
 * The wrapping component required to render a grid-layout.
 * It defines the flexbox layout and sets the css-variable `--col-count`
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined} children
 * @param {Pick<React.PropsWithChildren<{}>, never>} props
 * @returns {JSX.Element}
 * @constructor
 */
const Grid: FC = ({ children, ...props }) => {
	return <StyledGrid {...props}>{children}</StyledGrid>;
};

/**
 * The component that renders a column.
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined} children
 * @param {Pick<ColumnProps & {children?: React.ReactNode | undefined}, "colSpanS" | "colSpanM" | "colSpanL">} props
 * @returns {JSX.Element}
 * @constructor
 */
const Column: FC<ColumnProps> = ({ children, ...props }) => {
	return <StyledColumn {...props}>{children}</StyledColumn>;
};

const Page = () => {
	return (
		<Grid>
			<Column>[4] | [8] | [12]</Column>
			<Column colSpanS={2}>2 | (2) | (2)</Column>
			<Column colSpanM={2}>[4] | 2 | (2)</Column>
			<Column colSpanM={2} colSpanL={4}>
				[4] | 2 |4
			</Column>
			<Column colSpanM={2} colSpanL={4}>
				[4] | 2 |4
			</Column>
		</Grid>
	);
};

export default Page;
