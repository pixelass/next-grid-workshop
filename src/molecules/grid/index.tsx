import React, { FC } from "react";
import { StyledColumn, StyledGrid, StyledRow } from "./styled";
import { ColumnProps, GridProps, RowProps } from "./types";

export const Grid: FC<GridProps> = ({ children, ...props }) => {
	return <StyledGrid {...props}>{children}</StyledGrid>;
};

export const Column: FC<ColumnProps> = ({ children, ...props }) => {
	return <StyledColumn {...props}>{children}</StyledColumn>;
};

export const Row: FC<RowProps> = ({ children, ...props }) => {
	return <StyledRow {...props}>{children}</StyledRow>;
};
