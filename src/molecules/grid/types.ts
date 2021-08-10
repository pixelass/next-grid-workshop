export type ColCount = number;
export type CSSVariable = `var(${string})`;
/** CalcFunction works in some but causes rendering issues in other cases using css-grid.
 *  The repeat function requires a positive <integer> while the calc function
 *  could return a <number>.
 *  Divisions will never work in css-grid, while multiplications, subtractions and additions
 *  will not work if one side is a <number>.
 *  @link {@see https://drafts.csswg.org/css-values-3/#calc-notation}
 *  @link {@see https://drafts.csswg.org/css-values-3/#calc-type-checking}
 *  Flexbox based grids are not affected by this limitation.
 */
export type CalcFunction = `calc(${string})`;
export type ColSpan = ColCount | CalcFunction | CSSVariable;

/**
 * ColStart only works in css-grid based grids.
 */
export type ColStart = ColCount;

export interface FlexGridProps {
	colCountXS?: number;
	colCountS?: number;
	colCountM?: number;
	colCountL?: number;
}

export interface GridGridProps {
	colCountXS?: number;
	colCountS?: number;
	colCountM?: number;
	colCountL?: number;
}

export type GridProps = FlexGridProps | GridGridProps;

export interface FlexColumnProps {
	colSpanXS?: ColSpan;
	colSpanS?: ColSpan;
	colSpanM?: ColSpan;
	colSpanL?: ColSpan;
}

export interface GridColumnProps {
	colSpanXS?: ColSpan;
	colSpanS?: ColSpan;
	colSpanM?: ColSpan;
	colSpanL?: ColSpan;
	colStartXS?: ColStart;
	colStartS?: ColStart;
	colStartM?: ColStart;
	colStartL?: ColStart;
}

export type ColumnProps = FlexColumnProps | GridColumnProps;

export interface FlexRowProps {
	colCountXS?: number;
	colCountS?: number;
	colCountM?: number;
	colCountL?: number;
}

export interface GridRowProps {
	colCountXS?: number;
	colCountS?: number;
	colCountM?: number;
	colCountL?: number;
}

export type RowProps = FlexRowProps | GridRowProps;
