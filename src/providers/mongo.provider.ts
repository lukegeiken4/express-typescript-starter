// General
import config from 'config';
import mongoose = require('mongoose');
import { from, Observable, Observer, of, pipe, ReplaySubject, Subject } from 'rxjs';
import { catchError, filter, map, switchMap  } from 'rxjs/operators';

// TODO: Use a singleton object for the mongo db connect
// TODO: Setup a retry structure
export class MongoProvider {
	private readonly objectIdService: any;
	private readonly collection: any;
	private readonly pagesize: number;

	constructor(collectionName: string) {
		// Set up mongoose connection
		const database: any = config.get('database');
		/*if (!database || !database.connectionString || database.connectionString === '') {
			throw(new Error('No db connection string found. Cannot connect.'));
		}

		mongoose.connect(database.connectionString, {
			  useNewUrlParser: true,
			})
			.catch((err) => {
				throw(new Error('Failed to connect to db. Error: ' + err.toString()));
			});

		mongoose.Promise = global.Promise;

		const conn = mongoose.connection;
		this.collection = conn.collection(collectionName);*/
		this.pagesize = 10;
	}

	/**
	 * Query mongo db by a single id
	 * @param id id to query for
	 */
	public queryById<T>(id: string): Observable<T> {
		const query = {
			_id  : mongoose.Types.ObjectId(id),
		};

		return from(new Promise<T>((resolve, reject) => {
			this.collection
				.findOne(query, (err: any, res: any) => {
					if (err !== null) {
						reject(err);
					}

					return resolve(res !== null ? res : null);
				});
		}));

	}

	/**
	 * Query mongo db
	 * @param query query to send to db
	 * @param page page of data to return
	 * @param sortProp model property to use for sorting
	 * @param sortDesc sort property by desc
	 */
	public query<T>(
		query: {},
		page: number,
		sortProp: string,
		sortDesc: boolean): Observable<T[]> {

		// Create sort obj
		let sort: any = {};
		sort[sortProp] = sortDesc ? -1 : 1;

		return from(new Promise<T[]>((resolve, reject) => {
			this.collection
				.find(query)
				.sort(sort)
				.skip(this.pagesize * ( page - 1 ))
				.limit(this.pagesize)
				.toArray((err: any, res: any) => {
					if (err !== null) {
						reject(err);
					} else {
						resolve(res);
					}
			});
		}));
	}

	/**
	 * Bulk insert items into mongo db
	 * @param items items to insert into collection
	 */
	public createMany<T>(items: any[]): Observable <boolean> {
		return of(this.collection.insertMany(items))
			.pipe(
				switchMap((data) => {
					return of(true);
				}),
				catchError((err) => {
					return Observable.throw('Could not create the items. Error: ' + err.toString());
				}));
	}
}
