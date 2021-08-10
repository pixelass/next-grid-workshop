import { FlexColumn, FlexGrid } from "@/molecules/grid/flex";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledGridOverlay = styled.div`
	position: fixed;
	z-index: 100;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	opacity: 0.1;
	pointer-events: none;
`;

export const StyledOverlayColumn = styled(FlexColumn)`
	height: 100%;
	background: magenta;
`;

export const StyledOverlayGrid = styled(FlexGrid)`
	height: 100%;
	background-image: linear-gradient(yellow, yellow), linear-gradient(blue, blue);
	background-clip: content-box, border-box;

	${StyledOverlayColumn} {
		&:nth-of-type(1) {
			display: none;
		}
		&:nth-of-type(2) {
			display: none;
		}
		&:nth-of-type(3) {
			display: none;
		}
		&:nth-of-type(4) {
			display: none;
		}
		&:nth-of-type(5) {
			display: none;
		}
		&:nth-of-type(6) {
			display: none;
		}
		&:nth-of-type(7) {
			display: none;
		}
		&:nth-of-type(8) {
			display: none;
		}
		&:nth-of-type(9) {
			display: none;
		}
		&:nth-of-type(10) {
			display: none;
		}

		${({ theme }) => css`
			${theme.mq.s} {
				&:nth-of-type(9) {
					display: unset !important;
				}
				&:nth-of-type(10) {
					display: unset !important;
				}
			}

			${theme.mq.m} {
				&:nth-of-type(5) {
					display: unset !important;
				}
				&:nth-of-type(6) {
					display: unset !important;
				}
				&:nth-of-type(7) {
					display: unset !important;
				}
				&:nth-of-type(8) {
					display: unset !important;
				}
			}

			${theme.mq.l} {
				&:nth-of-type(1) {
					display: unset !important;
				}
				&:nth-of-type(2) {
					display: unset !important;
				}
				&:nth-of-type(3) {
					display: unset !important;
				}
				&:nth-of-type(4) {
					display: unset !important;
				}
			}
		`};
	}
`;

export const StyledGridToggle = styled.button`
	display: flex;
	position: fixed;
	z-index: 101;
	bottom: 0;
	left: 0;
	align-content: center;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	margin: 0;
	padding: 0;
	border: 0;
	background: #fff;
	color: #000;

	&:hover {
		background: #333;
		color: #fff;
	}

	&:active {
		background: #000;
		color: #fff;
	}

	&:focus {
		outline: 0;
	}

	&:focus-visible {
		box-shadow: inset 0 0 0 2px highlight;
	}
`;
