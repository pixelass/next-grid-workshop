import { FlexColumn, FlexGrid, FlexRow } from "@/molecules/grid/flex";
import { GridColumn, GridGrid, GridRow } from "@/molecules/grid/grid";
import OverlayGrid from "@/organisms/grid-overlay";
import React, { memo } from "react";

const valuesExamples = `
<Column/>
[4] | [8] | [12]

<Column colSpanM={2}/>
[4] | 2 | (2)

<Column colSpanS={2} colSpanL={6}/>
2 | (2) | 6

<Column colSpanS={2} colStartS={3}/>
2 > 2 | (2 > 2) | (2 > 2)

<Column colSpanS="calc(var(--col-count) / 2)"/>
1/2 | (1/2) | (1/2)

<Column colSpanM="calc(var(--col-count) / 3)" colSpanL="calc(var(--col-count) / 6)"/>
[4] | 1/2 | 1/6
`;

const Home = () => {
	return (
		<>
			<h1>A Grid System built on CSS variables</h1>
			<h2>Legend</h2>
			<p>
				Each Column has a text i.e. <code>[4] | 4 | (4)</code>
			</p>
			<ul>
				<li>[4] means 4 columns wide by default</li>
				<li>4 means 4 columns wide by definition</li>
				<li>(4) means 4 columns wide by inheritance</li>
				<li>2 &gt; 2 means 2 columns wide pushed 2 columns (starts at column 3)</li>
				<li>1/2 means 1/2 of available columns by definition</li>
				<li>(1/2) means 1/2 of available columns by inheritance</li>
				<li>L2 means it is nested: level 2</li>
			</ul>
			<p>The values could be different i.e.</p>
			<br />
			<pre style={{ padding: "1rem", background: "#222", color: "#ff2" }}>
				<code>{valuesExamples}</code>
			</pre>
			{/*-- FLEX LAYOUT --*/}
			<FlexGrid>
				<FlexColumn>
					<h2>CSS Flexbox version</h2>
				</FlexColumn>

				<FlexColumn>
					<h3>Default</h3>
				</FlexColumn>
				<FlexColumn colSpanM={4}>[4] | 4 | (4)</FlexColumn>
				<FlexColumn colSpanM={4}>[4] | 4 | (4)</FlexColumn>
				<FlexColumn colSpanM={4}>[4] | 4 | (4)</FlexColumn>

				<FlexColumn>
					<h3>Nesting</h3>
				</FlexColumn>
				<FlexColumn colSpanM={4}>
					[4] | 4 | (4)
					<FlexRow>
						<FlexColumn colSpanM={4}>[4] | 4 | (4) | L2</FlexColumn>
						<FlexColumn colSpanM={4}>[4] | 4 | (4) | L2</FlexColumn>
						<FlexColumn colSpanM={4}>[4] | 4 | (4) | L2</FlexColumn>
					</FlexRow>
				</FlexColumn>
				<FlexColumn colSpanM={4}>
					[4] | 4 | (4)
					<FlexRow>
						<FlexColumn colSpanM={4}>[4] | 4 | (4) | L2</FlexColumn>
						<FlexColumn colSpanM={4}>[4] | 4 | (4) | L2</FlexColumn>
						<FlexColumn colSpanM={4}>
							[4] | 4 | (4) | L2
							<FlexRow>
								<FlexColumn colSpanM={4}>[4] | 4 | (4) | L3</FlexColumn>
								<FlexColumn colSpanM={4}>[4] | 4 | (4) | L3</FlexColumn>
								<FlexColumn colSpanM={4}>[4] | 4 | (4) | L3</FlexColumn>
							</FlexRow>
						</FlexColumn>
					</FlexRow>
				</FlexColumn>
				<FlexColumn colSpanM={4}>
					[4] | 4 | (4)
					<FlexRow>
						<FlexColumn colSpanM={4}>[4] | 4 | (4) | L2</FlexColumn>
						<FlexColumn colSpanM={4}>[4] | 4 | (4) | L2</FlexColumn>
						<FlexColumn colSpanM={4}>
							[4] | 4 | (4) | L2
							<FlexRow>
								<FlexColumn colSpanM={4}>[4] | 4 | (4) | L3</FlexColumn>
								<FlexColumn colSpanM={4}>[4] | 4 | (4) | L3</FlexColumn>
								<FlexColumn colSpanM={4}>
									[4] | 4 | (4) | L3
									<FlexRow>
										<FlexColumn colSpanM={4}>[4] | 4 | (4) | L4</FlexColumn>
										<FlexColumn colSpanM={4}>[4] | 4 | (4) | L4</FlexColumn>
										<FlexColumn colSpanM={4}>
											[4] | 4 | (4) | L4
											<FlexRow>
												<FlexColumn colSpanM={4}>
													[4] | 4 | (4) | L5
												</FlexColumn>
												<FlexColumn colSpanM={4}>
													[4] | 4 | (4) | L5
												</FlexColumn>
												<FlexColumn colSpanM={4}>
													[4] | 4 | (4) | L5
												</FlexColumn>
											</FlexRow>
										</FlexColumn>
									</FlexRow>
								</FlexColumn>
							</FlexRow>
						</FlexColumn>
					</FlexRow>
				</FlexColumn>

				<FlexColumn>
					<h3>Calculated</h3>
				</FlexColumn>
				<FlexColumn colSpanS="calc(var(--col-count) / 2)">1/2 | (1/2) | (1/2)</FlexColumn>
				<FlexColumn colSpanS="calc(var(--col-count) / 2)">
					1/2 | (1/2) | (1/2)
					<FlexRow>
						<FlexColumn colSpanS="calc(var(--col-count) / 2)">
							1/2 | (1/2) | (1/2) | L2
						</FlexColumn>
						<FlexColumn colSpanS="calc(var(--col-count) / 2)">
							1/2 | (1/2) | (1/2) | L2
						</FlexColumn>
					</FlexRow>
				</FlexColumn>

				<FlexColumn>
					<h3>Compound Row</h3>
				</FlexColumn>
				<FlexColumn>
					<h4>L: 16 columns</h4>
					<FlexRow colCountL={16}>
						<FlexColumn colSpanL={4}>[4] | [8] | 4</FlexColumn>
						<FlexColumn colSpanL={4}>[4] | [8] | 4</FlexColumn>
						<FlexColumn colSpanL={4}>[4] | [8] | 4</FlexColumn>
						<FlexColumn colSpanL={4}>[4] | [8] | 4</FlexColumn>
					</FlexRow>
					<h4>M: 4 columns | L:8 columns</h4>
					<FlexRow colCountM={4} colCountL={8}>
						<FlexColumn colSpanL={4}>[4] | [4] | 4</FlexColumn>
						<FlexColumn colSpanL={4}>[4] | [4] | 4</FlexColumn>
						<FlexColumn colSpanL={4}>[4] | [4] | 4</FlexColumn>
						<FlexColumn colSpanL={4}>[4] | [4] | 4</FlexColumn>
					</FlexRow>
					<h4>M: 3 columns | L:8 columns</h4>
					<FlexRow colCountM={3} colCountL={8}>
						<FlexColumn colSpanM={1}>[4] | 1 | (1)</FlexColumn>
						<FlexColumn colSpanM={2} colSpanL={3}>
							[4] | 2 | 3
						</FlexColumn>
						<FlexColumn colSpanL={4}>[4] | [3] | 4</FlexColumn>
					</FlexRow>
				</FlexColumn>
			</FlexGrid>

			<FlexGrid colCountL={28}>
				<FlexColumn>
					<h3>Compound Grid</h3>
					<h4>L: 28 columns</h4>
				</FlexColumn>
				<FlexColumn>[4] | [8] | [28]</FlexColumn>
				<FlexColumn colSpanL={4}>[4] | [8] | 4</FlexColumn>
				<FlexColumn colSpanL={4}>[4] | [8] | 4</FlexColumn>
				<FlexColumn colSpanL={4}>[4] | [8] | 4</FlexColumn>
			</FlexGrid>

			{/*-- GRID LAYOUT --*/}
			<GridGrid>
				<GridColumn>
					<h2>CSS Grid version</h2>
				</GridColumn>

				<GridColumn>
					<h3>Default</h3>
				</GridColumn>
				<GridColumn colSpanM={4}>[4] | 4 | (4)</GridColumn>
				<GridColumn colSpanM={4}>[4] | 4 | (4)</GridColumn>
				<GridColumn colSpanM={4}>[4] | 4 | (4)</GridColumn>

				<GridColumn>
					<h3>Nesting</h3>
				</GridColumn>
				<GridColumn colSpanM={4}>
					[4] | 4 | (4)
					<GridRow>
						<GridColumn colSpanM={4}>[4] | 4 | (4) | L2</GridColumn>
						<GridColumn colSpanM={4}>[4] | 4 | (4) | L2</GridColumn>
						<GridColumn colSpanM={4}>[4] | 4 | (4) | L2</GridColumn>
					</GridRow>
				</GridColumn>
				<GridColumn colSpanM={4}>
					[4] | 4 | (4)
					<GridRow>
						<GridColumn colSpanM={4}>[4] | 4 | (4) | L2</GridColumn>
						<GridColumn colSpanM={4}>[4] | 4 | (4) | L2</GridColumn>
						<GridColumn colSpanM={4}>
							[4] | 4 | (4) | L2
							<GridRow>
								<GridColumn colSpanM={4}>[4] | 4 | (4) | L3</GridColumn>
								<GridColumn colSpanM={4}>[4] | 4 | (4) | L3</GridColumn>
								<GridColumn colSpanM={4}>[4] | 4 | (4) | L3</GridColumn>
							</GridRow>
						</GridColumn>
					</GridRow>
				</GridColumn>
				<GridColumn colSpanM={4}>
					[4] | 4 | (4)
					<GridRow>
						<GridColumn colSpanM={4}>[4] | 4 | (4) | L2</GridColumn>
						<GridColumn colSpanM={4}>[4] | 4 | (4) | L2</GridColumn>
						<GridColumn colSpanM={4}>
							[4] | 4 | (4) | L2
							<GridRow>
								<GridColumn colSpanM={4}>[4] | 4 | (4) | L3</GridColumn>
								<GridColumn colSpanM={4}>[4] | 4 | (4) | L3</GridColumn>
								<GridColumn colSpanM={4}>
									[4] | 4 | (4) | L3
									<GridRow>
										<GridColumn colSpanM={4}>[4] | 4 | (4) | L4</GridColumn>
										<GridColumn colSpanM={4}>[4] | 4 | (4) | L4</GridColumn>
										<GridColumn colSpanM={4}>
											[4] | 4 | (4) | L4
											<GridRow>
												<GridColumn colSpanM={4}>
													[4] | 4 | (4) | L5
												</GridColumn>
												<GridColumn colSpanM={4}>
													[4] | 4 | (4) | L5
												</GridColumn>
												<GridColumn colSpanM={4}>
													[4] | 4 | (4) | L5
												</GridColumn>
											</GridRow>
										</GridColumn>
									</GridRow>
								</GridColumn>
							</GridRow>
						</GridColumn>
					</GridRow>
				</GridColumn>

				<GridColumn>
					<h3>Push columns</h3>
				</GridColumn>
				<GridColumn colSpanS={2} colStartS={3}>
					2 &gt; 2 | (2 &gt; 2) | (2 &gt; 2)
				</GridColumn>
				<GridColumn colSpanS={2} colStartS={3} colStartM={5} colStartL={7}>
					2 &gt; 2 | (2 &gt; 4) | (2 &gt; 6)
				</GridColumn>

				<GridColumn>
					<h3>Compound Row</h3>
				</GridColumn>
				<GridColumn>
					<h4>L: 16 columns</h4>
					<GridRow colCountL={16}>
						<GridColumn colSpanL={4}>[4] | [8] | 4</GridColumn>
						<GridColumn colSpanL={4}>[4] | [8] | 4</GridColumn>
						<GridColumn colSpanL={4}>[4] | [8] | 4</GridColumn>
						<GridColumn colSpanL={4}>[4] | [8] | 4</GridColumn>
					</GridRow>
					<h4>M: 4 columns | L:8 columns</h4>
					<GridRow colCountM={4} colCountL={8}>
						<GridColumn colSpanL={4}>[4] | [4] | 4</GridColumn>
						<GridColumn colSpanL={4}>[4] | [4] | 4</GridColumn>
						<GridColumn colSpanL={4}>[4] | [4] | 4</GridColumn>
						<GridColumn colSpanL={4}>[4] | [4] | 4</GridColumn>
					</GridRow>
					<h4>M: 3 columns | L:8 columns</h4>
					<GridRow colCountM={3} colCountL={8}>
						<GridColumn colSpanM={1}>[4] | 1 | (1)</GridColumn>
						<GridColumn colSpanM={2} colSpanL={3}>
							[4] | 2 | 3
						</GridColumn>
						<GridColumn colSpanL={4}>[4] | [3] | 4</GridColumn>
					</GridRow>
				</GridColumn>
			</GridGrid>
			<GridGrid colCountL={28}>
				<GridColumn>
					<h3>Compound Grid</h3>
					<h4>L: 28 columns</h4>
				</GridColumn>
				<GridColumn>[4] | [8] | [28]</GridColumn>
				<GridColumn colSpanL={4}>[4] | [8] | 4</GridColumn>
				<GridColumn colSpanL={4}>[4] | [8] | 4</GridColumn>
				<GridColumn colSpanL={4}>[4] | [8] | 4</GridColumn>
			</GridGrid>
			{process.env.NODE_ENV === "development" && <OverlayGrid />}
		</>
	);
};

export default memo(Home);
