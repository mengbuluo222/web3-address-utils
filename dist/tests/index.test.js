"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tests/index.test.ts
const index_1 = require("../src/index");
const provider = {
    getCode: jest.fn(),
    resolveName: jest.fn(),
};
describe('web3-address-utils', () => {
    it('isContract() should return false for an EOA', async () => {
        provider.getCode.mockResolvedValue('0x');
        const result = await (0, index_1.isContract)('0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf', provider);
        expect(result).toBe(false);
    });
    it('resolveENS() should return null if not resolved', async () => {
        provider.resolveName.mockResolvedValue(null);
        const result = await (0, index_1.resolveENS)('test.eth', provider);
        expect(result).toBeNull();
    });
});
