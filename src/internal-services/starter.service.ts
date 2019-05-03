// General
import * as fs from 'fs';
import { from, Observable, Observer, of, range, ReplaySubject, Subject } from 'rxjs';
import { catchError, filter, map, switchMap  } from 'rxjs/operators';

// Project
import { StarterRepository } from '../repositories/starter.repository';

// Model
import { getUnpackedSettings } from 'http2';
import { IStarterModel, StarterModel } from '../models/starter.model';

export class StarterService {
	private readonly starterRepository: StarterRepository;

	constructor() {
		this.starterRepository = new StarterRepository();
	}

	/**
	 * Example internal service function. All endpoint logic is done here.
	 */
	public exampleServiceFunction(): Observable<string> {
        // Query, create, etc...
        // Whatever you need to do for the endpoint, toss the logic in here
        // Utilizing RxJs to make everything clean and simple
        return this.starterRepository.queryById('fake-id')
            .pipe(
                switchMap((resp: any) => {
                    return of('response');
                })
            );
	}
}
