import * as bodyParser from 'body-parser';
import cors = require('cors');
import express = require('express');
import { Request, Response } from 'express';
import { Routes } from './routes/index';

class App {

	public app: express.Application;
	public routePrv: Routes = new Routes();

	constructor() {
		this.app = express();
		this.app.use(cors())
		this.config();
		this.routePrv.routes(this.app);
	}

	private config(): void {

		// support application/json type post data
		this.app.use(bodyParser.json());
		// support application/x-www-form-urlencoded post data
		this.app.use(bodyParser.urlencoded({ extended: false }));
	}
}

export default new App().app;
