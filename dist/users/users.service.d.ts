import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
import { FilesService } from "files/files.service";
export declare class UsersService {
    private userRepository;
    private roleService;
    private fileService;
    constructor(userRepository: typeof User, roleService: RolesService, fileService: FilesService);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getAllUsersById(ids: number[]): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
    getUserById(userId: string): Promise<User>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    ban(dto: BanUserDto): Promise<User>;
    update(id: number, image: any): Promise<string>;
}
