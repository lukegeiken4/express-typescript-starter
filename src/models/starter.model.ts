import mongoose, { Collection } from 'mongoose';
import { Document, Model, model, Schema } from 'mongoose';

const collectionName = 'Starter';

class Starter {
    // DB attributes
	public firstName: string;
	public lastName: string;
    public picture: string;

	// constructor(data: {}) {}

	/* any method would be defined here */
}

const schema = new Schema(
	{
		firstName: { required: true, type: String },
		lastName: { required: true, type: String },
        picture: { required: true, type: String }
	},
	{
		collection: collectionName,
	});

  /* register each method at schema */
  // schema.method('foo', User.prototype.foo)

export interface IStarterModel extends Starter, Document { }
export const StarterModel = model<IStarterModel>('StarterModel', schema);
