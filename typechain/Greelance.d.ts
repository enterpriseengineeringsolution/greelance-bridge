/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface GreelanceInterface extends ethers.utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "disable24HrsRestriction()": FunctionFragment;
    "enable24HrsRestriction()": FunctionFragment;
    "enableTrading()": FunctionFragment;
    "excludeFromFees(address)": FunctionFragment;
    "includeFromFees(address)": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "isExcludedFromFees(address)": FunctionFragment;
    "lastTradeTime(address)": FunctionFragment;
    "maxSellableAmount()": FunctionFragment;
    "maxSellableRestrictionEnabled()": FunctionFragment;
    "mint()": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerBurn(address,uint256)": FunctionFragment;
    "removeMaxSellableRestriction()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setBuyTaxPercentage(uint256)": FunctionFragment;
    "setMaxSellableAmount(uint256)": FunctionFragment;
    "setSellTaxPercentage(uint256)": FunctionFragment;
    "setTaxCollector(address)": FunctionFragment;
    "setUniswapPair(address)": FunctionFragment;
    "symbol()": FunctionFragment;
    "taxCollector()": FunctionFragment;
    "taxFeeOnBuy()": FunctionFragment;
    "taxFeeOnSell()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "trading24HrsRestrictionEnabled()": FunctionFragment;
    "tradingEnabled()": FunctionFragment;
    "tradingIn24Hours(address)": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "uniswapV2Pair()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "disable24HrsRestriction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "enable24HrsRestriction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "enableTrading",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "excludeFromFees",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "includeFromFees",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isExcludedFromFees",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastTradeTime",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "maxSellableAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxSellableRestrictionEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "mint", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerBurn",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMaxSellableRestriction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBuyTaxPercentage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxSellableAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSellTaxPercentage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxCollector",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setUniswapPair",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "taxCollector",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "taxFeeOnBuy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "taxFeeOnSell",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "trading24HrsRestrictionEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tradingEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tradingIn24Hours",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV2Pair",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disable24HrsRestriction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enable24HrsRestriction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableTrading",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "excludeFromFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "includeFromFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isExcludedFromFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastTradeTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxSellableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxSellableRestrictionEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerBurn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeMaxSellableRestriction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBuyTaxPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxSellableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSellTaxPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTaxCollector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUniswapPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "taxCollector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taxFeeOnBuy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taxFeeOnSell",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "trading24HrsRestrictionEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tradingEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tradingIn24Hours",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV2Pair",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ExcludeFromFees(address,bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExcludeFromFees"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber] & {
    owner: string;
    spender: string;
    value: BigNumber;
  }
>;

export type ExcludeFromFeesEvent = TypedEvent<
  [string, boolean] & { account: string; isExcluded: boolean }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber] & { from: string; to: string; value: BigNumber }
>;

export class Greelance extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: GreelanceInterface;

  functions: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    disable24HrsRestriction(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enable24HrsRestriction(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enableTrading(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    excludeFromFees(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    includeFromFees(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isExcludedFromFees(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    lastTradeTime(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maxSellableAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxSellableRestrictionEnabled(
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerBurn(
      from_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeMaxSellableRestriction(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBuyTaxPercentage(
      _taxAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxSellableAmount(
      _maxAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSellTaxPercentage(
      _taxAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxCollector(
      taxCollector_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUniswapPair(
      _uniswapV2Pair: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    taxCollector(overrides?: CallOverrides): Promise<[string]>;

    taxFeeOnBuy(overrides?: CallOverrides): Promise<[BigNumber]>;

    taxFeeOnSell(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    trading24HrsRestrictionEnabled(
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    tradingEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    tradingIn24Hours(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uniswapV2Pair(overrides?: CallOverrides): Promise<[string]>;
  };

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  disable24HrsRestriction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enable24HrsRestriction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enableTrading(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  excludeFromFees(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  includeFromFees(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isExcludedFromFees(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  lastTradeTime(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  maxSellableAmount(overrides?: CallOverrides): Promise<BigNumber>;

  maxSellableRestrictionEnabled(overrides?: CallOverrides): Promise<boolean>;

  mint(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerBurn(
    from_: string,
    amount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeMaxSellableRestriction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBuyTaxPercentage(
    _taxAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxSellableAmount(
    _maxAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSellTaxPercentage(
    _taxAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxCollector(
    taxCollector_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUniswapPair(
    _uniswapV2Pair: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  taxCollector(overrides?: CallOverrides): Promise<string>;

  taxFeeOnBuy(overrides?: CallOverrides): Promise<BigNumber>;

  taxFeeOnSell(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  trading24HrsRestrictionEnabled(overrides?: CallOverrides): Promise<boolean>;

  tradingEnabled(overrides?: CallOverrides): Promise<boolean>;

  tradingIn24Hours(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uniswapV2Pair(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    disable24HrsRestriction(overrides?: CallOverrides): Promise<void>;

    enable24HrsRestriction(overrides?: CallOverrides): Promise<void>;

    enableTrading(overrides?: CallOverrides): Promise<void>;

    excludeFromFees(account: string, overrides?: CallOverrides): Promise<void>;

    includeFromFees(account: string, overrides?: CallOverrides): Promise<void>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isExcludedFromFees(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lastTradeTime(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxSellableAmount(overrides?: CallOverrides): Promise<BigNumber>;

    maxSellableRestrictionEnabled(overrides?: CallOverrides): Promise<boolean>;

    mint(overrides?: CallOverrides): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerBurn(
      from_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    removeMaxSellableRestriction(overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setBuyTaxPercentage(
      _taxAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxSellableAmount(
      _maxAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setSellTaxPercentage(
      _taxAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTaxCollector(
      taxCollector_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setUniswapPair(
      _uniswapV2Pair: string,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    taxCollector(overrides?: CallOverrides): Promise<string>;

    taxFeeOnBuy(overrides?: CallOverrides): Promise<BigNumber>;

    taxFeeOnSell(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    trading24HrsRestrictionEnabled(overrides?: CallOverrides): Promise<boolean>;

    tradingEnabled(overrides?: CallOverrides): Promise<boolean>;

    tradingIn24Hours(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    uniswapV2Pair(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    "ExcludeFromFees(address,bool)"(
      account?: string | null,
      isExcluded?: null
    ): TypedEventFilter<
      [string, boolean],
      { account: string; isExcluded: boolean }
    >;

    ExcludeFromFees(
      account?: string | null,
      isExcluded?: null
    ): TypedEventFilter<
      [string, boolean],
      { account: string; isExcluded: boolean }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;

    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;
  };

  estimateGas: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    disable24HrsRestriction(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enable24HrsRestriction(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enableTrading(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    excludeFromFees(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    includeFromFees(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isExcludedFromFees(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastTradeTime(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxSellableAmount(overrides?: CallOverrides): Promise<BigNumber>;

    maxSellableRestrictionEnabled(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerBurn(
      from_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeMaxSellableRestriction(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBuyTaxPercentage(
      _taxAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxSellableAmount(
      _maxAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSellTaxPercentage(
      _taxAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxCollector(
      taxCollector_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUniswapPair(
      _uniswapV2Pair: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    taxCollector(overrides?: CallOverrides): Promise<BigNumber>;

    taxFeeOnBuy(overrides?: CallOverrides): Promise<BigNumber>;

    taxFeeOnSell(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    trading24HrsRestrictionEnabled(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tradingEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    tradingIn24Hours(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uniswapV2Pair(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    disable24HrsRestriction(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enable24HrsRestriction(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enableTrading(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    excludeFromFees(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    includeFromFees(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isExcludedFromFees(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastTradeTime(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxSellableAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxSellableRestrictionEnabled(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerBurn(
      from_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeMaxSellableRestriction(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBuyTaxPercentage(
      _taxAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxSellableAmount(
      _maxAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSellTaxPercentage(
      _taxAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxCollector(
      taxCollector_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUniswapPair(
      _uniswapV2Pair: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    taxCollector(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    taxFeeOnBuy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    taxFeeOnSell(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    trading24HrsRestrictionEnabled(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tradingEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tradingIn24Hours(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uniswapV2Pair(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}