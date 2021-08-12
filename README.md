# Grid Workshop

This repository was created for a small workshop covering layout grids.

This Grid was developed by [Gregor Adams](https://github.com/pixelass). It uses the power of
CSS-variables (a.k.a custom css properties).

<!-- toc -->

- [Getting Started](#getting-started)
- [Variants](#variants)
  * [Flex](#flex)
  * [Grid](#grid)
- [KISS Nesting](#kiss-nesting)
- [Mobile First](#mobile-first)
- [Advanced](#advanced)
  * [On a grid](#on-a-grid)
  * [On a row](#on-a-row)

<!-- tocstop -->

## Getting Started

1. Clone this repository

```shell
git clone git@github.com:pixelass/next-grid-workshop.git
```

2. cd into the folder

```
cd next-grid-workshop
```

3. Install the dependencies

```
yarn install

## or with npm
npm install
```

4. Start the dev server

```
yarn run dev

## or with npm
npm run dev
```

The page for the workshop is available at http://localhost:3000/workshop. Its source can be found
in [src/pages/workshop.tsx](src/pages/workshop.tsx).

Additional documentation can be found in [docs](docs).

If you have questions, just
[open an issue](https://github.com/pixelass/next-grid-workshop/issues/new) and ask. Feel free to
formulate it in german or english. Answers will be given in the language of the question.

## Variants

There are two variants: `display: flex;`, `display: grid;`, each offering unique features.

### Flex

* Allows splitting columns

```tsx
<FlexGrid>
  <FlexColumn colSpanS="calc(var(--col-count) / 2)">Always half</FlexColumn>
</FlexGrid>
```


### Grid

* Allows pushing columns

```tsx
<GridGrid>
  <GridColumn colSpanL={2} colStartL={3}>2 columns wide starts at column 3</GridColumn>
</GridGrid>
```

## KISS Nesting

You might have used grids that always have 12 columns if you nest them in each other. This grid
inherits the column count from its parent, making it very intuitive to define a desired column span.

```tsx
<Column colSpanS={4}>
  4 columns
  <Row>
    <Column colSpanS={4}>4 columns</Column>
    <Column colSpanS={4}>
      4 columns
      <Row>
        <Column colSpanS={4}>4 columns</Column>
      </Row>
    </Column>
  </Row>
</Column>
```

## Mobile First

This is a mobile-first grid, that collapsed columns depending on the viewport.

```
XS
┏━┳━┓
┃ ┃ ┃
┃ ┃ ┃
┃ ┃ ┃
┗━┻━┛
S
┏━┳━┳━┳━┓
┃ ┃ ┃ ┃ ┃
┃ ┃ ┃ ┃ ┃
┃ ┃ ┃ ┃ ┃
┗━┻━┻━┻━┛
M
┏━┳━┳━┳━┳━┳━┳━┳━┓
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃
┗━┻━┻━┻━┻━┻━┻━┻━┛
L
┏━┳━┳━┳━┳━┳━┳━┳━┳━┳━┳━┓
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃
┗━┻━┻━┻━┻━┻━┻━┻━┻━┻━┻━┛
```

## Advanced

If you need to break the grid logic you can define a compound grid which has its own logic.
This works for `flex` and `grid` variants.

### On a grid
```tsx
<Grid colCountL={15}>
  <Column colSpanL={4}> 4 of 15</Column>
</Grid>
```
### On a row
```tsx
<Column>
  <Row colCountL={15}>
    <Column colSpanL={4}> 4 of 15</Column>
  </Row>
</Column>
```
