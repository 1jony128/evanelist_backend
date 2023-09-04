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
exports.EvaEventController = void 0;
const common_1 = require("@nestjs/common");
const create_eva_event_dto_1 = require("./dto/create-eva-event.dto");
const eva_event_service_1 = require("./eva-event.service");
const find_by_id_eva_event_dto_1 = require("./dto/find-by-id-eva-event.dto");
const find_group_id_eva_event_dto_1 = require("./dto/find-group-id-eva-event.dto");
const update_group_dto_1 = require("../group/dto/update-group.dto");
const update_eva_event_dto_1 = require("./dto/update-eva-event.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let EvaEventController = class EvaEventController {
    constructor(evaEventService) {
        this.evaEventService = evaEventService;
    }
    createEvaEvent(dto) {
        return this.evaEventService.create(dto);
    }
    getAllEvaEvent() {
        return this.evaEventService.getAllEvaEvent();
    }
    getEvaEventByUserId(dto) {
        return this.evaEventService.getByUserId(dto);
    }
    getEvaEventByGroupId(dto) {
        return this.evaEventService.getByGroupId(dto);
    }
    update(params, updateEvaEventDto) {
        return this.evaEventService.update(params.id, updateEvaEventDto);
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_eva_event_dto_1.CreateEvaEventDto]),
    __metadata("design:returntype", void 0)
], EvaEventController.prototype, "createEvaEvent", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EvaEventController.prototype, "getAllEvaEvent", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post('/get-by-id'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_by_id_eva_event_dto_1.FindByIdEvaEventDto]),
    __metadata("design:returntype", void 0)
], EvaEventController.prototype, "getEvaEventByUserId", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post('/get-group-by-id'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_group_id_eva_event_dto_1.FindByGroupIdEvaEventDto]),
    __metadata("design:returntype", void 0)
], EvaEventController.prototype, "getEvaEventByGroupId", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Patch(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_eva_event_dto_1.UpdateEvaEventDto]),
    __metadata("design:returntype", void 0)
], EvaEventController.prototype, "update", null);
EvaEventController = __decorate([
    common_1.Controller('eva-event'),
    __metadata("design:paramtypes", [eva_event_service_1.EvaEventService])
], EvaEventController);
exports.EvaEventController = EvaEventController;
//# sourceMappingURL=eva-event.controller.js.map