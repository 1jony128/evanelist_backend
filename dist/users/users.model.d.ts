import { Model } from "sequelize-typescript";
import { Role } from "../roles/roles.model";
interface UserCreationAttrs {
    email: string;
    password: string;
    name: string;
    avatar: string;
    geo_lon: string;
    geo_lat: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
    groups: User[];
    roles: Role[];
    name: string;
    avatar: string;
    geo_lat: string;
    geo_lon: string;
}
export {};
