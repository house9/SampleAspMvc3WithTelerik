// define the behaviours of the sample three functionality
// NOTE: this is a cut and past of sample two with slight modifications
var sampleThreeConstructor = function (spec) {
    var that = {};

    that.index = 0;

    // ***************************************************
    that.getSpec = function () {
        return spec; // just for debugging
    };

    // ***************************************************
    that.initialize = function () {
        log('initialize sampleThree');
        $('#' + spec.selectors.link).click(function () {
            that.addNew();
        });

        // add new for each existing data item
        for (var i = 0; i < spec.data.count; i++) {
            that.addNew(spec.data);
        }

        // if no existing data items then add one 
        if (spec.data.count === 0) {
            that.addNew();
        }
    };

    // ***************************************************
    that.addNew = function (data) {
        log('addNew', this, arguments);

        // set up data to replace in the template
        var clientData = [
            { templateIndex: that.index }
        ];
        var targetSelector = '#' + spec.selectors.target;

        // 1) copy new control markup from the template
        $('#' + spec.selectors.markUpTemplate).tmpl(clientData).appendTo(targetSelector);
        // 2) copy the options from our 'template' Telerik numerictextbox
        // relies on hack adding originalOptions to telerik.textbox.js
        var options = $('#' + spec.selectors.optionsTemplate).data('tTextBox').originalOptions;
        var numericTextBoxOptions = $.extend(true, {}, options); // clone these so we can change values if we need
        // 3) 'upgrade' the newly created div to a Telerik numerictextbox
        var numericTextBox = $(targetSelector + ' div:last').tTextBox(numericTextBoxOptions);
        // 4) optionally set the value; NOTE updating the options value didn't seem to work???
        if (data !== undef) {
            var key = spec.dataPrefix + that.index; // SampleThree_0 for example
            if (data[key] !== undef) {
                if (data[key] <= numericTextBox.data('tTextBox').maxValue) {
                    numericTextBox.data('tTextBox').value(data[key]);
                }
            }
        }

        // increment so that the next row added has unique ids
        that.increment();
    };

    // ***************************************************
    that.increment = function () {
        that.index++;
    };

    return that;
};