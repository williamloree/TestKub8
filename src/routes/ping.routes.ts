import cors from "@fastify/cors";
import { Ping } from "../controllers/ping.controller";

export default async function authRoute(fastify: any) {
  fastify.register(cors, { origin: true });
  fastify.get("/", Ping);
}
