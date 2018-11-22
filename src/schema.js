export default `

    type Card {
        _id: String!
        name: String
    }

    type Query {
        allCards: [Card!]!
    }

    type Mutation {
        createCard(name: String!): Card!
    }

`

//schema son las definiciones de los tipos de datos