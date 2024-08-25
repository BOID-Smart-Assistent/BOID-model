import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export interface Schedule {
    $type: "model.boid.Schedule";
    /** All the timeslots in the schedule */
    timeslots: Timeslot[];
}
export interface Timeslot {
    $type: "model.boid.Timeslot";
    id: string;
    /** The presentation given at the current timeslot */
    presentation: Presentation | undefined;
}
/** TODO: Rename this to something more generic */
export interface Presentation {
    $type: "model.boid.Presentation";
    id: string;
    /** The name of the presentation */
    label: string;
}
export declare const Schedule: {
    $type: "model.boid.Schedule";
    encode(message: Schedule, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Schedule;
    fromJSON(object: any): Schedule;
    toJSON(message: Schedule): unknown;
    create(base?: DeepPartial<Schedule>): Schedule;
    fromPartial(object: DeepPartial<Schedule>): Schedule;
};
export declare const Timeslot: {
    $type: "model.boid.Timeslot";
    encode(message: Timeslot, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Timeslot;
    fromJSON(object: any): Timeslot;
    toJSON(message: Timeslot): unknown;
    create(base?: DeepPartial<Timeslot>): Timeslot;
    fromPartial(object: DeepPartial<Timeslot>): Timeslot;
};
export declare const Presentation: {
    $type: "model.boid.Presentation";
    encode(message: Presentation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Presentation;
    fromJSON(object: any): Presentation;
    toJSON(message: Presentation): unknown;
    create(base?: DeepPartial<Presentation>): Presentation;
    fromPartial(object: DeepPartial<Presentation>): Presentation;
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
