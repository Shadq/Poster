const { UserModel } = require("../models/User");
const bcrypt = require("bcrypt");

const resolvers = {
  Query: {
    test: () => {
      return "Test";
    },
  },

  Mutation: {
    createUser: async (_, args) => {
      const { name, email, password } = args.input;

      // Controllare se utente esiste oppure no
      const user = await UserModel.findOne({ name: name, email: email });
      let newUser;
      if (user === null) {
        // Cryptare la password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Creare utente tramite le credenziali
        newUser = await UserModel.create({
          name: name,
          email: email,
          password: hashedPassword,
        });
      } else {
        return "Error";
      }
      return newUser;
    },
  },
};

module.exports = { resolvers };
