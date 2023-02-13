sap.ui.define([
    "student00/com/sap/training/ux402/qunit/ux402_qunit/model/Formatter"
], function(Formatter) {
    "use strict";

    
    QUnit.module("Formatter", {
        beforeEach: function () {
            this._formatter = Formatter;
        }
    });

    QUnit.test("Test the pretty date implementation", function(assert) {

        var now= "2008/01/28 22:25:00";
        assert.equal(this._formatter.prettyDate(now,"2008/01/28 22:25:00" ), "just now");
        assert.equal(this._formatter.prettyDate(now,"2008/01/28 22:24:00" ), "1 minute ago");
        assert.equal(this._formatter.prettyDate(now,"2008/01/28 22:22:00" ), "3 minutes ago");
        assert.equal(this._formatter.prettyDate(now,"2008/01/28 21:25:00" ), "1 hour ago");
        assert.equal(this._formatter.prettyDate(now,"2008/01/27 22:25:00" ), "Yesterday");
        assert.equal(this._formatter.prettyDate(now,"2008/01/26 22:25:00" ), "2 days ago");
        assert.equal(this._formatter.prettyDate(now,"2007/01/26 22:25:00" ), undefined);        



    });
});