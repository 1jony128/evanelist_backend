import { Model } from "sequelize-typescript";
import { User } from "../../users/users.model";
interface GroupCreationAttrs {
    idParentGroup: number;
    name: string;
    password: string;
}
export declare class Group extends Model<Group, GroupCreationAttrs> {
    id: number;
    name: string;
    password: string;
    idParentGroup: string;
    users: User[];
}
export {};
