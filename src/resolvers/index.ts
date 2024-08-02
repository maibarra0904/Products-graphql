


export const resolvers = {
    Query: {

        user: (parent, args, context, info) => {
            
            const {id} = args
            console.log(id.id)
            //console.log(users)
            
            

        }
    }
};