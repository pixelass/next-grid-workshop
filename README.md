# Grid Workshop

This repository was created for a small workshop covering layout grids.

This Grid was developed by [Gregor Adams](https://github.com/pixelass). It uses the power of
CSS-variables (a.k.a custom css properties).

## Variants

There are two variants: `display: flex;`, `display: grid;`, each offering unique features.

### Flex

* Allows splitting columns

### Grid

* Allows pushing columns

It is a mobile-first grid, that collapsed columns depending on the viewport.

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
