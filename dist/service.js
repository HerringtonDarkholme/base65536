System.register(['angular2/core', 'base65536', 'buffer'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, base65536, buffer;
    var Buffer, EncoderService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (base65536_1) {
                base65536 = base65536_1;
            },
            function (buffer_1) {
                buffer = buffer_1;
            }],
        execute: function() {
            Buffer = buffer.Buffer;
            EncoderService = (function () {
                function EncoderService() {
                }
                EncoderService.prototype.encode = function (source) {
                    var sourceBuffer = new Buffer(source);
                    return base65536.encode(sourceBuffer);
                };
                EncoderService.prototype.decode = function (dest) {
                    return base65536.decode(dest).toString();
                };
                EncoderService.prototype.cleanse = function (str) {
                    return str.trim().replace(/[\u200B-\u200D\uFEFF]/g, '');
                };
                EncoderService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], EncoderService);
                return EncoderService;
            })();
            exports_1("EncoderService", EncoderService);
        }
    }
});
//# sourceMappingURL=service.js.map