import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Schedule } from "../common/schedule";
export interface LlmInput {
    $type: "model.boid.LlmInput";
    /** The schedule of the conference */
    schedule: Schedule | undefined;
    /** the user information required for the rules */
    user: User | undefined;
}
export interface User {
    $type: "model.boid.User";
    /** Identification of the user */
    id: number;
    name: string;
    obligations: string[];
    interests: string[];
    preferredSpeakers: string[];
    role: string;
    affiliations: string;
}
export declare const LlmInput: {
    $type: "model.boid.LlmInput";
    encode(message: LlmInput, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LlmInput;
    fromJSON(object: any): LlmInput;
    toJSON(message: LlmInput): unknown;
    create(base?: DeepPartial<LlmInput>): LlmInput;
    fromPartial(object: DeepPartial<LlmInput>): LlmInput;
};
export declare const User: {
    $type: "model.boid.User";
    encode(message: User, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    create(base?: DeepPartial<User>): User;
    fromPartial(object: DeepPartial<User>): User;
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
