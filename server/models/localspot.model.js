import mongoose, { Schema } from 'mongoose';

const LocalSpotSchema = new Schema({
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
}, { collection: 'localspots' });

export default mongoose.model('LocalSpot', LocalSpotSchema);