const app = require("express")()
const cors = require("cors")
const { graphqlHTTP } = require("express-graphql")
const { buildSchema } = require("graphql")
const { mockedAuthors,mockedBooks } = require("./mockdata")

//build schema helps define the data schema
const schema = buildSchema(`
type Query{
    authors:[Author]
    books:[Book]
}
type Mutation{
    createAuthor(
        firstname:String!
        lastname:String!
    ):Author
}
type Author{
    id:String
    firstName:String
    lastName:String
    books:[Book]
}
type Book{
    id:String
    title:String!
    books:[Book]
}
`)
//where to define the resolvers
const root = {
    authors:()=> mockedAuthors,
    books:()=>mockedBooks,
    createAuthor:({firstname,lastname})=>{
        const id = String(mockedAuthors.length+1)
        const createdAuthor={
            id,
            firstname,
            lastname
        }
        mockedAuthors.push(createdAuthor)
        return createdAuthor
    }
}

app.use(cors())

app.use("/graphql",graphqlHTTP({
    schema,
    rootValue:root,
    graphiql:true
}))

app.listen(8080,()=>console.log(`GraphQl server running at http://localhost:8080`))