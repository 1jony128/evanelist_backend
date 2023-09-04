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
exports.AccessKey = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const group_model_1 = require("../../group/entities/group.model");
let AccessKey = class AccessKey extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], AccessKey.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], AccessKey.prototype, "key", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => group_model_1.Group),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], AccessKey.prototype, "groupId", void 0);
AccessKey = __decorate([
    sequelize_typescript_1.Table
], AccessKey);
exports.AccessKey = AccessKey;
//# sourceMappingURL=access-key.model.js.map