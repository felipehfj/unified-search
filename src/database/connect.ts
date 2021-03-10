import mongoose, { ConnectionOptions } from 'mongoose';

export default async function connect() {
  const connectionOptions: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }

  return mongoose.connect(process.env.MONGO_URI||'', connectionOptions)

}