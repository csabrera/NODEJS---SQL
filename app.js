import dontevn from "dotenv";
import Server from "./config/server.js";

dontevn.config();

const server = new Server();

server.listen();
