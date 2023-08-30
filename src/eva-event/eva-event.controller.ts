import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus, Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreateEvaEventDto } from "eva-event/dto/create-eva-event.dto";
import { EvaEventService } from "eva-event/eva-event.service";
import { FindByIdEvaEventDto } from "eva-event/dto/find-by-id-eva-event.dto";
import { FindByGroupIdEvaEventDto } from "eva-event/dto/find-group-id-eva-event.dto";
import { UpdateGroupDto } from "group/dto/update-group.dto";
import { UpdateEvaEventDto } from "eva-event/dto/update-eva-event.dto";
import { JwtAuthGuard } from "auth/jwt-auth.guard";

@Controller('eva-event')
export class EvaEventController {
  constructor(private evaEventService: EvaEventService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createEvaEvent(@Body() dto: CreateEvaEventDto) {
    return this.evaEventService.create(dto)
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllEvaEvent() {
    return this.evaEventService.getAllEvaEvent()
  }

  @UseGuards(JwtAuthGuard)
  @Post('/get-by-id')
  @HttpCode(HttpStatus.OK)
  getEvaEventByUserId(@Body() dto: FindByIdEvaEventDto) {
    return this.evaEventService.getByUserId(dto)
  }

  @UseGuards(JwtAuthGuard)
  @Post('/get-group-by-id')
  @HttpCode(HttpStatus.OK)
  getEvaEventByGroupId(@Body() dto: FindByGroupIdEvaEventDto) {
    return this.evaEventService.getByGroupId(dto)
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param() params, @Body() updateEvaEventDto: UpdateEvaEventDto) {
    return this.evaEventService.update(params.id, updateEvaEventDto);
  }

}


