; 'use strict';
(function (document, window, $, ko) {
    ko.bindingHandlers.classIconSwitcher = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            $(element).classIconSwitcher(allBindings.get('classIconSwitcherOptions'));
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var value = valueAccessor()();

            if (value) {
                $(element).classIconSwitcher('toEnd');
            }
            else {
                $(element).classIconSwitcher('toStart');
            }

        }
    };
}(document, window, jQuery, ko));
