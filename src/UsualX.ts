import { ponder } from "ponder:registry";
import { deposit } from "../ponder.schema";

ponder.on("UsualX:Deposit", async ({ event, context }) => {
  await context.db.insert(deposit).values({
    network: context.network.name,
    timestamp: event.block.timestamp,
    block: event.block.number,
    sender: event.args.sender,
    owner: event.args.owner,
    assets: event.args.assets,
    shares: event.args.shares,
  });
});
