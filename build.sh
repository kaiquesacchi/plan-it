rm -rf ./build ./www/build
npm run build
mv ./build ./www
cordova build android
cp ./platforms/android/app/build/outputs/apk/debug/app-debug.apk ~/Desktop/plan-it.apk