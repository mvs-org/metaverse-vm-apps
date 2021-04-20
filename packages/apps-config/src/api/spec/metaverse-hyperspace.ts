// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

// import type { OverrideBundleDefinition } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition, RegistryTypes } from '@polkadot/types/types';

const types: RegistryTypes = {
  "Address": "MultiAddress",
  "LookupSource": "MultiAddress",
  "__[pallet.balances]__": {},
  BalanceInfo: {
    amount: 'Balance',
    assetId: 'AssetId'
  },
  "BalanceLock": {
    "id": "LockIdentifier",
    "lock_for": "LockFor",
    "lock_reasons": "LockReasons",
    "amount": "Balance",
    "reasons": "Reasons"
  },
  "LockFor": {
    "_enum": {
      "Common": "Common",
      "Staking": "StakingLock"
    }
  },
  "Common": {
    "amount": "Balance"
  },
  "StakingLock": {
    "staking_amount": "Balance",
    "unbondings": "Vec<Unbonding>"
  },
  "LockReasons": {
    "_enum": {
      "Fee": null,
      "Misc": null,
      "All": null
    }
  },
  "Unbonding": {
    "amount": "Balance",
    "until": "BlockNumber"
  },
  "AccountData": {
    "free": "Balance",
    "reserved": "Balance",
    "free_dna": "Balance",
    "reserved_dna": "Balance",
    "misc_frozen": "Balance",
    "fee_frozen": "Balance"
  },
  "__[pallet.staking]__": {},
  "EtpBalance": "Balance",
  "DnaBalance": "Balance",
  "TsInMs": "u64",
  "Power": "u32",
  "DepositId": "U256",
  "StakingBalanceT": {
    "_enum": {
      "EtpBalance": "Balance",
      "DnaBalance": "Balance"
    }
  },
  "StakingLedgerT": {
    "stash": "AccountId",
    "active_etp": "Compact<Balance>",
    "active_deposit_etp": "Compact<Balance>",
    "active_dna": "Compact<Balance>",
    "deposit_items": "Vec<TimeDepositItem>",
    "etp_staking_lock": "StakingLock",
    "dna_staking_lock": "StakingLock",
    "claimed_rewards": "Vec<EraIndex>",
    "total": "Compact<Balance>",
    "active": "Compact<Balance>",
    "unlocking": "Vec<UnlockChunk>"
  },
  "TimeDepositItem": {
    "value": "Compact<Balance>",
    "start_time": "Compact<TsInMs>",
    "expire_time": "Compact<TsInMs>"
  },
  "ExposureT": {
    "own_etp_balance": "Compact<Balance>",
    "own_dna_balance": "Compact<Balance>",
    "own_power": "Power",
    "total_power": "Power",
    "others": "Vec<IndividualExposure>"
  },
  "IndividualExposure": {
    "who": "AccountId",
    "etp_balance": "Compact<Balance>",
    "dna_balance": "Compact<Balance>",
    "power": "Power",
    "value": "Compact<Balance>"
  },
  "ElectionResultT": {
    "elected_stashes": "Vec<AccountId>",
    "exposures": "Vec<(AccountId, ExposureT)>",
    "compute": "ElectionCompute"
  },
  "RKT": {
    "r": "Balance",
    "k": "Balance"
  },
  "SpanRecord": {
    "slashed": "RKT",
    "paid_out": "RKT"
  },
  "UnappliedSlash": {
    "validator": "AccountId",
    "own": "RKT",
    "others": "Vec<(AccountId, RKT)>",
    "reporters": "Vec<AccountId>",
    "payout": "RKT"
  },
  "__[pallet.treasury]__": {},
  "TreasuryProposal": {
    "proposer": "AccountId",
    "beneficiary": "AccountId",
    "etp_value": "Balance",
    "dna_value": "Balance",
    "etp_bond": "Balance",
    "dna_bond": "Balance"
  },
  "__[pallet.bridge.crab]__": {},
  "MappedEtp": "u128",
  "__[pallet.bridge.eth]__": {},
  "EthereumTransactionIndex": "(H256, u64)",
  "EthereumBlockNumber": "u64",
  "EthereumHeader": {
    "parent_hash": "H256",
    "timestamp": "u64",
    "number": "EthereumBlockNumber",
    "author": "EthereumAddress",
    "transactions_root": "H256",
    "uncles_hash": "H256",
    "extra_data": "Bytes",
    "state_root": "H256",
    "receipts_root": "H256",
    "log_bloom": "Bloom",
    "gas_used": "U256",
    "gas_limit": "U256",
    "difficulty": "U256",
    "seal": "Vec<Bytes>",
    "hash": "Option<H256>"
  },
  "EthereumAddress": "H160",
  "EcdsaMessage": "[u8; 32; EcdsaMessage]",
  "Bloom": "[u8; 256; Bloom]",
  "H128": "[u8; 16; H128]",
  "EthashProof": {
    "dag_nodes": "(H512, H512)",
    "proof": "Vec<H128>"
  },
  "EthereumReceipt": {
    "gas_used": "U256",
    "log_bloom": "Bloom",
    "logs": "Vec<LogEntry>",
    "outcome": "TransactionOutcome"
  },
  "EthereumNetworkType": {
    "_enum": {
      "Mainnet": null,
      "Ropsten": null
    }
  },
  "RedeemFor": {
    "_enum": {
      "Token": null,
      "Deposit": null
    }
  },
  "EthereumReceiptProof": {
    "index": "u64",
    "proof": "Bytes",
    "header_hash": "H256"
  },
  "EthereumReceiptProofThing": "(EthereumHeader, EthereumReceiptProof, MMRProof)",
  "MMRProof": {
    "member_leaf_index": "u64",
    "last_leaf_index": "u64",
    "proof": "Vec<H256>"
  },
  "EthereumRelayHeaderParcel": {
    "header": "EthereumHeader",
    "parent_mmr_root": "H256"
  },
  "EthereumRelayProofs": {
    "ethash_proof": "Vec<EthashProof>",
    "mmr_proof": "Vec<H256>"
  },
  "__[TODO.Generalize]__": "",
  "RelayAuthoritySigner": "EthereumAddress",
  "RelayAuthorityMessage": "EcdsaMessage",
  "RelayAuthoritySignature": "EcdsaSignature",
  "__[pallet.claims]__": {},
  "OtherSignature": {
    "_enum": {
      "Eth": "EcdsaSignature",
      "Tron": "EcdsaSignature"
    }
  },
  "EcdsaSignature": "[u8; 65; EcdsaSignature]",
  "OtherAddress": {
    "_enum": {
      "Eth": "[u8; 20; EthereumAddress]",
      "Tron": "[u8; 20; TronAddress]"
    }
  },
  "AddressT": "[u8; 20; AddressT]",
  "__[pallet.header-mmr]__": {},
  "MerkleMountainRangeRootLog": {
    "prefix": "[u8; 4; Prefix]",
    "parent_mmr_root": "Hash"
  },
  "__[primitives.relay]__": {},
  "OpCode": "[u8; 4; OpCode]",
  "Term": "u32",
  "RelayHeaderId": "EthereumBlockNumber",
  "RelayHeaderParcel": "EthereumRelayHeaderParcel",
  "RelayProofs": "EthereumRelayProofs",
  "RelayAffirmationId": {
    "game_id": "EthereumBlockNumber",
    "round": "u32",
    "index": "u32"
  },
  "RelayAffirmationT": {
    "relayer": "AccountId",
    "relay_header_parcels": "EthereumRelayHeaderParcel",
    "bond": "Balance",
    "maybe_extended_relay_affirmation_id": "Option<RelayAffirmationId>",
    "verified": "bool"
  },
  "RelayVotingState": {
    "ayes": "Vec<AccountId>",
    "nays": "Vec<AccountId>"
  },
  "RelayAuthorityT": {
    "account_id": "AccountId",
    "signer": "Signer",
    "stake": "Balance",
    "term": "BlockNumber"
  },
  "ScheduledAuthoritiesChangeT": {
    "next_authorities": "Vec<RelayAuthorityT>",
    "deadline": "BlockNumber"
  },
  "MMRRoot": "Hash",
  // "__[hyperspace.runtime]__": {
  //   "ProxyType": {
  //     "_enum": {
  //       "Any": null,
  //       "NonTransfer": null,
  //       "Governance": null,
  //       "Staking": null,
  //       "EthereumBridge": null
  //     }
  //   }
  // },
  "__[node.rpc]__": {},
  "BalancesRuntimeDispatchInfo": {
    "usable_balance": "Balance"
  },
  "StakingRuntimeDispatchInfo": {
    "power": "Power"
  }
}

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types,
    }
  ]
};

export default definitions;
