#!/bin/bash

increment_version() {
  local version=$1
  local part=$2

  IFS='.' read -r major minor patch <<< "$version"

  if [[ "$part" == "patch" ]]; then
    patch=$((patch + 1))
  elif [[ "$part" == "minor" ]]; then
    minor=$((minor + 1))
    patch=0
  else
    echo "Invalid argument. Use 'patch' or 'minor'."
    exit 1
  fi

  echo "$major.$minor.$patch"
}

POM_FILE="pom.xml"

if [[ ! -f "$POM_FILE" ]]; then
  echo "File $POM_FILE does not exist."
  exit 1
fi

CURRENT_VERSION=$(awk -F '[<>]' '/<version>/ {print $3; exit}' "$POM_FILE")

if [[ -z "$CURRENT_VERSION" ]]; then
  echo "Version not found in $POM_FILE."
  exit 1
fi

if [[ "$1" != "patch" && "$1" != "minor" ]]; then
  echo "Usage: $0 {patch|minor}"
  exit 1
fi

NEW_VERSION=$(increment_version "$CURRENT_VERSION" "$1")

sed "s/$CURRENT_VERSION/$NEW_VERSION/" $POM_FILE > $POM_FILE.tmp && mv $POM_FILE.tmp $POM_FILE 
echo "Updated version: $CURRENT_VERSION -> $NEW_VERSION"

echo "Copying pom to java build location"
cp $POM_FILE dist/java

echo "Creating Maven package"
cd dist/java
mvn clean package

echo "Adding all changes to GIT"
git add -A
read -p "About to commit changes, press any key to continue. Do CTRL+C to abort."
git commit --allow-empty-message
if [ $? -eq 0 ]
then
  echo "GIT commit completed"
  git tag -a "v${NEW_VERSION}" -m "Version ${NEW_VERSION}"
  echo "Pushing version to remote"
  git push --follow-tags --set-upstream origin "$(git branch --show-current)"
else
  echo "GIT commit failed, aborting!"
  exit
fi
