// General
import { Request, Response } from 'express';

// Project
import { StarterController } from '../controllers/starter.controller';

export class Routes {
	private readonly starterController: StarterController;
	private readonly apiBase: string;

	constructor() {
		this.starterController = new StarterController();

		this.apiBase = '/api';
	}

	/**
	 * Setup the api routes and their controller functions
	 * @param app app to set routes to
	 */
	public routes(app: any): void {
		// Starter Controller
		app.route(this.apiBase + '/starter')
            .get(this.starterController.exampleGetEndpoint.bind(this.starterController));

        // Last check
        // tslint:disable-next-line:align
        app.get('*', (req: any, res: any) => {
            res.status(501).send({
                err: 'Not Implemented',
                data: null
            });
        });
	}
}
