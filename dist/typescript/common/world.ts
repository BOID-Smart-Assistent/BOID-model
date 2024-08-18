// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.0.2
//   protoc               v5.27.2
// source: common/world.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { messageTypeRegistry } from "../typeRegistry";

export const protobufPackage = "model.boid";

export interface Person {
  $type: "model.boid.Person";
  name: string;
  id: number;
  email: string;
  phones: Person_PhoneNumber[];
}

export enum Person_PhoneType {
  PHONE_TYPE_UNSPECIFIED = 0,
  PHONE_TYPE_MOBILE = 1,
  PHONE_TYPE_HOME = 2,
  PHONE_TYPE_WORK = 3,
  UNRECOGNIZED = -1,
}

export function person_PhoneTypeFromJSON(object: any): Person_PhoneType {
  switch (object) {
    case 0:
    case "PHONE_TYPE_UNSPECIFIED":
      return Person_PhoneType.PHONE_TYPE_UNSPECIFIED;
    case 1:
    case "PHONE_TYPE_MOBILE":
      return Person_PhoneType.PHONE_TYPE_MOBILE;
    case 2:
    case "PHONE_TYPE_HOME":
      return Person_PhoneType.PHONE_TYPE_HOME;
    case 3:
    case "PHONE_TYPE_WORK":
      return Person_PhoneType.PHONE_TYPE_WORK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Person_PhoneType.UNRECOGNIZED;
  }
}

export function person_PhoneTypeToJSON(object: Person_PhoneType): string {
  switch (object) {
    case Person_PhoneType.PHONE_TYPE_UNSPECIFIED:
      return "PHONE_TYPE_UNSPECIFIED";
    case Person_PhoneType.PHONE_TYPE_MOBILE:
      return "PHONE_TYPE_MOBILE";
    case Person_PhoneType.PHONE_TYPE_HOME:
      return "PHONE_TYPE_HOME";
    case Person_PhoneType.PHONE_TYPE_WORK:
      return "PHONE_TYPE_WORK";
    case Person_PhoneType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Person_PhoneNumber {
  $type: "model.boid.Person.PhoneNumber";
  number: string;
  type: Person_PhoneType;
}

function createBasePerson(): Person {
  return { $type: "model.boid.Person", name: "", id: 0, email: "", phones: [] };
}

export const Person = {
  $type: "model.boid.Person" as const,

  encode(message: Person, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== 0) {
      writer.uint32(16).int32(message.id);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    for (const v of message.phones) {
      Person_PhoneNumber.encode(v!, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Person {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerson();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.phones.push(Person_PhoneNumber.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Person {
    return {
      $type: Person.$type,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      phones: globalThis.Array.isArray(object?.phones)
        ? object.phones.map((e: any) => Person_PhoneNumber.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Person): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.phones?.length) {
      obj.phones = message.phones.map((e) => Person_PhoneNumber.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Person>): Person {
    return Person.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Person>): Person {
    const message = createBasePerson();
    message.name = object.name ?? "";
    message.id = object.id ?? 0;
    message.email = object.email ?? "";
    message.phones = object.phones?.map((e) => Person_PhoneNumber.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Person.$type, Person);

function createBasePerson_PhoneNumber(): Person_PhoneNumber {
  return { $type: "model.boid.Person.PhoneNumber", number: "", type: 0 };
}

export const Person_PhoneNumber = {
  $type: "model.boid.Person.PhoneNumber" as const,

  encode(message: Person_PhoneNumber, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.number !== "") {
      writer.uint32(10).string(message.number);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Person_PhoneNumber {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerson_PhoneNumber();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.number = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Person_PhoneNumber {
    return {
      $type: Person_PhoneNumber.$type,
      number: isSet(object.number) ? globalThis.String(object.number) : "",
      type: isSet(object.type) ? person_PhoneTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: Person_PhoneNumber): unknown {
    const obj: any = {};
    if (message.number !== "") {
      obj.number = message.number;
    }
    if (message.type !== 0) {
      obj.type = person_PhoneTypeToJSON(message.type);
    }
    return obj;
  },

  create(base?: DeepPartial<Person_PhoneNumber>): Person_PhoneNumber {
    return Person_PhoneNumber.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Person_PhoneNumber>): Person_PhoneNumber {
    const message = createBasePerson_PhoneNumber();
    message.number = object.number ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Person_PhoneNumber.$type, Person_PhoneNumber);

export interface DataLoaderOptions {
  cache?: boolean;
}

export interface DataLoaders {
  rpcDataLoaderOptions?: DataLoaderOptions;
  getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
