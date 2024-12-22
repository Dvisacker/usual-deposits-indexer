import { ponder } from "ponder:registry";

ponder.on("UsualX:AdminChanged", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("UsualX:Upgraded", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("UsualX:Approval", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("UsualX:Blacklist", async ({ event, context }) => {
  console.log(event.args);
});
