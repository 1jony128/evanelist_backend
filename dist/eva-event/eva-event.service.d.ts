import { EvaEvent } from "./eva_event.model";
import { CreateEvaEventDto } from "eva-event/dto/create-eva-event.dto";
import { FindByIdEvaEventDto } from "eva-event/dto/find-by-id-eva-event.dto";
import { FindByGroupIdEvaEventDto } from "eva-event/dto/find-group-id-eva-event.dto";
import { UpdateEvaEventDto } from "eva-event/dto/update-eva-event.dto";
export declare class EvaEventService {
    private evaEventRepository;
    constructor(evaEventRepository: typeof EvaEvent);
    create(dto: CreateEvaEventDto): Promise<EvaEvent>;
    getAllEvaEvent(): Promise<EvaEvent[]>;
    getByUserId(userId: FindByIdEvaEventDto): Promise<EvaEvent[]>;
    getByGroupId(groupId: FindByGroupIdEvaEventDto): Promise<void>;
    update(id: number, updateEvaEventDto: UpdateEvaEventDto): Promise<EvaEvent>;
}
