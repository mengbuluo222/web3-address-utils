# web3-address-utils 的微型工具库
一个轻量级的Web3地址工具库，提供了以下功能：
- 检测地址是否为合约（isContract）
- 获取ENS域名解析（resolveENS）
- 生成ENS头像链接（getENSAvatar）
- 校验地址有效性（isValidAddress）

## 安装
```bash
npm install web3-address-utils
```

## 使用
```javascript
import { isContract, resolveENS, getENSAvatar, isValidAddress } from 'web3-address-utils';  
// 检测地址是否为合约 
const isContractResult = await isContract('0x...');
console.log(isContractResult); // true/false
// 获取ENS域名解析
const ensResult = await resolveENS('yourdomain.eth');
console.log(ensResult); // '0x...'
// 生成ENS头像链接
const avatarUrl = getENSAvatar('yourdomain.eth'); 

console.log(avatarUrl); // 'URL_ADDRESSconsole.log(avatarUrl); // 'https://...'
// 校验地址有效性
const isValid = isValidAddress('0x...');
console.log(isValid); // true/false
```

欢迎提交PR！请先阅读CONTRIBUTING.md。