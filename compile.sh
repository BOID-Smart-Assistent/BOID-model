#!/bin/bash

SRC_DIR="src"
DST_DIR="dist"

JAVA_DIR="${DST_DIR}/java/src/main/java"

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

PROTOC_BIN="Unknown"

if [[ "${OS}" = "Mac" ]]; then
  PROTOC_BIN="protoc-macos-universal"
  echo "Using MacOS Protoc binary"
else
  echo "Could not determine which executable to use"
  exit 10;
fi

echo "Generating Protobuf files"

find "$SRC_DIR" -type f -name "*.proto" -exec ./bin/$PROTOC_BIN -I=$SRC_DIR --java_out=$JAVA_DIR {} \;

./bin/$PROTOC_BIN -I=$SRC_DIR --java_out=$JAVA_DIR $SRC_DIR/common/world.proto

# if [[ "$OSTYPE" == "darwin"* ]]; then
#
# fi
