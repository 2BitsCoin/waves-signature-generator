import { TRANSACTION_TYPE, TRANSACTION_TYPE_NUMBER } from '../constants';


export interface ISignatureGenerator {

    getSignature(privateKey: string): Promise<string>;

    getBytes(): Promise<Uint8Array>;

    getExactBytes(fieldName: string): Promise<Uint8Array>;
}

export interface ISignatureGeneratorConstructor<T> {
    new(data: T): ISignatureGenerator;
}

export interface IDEFAULT_PROPS {
    senderPublicKey: string;
    timestamp: number;
}

export interface IISSUE_PROPS extends IDEFAULT_PROPS {
    name: string;
    description: string;
    quantity: string;
    precision: number;
    reissuable: boolean;
    fee: string;
}

export interface ITRANSFER_PROPS extends IDEFAULT_PROPS {
    assetId: string;
    feeAssetId: string;
    amount: string;
    fee: string;
    recipient: string;
    attachment: string;
}

export interface IREISSUE_PROPS extends IDEFAULT_PROPS {
    assetId: string;
    quantity: string;
    reissuable: boolean;
    fee: string;
}

export interface IBURN_PROPS extends IDEFAULT_PROPS {
    assetId: string;
    quantity: string;
    fee: string;
}

export interface ILEASE_PROPS extends IDEFAULT_PROPS {
    recipient: string;
    amount: string;
    fee: string;
}

export interface ICANCEL_LEASING_PROPS extends IDEFAULT_PROPS {
    fee: string;
    transactionId: string;
}

export interface ICREATE_ALIAS_PROPS extends IDEFAULT_PROPS {
    alias: string;
    fee: string;
}

export interface IORDER_PROPS extends IDEFAULT_PROPS {
    matcherPublicKey: string;
    amountAsset: string;
    priceAsset: string;
    orderType: string;
    price: string;
    amount: string;
    expiration: number;
    matcherFee: string;
}

export interface ICANCEL_ORDER_PROPS {
    senderPublicKey: string;
    orderId: string;
}

export type TTX_NUMBER_MAP = {
    3: ISignatureGeneratorConstructor<IISSUE_PROPS>;
    4: ISignatureGeneratorConstructor<ITRANSFER_PROPS>;
    5: ISignatureGeneratorConstructor<IREISSUE_PROPS>;
    6: ISignatureGeneratorConstructor<IBURN_PROPS>;
    7: ISignatureGeneratorConstructor<ILEASE_PROPS>;
    8: ISignatureGeneratorConstructor<ILEASE_PROPS>;
    9: ISignatureGeneratorConstructor<ICANCEL_LEASING_PROPS>;
    10: ISignatureGeneratorConstructor<ICREATE_ALIAS_PROPS>;
}

export type TTX_TYPE_MAP = {
    issue: ISignatureGeneratorConstructor<IISSUE_PROPS>;
    transfer: ISignatureGeneratorConstructor<ITRANSFER_PROPS>;
    reissue: ISignatureGeneratorConstructor<IREISSUE_PROPS>;
    burn: ISignatureGeneratorConstructor<IBURN_PROPS>;
    exchange: ISignatureGeneratorConstructor<ILEASE_PROPS>;
    lease: ISignatureGeneratorConstructor<ILEASE_PROPS>;
    cancelLeasing: ISignatureGeneratorConstructor<ICANCEL_LEASING_PROPS>;
    createAlias: ISignatureGeneratorConstructor<ICREATE_ALIAS_PROPS>;
}
