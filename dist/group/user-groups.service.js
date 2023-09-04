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
exports.UserGroupService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const roles_model_1 = require("../roles/roles.model");
const create_role_dto_1 = require("../roles/dto/create-role.dto");
const group_model_1 = require("./entities/group.model");
const user_to_group_dto_1 = require("./dto/user-to-group.dto");
const roles_service_1 = require("../roles/roles.service");
const users_service_1 = require("../users/users.service");
const user_groups_model_1 = require("./entities/user-groups.model");
const users_model_1 = require("../users/users.model");
let UserGroupService = class UserGroupService {
    constructor(userGroupRepository, userService) {
        this.userGroupRepository = userGroupRepository;
        this.userService = userService;
    }
    async findAllByGroupId(groupId) {
        try {
            const group = await this.userGroupRepository.findAll({
                attributes: ['userId'],
                where: { groupId }
            });
            if (group) {
                return group;
            }
        }
        catch (e) {
            throw new common_1.HttpException('В этой группе нет пользователей', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async findAllByUserId(userId) {
        const groups = await this.userGroupRepository.findAll({
            attributes: ['groupId'],
            where: { userId }
        });
        if (groups) {
            return groups;
        }
        throw new common_1.HttpException('Пользователь не принадлежит ни одной группе', common_1.HttpStatus.NOT_FOUND);
    }
    async findAll() {
        return await this.userGroupRepository.findAll({ include: { all: true } });
    }
};
UserGroupService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(user_groups_model_1.UserGroups)),
    __metadata("design:paramtypes", [Object, users_service_1.UsersService])
], UserGroupService);
exports.UserGroupService = UserGroupService;
//# sourceMappingURL=user-groups.service.js.map