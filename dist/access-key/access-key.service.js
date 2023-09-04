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
exports.AccessKeyService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const access_key_model_1 = require("./entities/access-key.model");
const uuid_1 = require("uuid");
let AccessKeyService = class AccessKeyService {
    constructor(evaEventRepository) {
        this.evaEventRepository = evaEventRepository;
    }
    async generateAccessKey(groupId) {
        const key = uuid_1.v4();
        await this.evaEventRepository.create({ key, groupId });
        return key;
    }
    async getAccessKey(groupId) {
        const accessKey = await this.evaEventRepository.findOne({
            where: { groupId },
        });
        return { key: accessKey.key };
    }
    async destroyAccessKey(accessKey) {
        try {
            await accessKey.destroy();
            return true;
        }
        catch (e) {
            return false;
        }
    }
    async getGroupByAccessKey(key) {
        const accessKey = await this.evaEventRepository.findOne({
            where: { key },
        });
        if (!accessKey) {
            throw new common_1.HttpException("Не верный ключ доступа", common_1.HttpStatus.BAD_REQUEST);
        }
        return { accessKey };
    }
};
AccessKeyService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(access_key_model_1.AccessKey)),
    __metadata("design:paramtypes", [Object])
], AccessKeyService);
exports.AccessKeyService = AccessKeyService;
//# sourceMappingURL=access-key.service.js.map