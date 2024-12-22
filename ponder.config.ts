import { createConfig, mergeAbis } from "ponder";
import { http } from "viem";

import { TransparentUpgradeableProxyAbi } from "./abis/TransparentUpgradeableProxyAbi";
import { UsualX_0x56b8Abi } from "./abis/UsualX_0x56b8Abi";
import { UsualX_0xb881Abi } from "./abis/UsualX_0xb881Abi";

export default createConfig({
  networks: {
    mainnet: { chainId: 1, transport: http(process.env.PONDER_RPC_URL_1) },
  },
  contracts: {
    UsualX: {
      abi: mergeAbis([
        TransparentUpgradeableProxyAbi,
        UsualX_0x56b8Abi,
        UsualX_0xb881Abi,
      ]),
      address: "0x06B964d96f5dCF7Eae9d7C559B09EDCe244d4B8E",
      network: "mainnet",
      startBlock: 21264214,
    },
  },
});
