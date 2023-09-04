import { UsersService } from "users/users.service";
import { UserGroups } from "group/entities/user-groups.model";
export declare class UserGroupService {
    private userGroupRepository;
    private userService;
    constructor(userGroupRepository: typeof UserGroups, userService: UsersService);
    findAllByGroupId(groupId: number): Promise<UserGroups[]>;
    findAllByUserId(userId: number): Promise<UserGroups[]>;
    findAll(): Promise<UserGroups[]>;
}
