import mongoose, { Schema } from 'mongoose';

const LibrarySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    nicknames: {
        type: String,
        required: false,
    },
    fishtype: {
        type: String,
        required: true,
    },
    water: {
        type: String,
        required: true,
    },
}, { collection: 'library' });


export default mongoose.model('Library', LibrarySchema);