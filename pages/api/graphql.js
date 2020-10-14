import Cors from "micro-cors"
import { ApolloServer } from "apollo-server-micro"
import { schema } from "../../apollo/schema"

const cors = Cors({
  allowMethods: ["POST", "OPTIONS"],
})

const apolloServer = new ApolloServer({
  schema,
  context(ctx) {
    return ctx
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = apolloServer.createHandler({ path: "/api/graphql" })

export default cors(handler)
