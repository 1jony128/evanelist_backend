import { Model } from "sequelize-typescript";
export declare class UserGroups extends Model<UserGroups> {
    id: number;
    groupId: number;
    userId: number;
}
