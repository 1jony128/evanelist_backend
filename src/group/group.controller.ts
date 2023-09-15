import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { GroupService } from "./group.service";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { UserGroupDto } from "group/dto/user-to-group.dto";
import { RolesGuard } from "auth/roles.guard";
import { SignGroupDto } from "group/dto/sign-group.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { Roles } from "auth/roles-auth.decorator";

@Controller("group")
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @UseGuards(JwtAuthGuard)
  @Post("create")
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post("sign-group")
  signGroup(@Body() signGroupDto: SignGroupDto) {
    return this.groupService.signGroup(signGroupDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post("add-user")
  addUserToGroup(@Body() dto: UserGroupDto) {
    return this.groupService.addUserToGroup(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id/get-key-by-group")
  getAccessKeyByGroup(@Param() params): string {
    // @ts-ignore
    return this.groupService.getAccessKeyByGroup(+params.id);
  }

  @UseGuards(JwtAuthGuard)
  @UseGuards(RolesGuard)
  @Get(":id/get-users")
  getGroupUsers(@Param() params): string {
    // @ts-ignore
    return this.groupService.getGroupUsers(+params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id/get-groups")
  getUserGroups(@Param() params): string {
    // @ts-ignore
    return this.groupService.getUserGroups(params.id);
  }
  
  
  @UseGuards(JwtAuthGuard)
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  findAll() {
    return this.groupService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  getOne(@Param() params): string {
    // @ts-ignore
    return this.groupService.findOne(+params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupService.update(+id, updateGroupDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.groupService.remove(+id);
  }
}
