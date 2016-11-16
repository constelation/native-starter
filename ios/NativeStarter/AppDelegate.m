/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"

@implementation AppDelegate

BOOL useBundle = NO; // Set YES to run pre-bundled (do `npm run bundle` from the command line first)

NSString *moduleName = @"NativeStarter"; // index.ios.js -> AppRegistry.registerComponent()

NSString *wifiIP = nil; // no need to set this now (set only as a manual override if automation fails)


// You shouldn't need to modify anything else below.

#define isDevice (TARGET_IPHONE_SIMULATOR != 1)

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation = nil;

#ifndef DEBUG // PRODUCTION
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
  /* jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"]; */
#else
  if (!useBundle) {
    NSString *address = @"localhost";
    if (isDevice && !wifiIP) {
      address = [self readAddressFromFile] ?: address;
    }
    jsCodeLocation = [NSURL URLWithString:[NSString stringWithFormat:@"http://%@:8081/index.ios.bundle?platform=ios&dev=true", address]];
  }
#endif

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"NativeStarter"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  // This makes sure the app loading screen shows for a little longer.
  NSString *launchXIBName = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"UILaunchStoryboardName"];
  UIImageView *launchView = [[[[[NSBundle mainBundle] loadNibNamed:launchXIBName owner:self options:nil] firstObject] subviews] firstObject];
  launchView.translatesAutoresizingMaskIntoConstraints = YES;
  launchView.bounds = [UIScreen mainScreen].bounds;
  rootView.loadingView = launchView;

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

- (NSString *)readAddressFromFile
{
  NSString *path = [[NSBundle mainBundle] pathForResource:@"ReactNativeServerConfig" ofType:@"txt"];
  NSString *wifiIP = [NSString stringWithContentsOfFile:path encoding:NSUTF8StringEncoding error:nil];
  NSString *address = nil;
  if ([wifiIP length] > 0) {
    address = [[wifiIP componentsSeparatedByCharactersInSet:[NSCharacterSet newlineCharacterSet]] firstObject];
    NSUserDefaults *standardDefaults = [NSUserDefaults standardUserDefaults];
    [standardDefaults setValue:address forKey:@"websocket-executor-address"];
    [standardDefaults synchronize];
  }
  return address;
}

@end
