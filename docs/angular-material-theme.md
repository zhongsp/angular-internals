# Angular Material Theme （主题）

`Angular Material`遵循`Google Material Design`，因此主题的概念和`Google Material Design`结合紧密。

`主题`是可以应用到组件上的一组颜色定义。

依据`Material Design`规范，[颜色的种类](https://material.io/design/color/the-color-system.html)分为：

- primary
- accent
- warn
- foreground
- background

所谓的定制主题，其实就是给以上这几类可配置的颜色设置具体颜色。

概念就是这么多，下面是如何使用Angular Material的主题系统来做定制。这包含三部分：

- 为`Angular Material`标准组件创建一个全新主题
- 为你的自定义组件定制主题
- 同时定制多套主题

## 为`Angular Material`标准组件创建一个全新主题

第一步，导入`Angular Material`提供的定制主题`Sass`工具库。

```scss
@import '~@angular/material/theming';
```

这里的`~`前缀表示从`node_modules/`里[导入](https://github.com/webpack-contrib/sass-loader#imports)。

第二步，导入与主题无关的所有通用样式（如定位，尺寸等）。

```scss
@include mat-core();
```

> 一个应用应该只导入`mat-core()`一次，否则会生成重覆的样式代码。

第三步，确定主题颜色。

```scss
$awesome-theme-primary: mat-palette($mat-indigo);
$awesome-theme-accent:  mat-palette($mat-pink, A200, A100, A400);

// The warn palette is optional (defaults to red).
$awesome-theme-warn:    mat-palette($mat-red);
```

工具函数`mat-palette()`的定义下：

```scss
// Creates a map of hues to colors for a theme. This is used to define a theme palette in terms
// of the Material Design hues.
// @param $color-map
// @param $primary
// @param $lighter
@function mat-palette($base-palette, $default: 500, $lighter: 100, $darker: 700) {
  $result: map_merge($base-palette, (
    default: map-get($base-palette, $default),
    lighter: map-get($base-palette, $lighter),
    darker: map-get($base-palette, $darker),

    default-contrast: mat-contrast($base-palette, $default),
    lighter-contrast: mat-contrast($base-palette, $lighter),
    darker-contrast: mat-contrast($base-palette, $darker)
  ));

  // For each hue in the palette, add a "-contrast" color to the map.
  @each $hue, $color in $base-palette {
    $result: map_merge($result, (
      '#{$hue}-contrast': mat-contrast($base-palette, $hue)
    ));
  }

  @return $result;
}
```

第四步，创建主题配置对象（各种颜色的配置信息）。

这里，我们需要使用`Angular Material`主题系统提供的两种方式之一：

- 创建浅色主题 `mat-light-theme($primary, $accent, $warn: mat-palette($mat-red))`
- 创建深色主题 `mat-dark-theme($primary, $accent, $warn: mat-palette($mat-red))`

假设我们现在正在创建的是浅色主题。

```scss
$awesome-theme: mat-light-theme(
  $awesome-theme-primary,
  $awesome-theme-accent,
  $awesome-theme-warn
);
```

目前为止，我们有了主题颜色的配置信息，但是还没有生成具体的CSS样式。继续。

第五步，将主题配置信息传给每个`Angular Material`标准组件，并生成具体CSS样式。

`Angular Material`提供了很多组件，因此`Angular Material`提供了一个帮助方法，方便一次性配置所有组件的主题。

这也是一种良好的组织架构。

```scss
@include angular-material-theme($awesome-theme);
```

这个方法实际做的事情如下：

```scss
@mixin angular-material-theme($theme) {
  @include mat-core-theme($theme);
  @include mat-autocomplete-theme($theme);
  @include mat-badge-theme($theme);
  @include mat-bottom-sheet-theme($theme);
  @include mat-button-theme($theme);

  // ... 所有组件

  @include mat-snack-bar-theme($theme);
}
```

若只想要给部分`Angular Material`组件应用主题，
那就不能使用`@include angular-material-theme($awesome-theme);`。

只需单独导入想要定制的组件即可：

```scss
// dont use this
// @include angular-material-theme($awesome-theme);

// include the components you wan't to customise
@include mat-core-theme($theme);
@include mat-button-theme($theme);
```

第六步，代码组织。

:tada: 至此，我们已经自定义了一套浅色主题。

我们可以把上面的所有代码放在`styles.scss`文件中（用Angular CLI生成的应用）。

## 为你的自定义组件定制主题

所谓的自定义组件是非`Angular Material`提供的组件，如为公司项目编写的组件。

**若要使用Angular Material的主题系统，需使用Sass编写样式。**

现假设我们写了一个叫做`Breadcrumb`的自定义组件。目录文件结构应为：

```txt
breadcrumb/
|-- _breadcrumb-theme.scss
|-- breadcrumb.scss
```

我们将与主题无关的样式放在`breadcrumb.scss`文件中。如布局，定位和尺寸等样式。

我们将在`_breadcrumb-theme.scss`文件里定义所有主题相关的样式。

第一步，导入`Angular Material`提供的定制主题`Sass`工具库。

```scss
@import '~@angular/material/theming';
```

第二步，提供组件的主题`@mixin`。

```scss
@mixin sample-breadcrumb-theme($theme) {
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);

  .breadcrumb-item {
    border-color: mat-color($primary, accent);
  }
}
```

第三步，提供组件字体的`@mixin`。

```scss
@mixin sample-breadcrumb-typography($config) {
  .breadcrumb-item {
    font-size: mat-font-size($config, body-1);
  }
}
```

第四步，导入这个主题。

在全局的`styles.scss`文件里导入这个主题。

```scss
@include angular-material-theme($awesome-theme);
@include sample-breadcrumb-theme($awesome-theme);
```

## 同时定制多套主题

用上面介绍的方法，定义多套主题，如`$awesome-theme`和`$awesome-dark-theme`。

### 主题定义

```scss
// 主题1
@include angular-material-theme($awesome-theme);

// 主题2
.awesome-dark-theme {
  @include angular-material-theme($awesome-dark-theme);
}
```

### 主题切换

如上定义后，所有在`.awesome-dark-theme`CSS类里面的元素都会使用主题2。

因此，可以使用Angular元素的绑定`CSS class`，实现动态切换主题。

## 注意事项

- 若使用`Angular Material`主题系统，且没有使用`<mat-sidenav-container>`，那么需要在`<body>`标签上添加`mat-app-background`CSS类。
- 在使用像`Overlay`这类会在全局添加DOM元素的组件时,要[手动应用CSS类](https://material.angular.io/guide/theming#multiple-themes)。
