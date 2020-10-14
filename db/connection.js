import url from "url"
import { MongoClient } from "mongodb"

const mongodbConnection = process.env.MONGODB_URI
const mongoPathName = url.parse(mongodbConnection).pathname
const dbName = mongoPathName.substring(mongoPathName.lastIndexOf("/") + 1)

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

let db = null

if (!db) {
  MongoClient.connect(process.env.MONGODB_URI, OPTIONS, (err, client) => {
    if (err) {
      console.log(err)
    } else {
      db = client.db(dbName)
      console.log("MongoDB connected successfully!")
    }
  })
}

export { db }
