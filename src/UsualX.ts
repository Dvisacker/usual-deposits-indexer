import { ponder } from "ponder:registry";
import { deposits } from "../ponder.schema";

ponder.on("UsualX:Deposit", async ({ event, context }) => {
  console.log(event.args);
  await context.db.insert(deposits).values({
    network: context.network.name,
    timestamp: event.block.timestamp,
    block: event.block.number,
    sender: event.args.sender,
    owner: event.args.owner,
    assets: event.args.assets,
    shares: event.args.shares,
  });
});
