/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20, ERC20Interface } from "../ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000bb338038062000bb383398101604081905262000034916200011f565b600362000042838262000218565b50600462000051828262000218565b505050620002e4565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200008257600080fd5b81516001600160401b03808211156200009f576200009f6200005a565b604051601f8301601f19908116603f01168101908282118183101715620000ca57620000ca6200005a565b81604052838152602092508683858801011115620000e757600080fd5b600091505b838210156200010b5785820183015181830184015290820190620000ec565b600093810190920192909252949350505050565b600080604083850312156200013357600080fd5b82516001600160401b03808211156200014b57600080fd5b620001598683870162000070565b935060208501519150808211156200017057600080fd5b506200017f8582860162000070565b9150509250929050565b600181811c908216806200019e57607f821691505b602082108103620001bf57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200021357600081815260208120601f850160051c81016020861015620001ee5750805b601f850160051c820191505b818110156200020f57828155600101620001fa565b5050505b505050565b81516001600160401b038111156200023457620002346200005a565b6200024c8162000245845462000189565b84620001c5565b602080601f8311600181146200028457600084156200026b5750858301515b600019600386901b1c1916600185901b1785556200020f565b600085815260208120601f198616915b82811015620002b55788860151825594840194600190910190840162000294565b5085821015620002d45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6108bf80620002f46000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461012357806370a082311461013657806395d89b411461015f578063a457c2d714610167578063a9059cbb1461017a578063dd62ed3e1461018d57600080fd5b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ef57806323b872dd14610101578063313ce56714610114575b600080fd5b6100b66101c6565b6040516100c39190610709565b60405180910390f35b6100df6100da366004610773565b610258565b60405190151581526020016100c3565b6002545b6040519081526020016100c3565b6100df61010f36600461079d565b61026f565b604051600981526020016100c3565b6100df610131366004610773565b610325565b6100f36101443660046107d9565b6001600160a01b031660009081526020819052604090205490565b6100b6610361565b6100df610175366004610773565b610370565b6100df610188366004610773565b610409565b6100f361019b3660046107fb565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101d59061082e565b80601f01602080910402602001604051908101604052809291908181526020018280546102019061082e565b801561024e5780601f106102235761010080835404028352916020019161024e565b820191906000526020600020905b81548152906001019060200180831161023157829003601f168201915b5050505050905090565b6000610265338484610416565b5060015b92915050565b6001600160a01b0383166000908152600160209081526040808320338452909152812054600019811461030f57828110156103025760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61030f8533858403610416565b61031a85858561053a565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161026591859061035c908690610868565b610416565b6060600480546101d59061082e565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156103f25760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016102f9565b6103ff3385858403610416565b5060019392505050565b600061026533848461053a565b6001600160a01b0383166104785760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016102f9565b6001600160a01b0382166104d95760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016102f9565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03831661059e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016102f9565b6001600160a01b0382166106005760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016102f9565b6001600160a01b038316600090815260208190526040902054818110156106785760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016102f9565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106af908490610868565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106fb91815260200190565b60405180910390a350505050565b600060208083528351808285015260005b818110156107365785810183015185820160400152820161071a565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461076e57600080fd5b919050565b6000806040838503121561078657600080fd5b61078f83610757565b946020939093013593505050565b6000806000606084860312156107b257600080fd5b6107bb84610757565b92506107c960208501610757565b9150604084013590509250925092565b6000602082840312156107eb57600080fd5b6107f482610757565b9392505050565b6000806040838503121561080e57600080fd5b61081783610757565b915061082560208401610757565b90509250929050565b600181811c9082168061084257607f821691505b60208210810361086257634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561026957634e487b7160e01b600052601160045260246000fdfea264697066735822122036a29577ea251e4a50fd6fca250949bf4398e26e43c796b6b604b3ec2dbbd7e564736f6c63430008130033";

export class ERC20__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC20>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}