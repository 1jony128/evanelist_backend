"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const validation_pipe_1 = require("./pipes/validation.pipe");
const fs_1 = require("fs");
async function start() {
    const PORT = process.env.PORT || 5001;
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        httpsOptions: {
            key: fs_1.readFileSync(process.env.PATH_KEY),
            cert: fs_1.readFileSync(process.env.PATH_SERT)
        }
    });
    app.enableCors();
    app.setGlobalPrefix('api');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Evangelist BACKEND')
        .setDescription('Документация REST API')
        .setVersion('1.0.0')
        .addTag('Евгений Шевцов')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api/docs', app, document);
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
start();
//# sourceMappingURL=main.js.map