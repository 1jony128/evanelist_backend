import { Model } from "sequelize-typescript";
interface AccessKeyCreationAttrs {
    key: string;
    groupId: number;
}
export declare class AccessKey extends Model<AccessKey, AccessKeyCreationAttrs> {
    id: string;
    key: string;
    groupId: number;
}
export {};
