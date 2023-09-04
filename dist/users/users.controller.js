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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dto/create-user.dto");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const users_model_1 = require("./users.model");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const add_role_dto_1 = require("./dto/add-role.dto");
const ban_user_dto_1 = require("./dto/ban-user.dto");
const platform_express_1 = require("@nestjs/platform-express");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(userDto) {
        return this.usersService.createUser(userDto);
    }
    getAll() {
        return this.usersService.getAllUsers();
    }
    getOne(params) {
        return this.usersService.getUserById(params.id);
    }
    getUsersForName({ email }) {
        return this.usersService.getUserByEmail(email);
    }
    addRole(dto) {
        return this.usersService.addRole(dto);
    }
    ban(dto) {
        return this.usersService.ban(dto);
    }
    update(params, image) {
        return this.usersService.update(+params.id, image);
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiOperation({ summary: 'Создание пользователя' }),
    swagger_1.ApiResponse({ status: 200, type: users_model_1.User }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Получить всех пользователей' }),
    swagger_1.ApiResponse({ status: 200, type: [users_model_1.User] }),
    roles_auth_decorator_1.Roles("ADMIN"),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAll", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], UsersController.prototype, "getOne", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post("get-users"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsersForName", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiOperation({ summary: 'Выдать роль' }),
    swagger_1.ApiResponse({ status: 200 }),
    roles_auth_decorator_1.Roles("ADMIN"),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.Post('/role'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "addRole", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiOperation({ summary: 'Забанить пользователя' }),
    swagger_1.ApiResponse({ status: 200 }),
    roles_auth_decorator_1.Roles("ADMIN"),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.Post('/ban'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ban_user_dto_1.BanUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "ban", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Patch(':id'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image')),
    __param(0, common_1.Param()), __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
UsersController = __decorate([
    swagger_1.ApiTags('Пользователи'),
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map