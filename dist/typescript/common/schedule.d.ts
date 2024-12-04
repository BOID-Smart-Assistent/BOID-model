import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export interface Schedule {
    $type: "model.boid.Schedule";
    /** All the timeslots in the schedule */
    schedule: Day[];
}
export interface Day {
    $type: "model.boid.Day";
    date: string;
    timeslots: Timeslot[];
}
export interface Timeslot {
    $type: "model.boid.Timeslot";
    id: number;
    presentations: Presentation[];
}
/** Rework this into a more detailed way */
export interface Presentation {
    $type: "model.boid.Presentation";
    id: number;
    name: string;
    topic: string;
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
export declare const Day: {
    $type: "model.boid.Day";
    encode(message: Day, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Day;
    fromJSON(object: any): Day;
    toJSON(message: Day): unknown;
    create(base?: DeepPartial<Day>): Day;
    fromPartial(object: DeepPartial<Day>): Day;
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
