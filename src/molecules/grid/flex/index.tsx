import React, { FC } from "react";
import { StyledFlexColumn, StyledFlexGrid, StyledFlexRow } from "./styled";
import { FlexColumnProps, FlexGridProps, FlexRowProps } from "../types";

export const FlexGrid: FC<FlexGridProps> = ({ children, ...props }) => {
	return <StyledFlexGrid {...props}>{children}</StyledFlexGrid>;
};

export const FlexColumn: FC<FlexColumnProps> = ({ children, ...props }) => {
	return <StyledFlexColumn {...props}>{children}</StyledFlexColumn>;
};

export const FlexRow: FC<FlexRowProps> = ({ children, ...props }) => {
	return <StyledFlexRow {...props}>{children}</StyledFlexRow>;
};
