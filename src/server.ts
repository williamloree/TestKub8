import { fastify } from "fastify";
import pingRoute from "./routes/ping.routes";

const server = fastify({ trustProxy: true });

server.register(pingRoute, { prefix: "/ping" });

export const start = async () => {
  try {
    await server
      .listen({
        port: Number(5000),
        host: '127.0.0.1',
      })
      .then((adress) => console.log(`🚀 Server up on ${adress}`));
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
