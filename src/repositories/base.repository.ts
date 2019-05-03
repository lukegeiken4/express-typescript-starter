// General
import { from, Observable, of, range, ReplaySubject, Subject } from 'rxjs';

// Project
import { MongoProvider } from '../providers/mongo.provider';

export abstract class BaseRepository<T> {

	protected readonly mongoProvider: MongoProvider;

	constructor(collectionName: string) {
		this.mongoProvider = new MongoProvider(collectionName);
	}

	/**
	 * Bulk inserts items in mongo db colleciton
	 * @param items items to insert
	 */
	public createItems(items: T[]): Observable<boolean> {
		return this.mongoProvider.createMany<T>(items);
	}
}
