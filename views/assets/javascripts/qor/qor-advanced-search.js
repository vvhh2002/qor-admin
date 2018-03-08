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
        EVENT_ENABLE = 'enable.' + NAMESPACE,
        EVENT_DISABLE = 'disable.' + NAMESPACE,
        EVENT_CLICK = 'click.' + NAMESPACE,
        EVENT_SUBMIT = 'submit.' + NAMESPACE;

    function getExtraPairs(names) {
        let pairs = decodeURIComponent(window.location.search.substr(1)).split('&'),
            pairsObj = {},
            pair,
            i;

        if (pairs.length == 1 && pairs[0] == '') {
            return false;
        }

        for (i in pairs) {
            if (pairs[i] === '') continue;

            pair = pairs[i].split('=');
            pairsObj[pair[0]] = pair[1];
        }

        names.forEach(function(item) {
            delete pairsObj[item];
        });

        return pairsObj;
    }

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
            this.$element.on(EVENT_SUBMIT, 'form', this.submit.bind(this));
        },

        submit: function(e) {
            let $form = $(e.target),
                formArr = $form.find('input[name],select[name]'),
                names = [],
                extraPairs;

            formArr.each(function() {
                names.push($(this).attr('name'));
            });

            extraPairs = getExtraPairs(names);

            if (!$.isEmptyObject(extraPairs)) {
                for (let key in extraPairs) {
                    if (extraPairs.hasOwnProperty(key)) {
                        $form.prepend(`<input type="hidden" name=${key} value=${extraPairs[key]}  />`);
                    }
                }
            }

            this.$element.find('.qor-advanced-filter__dropdown').hide();

            this.removeEmptyPairs($form);
        },

        removeEmptyPairs: function($form) {
            $form.find('advanced-filter-group').each(function() {
                let $this = $(this),
                    $input = $this.find('[filter-required]');
                if ($input.val() == '') {
                    $this.remove();
                }
            });
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
            let $this = $(this),
                data = $this.data(NAMESPACE),
                fn;

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
        let selector = '[data-toggle="qor.advancedsearch"]',
            options;

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
