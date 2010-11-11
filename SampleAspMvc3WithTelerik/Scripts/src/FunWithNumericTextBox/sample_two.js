// define the behaviours of the sample two functionality
var sampleTwoConstructor = function (spec) {
    var that = {};

    that.index = 0;

    // ***************************************************
    that.getSpec = function () {
        return spec; // just for debugging
    };

    // ***************************************************
    that.initialize = function () {
        log('initialize sampleTwo');
        $('#' + spec.selectors.link).click(function () {
            that.addNew();
        });

        // here we would bind all existing data, for now 1 blank item
        that.addNew();
    };

    // ***************************************************
    that.addNew = function () {
        log('addNew sampleTwo');

        // set up data to replace in the template
        var clientData = [
            { templateIndex: that.index }
        ];
        var targetSelector = '#' + spec.selectors.target;

        // 1) copy new control markup from the template
        $('#' + spec.selectors.markUpTemplate).tmpl(clientData).appendTo(targetSelector);
        // 2) copy the options from our 'template' Telerik numerictextbox
        // relies on hack adding originalOptions to telerik.textbox.js
        var numericTextBoxOptions = $('#' + spec.selectors.optionsTemplate).data('tTextBox').originalOptions;
        // 3) 'upgrade' the newly created div to a Telerik numerictextbox
        $(targetSelector + ' div:last').tTextBox(numericTextBoxOptions);

        // increment so that the next row added has unique ids
        that.increment();
    };

    // ***************************************************
    that.increment = function () {
        that.index++;
    };

    return that;
};