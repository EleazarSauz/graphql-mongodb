export default {
    Query: {
        allCards: async (parent, args, { Card }) => {
            const cards = await Card.find();
            return cards.map(x => {
                x._id = x._id.toString();
                return x;
            })
        }
    },
    Mutation: {
        createCard: async (parent, args, { Card }) => {
            const card = await new Card(args).save();
            card._id = card.id.toString();
            return card;
        }
    }
}

//resolvers son las operaciones que se pueden realizar con los datos