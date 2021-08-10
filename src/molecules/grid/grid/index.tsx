import React, { FC } from "react";
import { GridColumnProps, GridGridProps, GridRowProps } from "../types";
import { StyledGridColumn, StyledGridGrid, StyledGridRow } from "./styled";

export const GridGrid: FC<GridGridProps> = ({ children, ...props }) => (
	<StyledGridGrid {...props}>{children}</StyledGridGrid>
);

export const GridRow: FC<GridRowProps> = ({ children, ...props }) => (
	<StyledGridRow {...props}>{children}</StyledGridRow>
);

export const GridColumn: FC<GridColumnProps> = ({ children, ...props }) => (
	<StyledGridColumn {...props}>{children}</StyledGridColumn>
);
