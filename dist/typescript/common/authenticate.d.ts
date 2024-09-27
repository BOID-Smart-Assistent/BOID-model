import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export interface Authenticate {
    $type: "model.boid.Authenticate";
    id: string;
}
export declare const Authenticate: {
    $type: "model.boid.Authenticate";
    encode(message: Authenticate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Authenticate;
    fromJSON(object: any): Authenticate;
    toJSON(message: Authenticate): unknown;
    create(base?: DeepPartial<Authenticate>): Authenticate;
    fromPartial(object: DeepPartial<Authenticate>): Authenticate;
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
