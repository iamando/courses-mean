import moongose from "mongoose";

// Keys
import keys from "../keys";

class Database {
  constructor() {
    this.connect();
  }

  connect(): void {
    try {
      moongose
        .connect(keys.DB_LOCAL_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
        })
        .then((con) => {
          console.log(
            `MongoDB Database connected with HOST: ${con.connection.host}`
          );
        });
    } catch (error) {
      console.error(error);
    }
  }
}

const database = new Database();
export { database };
