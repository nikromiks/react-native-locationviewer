#import "RNFetcher.h"

typedef void(^RCTResponseSenderBlock)(NSArray *);

@implementation RNFetcher

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(loadLocationListFromUrl:(NSString *)stringUrl completion:(RCTResponseSenderBlock)handler)
{
  NSURL *url = [NSURL URLWithString:stringUrl];
  if (!url) {
    handler(@[[NSNull null], @"Invalid url"]);
    return;
  }
  NSURLSession *session = [NSURLSession sessionWithConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
  [session dataTaskWithURL:url completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
    if (error || !data) {
      handler(@[[NSNull null], error.localizedDescription]);
      return;
    }
    NSError *decodingError = nil;
    NSDictionary *json = [NSJSONSerialization JSONObjectWithData:data options:0 error:&decodingError];
    if (decodingError) {
      handler(@[[NSNull null], @"Decoding error"]);
      return;
    }
    if (![json isKindOfClass:[NSDictionary class]]) {
      handler(@[[NSNull null], @"Expected object"]);
      return;
    }
    NSString *updateDate;
    if ([json[@"updated"] isKindOfClass:[NSString class]]) {
      updateDate = json[@"updated"];
    } else {
      handler(@[[NSNull null], @"Cannot find \"updated\""]);
      return;
    }
    NSArray *locations;
    if ([json[@"locations"] isKindOfClass:[NSArray class]]) {
      locations = json[@"locations"];
    } else {
      handler(@[[NSNull null], @"Cannot find \"locations\""]);
      return;
    }
    for (id location in locations) {
      if (![location isKindOfClass:[NSDictionary class]]) {
        handler(@[[NSNull null], @"Expected objects in \"locations\""]);
        return;
      }
      NSDictionary *loc = location;
      if (!([loc[@"name"] isKindOfClass:[NSString class]] &&
            [loc[@"lat"] isKindOfClass:[NSNumber class]] &&
            [loc[@"lng"] isKindOfClass:[NSNumber class]])) {
        handler(@[[NSNull null], @"Uncompleted object in \"locations\""]);
        return;
      }
    }
    handler(@[json, [NSNull null]]);
  }];
}

@end
