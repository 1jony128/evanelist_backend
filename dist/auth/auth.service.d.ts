import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { AuthUserDto } from "auth/dto/auth-user.dto";
import { AccessKeyService } from "access-key/access-key.service";
import { GroupService } from "group/group.service";
export declare class AuthService {
    private userService;
    private jwtService;
    private accessKeyService;
    private groupService;
    constructor(userService: UsersService, jwtService: JwtService, accessKeyService: AccessKeyService, groupService: GroupService);
    login(userDto: AuthUserDto): Promise<{
        token: string;
        id: number;
    }>;
    registration(userDto: CreateUserDto): Promise<{
        token: string;
        id: number;
        updateAccessKey: string;
    }>;
    private generateToken;
    private validateUser;
}
