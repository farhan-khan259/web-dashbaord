import whaleVaultAbi from '../../abis/EWBWhaleVault.json';
import mintingVaultAbi from '../../abis/EWBMintingRightsVault.json';
import oracleAbi from '../../abis/EWBGorillaOracle.json';
import revenueRouterAbi from '../../abis/EWBRevenueRouter.json';
import deltaNeutralAbi from '../../abis/EWBDeltaNeutralVault.json';
import creditBridgeAbi from '../../abis/EWBCreditBridge.json';

export const ABI = {
  whaleVault: whaleVaultAbi.abi,
  mintingVault: mintingVaultAbi.abi,
  oracle: oracleAbi.abi,
  revenueRouter: revenueRouterAbi.abi,
  deltaNeutralVault: deltaNeutralAbi.abi,
  creditBridge: creditBridgeAbi.abi,
};
