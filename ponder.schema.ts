import { onchainTable, primaryKey } from "ponder";

export const deposit = onchainTable("deposit", (t) => ({
  network: t.text(),
  block: t.bigint(),
  timestamp: t.bigint(),
  sender: t.hex(),
  owner: t.hex(),
  assets: t.bigint(),
  shares: t.bigint(),
}),
  (table) => ({
    id: primaryKey({ columns: [table.network, table.block, table.timestamp, table.sender] }),
  }));
