import { Model } from "sequelize-typescript";
interface EvaEventCreationAttrs {
    userId: number;
    groupId: number;
    geo_lon: string;
    geo_lat: string;
    date: string;
    count: number;
    address: string;
    user_name: string;
    group_name: string;
    comment: string;
}
export declare class EvaEvent extends Model<EvaEvent, EvaEventCreationAttrs> {
    id: number;
    geo_lat: string;
    geo_lon: string;
    date: string;
    count: string;
    address: string;
    user_name: string;
    group_name: string;
    comment: string;
    userId: number;
}
export {};
