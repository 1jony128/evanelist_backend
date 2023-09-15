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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_model_1 = require("./users.model");
const sequelize_1 = require("@nestjs/sequelize");
const roles_service_1 = require("../roles/roles.service");
const update_group_dto_1 = require("../group/dto/update-group.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const update_avatar_user_dto_1 = require("./dto/update-avatar-user.dto");
const files_service_1 = require("../files/files.service");
let UsersService = class UsersService {
    constructor(userRepository, roleService, fileService) {
        this.userRepository = userRepository;
        this.roleService = roleService;
        this.fileService = fileService;
    }
    async createUser(dto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue("USER");
        await user.$set("roles", [role.id]);
        user.roles = [role];
        return user;
    }
    async getAllUsers() {
        return await this.userRepository.findAll({ include: { all: true } });
    }
    async getAllUsersById(ids) {
        return await this.userRepository.findAll({
            attributes: ["id", "name"],
            where: { id: ids },
        });
    }
    async getUserByEmail(email) {
        return await this.userRepository.findOne({
            where: { email },
            include: { all: true },
        });
    }
    async getUserById(userId) {
        const user = await this.userRepository.findOne({
            where: { id: userId },
            attributes: ['id', 'name', "email", "avatar", "geo_lon", "geo_lat"],
        });
        return user;
    }
    async addRole(dto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if (role && user) {
            await user.$add("role", role.id);
            return dto;
        }
        throw new common_1.HttpException("Пользователь или роль не найдены", common_1.HttpStatus.NOT_FOUND);
    }
    async ban(dto) {
        const user = await this.userRepository.findByPk(dto.userId);
        if (!user) {
            throw new common_1.HttpException("Пользователь не найден", common_1.HttpStatus.NOT_FOUND);
        }
        user.banned = true;
        user.banReason = dto.banReason;
        await user.save();
        return user;
    }
    async update(id, image) {
        try {
            const user = await this.userRepository.findByPk(id);
            const fileName = await this.fileService.createFile(image);
            await user.update({ avatar: fileName });
            return fileName;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(users_model_1.User)),
    __metadata("design:paramtypes", [Object, roles_service_1.RolesService,
        files_service_1.FilesService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map