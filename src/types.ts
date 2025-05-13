export interface IWeb3Utils {
  isContract: (address: string) => Promise<boolean>;
  resolveENS: (ens: string) => Promise<string | null>;
  getENSAvatar: (ens: string) => string;
  isValidAddress: (address: string) => boolean;
}