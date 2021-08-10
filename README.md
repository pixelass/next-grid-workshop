# Grid Workshop

This repository was created for a small workshop covering layout grids.

This Grid was developed by [Gregor Adams](https://github.com/pixelass). It uses the power of
CSS-variables (a.k.a custom css properties).

## Variants

There are two variants: `display: flex;`, `display: grid;`, each offering unique features.

### Flex

* Allows splitting columns

```tsx
<Grid>
  <Column colSpanS="calc(var(--col-count) / 2)">Always half</Column>
</Grid>
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
