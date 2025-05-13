// tests/index.test.ts
import { isContract, resolveENS } from '../src/index';
import { JsonRpcProvider } from 'ethers';

const provider = {
  getCode: jest.fn(),
  resolveName: jest.fn(),
} as unknown as JsonRpcProvider;

describe('web3-address-utils', () => {
  it('isContract() should return false for an EOA', async () => {
    (provider.getCode as jest.Mock).mockResolvedValue('0x');

    const result = await isContract('0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf', provider);
    expect(result).toBe(false);
  });

  it('resolveENS() should return null if not resolved', async () => {
    (provider.resolveName as jest.Mock).mockResolvedValue(null);

    const result = await resolveENS('test.eth', provider);
    expect(result).toBeNull();
  });
});