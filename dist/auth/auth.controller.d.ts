import { CreateUserDto } from "../users/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { AuthUserDto } from "auth/dto/auth-user.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userDto: AuthUserDto): Promise<{
        token: string;
        id: number;
    }>;
    registration(userDto: CreateUserDto): Promise<{
        token: string;
        id: number;
    }>;
}
