System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CopyButton, CopyTextarea;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CopyButton = (function () {
                function CopyButton() {
                    this.buttonStatus = 'Copy!';
                }
                CopyButton.prototype.copy = function () {
                    var _this = this;
                    var range = document.createRange();
                    range.selectNode(this.textElem);
                    window.getSelection().addRange(range);
                    var success = document.execCommand('copy');
                    this.buttonStatus = success ? 'Copied!' : 'Oh no...';
                    window.getSelection().removeAllRanges();
                    setTimeout(function () { return _this.buttonStatus = 'Copy!'; }, 1000);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Element)
                ], CopyButton.prototype, "textElem", void 0);
                CopyButton = __decorate([
                    core_1.Component({
                        selector: 'copy-button',
                        template: "\n  <div class=\"ui fluid button\" (click)=\"copy()\">\n    {{buttonStatus}}\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CopyButton);
                return CopyButton;
            })();
            CopyTextarea = (function () {
                function CopyTextarea(eleRef) {
                    this.changed = new core_1.EventEmitter();
                    this.toCopy = eleRef.nativeElement.querySelector('textarea');
                }
                Object.defineProperty(CopyTextarea.prototype, "_text", {
                    get: function () {
                        return this.text;
                    },
                    set: function (str) {
                        this.text = str;
                        this.changed.next(str);
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], CopyTextarea.prototype, "text", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], CopyTextarea.prototype, "placeholder", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], CopyTextarea.prototype, "changed", void 0);
                CopyTextarea = __decorate([
                    core_1.Component({
                        selector: 'copy-textarea',
                        template: "\n  <textarea [(ngModel)]=\"_text\" [placeholder]=\"placeholder\"></textarea>\n  <copy-button [textElem]=\"toCopy\"></copy-button>\n  ",
                        directives: [CopyButton]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], CopyTextarea);
                return CopyTextarea;
            })();
            exports_1("CopyTextarea", CopyTextarea);
        }
    }
});
//# sourceMappingURL=copy-textarea.js.map