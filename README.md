# jquery-classIconSwitcher
A simple CSS-powered animated icon changer.  Works with any icon system that uses css classes to add the icon to an element, e.g. glyphicon or font-awesome.

# Usage
Setup:
```html
<span class="icon"></span>
```
```javascript
$('.icon').classIconSwitcher(options);
```

Trigger the icon to switch icon
```javascript
$('.icon').classIconSwitcher('trigger');
```

Manually make the icon go to the end icon
```javascript
$('.icon').classIconSwitcher('toEnd');
```

Manually make the icon go to the start icon
```javascript
$('.icon').classIconSwitcher('toStart');
```

# Options
Option|Description|Default
---|---|---
iconClass|Generic class(es) required by the icons.|Default value: 'glyphicon'.
startIcon|The start icon.|Default value: 'glyphicon-ok'.
endIcon|The icon transitioned to.|Default value: 'glyphicon-remove'.
timing|The total animation length.|Default value: 1.0 (s).

# CSS Customisation
Styles can be added to the animation by styling the start and/or end icon classes
```html
<style>
  .icon.glyphicon.glyphicon-pencil {
    color: darkred;
  }
  .icon.glyphicon.glyphicon-ok {
    color: darkblue;
  }
</style>
<span class="icon"></span>
```
```javascript
$('.icon').classIconSwitcher({ iconClass: 'glyphicon', startIcon: 'glyphicon-pencil', endIcon: 'glyphicon-ok' });
```

# Knockout
The class icon switcher can be used with [Knockout JS](http://knockoutjs.com/)
```html
<span data-bind="classIconSwitcher: valueOk, classIconSwitcherOptions: { iconClass: 'glyphicon', startIcon: 'glyphicon-pencil', endIcon: 'glyphicon-ok', timing: 0.3 }"></span>
```

# Notes
The element does not need the icon classes as these will be set during setup.

# Dependencies
jQuery.
