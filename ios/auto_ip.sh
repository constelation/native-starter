# The app needs the wifi IP to run on device. Write computer's IP address to a file in the app bundle.
APP_DIRECTORY="${BUILT_PRODUCTS_DIR}/${PRODUCT_NAME}.app"
rm -f "$APP_DIRECTORY/ReactNativeServerConfig.txt"
if [ "${CONFIGURATION}" == "Debug" ]; then
  touch "$APP_DIRECTORY/ReactNativeServerConfig.txt"
  echo "`ifconfig | grep inet\\ | tail -1 | cut -d \" \" -f 2`" > "$APP_DIRECTORY/ReactNativeServerConfig.txt"
fi
