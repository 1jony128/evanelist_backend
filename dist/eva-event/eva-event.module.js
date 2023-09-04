"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaEventModule = void 0;
const common_1 = require("@nestjs/common");
const eva_event_service_1 = require("./eva-event.service");
const eva_event_controller_1 = require("./eva-event.controller");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("../users/users.model");
const roles_module_1 = require("../roles/roles.module");
const auth_module_1 = require("../auth/auth.module");
const eva_event_model_1 = require("./eva_event.model");
const group_model_1 = require("../group/entities/group.model");
let EvaEventModule = class EvaEventModule {
};
EvaEventModule = __decorate([
    common_1.Module({
        providers: [eva_event_service_1.EvaEventService],
        controllers: [eva_event_controller_1.EvaEventController],
        imports: [
            sequelize_1.SequelizeModule.forFeature([users_model_1.User, eva_event_model_1.EvaEvent, group_model_1.Group]),
            roles_module_1.RolesModule,
            common_1.forwardRef(() => auth_module_1.AuthModule),
        ],
        exports: [
            eva_event_service_1.EvaEventService,
        ]
    })
], EvaEventModule);
exports.EvaEventModule = EvaEventModule;
//# sourceMappingURL=eva-event.module.js.map