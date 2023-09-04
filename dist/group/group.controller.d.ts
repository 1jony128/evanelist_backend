import { GroupService } from "./group.service";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { UserGroupDto } from "group/dto/user-to-group.dto";
import { SignGroupDto } from "group/dto/sign-group.dto";
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    create(createGroupDto: CreateGroupDto): Promise<{
        accessKey: string;
        group: import("./entities/group.model").Group;
    }>;
    signGroup(signGroupDto: SignGroupDto): Promise<{
        accessKey: {
            accessKey: import("../access-key/entities/access-key.model").AccessKey;
        };
        sign: Promise<import("./entities/user-groups.model").UserGroups[]>;
    }>;
    addUserToGroup(dto: UserGroupDto): Promise<import("./entities/user-groups.model").UserGroups[]>;
    getAccessKeyByGroup(params: any): string;
    getGroupUsers(params: any): string;
    getUserGroups(params: any): string;
    findAll(): Promise<import("./entities/group.model").Group[]>;
    getOne(params: any): string;
    update(id: string, updateGroupDto: UpdateGroupDto): Promise<string>;
    remove(id: string): Promise<string>;
}
