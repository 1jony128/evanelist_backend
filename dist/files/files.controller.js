"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticController = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
let StaticController = class StaticController {
    async serveFile(fileName, res) {
        const filePath = path.resolve(__dirname, '..', 'static', fileName);
        const stream = fs.createReadStream(filePath);
        stream.pipe(res);
    }
};
__decorate([
    common_1.Get(':fileName'),
    __param(0, common_1.Param('fileName')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StaticController.prototype, "serveFile", null);
StaticController = __decorate([
    common_1.Controller('static')
], StaticController);
exports.StaticController = StaticController;
//# sourceMappingURL=files.controller.js.map