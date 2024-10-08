import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";
import 'solidity-coverage';
import "@nomiclabs/hardhat-solhint";
// import 'hardhat-deploy';

import "./tasks/add-claim.task";
import "./tasks/add-key.task";
import "./tasks/deploy-identity.task";
import "./tasks/deploy-proxy.task";
import "./tasks/remove-claim.task";
import "./tasks/remove-key.task";
import "./tasks/revoke.task";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      accounts: [{
        privateKey: "0x1538d25d04e53f4bc73e1aef6dff73d4e34952440385f1cb93d3515e50099e10",
        balance: "10000000000000000000000"
      }],
    },
    local: {
      url: 'HTTP://127.0.0.1:7545',
      accounts: ["0x1538d25d04e53f4bc73e1aef6dff73d4e34952440385f1cb93d3515e50099e10"],
    },
  }
};

export default config;
