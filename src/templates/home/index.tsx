import { Column, Grid, Row } from "@/molecules/grid";
import { GridColumn, GridGrid, GridRow } from "@/molecules/grid/grid";
import OverlayGrid from "@/organisms/grid-overlay";
import React, { memo } from "react";

const Home = () => {
	return (
		<>
			<h1>Hello Grid</h1>
			<Grid>
				<Column>
					<h2>Default</h2>
				</Column>
				<Column>1</Column>
				<Column>2</Column>
				<Column>
					3
					<Row>
						<Column>3.1</Column>
						<Column>3.2</Column>
						<Column>3.3</Column>
					</Row>
				</Column>
				<Column>
					<h2>Calculated</h2>
				</Column>
				<Column colSpanS="calc(var(--col-count) / 2)">Always half (L1)</Column>
				<Column colSpanS="calc(var(--col-count) / 2)">
					Always half (L1)
					<Row>
						<Column colSpanS="calc(var(--col-count) / 2)">Always half (L2)</Column>
						<Column colSpanS="calc(var(--col-count) / 2)">Always half (L2)</Column>
					</Row>
				</Column>
				<Column>
					<h2>Compound Grid</h2>
				</Column>
				<Column>
					<Row colCountL={16}>
						<Column colSpanL={4}>1</Column>
						<Column colSpanL={4}>2</Column>
						<Column colSpanL={4}>3</Column>
						<Column colSpanL={4}>4</Column>
					</Row>
					<Row colCountL={8}>
						<Column colSpanL={4}>1</Column>
						<Column colSpanL={4}>2</Column>
						<Column colSpanL={4}>3</Column>
						<Column colSpanL={4}>4</Column>
					</Row>
					<Row colCountM={3} colCountL={8}>
						<Column colSpanM={1} colSpanL={1}>
							1
						</Column>
						<Column colSpanM={2} colSpanL={3}>
							2
						</Column>
						<Column colSpanL={4}>3</Column>
					</Row>
				</Column>
				<Column>
					<h2>Nested</h2>
				</Column>
				<Column colSpanS={4}>Always 4 (L1)</Column>
				<Column colSpanS={4}>Always 4 (L1)</Column>
				<Column colSpanS={4}>
					Always 4 (L1)
					<Row>
						<Column colSpanS={4}>Always 4 (L2)</Column>
						<Column colSpanS={4}>Always 4 (L2)</Column>
						<Column colSpanS={4}>
							Always 4 (L2)
							<Row>
								<Column colSpanS={4}>Always 4 (L3)</Column>
								<Column colSpanS={4}>Always 4 (L3)</Column>
								<Column colSpanS={4}>
									Always 4 (L3)
									<Row>
										<Column colSpanS={4}>Always 4 (L4)</Column>
										<Column colSpanS={4}>Always 4 (L4)</Column>
										<Column colSpanS={4}>
											Always 4 (L4)
											<Row>
												<Column colSpanS={4}>Always 4 (L5)</Column>
												<Column colSpanS={4}>Always 4 (L5)</Column>
												<Column colSpanS={4}>Always 4 (L5)</Column>
											</Row>
										</Column>
									</Row>
								</Column>
							</Row>
						</Column>
					</Row>
				</Column>
			</Grid>
			<GridGrid>
				<GridColumn>
					<h2>Grid layout</h2>
				</GridColumn>
				<GridColumn>
					<GridRow>
						<GridColumn colSpanS={2}>1</GridColumn>
						<GridColumn colSpanS={2}>2</GridColumn>
						<GridColumn colSpanS={2} colStartM={7} colSpanM={4}>
							3
							<GridRow>
								<GridColumn colSpanS={2}>1</GridColumn>
								<GridColumn colSpanS={2}>2</GridColumn>
							</GridRow>
						</GridColumn>
					</GridRow>
				</GridColumn>
				<GridColumn>
					<h2>Compound Grid</h2>
				</GridColumn>
				<GridColumn>
					<GridRow colCountL={19}>
						<GridColumn colSpanL={12}>1</GridColumn>
						<GridColumn colSpanS={4}>2</GridColumn>
						<GridColumn colSpanS={3}>3</GridColumn>
					</GridRow>
				</GridColumn>
			</GridGrid>
			{process.env.NODE_ENV === "development" && <OverlayGrid />}
		</>
	);
};

export default memo(Home);
