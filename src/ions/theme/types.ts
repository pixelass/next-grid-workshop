export type BreakpointKey = "s" | "m" | "l" | "xl";

export type MqKey = "s" | "m" | "l" | "xl";

export type SpaceKey = "xs" | "s" | "m" | "l" | "xl";

export interface Theme {
	breakpoints: Record<BreakpointKey, number>;
	mq: Record<MqKey, string>;
	spaces: Record<SpaceKey, number>;
}
