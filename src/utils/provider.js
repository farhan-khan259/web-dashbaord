import { ethers } from 'ethers';

const fallbackRpc = 'https://eth-mainnet.public.blastapi.io';

export function createReadOnlyProvider() {
  const rpcUrl = import.meta.env.VITE_ALCHEMY_MAINNET_URL || fallbackRpc;
  return new ethers.JsonRpcProvider(rpcUrl);
}

export function formatAddress(address) {
  if (!address) return '—';
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

export function formatUnitsValue(value, decimals = 18) {
  if (!value) return '0';
  return Number(ethers.formatUnits(value, decimals)).toLocaleString(undefined, {
    maximumFractionDigits: decimals === 6 ? 2 : 4,
  });
}

export function formatUsd(value) {
  if (!value) return '$0';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(Number(ethers.formatUnits(value, 18)));
}
