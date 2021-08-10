export type ColCount = number;
export type CSSVariable = `var(${string})`;
/** CalcFunction works but causes rendering issues in some cases.
 *  The repeat function requires a positive <integer> while the calc function
 *  could return a <number>
 *  Divisions will never work, whilemultiplications, subtractions and additions
 *  will not work if one side is a <number>
 *  @link {@see https://drafts.csswg.org/css-values-3/#calc-notation}
 *  @link {@see https://drafts.csswg.org/css-values-3/#calc-type-checking}
 */
export type CalcFunction = `calc(${string})`;
export type ColSpan = ColCount | CalcFunction | CSSVariable;

// For Grid Layout
export type ColStart = ColCount;

export interface GridProps {}
export interface GridGridProps {}

export interface ColumnProps {
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

export interface GridRowProps {
	colCountXS?: number;
	colCountS?: number;
	colCountM?: number;
	colCountL?: number;
}

export interface RowProps {
	colCountXS?: number;
	colCountS?: number;
	colCountM?: number;
	colCountL?: number;
}
