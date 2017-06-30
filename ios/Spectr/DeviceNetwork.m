//
//  DeviceAddress.m
//  Spectr
//
//  Created by Jesper Johansson on 2017-06-30.
//  Copyright © 2017 Facebook. All rights reserved.
//

#include <ifaddrs.h>
#include <arpa/inet.h>

#import "DeviceNetwork.h"

@implementation DeviceNetwork

  RCT_EXPORT_MODULE();

  RCT_REMAP_METHOD(getIp, resolveHandler: (RCTPromiseResolveBlock) resolve rejectHandler: (RCTPromiseRejectBlock) reject) {
      struct ifaddrs *interfaces = NULL;
      struct ifaddrs *temp_addr = NULL;
      int getInterfaces = 1;
      NSString *address = @"";

      getInterfaces = getifaddrs(&interfaces);

      if (getInterfaces != 0) {
        freeifaddrs(interfaces);
        reject(@"getIp_error", @"Could not fetch device IP.", nil);
        return;
      } else {
        temp_addr = interfaces;
        while(temp_addr != NULL) {
          if (temp_addr->ifa_addr->sa_family == AF_INET) {
            if ([[NSString stringWithUTF8String: temp_addr->ifa_name] isEqualToString: @"en0"]) {
              address = [NSString stringWithUTF8String: inet_ntoa(((struct sockaddr_in *) temp_addr->ifa_addr)->sin_addr)];
            }
          }

          temp_addr = temp_addr->ifa_next;
        }
      }

    freeifaddrs(interfaces);
    resolve(address);
  }

@end
