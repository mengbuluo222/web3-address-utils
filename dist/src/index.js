"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.isContract = isContract;
exports.resolveENS = resolveENS;
exports.getENSAvatar = getENSAvatar;
exports.isValidAddress = isValidAddress;
// src/index.ts
const ethers_1 = require("ethers");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const DEFAULT_RPC_URL = process.env.RPC_URL || 'http://localhost:8545'; // 使用 Ganache 地址
/**
 * 检查地址是否为合约
 * @param address 要检查的地址
 * @param provider 可选 provider（用于测试）
 */
async function isContract(address, provider = new ethers_1.ethers.JsonRpcProvider(DEFAULT_RPC_URL)) {
    const code = await provider.getCode(address);
    return code !== '0x';
}
/**
 * 解析ENS域名
 * @param ens ENS域名 (如vitalik.eth)
 * @param provider 自定义Provider
 */
async function resolveENS(ens, provider = new ethers_1.ethers.JsonRpcProvider(DEFAULT_RPC_URL)) {
    return provider.resolveName(ens);
}
/**
 * 获取ENS头像URL
 * @param ens ENS域名或地址
 */
function getENSAvatar(ens) {
    return `https://metadata.ens.domains/mainnet/avatar/${ens}`;
}
/**
 * 校验地址有效性
 * @param address 待校验地址
 */
function isValidAddress(address) {
    return ethers_1.ethers.isAddress(address);
}
