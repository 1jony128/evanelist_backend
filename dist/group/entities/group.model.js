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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const users_model_1 = require("../../users/users.model");
const user_groups_model_1 = require("./user-groups.model");
let Group = class Group extends sequelize_typescript_1.Model {
};
__decorate([
    swagger_1.ApiProperty({ example: "1", description: "Уникальный идентификатор" }),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Group.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ example: "Благовещенск", description: "Группа" }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], Group.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ example: "12345678", description: "Пароль" }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Group.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({ example: "Благовещенск", description: "Группа" }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, unique: false, allowNull: true }),
    __metadata("design:type", String)
], Group.prototype, "idParentGroup", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => users_model_1.User, () => user_groups_model_1.UserGroups),
    __metadata("design:type", Array)
], Group.prototype, "users", void 0);
Group = __decorate([
    sequelize_typescript_1.Table({ tableName: "groups" })
], Group);
exports.Group = Group;
//# sourceMappingURL=group.model.js.map