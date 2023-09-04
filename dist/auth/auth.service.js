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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
const auth_user_dto_1 = require("./dto/auth-user.dto");
const access_key_service_1 = require("../access-key/access-key.service");
const group_service_1 = require("../group/group.service");
let AuthService = class AuthService {
    constructor(userService, jwtService, accessKeyService, groupService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.accessKeyService = accessKeyService;
        this.groupService = groupService;
    }
    async login(userDto) {
        const user = await this.validateUser(userDto);
        if (!user) {
            throw new common_1.UnauthorizedException({
                message: "Некорректный емайл или пароль",
            });
        }
        const token = await this.generateToken(user);
        return {
            token: token.token,
            id: user.id,
        };
    }
    async registration(userDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email);
        console.log(candidate);
        if (candidate) {
            throw new common_1.HttpException("Пользователь с таким email существует", common_1.HttpStatus.BAD_REQUEST);
        }
        const { key_access } = userDto, userDtoWithoutKeyAccess = __rest(userDto, ["key_access"]);
        const access_key = key_access;
        const accessKey = await this.accessKeyService.getGroupByAccessKey(access_key);
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser(Object.assign(Object.assign({}, userDtoWithoutKeyAccess), { password: hashPassword }));
        const token = await this.generateToken(user);
        const addUserGroup = await this.groupService.addUserToGroup({
            userId: String(user.id),
            groupId: String(accessKey.accessKey.groupId),
        });
        if (!addUserGroup) {
            throw new common_1.HttpException("Ошибка добавления в группу", common_1.HttpStatus.NOT_FOUND);
        }
        const destroyAccessKey = await this.accessKeyService.destroyAccessKey(accessKey.accessKey);
        if (!destroyAccessKey) {
            throw new common_1.HttpException("Ошибка удаления ключа", common_1.HttpStatus.NOT_FOUND);
        }
        const updateAccessKey = await this.accessKeyService.generateAccessKey(accessKey.accessKey.groupId);
        return {
            token: token.token,
            id: user.id,
        };
    }
    async generateToken(user) {
        const payload = { email: user.email, id: user.id, roles: user.roles };
        return {
            token: this.jwtService.sign(payload),
        };
    }
    async validateUser(userDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        if (!user) {
            throw new common_1.UnauthorizedException({
                message: "Некорректный емайл или пароль",
            });
        }
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals) {
            return user;
        }
        throw new common_1.UnauthorizedException({
            message: "Некорректный емайл или пароль",
        });
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        access_key_service_1.AccessKeyService,
        group_service_1.GroupService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map