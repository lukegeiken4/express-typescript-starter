// General
import {
    HandleQueryParams,
    HandleResponse,
} from 'controlli';
import { Request, Response } from 'express';

// Project
import { StarterService } from '../internal-services/starter.service';

export class StarterController {

	private readonly starterService: StarterService;

	constructor() {
        this.starterService = new StarterService();
	}

	/**
	 * Example GET endpoint
	 * @param req request obj
	 * @param res response obj
	 */
	public exampleGetEndpoint(req: Request, res: Response) {

        // Controller handler that handles controller error and data responses
        HandleResponse(res, new Promise((resolve, reject) => {
            // Query param handler to help transform query params to their correc types
            // Or fail if they arent the correct type
            let params = HandleQueryParams(
                req,
                ['test'],
                [],
                [],
                [],
                []
            );
            resolve(params);
		}));
	}
}
