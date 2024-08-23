#!/bin/bash

SRC_DIR="src"
DST_DIR="dist"

JAVA_DIR="${DST_DIR}/java/src/main/java"
TS_DIR="${DST_DIR}/typescript"
PY_DIR="${DST_DIR}/python"

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
  mkdir -p $JAVA_DIR
  echo "Created Java build folder" 
fi

OUTPUT_ARGS+=("--java_out=$JAVA_DIR")

if [[ ! -d "${TS_DIR}" ]]; then
  echo "Creating Typescript build folder"
  mkdir -p $TS_DIR 
  echo "Created Typescript build folder"
fi

OUTPUT_ARGS+=("--ts_proto_out=${TS_DIR}")
OUTPUT_ARGS+=("--ts_proto_opt=useOptionals=none")
OUTPUT_ARGS+=("--ts_proto_opt=outputTypeRegistry=true")
OUTPUT_ARGS+=("--ts_proto_opt=context=true")
OUTPUT_ARGS+=("--ts_proto_opt=lowerCaseServiceMethods=true")
OUTPUT_ARGS+=("--ts_proto_opt=useExactTypes=false")
OUTPUT_ARGS+=("--ts_proto_opt=outputServices=generic-definitions,outputServices=default")

if [[ ! -d "${PY_DIR}" ]]; then
  echo "Creating Python build folder"
  mkdir -p $PY_DIR
  echo "Created Python build folder"
fi

# OUTPUT_ARGS+=("--python_betterproto_out=${PY_DIR}")
OUTPUT_ARGS+=("--python_betterproto_out=${PY_DIR}")


PROTOC_BIN="Unknown"

if [[ "${OS}" = "Mac" ]]; then
  PROTOC_BIN="protoc-macos-universal"
  echo "Using MacOS Protoc binary"
elif [[ "${OS}" = "Linux" ]]; then 
  PROTOC_BIN="protoc-linux-x86"
  echo "Using Linux x86 binary"
else
  echo "Could not determine which executable to use"
  exit 10;
fi

echo "Generating Protobuf files"

find "$SRC_DIR" -type f -name "*.proto" -exec ./bin/$PROTOC_BIN -I=$SRC_DIR --plugin=./node_modules/.bin/protoc-gen-ts_proto "${OUTPUT_ARGS[@]}" {} + 

if [ $? -eq 0 ]
  then
    echo "Successfully compiled all proto files"
  else
    echo "Failed to compile proto files! Exiting!"
    exit 1
fi

rm -R ./model

# ./bin/$PROTOC_BIN -I=$SRC_DIR --java_out=$JAVA_DIR $SRC_DIR/common/world.proto

# if [[ "$OSTYPE" == "darwin"* ]]; then
#
# fi
