System.register(['angular2/platform/browser', './app', './service'], function(exports_1) {
    var browser_1, app_1, service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.Base65536, [service_1.EncoderService]);
        }
    }
});
//# sourceMappingURL=boot.js.map