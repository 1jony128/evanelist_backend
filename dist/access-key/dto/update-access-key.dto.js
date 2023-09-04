"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAccessKeyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_access_key_dto_1 = require("./create-access-key.dto");
class UpdateAccessKeyDto extends swagger_1.PartialType(create_access_key_dto_1.CreateAccessKeyDto) {
}
exports.UpdateAccessKeyDto = UpdateAccessKeyDto;
//# sourceMappingURL=update-access-key.dto.js.map