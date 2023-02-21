import { FastifyReply, FastifyRequest } from "fastify";

export const Ping = async (
  _req: FastifyRequest,
  res: FastifyReply
): Promise<FastifyReply> => {
  return res.send("pong");
};
