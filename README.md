scaffolding
===========

[bootstrap]: http://getbootstrap.com

**What it is:**
*   A ridiculously lightweight LESS stylesheet that lets you build responsive grids.
*   Inspired by [boostrap][bootstrap]'s grid framework.
*   F****** awesome.

**What it is not:**
*   [bootstrap][bootstrap].
*   A CSS framework in any way, shape or form. As a matter of fact,
    _compiling it won't even generate any CSS (seriously, try it)_. It's just a bunch
    of mixins that let you build a grid, really, really easily.

How easiliy?

## Usage

Just `@import 'scaffolding.less';` in your LESS project. Then you can do either (or both)
of the following:

1.  **Just call `make-grid(@cols; @gutter);`.** This will generate generic grid classes for
    a `@cols`-column grid. You can also omit both arguments, which will generate a 12-column
    grid with a 24-pixel gutter. The generic grid classes are:
    -   `.container` for a responsive container 
    -   `.row` for a grid row
    -   `.col` designates a column and should be paired with one or more of the below
    -   `.xs-*`, `.sm-*`, `.md-*`, `.lg-*` for a column with the specified width and breakpoint
        (can be combined just like in bootstrap)
    -   `.(size)-offset-*`, `.(size)-push-*`, `.(size)-pull-*`, where `(size)` can be either
        "xs," "sm," "md" or "lg"  

2.  **Roll grid properties into your own classes.**
    -   `.make-responsive-container(@gutter; @width-sm; @width-md; @width-lg)` will turn the
        selector that calls it into a responsive container. All parameters are optional and will
        use the default values if omitted.
    -   `.make-row(@gutter)` will turn your selector into a grid row. Again, `@gutter` can be
        omitted and the default value will be used.
    -   `.make-column(@width; @size; @total; @gutter)` will turn your selector into a column
        `@width` segments wide, based on the total number of columns (`@total`). The `@size`
        attribute should again be either "xs," "sm," "md" or "lg". `@total` and `@gutter` are
        optional and will fall back to their defaults if omitted.

