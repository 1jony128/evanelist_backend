import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";
import {ValidationPipe} from "./pipes/validation.pipe";

import { readFileSync } from 'fs';

async function start() {
    const PORT = process.env.PORT || 5001;
    const app = await NestFactory.create(AppModule, {
        httpsOptions: {
            key: readFileSync(process.env.PATH_KEY),
            cert: readFileSync(process.env.PATH_SERT)
        }
    });
    app.enableCors();
    app.setGlobalPrefix('api')
    const config = new DocumentBuilder()
        .setTitle('Evangelist BACKEND')
        .setDescription('Документация REST API')
        .setVersion('1.0.0')
        .addTag('Евгений Шевцов')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)

    app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()
