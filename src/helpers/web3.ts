import { Contract } from '@ethersproject/contracts';
import { getAddress } from '@ethersproject/address';
import abi from '@/helpers/abi';
import { GAS_LIMIT_BUFFER, isTxRejected, logFailedTx } from '@/helpers/utils';
import { Interface } from '@ethersproject/abi';
import config from '@/config';

export async function sendTransaction(
  web3,
  log,
  [contractType, contractAddress, action, params, overrides]: any
) {
  const signer = web3.getSigner();
  const contract = new Contract(
    getAddress(contractAddress),
    abi[contractType],
    web3
  );
  const contractWithSigner = contract.connect(signer);
  try {
    // Gas estimation
    const gasLimitNumber = await contractWithSigner.estimateGas[action](
      ...params,
      overrides
    );
    const gasLimit = gasLimitNumber.toNumber();
    overrides.gasLimit = Math.floor(gasLimit * (1 + GAS_LIMIT_BUFFER));
    return await contractWithSigner[action](...params, overrides);
  } catch (e) {
    if (isTxRejected(e)) return Promise.reject();
    if (log) {
      logFailedTx(
        config.network,
        signer.getAddress(),
        contract,
        action,
        params,
        overrides
      );
    }
    return Promise.reject(e);
  }
}

export function makeProxyTransaction(
  dsProxy,
  [contractType, contractAddress, action, params, overrides]: any
) {
  const iface = new Interface(abi[contractType]);
  const data = iface.encodeFunctionData(action, params);
  return ['DSProxy', dsProxy, 'execute', [contractAddress, data], overrides];
}
