import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare enum BoidType {
    BELIEF = 0,
    OBLIGATION = 1,
    INTENTION = 2,
    DESIRE = 3,
    UNRECOGNIZED = -1
}
export declare function boidTypeFromJSON(object: any): BoidType;
export declare function boidTypeToJSON(object: BoidType): string;
export interface Rule {
    $type: "model.boid.Rule";
    head: string;
    complement: string;
    ruleType: BoidType;
}
export declare const Rule: {
    $type: "model.boid.Rule";
    encode(message: Rule, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Rule;
    fromJSON(object: any): Rule;
    toJSON(message: Rule): unknown;
    create(base?: DeepPartial<Rule>): Rule;
    fromPartial(object: DeepPartial<Rule>): Rule;
};
export interface DataLoaderOptions {
    cache?: boolean;
}
export interface DataLoaders {
    rpcDataLoaderOptions?: DataLoaderOptions;
    getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
