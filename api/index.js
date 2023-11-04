const createServer = require("./src/app");
const associations = require("./src/db/associations");
const db = require("./src/db/db");

const PORT = process.env.PORT || 3000;
const main = async () => {
  try {
    await db.authenticate();
    associations();
    await db.sync({ force: false });
    console.log("Database connected");
    const server = await createServer();
    server.listen(PORT, () => {
      console.log(`Servidor levantado en el puerto ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

main();
