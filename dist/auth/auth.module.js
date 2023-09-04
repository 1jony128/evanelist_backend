"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const users_module_1 = require("../users/users.module");
const jwt_1 = require("@nestjs/jwt");
const access_key_service_1 = require("../access-key/access-key.service");
const sequelize_1 = require("@nestjs/sequelize");
const access_key_model_1 = require("../access-key/entities/access-key.model");
const group_service_1 = require("../group/group.service");
const group_model_1 = require("../group/entities/group.model");
const user_groups_service_1 = require("../group/user-groups.service");
const user_groups_model_1 = require("../group/entities/user-groups.model");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, access_key_service_1.AccessKeyService, group_service_1.GroupService, user_groups_service_1.UserGroupService],
        imports: [
            common_1.forwardRef(() => users_module_1.UsersModule),
            sequelize_1.SequelizeModule.forFeature([access_key_model_1.AccessKey, group_model_1.Group, user_groups_model_1.UserGroups]),
            jwt_1.JwtModule.register({
                secret: process.env.PRIVATE_KEY || "SECRET",
                signOptions: {
                    expiresIn: "122h",
                },
            }),
        ],
        exports: [auth_service_1.AuthService, jwt_1.JwtModule],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map