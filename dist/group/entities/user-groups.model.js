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
exports.UserGroups = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const group_model_1 = require("./group.model");
const users_model_1 = require("../../users/users.model");
let UserGroups = class UserGroups extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], UserGroups.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => group_model_1.Group),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], UserGroups.prototype, "groupId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => users_model_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], UserGroups.prototype, "userId", void 0);
UserGroups = __decorate([
    sequelize_typescript_1.Table({ tableName: 'user_groups', createdAt: false, updatedAt: false })
], UserGroups);
exports.UserGroups = UserGroups;
//# sourceMappingURL=user-groups.model.js.map