(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node / CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals.
        factory(jQuery);
    }
})(function($) {
    'use strict';

    let NAMESPACE = 'qor.advancedsearch',
        EVENT_FILTER_CHANGE = 'filterChanged.' + NAMESPACE,
        EVENT_ENABLE = 'enable.' + NAMESPACE,
        EVENT_DISABLE = 'disable.' + NAMESPACE,
        EVENT_CLICK = 'click.' + NAMESPACE,
        EVENT_CHANGE = 'change.' + NAMESPACE;

    function QorAdvancedSearch(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, QorAdvancedSearch.DEFAULTS, $.isPlainObject(options) && options);
        this.init();
    }

    QorAdvancedSearch.prototype = {
        constructor: QorAdvancedSearch,

        init: function() {
            this.bind();
        },

        bind: function() {
            // this.$element
        },

        unbind: function() {},

        destroy: function() {
            this.unbind();
            this.$element.removeData(NAMESPACE);
        }
    };

    QorAdvancedSearch.DEFAULTS = {};

    QorAdvancedSearch.plugin = function(options) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data(NAMESPACE);
            var fn;

            if (!data) {
                if (/destroy/.test(options)) {
                    return;
                }

                $this.data(NAMESPACE, (data = new QorAdvancedSearch(this, options)));
            }

            if (typeof options === 'string' && $.isFunction((fn = data[options]))) {
                fn.apply(data);
            }
        });
    };

    $(function() {
        var selector = '[data-toggle="qor.advancedsearch"]';
        var options = {
            label: 'a',
            group: 'select'
        };

        $(document)
            .on(EVENT_DISABLE, function(e) {
                QorAdvancedSearch.plugin.call($(selector, e.target), 'destroy');
            })
            .on(EVENT_ENABLE, function(e) {
                QorAdvancedSearch.plugin.call($(selector, e.target), options);
            })
            .triggerHandler(EVENT_ENABLE);
    });

    return QorAdvancedSearch;
});
