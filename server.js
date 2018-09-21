import mongoose from 'mongoose';
import app from './server/express';
import config from './server/config';

mongoose.connect(config.mongo.host, { dbName: config.mongo.dbName, user: 'rami', pass: 'RlwIp5CJOMFZbgop' });
mongoose.connection.on('error', () => {
    throw new Error(`error connecting to database!`);
});

app.listen(config.port, () => console.log(`server running on port ${config.port}`));

export default app;