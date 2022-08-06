const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	//Unique ID only works for new data
	//If your old data already has duplicates, its considered messy already and wont work
	title: { type: String, required: true, unique: true },
	//Here - referencing the ObjectId of the MongoDB database that points to unique user
	author: { type: Schema.Types.ObjectId, ref: 'User' },
	body: String
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;