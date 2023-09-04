"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupModule = void 0;
const common_1 = require("@nestjs/common");
const group_service_1 = require("./group.service");
const group_controller_1 = require("./group.controller");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("../users/users.model");
const auth_module_1 = require("../auth/auth.module");
const users_module_1 = require("../users/users.module");
const user_groups_model_1 = require("./entities/user-groups.model");
const group_model_1 = require("./entities/group.model");
const user_groups_service_1 = require("./user-groups.service");
const roles_module_1 = require("../roles/roles.module");
const access_key_model_1 = require("../access-key/entities/access-key.model");
const access_key_service_1 = require("../access-key/access-key.service");
let GroupModule = class GroupModule {
};
GroupModule = __decorate([
    common_1.Module({
        controllers: [group_controller_1.GroupController],
        providers: [group_service_1.GroupService, user_groups_service_1.UserGroupService, access_key_service_1.AccessKeyService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([users_model_1.User, user_groups_model_1.UserGroups, group_model_1.Group, access_key_model_1.AccessKey]),
            common_1.forwardRef(() => auth_module_1.AuthModule),
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
        ],
        exports: [group_service_1.GroupService],
    })
], GroupModule);
exports.GroupModule = GroupModule;
//# sourceMappingURL=group.module.js.map