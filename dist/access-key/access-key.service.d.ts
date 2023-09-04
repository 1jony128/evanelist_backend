import { AccessKey } from "access-key/entities/access-key.model";
export declare class AccessKeyService {
    private evaEventRepository;
    constructor(evaEventRepository: typeof AccessKey);
    generateAccessKey(groupId: number): Promise<string>;
    getAccessKey(groupId: number): Promise<{
        key: string;
    }>;
    destroyAccessKey(accessKey: AccessKey): Promise<boolean>;
    getGroupByAccessKey(key: string): Promise<{
        accessKey: AccessKey;
    }>;
}
