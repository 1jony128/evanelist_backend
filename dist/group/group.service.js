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
exports.GroupService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const roles_model_1 = require("../roles/roles.model");
const create_role_dto_1 = require("../roles/dto/create-role.dto");
const group_model_1 = require("./entities/group.model");
const user_to_group_dto_1 = require("./dto/user-to-group.dto");
const roles_service_1 = require("../roles/roles.service");
const users_service_1 = require("../users/users.service");
const user_groups_service_1 = require("./user-groups.service");
const access_key_service_1 = require("../access-key/access-key.service");
const sign_group_dto_1 = require("./dto/sign-group.dto");
let GroupService = class GroupService {
    constructor(groupRepository, userService, userGroupService, accessKeyService) {
        this.groupRepository = groupRepository;
        this.userService = userService;
        this.userGroupService = userGroupService;
        this.accessKeyService = accessKeyService;
    }
    async create(dto) {
        try {
            const group = await this.groupRepository.create(dto);
            if (!group) {
                throw new common_1.HttpException("Группа не создана", common_1.HttpStatus.NOT_FOUND);
            }
            const accessKey = await this.accessKeyService.generateAccessKey(group.id);
            return {
                accessKey,
                group,
            };
        }
        catch (e) {
            console.log(e);
        }
    }
    async signGroup(dto) {
        try {
            const accessKey = await this.accessKeyService.getGroupByAccessKey(dto.access_key);
            if (!accessKey) {
                throw new common_1.HttpException("Группа не найдена", common_1.HttpStatus.NOT_FOUND);
            }
            const sign = this.addUserToGroup({
                groupId: String(accessKey.accessKey.groupId),
                userId: String(dto.userId),
            });
            const destroyAccessKey = await this.accessKeyService.destroyAccessKey(accessKey.accessKey);
            if (!destroyAccessKey) {
                throw new common_1.HttpException("Ошибка удаления ключа", common_1.HttpStatus.NOT_FOUND);
            }
            const updateAccessKey = await this.accessKeyService.generateAccessKey(accessKey.accessKey.groupId);
            return {
                accessKey,
                sign,
            };
        }
        catch (e) {
            console.log(e);
        }
    }
    async getAccessKeyByGroup(groupId) {
        const accessKey = await this.accessKeyService.getAccessKey(groupId);
        return accessKey;
    }
    async getByValue(name) {
        const group = await this.groupRepository.findOne({ where: { name } });
        return group;
    }
    async addUserToGroup(dto) {
        console.log(dto);
        const group = await this.groupRepository.findByPk(dto.groupId);
        const user = await this.userService.getUserById(dto.userId);
        const groups = await this.userGroupService.findAllByGroupId(group.id);
        if (group && user) {
            await group.$add("user", user.id);
            return groups;
        }
        throw new common_1.HttpException("Пользователь или группа не найдены", common_1.HttpStatus.NOT_FOUND);
    }
    async getGroupUsers(groupId) {
        try {
            const group = await this.groupRepository.findByPk(groupId);
            const usersIds = await this.userGroupService.findAllByGroupId(group.id);
            const users = await this.userService.getAllUsersById(usersIds.map((item) => item.userId));
            console.log(users);
            if (users) {
                return users;
            }
            throw new common_1.HttpException("Пользователь или группа не найдены", common_1.HttpStatus.NOT_FOUND);
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException("Пользователь или группа не найдены", common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getUserGroups(userId) {
        try {
            const user = await this.userService.getUserById(userId);
            const groupsIds = await this.userGroupService.findAllByUserId(user.id);
            const ids = groupsIds.map((item) => item.groupId);
            const groups = await this.groupRepository.findAll({
                attributes: ["id", "name"],
                where: { id: ids },
            });
            if (groups) {
                return groups;
            }
            throw new common_1.HttpException("Пользователь или группа не найдены", common_1.HttpStatus.NOT_FOUND);
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException("Пользователь или группа не найдены", common_1.HttpStatus.NOT_FOUND);
        }
    }
    async findAll() {
        const group = await this.groupRepository.findAll({
            attributes: ["id", "name"],
            include: { all: true },
        });
        return group;
    }
    async getAllGroupsById(ids) {
        const group = await this.groupRepository.findAll({
            attributes: ["id", "name"],
            where: { id: ids },
        });
        return group;
    }
    async getGroupById(id) {
        const group = await this.groupRepository.findOne({
            where: { id },
        });
        return group;
    }
    async update(id, updateGroupDto) {
        return `This action updates a #${id} group`;
    }
    async remove(id) {
        return `This action removes a #${id} group`;
    }
};
GroupService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(group_model_1.Group)),
    __metadata("design:paramtypes", [Object, users_service_1.UsersService,
        user_groups_service_1.UserGroupService,
        access_key_service_1.AccessKeyService])
], GroupService);
exports.GroupService = GroupService;
//# sourceMappingURL=group.service.js.map