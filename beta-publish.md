Steps to publish a npm package to beta that won't be available via latest and won't auto install on ncu updates etc

1. Ensure any compile is run `yarn build-lib`
2. Modify version in package.json to the following format (match with existing verion numbers etc) `"version": "0.1.120-beta.1"` where beta.x is the number of those betas
3. Publish to npm `npm publish --tag beta`

There are two options for install:
* Always install beta with `npm install packagename@beta`
* Install specific version with `npm install package@0.1.120-beta.1`

How to fix latest if you publish a beta without --tag beta (if will default to latest)
run: `npm dist-tags add @COMPANY/PACKAGE@1.0.3 latest --otp=123456`where 1.0.3 is the version that should be latest --otp= is required
