import express from "express";

const app = express();

import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/graphql-test')
    .then ( () => console.log('Conexión a mongo establecida :)'))
    .catch(err => console.log(`Error al conectar a mongo ): ${err}`));
    


app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log('holi :)');
})