# Atomic Design

We follow [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) by
[Brad Frost](https://bradfrost.com/).
Read [the book](https://atomicdesign.bradfrost.com/table-of-contents/) online.

## Extending atomic design

Since atomic design is just a concept and very simple, often too simple for large scale projects we
decided to extend it. To have a valid reasoning for the names we looked at
[Group size measures](https://en.wikipedia.org/wiki/Group_size_measures) via Wikipedia.

We added, ions, groups, herds and colonies. One of the reasons we love it is the ability to add new
levels without breaking the [methodology](https://atomicdesign.bradfrost.com/chapter-2/).

Brad Frost actually wrote an article about
[extending atomic design](https://bradfrost.com/blog/post/extending-atomic-design/). 

> Design systems are made from many ingredients that come together to help the organization tell the
> story of how they design and build digital things. I hope that atomic design continues to be a
> helpful mental modal for making components in an interconnected, hierarchical manner. But I hope
> teams acknowledge and embrace the fact there are many (often overlapping) facets to a design
> system.

## Ions

Ions are entities that are too small to render or just deliver logic.  

**Good examples are:**

* constants
* contexts
* hooks
* design-tokens
* utility functions

## Atoms

Atoms are components that don't have any smaller component in them. They can use
[HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) or [Ions](#ions).

**Good examples are:**

* Buttons
* Icons
* Input elements
* Input labels
* Links

## Molecules

Molecules are components that have one or more atoms and or smaller atomic entities.

**Good examples are:**

* Searchbar with Input, Button and Label
* Menu with Links
* Grid components

## Organisms

Organisms contain one or more [Atoms](#atoms) and or smaller atomic entities.

**Good examples are:**

* Header with Searchbar, Logo and Menu

## Groups

When [Organisms](#organisms) gather, they form a group.

## Herds

A Herd consists of several [Groups](#groups) or smaller atomic entities.

## Colonies

Colonies are very big groupings that can contain anything that is smaller. They can also be used for
layouts where the content is unknown.

## Templates 

Templates provide render and layout logic that change based on data.

## Pages

Pages are the entry point of a user. A page will collect data from the server or another source, 
choose a template, fill it with data and then finally render it. 
In our case pages will be used by [next.js](https://nextjs.org/docs/basic-features/pages). We love
how nicely this fits into our structure.



