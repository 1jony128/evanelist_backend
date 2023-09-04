import { CreateEvaEventDto } from "eva-event/dto/create-eva-event.dto";
import { EvaEventService } from "eva-event/eva-event.service";
import { FindByIdEvaEventDto } from "eva-event/dto/find-by-id-eva-event.dto";
import { FindByGroupIdEvaEventDto } from "eva-event/dto/find-group-id-eva-event.dto";
import { UpdateEvaEventDto } from "eva-event/dto/update-eva-event.dto";
export declare class EvaEventController {
    private evaEventService;
    constructor(evaEventService: EvaEventService);
    createEvaEvent(dto: CreateEvaEventDto): Promise<import("./eva_event.model").EvaEvent>;
    getAllEvaEvent(): Promise<import("./eva_event.model").EvaEvent[]>;
    getEvaEventByUserId(dto: FindByIdEvaEventDto): Promise<import("./eva_event.model").EvaEvent[]>;
    getEvaEventByGroupId(dto: FindByGroupIdEvaEventDto): Promise<void>;
    update(params: any, updateEvaEventDto: UpdateEvaEventDto): Promise<import("./eva_event.model").EvaEvent>;
}
