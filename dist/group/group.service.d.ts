import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { Group } from "group/entities/group.model";
import { UserGroupDto } from "group/dto/user-to-group.dto";
import { UsersService } from "users/users.service";
import { UserGroupService } from "group/user-groups.service";
import { AccessKeyService } from "access-key/access-key.service";
import { SignGroupDto } from "group/dto/sign-group.dto";
export declare class GroupService {
    private groupRepository;
    private userService;
    private userGroupService;
    private accessKeyService;
    constructor(groupRepository: typeof Group, userService: UsersService, userGroupService: UserGroupService, accessKeyService: AccessKeyService);
    create(dto: CreateGroupDto): Promise<{
        accessKey: string;
        group: Group;
    }>;
    signGroup(dto: SignGroupDto): Promise<{
        accessKey: {
            accessKey: import("../access-key/entities/access-key.model").AccessKey;
        };
        sign: Promise<import("./entities/user-groups.model").UserGroups[]>;
    }>;
    getAccessKeyByGroup(groupId: number): Promise<{
        key: string;
    }>;
    getByValue(name: string): Promise<Group>;
    addUserToGroup(dto: UserGroupDto): Promise<import("./entities/user-groups.model").UserGroups[]>;
    getGroupUsers(groupId: number): Promise<import("../users/users.model").User[]>;
    getUserGroups(userId: string): Promise<Group[]>;
    findAll(): Promise<Group[]>;
    getAllGroupsById(ids: number[]): Promise<Group[]>;
    getGroupById(id: number): Promise<Group>;
    update(id: number, updateGroupDto: UpdateGroupDto): Promise<string>;
    remove(id: number): Promise<string>;
}
