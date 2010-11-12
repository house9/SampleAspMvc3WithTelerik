// define the behaviours of the sample FOUR functionality
var sampleFourConstructor = function (spec) {
    var that = {};

    that.index = spec.startingIndex;

    // ***************************************************
    that.getSpec = function () {
        return spec; // just for debugging
    };

    // ***************************************************
    that.initialize = function () {
        log('initialize sampleFour');
        $('#' + spec.selectors.link).click(function () {
            that.addNew();
        });

        //        // add new for each existing data item
        //        for (var i = 0; i < spec.data.count; i++) {
        //            that.addNew(spec.data);
        //        }

        //        // if no existing data items then add one 
        //        if (spec.data.count === 0) {
        //            that.addNew();
        //        }
    };

    // ***************************************************
    that.addNew = function () {
        log('addNew', this, arguments);

        // make an ajax call and get response for NumericTextBoxAction
        $.ajax({
            type: "GET",
            url: spec.url,
            dataType: "html",
            data: {
                index: that.index
            },
            success: function (data, textStatus) {
                log("success");
                $('#' + spec.selectors.target).append(data);
            },
            error: function (result) {
                log("Error", result);
            }
        });

        // increment so that the next row added has unique ids
        that.increment();
    };

    // ***************************************************
    that.increment = function () {
        that.index++;
    };

    return that;
};