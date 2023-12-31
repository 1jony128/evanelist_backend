import { forwardRef, Module } from "@nestjs/common";
import { GroupService } from "./group.service";
import { GroupController } from "./group.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "users/users.model";
import { AuthModule } from "auth/auth.module";
import { UsersModule } from "users/users.module";
import { UserGroups } from "group/entities/user-groups.model";
import { Group } from "group/entities/group.model";
import { UserGroupService } from "group/user-groups.service";
import { RolesModule } from "roles/roles.module";
import { AccessKey } from "access-key/entities/access-key.model";
import { AccessKeyService } from "access-key/access-key.service";
import { Role } from "roles/roles.model";

@Module({
  providers: [GroupService, UserGroupService, AccessKeyService],
  controllers: [GroupController],
  imports: [
    SequelizeModule.forFeature([User, UserGroups, Group, AccessKey, Role]),
    forwardRef(() => AuthModule),
    UsersModule,
    RolesModule,
  ],
  exports: [GroupService],
})
export class GroupModule {}
