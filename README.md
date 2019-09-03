# Nativescript Onesignal SDK

A Onesignal plugin that handles push notifications for both ios and android nativescript applications.

## Prerequisites

A Onesignal account with an active onesignal application.

## Installation

```javascript
tns plugin add nativescript-onesignal-sdk
```

## Usage

### Angular

Not supported

### Typescript & Javascript

#### Android

Add both values `onesignal_app_id` and `onesignal_google_project_number` as string resources:

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">Demo</string>
    <string name="onesignal_app_id">your_onesignal_app_id</string>
    <string name="onesignal_google_project_number">your_onesignal_google_project_number</string>
</resources>
```

Then refer those values in your `AndroidManifest.xml`.

Note: Add `xmlns:tools="http://schemas.android.com/tools"` on manifest root tag.

```xml
<meta-data
		tools:replace="android:value"
        android:name="onesignal_app_id"
        android:value="@string/onesignal_app_id"/>

<meta-data
        tools:replace="android:value"
        android:name="onesignal_google_project_number"
        android:value="@string/onesignal_google_project_number"/>
```

Add the following code on your `main.ts` or `app.js`:

```typescript
import * as app from "application";
var TnsOneSignal = require("nativescript-onesignal").TnsOneSignal;

if (app.android) {
  app.on(app.launchEvent, args => {
    TnsOneSignal.startInit(app.android.context).init();
  });
}
```

#### iOS

Add the following code on your `main.ts` or `app.js`:

```typescript
import * as app from 'application';
var TnsOneSignal = require('nativescript-onesignal').TnsOneSignal

if (app.ios) {
     TnsOneSignal.initWithLaunchOptionsAppIdHandleNotificationReceivedHandleNotificationActionSettings({},
            <your-onesignal-app-id>,
            (notificationReceived) => {
                console.log(notification);
            },
            (notificationAction) => {
                console.log(notification);
            });
}
```

## API Reference

[iOS API Reference](https://documentation.onesignal.com/docs/ios-sdk-api)

[Android API Reference](https://documentation.onesignal.com/docs/android-sdk-api)

## Demo

```bash
npm run plugin.prepare
# iOS
npm run demo.ios
# Android
npm run demo.android
```

## License

Apache License Version 2.0, January 2004
