#!/bin/bash

SRC_DIR="src"
DST_DIR="dist"

JAVA_DIR="${DST_DIR}/java/src/main/java"
TS_DIR="${DST_DIR}/typescript"

OUTPUT_ARGS=()

unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     OS=Linux;;
    Darwin*)    OS=Mac;;
    CYGWIN*)    OS=Cygwin;;
    MINGW*)     OS=MinGw;;
    *)          OS="UNKNOWN:${unameOut}"
esac

if [[ ! -d "${JAVA_DIR}" ]]; then
  echo "Creating Java build folder"
  mkdir -p dist/java/src/main/java
  echo "Created Java build folder" 
fi

OUTPUT_ARGS+=("--java_out=$JAVA_DIR")

if [[ ! -d "${TS_DIR}" ]]; then
  echo "Creating Typescript build folder"
  mkdir -p dist/typescript
  echo "Created Typescript build folder"
fi

OUTPUT_ARGS+=("--ts_proto_out=${TS_DIR}")
OUTPUT_ARGS+=("--ts_proto_opt=useOptionals=none")
OUTPUT_ARGS+=("--ts_proto_opt=outputTypeRegistry=true")
OUTPUT_ARGS+=("--ts_proto_opt=context=true")
OUTPUT_ARGS+=("--ts_proto_opt=lowerCaseServiceMethods=true")
OUTPUT_ARGS+=("--ts_proto_opt=useExactTypes=false")
OUTPUT_ARGS+=("--ts_proto_opt=outputServices=generic-definitions,outputServices=default")

PROTOC_BIN="Unknown"

if [[ "${OS}" = "Mac" ]]; then
  PROTOC_BIN="protoc-macos-universal"
  echo "Using MacOS Protoc binary"
else
  echo "Could not determine which executable to use"
  exit 10;
fi

echo "Generating Protobuf files"

find "$SRC_DIR" -type f -name "*.proto" -exec ./bin/$PROTOC_BIN -I=$SRC_DIR --plugin=./node_modules/.bin/protoc-gen-ts_proto "${OUTPUT_ARGS[@]}" {} \;

if [ $? -eq 0 ]
  then
    echo "Successfully compiled all proto files"
  else
    echo "Failed to compile proto files! Exiting!"
    exit 1
fi

# ./bin/$PROTOC_BIN -I=$SRC_DIR --java_out=$JAVA_DIR $SRC_DIR/common/world.proto

# if [[ "$OSTYPE" == "darwin"* ]]; then
#
# fi
