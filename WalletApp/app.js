import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import testRouter from "./routes/testRouter.js";
import userRouter from "./routes/userRouter.js";
import loginRouter from "./routes/loginRouter.js";

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("El servidor se está ejecutando correctamente.");
});

mongoose.connect(
  "mongodb+srv://WalletApp:WalletApp@iroc.eqririb.mongodb.net/WalletApp?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("La base de datos se encuentra conectada.");
    }
  }
);

//Middleware

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use("/user", userRouter);
app.use("/test", testRouter);
app.use("/login", loginRouter);
