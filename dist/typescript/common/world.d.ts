import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export interface Person {
    $type: "model.boid.Person";
    name: string;
    id: number;
    email: string;
    phones: Person_PhoneNumber[];
}
export declare enum Person_PhoneType {
    PHONE_TYPE_UNSPECIFIED = 0,
    PHONE_TYPE_MOBILE = 1,
    PHONE_TYPE_HOME = 2,
    PHONE_TYPE_WORK = 3,
    UNRECOGNIZED = -1
}
export declare function person_PhoneTypeFromJSON(object: any): Person_PhoneType;
export declare function person_PhoneTypeToJSON(object: Person_PhoneType): string;
export interface Person_PhoneNumber {
    $type: "model.boid.Person.PhoneNumber";
    number: string;
    type: Person_PhoneType;
}
export declare const Person: {
    $type: "model.boid.Person";
    encode(message: Person, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Person;
    fromJSON(object: any): Person;
    toJSON(message: Person): unknown;
    create(base?: DeepPartial<Person>): Person;
    fromPartial(object: DeepPartial<Person>): Person;
};
export declare const Person_PhoneNumber: {
    $type: "model.boid.Person.PhoneNumber";
    encode(message: Person_PhoneNumber, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Person_PhoneNumber;
    fromJSON(object: any): Person_PhoneNumber;
    toJSON(message: Person_PhoneNumber): unknown;
    create(base?: DeepPartial<Person_PhoneNumber>): Person_PhoneNumber;
    fromPartial(object: DeepPartial<Person_PhoneNumber>): Person_PhoneNumber;
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
