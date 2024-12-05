import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Rule } from "../common/rule";
export interface LlmOutput {
    $type: "model.boid.LlmOutput";
    rules: Rule[];
    userId: number;
}
export declare const LlmOutput: {
    $type: "model.boid.LlmOutput";
    encode(message: LlmOutput, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LlmOutput;
    fromJSON(object: any): LlmOutput;
    toJSON(message: LlmOutput): unknown;
    create(base?: DeepPartial<LlmOutput>): LlmOutput;
    fromPartial(object: DeepPartial<LlmOutput>): LlmOutput;
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
