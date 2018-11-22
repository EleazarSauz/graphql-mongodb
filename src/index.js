import express from "express";
import { graphiqlExpress, graphqlExpress, ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import { makeExecutableSchema } from 'graphql-tools';

import Card from './models/card';
import typeDefs from './schema';
import resolvers from './resolvers';


const app = express();


mongoose.connect('mongodb://localhost:27017/graphql-test')
    .then ( () => console.log('Conexión a mongo establecida :)'))
    .catch(err => console.log(`Error al conectar a mongo ): ${err}`));



//puerto
app.set('port', process.env.PORT || 3000);

/* const schema = makeExecutableSchema ({
    typeDefs,
    resolvers
}); */

const SERVER = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    playground: {
        endpoint: `http://localhost:3000/graphql`,
        settings: {
            'editor.theme': 'light'
        }
    }
});

// Middleware: GraphQL
SERVER.applyMiddleware({
    app
});

//routes (version de graphQL 1, actual 2) 
/* app.use('/graphql', express.json(), graphqlExpress({
    schema,
    context:{
        Card
    }
}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
})); */





//server
app.listen(app.get('port'), () => {
    console.log('holi :)');
});