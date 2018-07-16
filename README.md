# jquery-classIconSwitcher
A simple CSS-powered animated icon changer

# Usage
Setup:
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

# Notes
The element does not need the icon classes as these will be set during setup.

# Dependencies
jQuery.
