/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as app from "tns-core-modules/application";
import {TnsOneSignal} from "nativescript-onesignal-sdk";

if (app.ios) {
    TnsOneSignal.initWithLaunchOptionsAppIdHandleNotificationReceivedHandleNotificationActionSettings({}, 
        "put-here-your-onesignal-app-id", // 
        (notification) => {
            console.dir(notification);
            console.log("notification received", notification.payload.body);
            console.log("notification received", JSON.parse(notification.stringify()));
        },
        (notification) => {
            console.dir(notification);
            console.log("notification action", JSON.parse(notification.stringify()));
        },
        (notification) => {
            console.log("notification 2", notification);
        });
}
else {
    app.on(app.launchEvent, (args) => {
        TnsOneSignal.startInit(app.android.context).init();
    });
}

app.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
