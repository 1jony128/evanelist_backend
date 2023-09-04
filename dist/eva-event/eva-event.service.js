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
exports.EvaEventService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const eva_event_model_1 = require("./eva_event.model");
const create_eva_event_dto_1 = require("./dto/create-eva-event.dto");
const find_by_id_eva_event_dto_1 = require("./dto/find-by-id-eva-event.dto");
const find_group_id_eva_event_dto_1 = require("./dto/find-group-id-eva-event.dto");
const update_group_dto_1 = require("../group/dto/update-group.dto");
const update_eva_event_dto_1 = require("./dto/update-eva-event.dto");
let EvaEventService = class EvaEventService {
    constructor(evaEventRepository) {
        this.evaEventRepository = evaEventRepository;
    }
    async create(dto) {
        const alreadyEvaEvent = await this.evaEventRepository.findAll({
            where: { geo_lon: dto.geo_lon, geo_lat: dto.geo_lat },
            include: { all: true },
        });
        console.log(alreadyEvaEvent);
        if (alreadyEvaEvent.length) {
            throw new common_1.HttpException("Адрес уже был заполнен", common_1.HttpStatus.NOT_FOUND);
        }
        const evaEvent = await this.evaEventRepository.create(Object.assign({}, dto));
        return evaEvent;
    }
    async getAllEvaEvent() {
        const evaEvent = await this.evaEventRepository.findAll({
            include: { all: true },
        });
        return evaEvent;
    }
    async getByUserId(userId) {
        const evaEvent = await this.evaEventRepository.findAll({
            where: Object.assign({}, userId),
            include: { all: true },
        });
        return evaEvent;
    }
    async getByGroupId(groupId) {
    }
    async update(id, updateEvaEventDto) {
        console.log("ssss");
        const evaEvent = await this.evaEventRepository.findByPk(id);
        if (!evaEvent) {
            throw new common_1.NotFoundException(`Данные не найдены`);
        }
        await evaEvent.update(updateEvaEventDto);
        return evaEvent;
    }
};
EvaEventService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(eva_event_model_1.EvaEvent)),
    __metadata("design:paramtypes", [Object])
], EvaEventService);
exports.EvaEventService = EvaEventService;
//# sourceMappingURL=eva-event.service.js.map