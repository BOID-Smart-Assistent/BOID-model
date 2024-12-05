import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export interface BoidOutput {
    $type: "model.boid.BoidOutput";
    /** List of the ids of the presentation */
    presentations: number[];
    userId: number;
}
export declare const BoidOutput: {
    $type: "model.boid.BoidOutput";
    encode(message: BoidOutput, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BoidOutput;
    fromJSON(object: any): BoidOutput;
    toJSON(message: BoidOutput): unknown;
    create(base?: DeepPartial<BoidOutput>): BoidOutput;
    fromPartial(object: DeepPartial<BoidOutput>): BoidOutput;
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
