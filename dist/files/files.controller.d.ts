import { Response } from 'express';
export declare class StaticController {
    serveFile(fileName: string, res: Response): Promise<void>;
}
