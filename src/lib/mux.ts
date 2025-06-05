import Mux from "@mux/mux-node"

const { Video } = new Mux(
  process.env.MUX_TOKEN_ID!,
  process.env.MUX_TOKEN_SECRET!
)

export { Video as MuxVideo } 