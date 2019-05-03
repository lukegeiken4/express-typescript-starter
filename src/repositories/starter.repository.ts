// General
import { from, Observable, of, range, ReplaySubject, Subject } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

// Project
import { BaseRepository } from './base.repository';

// Model
import { IStarterModel, StarterModel } from '../models/starter.model';
import { MongoProvider } from '../providers/mongo.provider';

export class StarterRepository extends BaseRepository<IStarterModel> {

	constructor() {
		super('Starters');
	}

	/**
	 * Gets item from collection by id
	 * @param id id of item to get
	 */
	public queryById(
		id: string): Observable<IStarterModel> {

        // Returning fake data for successful endpoint workflow
        return of(new StarterModel());

        // Example use of mongo provider
		// return this.mongoProvider.queryById<IStarterModel>(id);
	}
}
