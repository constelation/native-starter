#!/usr/bin/env bash

# taken from https://github.com/futurice/pepperoni-app-kit/blob/master/support/rename.sh

oldAppName='NativeStarter'
oldLowerCaseName=`echo $oldAppName | tr '[:upper:]' '[:lower:]'`

newAppName=$1
newLowerCaseName=`echo $newAppName | tr '[:upper:]' '[:lower:]'`

appRoot=`dirname $0`

[ -z "${newAppName}" ] && echo 'Missing required parameter newAppName' && exit 1

printf "\nRenaming to ${newAppName}"
# printf "\nRenaming to lowercase ${newLowerCaseName}"
# printf "\nIn appRoot ${appRoot}"

grep -rI ${oldAppName} --exclude='rename.sh' $appRoot/* | tr ':' ' ' | awk '{print $1}' | uniq  | xargs -I{} sed -i.bak "s/${oldAppName}/${newAppName}/g" {}
grep -rI ${oldLowerCaseName} --exclude='rename.sh' $appRoot/* | tr ':' ' ' | awk '{print $1}' | uniq | xargs -I{} sed -i.bak "s/${oldLowerCaseName}/${newLowerCaseName}/g" {}
find . -name '*.bak' -exec rm {} \;

printf "\nFinished text replacement. Now to move the files..."

for fileToMove in `find $appRoot/ios -depth -name "*$oldAppName*"`; do
  mv $fileToMove `echo $fileToMove | sed "s/\(.*\)$oldAppName/\1$newAppName/g"`
done

for fileToMove in `find $appRoot/android -depth -name "*$oldLowerCaseName*"`; do
  mv $fileToMove `echo $fileToMove | sed "s/\(.*\)$oldLowerCaseName/\1$newLowerCaseName/g"`
done

YELLOW='\033[1;33m'
CLEAR='\033[0m'
printf "\nRenamed application to ${newAppName}"
printf "${YELLOW}\n\nIf you have previously built the application, please clean your build artifacts"
printf "${YELLOW}\n\nAndroid:\n(cd android; ./gradlew clean)"
printf "${YELLOW}\n\niOS:\nClean build folders in XCode (Option+Shift+Cmd+K)\nReinstall CocoaPods (cd ios; pod install)\n"
