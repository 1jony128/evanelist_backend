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
exports.GroupController = void 0;
const common_1 = require("@nestjs/common");
const group_service_1 = require("./group.service");
const create_group_dto_1 = require("./dto/create-group.dto");
const update_group_dto_1 = require("./dto/update-group.dto");
const user_to_group_dto_1 = require("./dto/user-to-group.dto");
const roles_guard_1 = require("../auth/roles.guard");
const sign_group_dto_1 = require("./dto/sign-group.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
let GroupController = class GroupController {
    constructor(groupService) {
        this.groupService = groupService;
    }
    create(createGroupDto) {
        return this.groupService.create(createGroupDto);
    }
    signGroup(signGroupDto) {
        return this.groupService.signGroup(signGroupDto);
    }
    addUserToGroup(dto) {
        return this.groupService.addUserToGroup(dto);
    }
    getAccessKeyByGroup(params) {
        return this.groupService.getAccessKeyByGroup(+params.id);
    }
    getGroupUsers(params) {
        return this.groupService.getGroupUsers(+params.id);
    }
    getUserGroups(params) {
        return this.groupService.getUserGroups(params.id);
    }
    findAll() {
        return this.groupService.findAll();
    }
    getOne(params) {
        return this.groupService.findOne(+params.id);
    }
    update(id, updateGroupDto) {
        return this.groupService.update(+id, updateGroupDto);
    }
    remove(id) {
        return this.groupService.remove(+id);
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post("create"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_group_dto_1.CreateGroupDto]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "create", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post("sign-group"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_group_dto_1.SignGroupDto]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "signGroup", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post("add-user"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_to_group_dto_1.UserGroupDto]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "addUserToGroup", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(":id/get-key-by-group"),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], GroupController.prototype, "getAccessKeyByGroup", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.Get(":id/get-users"),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], GroupController.prototype, "getGroupUsers", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(":id/get-groups"),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], GroupController.prototype, "getUserGroups", null);
__decorate([
    roles_auth_decorator_1.Roles("ADMIN"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "findAll", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(":id"),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], GroupController.prototype, "getOne", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Patch(":id"),
    __param(0, common_1.Param("id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_group_dto_1.UpdateGroupDto]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "update", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Delete(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "remove", null);
GroupController = __decorate([
    common_1.Controller("group"),
    __metadata("design:paramtypes", [group_service_1.GroupService])
], GroupController);
exports.GroupController = GroupController;
//# sourceMappingURL=group.controller.js.map