System.register(['angular2/core', './service', './copy-textarea'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, service_1, copy_textarea_1;
    var Base65536;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (copy_textarea_1_1) {
                copy_textarea_1 = copy_textarea_1_1;
            }],
        execute: function() {
            Base65536 = (function () {
                function Base65536(encoder) {
                    this.encoder = encoder;
                    this.encoded = '';
                    this.decoded = '';
                    this.error = '';
                }
                Base65536.prototype.setEncoded = function (src) {
                    try {
                        this.encoded = this.encoder.cleanse(src);
                        this.decoded = this.encoder.decode(this.encoded);
                        this.error = '';
                    }
                    catch (e) {
                        console.log(e);
                        this.error = 'An Error occurred :(';
                    }
                };
                Base65536.prototype.setDecoded = function (dest) {
                    try {
                        this.decoded = this.encoder.cleanse(dest);
                        this.encoded = this.encoder.encode(this.decoded);
                        this.error = '';
                    }
                    catch (e) {
                        console.log(e);
                        this.error = 'An Error occurred :(';
                    }
                };
                Base65536 = __decorate([
                    core_1.Component({
                        selector: 'base65536',
                        styles: [
                            'copy-textarea {display: block;margin-bottom:3em}'
                        ],
                        template: "\n  <div class=\"ui form\">\n    <copy-textarea\n      [placeholder]=\"'Original Text Here!'\"\n      [text]=\"decoded\"\n      (changed)=\"setDecoded($event)\">\n    </copy-textarea>\n    <copy-textarea\n      [placeholder]=\"'Encoded Text Here!'\"\n      [text]=\"encoded\"\n      (changed)=\"setEncoded($event)\">\n    </copy-textarea>\n    <h2 class=\"ui message error visible\" *ngIf=\"error\">\n      <header class=\"header\">{{error}}</header>\n    </h2>\n  </div>\n  ",
                        directives: [copy_textarea_1.CopyTextarea]
                    }), 
                    __metadata('design:paramtypes', [service_1.EncoderService])
                ], Base65536);
                return Base65536;
            })();
            exports_1("Base65536", Base65536);
        }
    }
});
//# sourceMappingURL=app.js.map