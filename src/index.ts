// src/index.ts
import { ethers } from 'ethers';
import * as dotenv from 'dotenv';

dotenv.config();

const DEFAULT_RPC_URL = process.env.RPC_URL || 'http://localhost:8545'; // 使用 Ganache 地址

/**
 * 检查地址是否为合约
 * @param address 要检查的地址
 * @param provider 可选 provider（用于测试）
 */
export async function isContract(
  address: string,
  provider: ethers.Provider = new ethers.JsonRpcProvider(DEFAULT_RPC_URL)
): Promise<boolean> {
  const code = await provider.getCode(address);
  return code !== '0x';
}

/**
 * 解析ENS域名
 * @param ens ENS域名 (如vitalik.eth)
 * @param provider 自定义Provider
 */
export async function resolveENS(
  ens: string,
  provider: ethers.Provider = new ethers.JsonRpcProvider(DEFAULT_RPC_URL)
): Promise<string | null> {
  return provider.resolveName(ens);
}

/**
 * 获取ENS头像URL
 * @param ens ENS域名或地址
 */
export function getENSAvatar(ens: string): string {
  return `https://metadata.ens.domains/mainnet/avatar/${ens}`;
}

/**
 * 校验地址有效性
 * @param address 待校验地址
 */
export function isValidAddress(address: string): boolean {
  return ethers.isAddress(address);
}