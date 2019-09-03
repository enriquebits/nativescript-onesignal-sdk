/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module onesignal {
		export class ADMMessageHandler {
			public static class: java.lang.Class<com.onesignal.ADMMessageHandler>;
			public onRegistrationError(param0: string): void;
			public onUnregistered(param0: string): void;
			public onMessage(param0: globalAndroid.content.Intent): void;
			public constructor();
			public onRegistered(param0: string): void;
		}
		export module ADMMessageHandler {
			export class Receiver {
				public static class: java.lang.Class<com.onesignal.ADMMessageHandler.Receiver>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class ActivityLifecycleHandler {
			public static class: java.lang.Class<com.onesignal.ActivityLifecycleHandler>;
		}
		export module ActivityLifecycleHandler {
			export abstract class ActivityAvailableListener {
				public static class: java.lang.Class<com.onesignal.ActivityLifecycleHandler.ActivityAvailableListener>;
			}
			export class AppFocusRunnable {
				public static class: java.lang.Class<com.onesignal.ActivityLifecycleHandler.AppFocusRunnable>;
				public run(): void;
			}
			export class FocusHandlerThread {
				public static class: java.lang.Class<com.onesignal.ActivityLifecycleHandler.FocusHandlerThread>;
			}
			export class KeyboardListener {
				public static class: java.lang.Class<com.onesignal.ActivityLifecycleHandler.KeyboardListener>;
				public onGlobalLayout(): void;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class ActivityLifecycleListener {
			public static class: java.lang.Class<com.onesignal.ActivityLifecycleListener>;
			public onActivityResumed(param0: globalAndroid.app.Activity): void;
			public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
			public onActivityPaused(param0: globalAndroid.app.Activity): void;
			public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
			public onActivityStarted(param0: globalAndroid.app.Activity): void;
			public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
			public onActivityStopped(param0: globalAndroid.app.Activity): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class AdvertisingIdProviderGPS extends com.onesignal.AdvertisingIdentifierProvider {
			public static class: java.lang.Class<com.onesignal.AdvertisingIdProviderGPS>;
			public getIdentifier(param0: globalAndroid.content.Context): string;
		}
	}
}

declare module com {
	export module onesignal {
		export class AdvertisingIdentifierProvider {
			public static class: java.lang.Class<com.onesignal.AdvertisingIdentifierProvider>;
			/**
			 * Constructs a new instance of the com.onesignal.AdvertisingIdentifierProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getIdentifier(param0: globalAndroid.content.Context): string;
			});
			public constructor();
			public getIdentifier(param0: globalAndroid.content.Context): string;
		}
	}
}

declare module com {
	export module onesignal {
		export class AndroidSupportV4Compat {
			public static class: java.lang.Class<com.onesignal.AndroidSupportV4Compat>;
		}
		export module AndroidSupportV4Compat {
			export class ActivityCompat {
				public static class: java.lang.Class<com.onesignal.AndroidSupportV4Compat.ActivityCompat>;
			}
			export class ActivityCompatApi23 {
				public static class: java.lang.Class<com.onesignal.AndroidSupportV4Compat.ActivityCompatApi23>;
			}
			export class ContextCompat {
				public static class: java.lang.Class<com.onesignal.AndroidSupportV4Compat.ContextCompat>;
			}
			export class RequestPermissionsRequestCodeValidator {
				public static class: java.lang.Class<com.onesignal.AndroidSupportV4Compat.RequestPermissionsRequestCodeValidator>;
				/**
				 * Constructs a new instance of the com.onesignal.AndroidSupportV4Compat$RequestPermissionsRequestCodeValidator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					validateRequestPermissionsRequestCode(param0: number): void;
				});
				public constructor();
				public validateRequestPermissionsRequestCode(param0: number): void;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class BadgeCountUpdater {
			public static class: java.lang.Class<com.onesignal.BadgeCountUpdater>;
		}
	}
}

declare module com {
	export module onesignal {
		export class BootUpReceiver {
			public static class: java.lang.Class<com.onesignal.BootUpReceiver>;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class BuildConfig {
			public static class: java.lang.Class<com.onesignal.BuildConfig>;
			public static DEBUG: boolean;
			public static APPLICATION_ID: string;
			public static BUILD_TYPE: string;
			public static FLAVOR: string;
			public static VERSION_CODE: number;
			public static VERSION_NAME: string;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class BundleCompat<T>  extends java.lang.Object {
			public static class: java.lang.Class<com.onesignal.BundleCompat<any>>;
			/**
			 * Constructs a new instance of the com.onesignal.BundleCompat<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				putString(param0: string, param1: string): void;
				putInt(param0: string, param1: java.lang.Integer): void;
				putLong(param0: string, param1: java.lang.Long): void;
				putBoolean(param0: string, param1: java.lang.Boolean): void;
				getString(param0: string): string;
				getInt(param0: string): java.lang.Integer;
				getLong(param0: string): java.lang.Long;
				getBoolean(param0: string): boolean;
				getBoolean(param0: string, param1: boolean): boolean;
				containsKey(param0: string): boolean;
				getBundle(): T;
				setBundle(param0: globalAndroid.os.Parcelable): void;
			});
			public constructor();
			public putBoolean(param0: string, param1: java.lang.Boolean): void;
			public getInt(param0: string): java.lang.Integer;
			public putLong(param0: string, param1: java.lang.Long): void;
			public putString(param0: string, param1: string): void;
			public getBoolean(param0: string): boolean;
			public getBoolean(param0: string, param1: boolean): boolean;
			public getString(param0: string): string;
			public putInt(param0: string, param1: java.lang.Integer): void;
			public setBundle(param0: globalAndroid.os.Parcelable): void;
			public containsKey(param0: string): boolean;
			public getBundle(): T;
			public getLong(param0: string): java.lang.Long;
		}
	}
}

declare module com {
	export module onesignal {
		export class BundleCompatBundle extends com.onesignal.BundleCompat<globalAndroid.os.Bundle> {
			public static class: java.lang.Class<com.onesignal.BundleCompatBundle>;
			public getInt(param0: string): java.lang.Integer;
			public getBundle(): any;
			public putString(param0: string, param1: string): void;
			public getBoolean(param0: string): boolean;
			public getBundle(): globalAndroid.os.Bundle;
			public getString(param0: string): string;
			public putInt(param0: string, param1: java.lang.Integer): void;
			public getLong(param0: string): java.lang.Long;
			public putBoolean(param0: string, param1: java.lang.Boolean): void;
			public putLong(param0: string, param1: java.lang.Long): void;
			public getBoolean(param0: string, param1: boolean): boolean;
			public setBundle(param0: globalAndroid.os.Parcelable): void;
			public containsKey(param0: string): boolean;
		}
	}
}

declare module com {
	export module onesignal {
		export class BundleCompatFactory {
			public static class: java.lang.Class<com.onesignal.BundleCompatFactory>;
		}
	}
}

declare module com {
	export module onesignal {
		export class BundleCompatPersistableBundle extends com.onesignal.BundleCompat<any> {
			public static class: java.lang.Class<com.onesignal.BundleCompatPersistableBundle>;
			public putBoolean(param0: string, param1: java.lang.Boolean): void;
			public getInt(param0: string): java.lang.Integer;
			public putLong(param0: string, param1: java.lang.Long): void;
			public getBundle(): any;
			public putString(param0: string, param1: string): void;
			public getBoolean(param0: string): boolean;
			public getBoolean(param0: string, param1: boolean): boolean;
			public getString(param0: string): string;
			public putInt(param0: string, param1: java.lang.Integer): void;
			public setBundle(param0: globalAndroid.os.Parcelable): void;
			public containsKey(param0: string): boolean;
			public getLong(param0: string): java.lang.Long;
		}
	}
}

declare module com {
	export module onesignal {
		export class DelayedConsentInitializationParameters {
			public static class: java.lang.Class<com.onesignal.DelayedConsentInitializationParameters>;
			public context: globalAndroid.content.Context;
			public googleProjectNumber: string;
			public appId: string;
			public openedHandler: com.onesignal.OneSignal.NotificationOpenedHandler;
			public receivedHandler: com.onesignal.OneSignal.NotificationReceivedHandler;
		}
	}
}

declare module com {
	export module onesignal {
		export class DraggableRelativeLayout {
			public static class: java.lang.Class<com.onesignal.DraggableRelativeLayout>;
			public computeScroll(): void;
			public dismiss(): void;
			public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
			public constructor(param0: globalAndroid.content.Context);
		}
		export module DraggableRelativeLayout {
			export abstract class DraggableListener {
				public static class: java.lang.Class<com.onesignal.DraggableRelativeLayout.DraggableListener>;
			}
			export class Params {
				public static class: java.lang.Class<com.onesignal.DraggableRelativeLayout.Params>;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class GcmBroadcastReceiver {
			public static class: java.lang.Class<com.onesignal.GcmBroadcastReceiver>;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class GcmIntentJobService {
			public static class: java.lang.Class<com.onesignal.GcmIntentJobService>;
			public static BUNDLE_EXTRA: string;
			public static enqueueWork(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public onHandleWork(param0: globalAndroid.content.Intent): void;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class GcmIntentService {
			public static class: java.lang.Class<com.onesignal.GcmIntentService>;
			public onHandleIntent(param0: globalAndroid.content.Intent): void;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class GenerateNotification {
			public static class: java.lang.Class<com.onesignal.GenerateNotification>;
		}
		export module GenerateNotification {
			export class OneSignalNotificationBuilder {
				public static class: java.lang.Class<com.onesignal.GenerateNotification.OneSignalNotificationBuilder>;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class GoogleApiClientCompatProxy {
			public static class: java.lang.Class<com.onesignal.GoogleApiClientCompatProxy>;
		}
	}
}

declare module com {
	export module onesignal {
		export class GooglePlayServicesUpgradePrompt {
			public static class: java.lang.Class<com.onesignal.GooglePlayServicesUpgradePrompt>;
		}
	}
}

declare module com {
	export module onesignal {
		export class InAppMessageView {
			public static class: java.lang.Class<com.onesignal.InAppMessageView>;
		}
		export module InAppMessageView {
			export class InAppMessageViewListener {
				public static class: java.lang.Class<com.onesignal.InAppMessageView.InAppMessageViewListener>;
				/**
				 * Constructs a new instance of the com.onesignal.InAppMessageView$InAppMessageViewListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onMessageWasShown(): void;
					onMessageWasDismissed(): void;
				});
				public constructor();
				public onMessageWasDismissed(): void;
				public onMessageWasShown(): void;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class JSONUtils {
			public static class: java.lang.Class<com.onesignal.JSONUtils>;
		}
	}
}

declare module com {
	export module onesignal {
		export abstract class JobIntentService {
			public static class: java.lang.Class<com.onesignal.JobIntentService>;
			public isStopped(): boolean;
			public onHandleWork(param0: globalAndroid.content.Intent): void;
			public onStopCurrentWork(): boolean;
			public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
			public static enqueueWork(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number, param3: globalAndroid.content.Intent, param4: boolean): void;
			public static enqueueWork(param0: globalAndroid.content.Context, param1: java.lang.Class, param2: number, param3: globalAndroid.content.Intent, param4: boolean): void;
			public onCreate(): void;
			public setInterruptIfStopped(param0: boolean): void;
			public constructor();
			public onDestroy(): void;
			public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
		}
		export module JobIntentService {
			export class CommandProcessor extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,java.lang.Void> {
				public static class: java.lang.Class<com.onesignal.JobIntentService.CommandProcessor>;
				public onPostExecute(param0: java.lang.Void): void;
				public onCancelled(param0: java.lang.Void): void;
				public doInBackground(param0: native.Array<java.lang.Void>): java.lang.Void;
			}
			export class CompatJobEngine {
				public static class: java.lang.Class<com.onesignal.JobIntentService.CompatJobEngine>;
				/**
				 * Constructs a new instance of the com.onesignal.JobIntentService$CompatJobEngine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					compatGetBinder(): globalAndroid.os.IBinder;
					dequeueWork(): com.onesignal.JobIntentService.GenericWorkItem;
				});
				public constructor();
				public dequeueWork(): com.onesignal.JobIntentService.GenericWorkItem;
				public compatGetBinder(): globalAndroid.os.IBinder;
			}
			export class CompatWorkEnqueuer extends com.onesignal.JobIntentService.WorkEnqueuer {
				public static class: java.lang.Class<com.onesignal.JobIntentService.CompatWorkEnqueuer>;
				public serviceProcessingFinished(): void;
				public serviceStartReceived(): void;
				public serviceProcessingStarted(): void;
			}
			export class CompatWorkItem extends com.onesignal.JobIntentService.GenericWorkItem {
				public static class: java.lang.Class<com.onesignal.JobIntentService.CompatWorkItem>;
				public complete(): void;
				public getIntent(): globalAndroid.content.Intent;
			}
			export class ComponentNameWithWakeful {
				public static class: java.lang.Class<com.onesignal.JobIntentService.ComponentNameWithWakeful>;
			}
			export class GenericWorkItem {
				public static class: java.lang.Class<com.onesignal.JobIntentService.GenericWorkItem>;
				/**
				 * Constructs a new instance of the com.onesignal.JobIntentService$GenericWorkItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getIntent(): globalAndroid.content.Intent;
					complete(): void;
				});
				public constructor();
				public complete(): void;
				public getIntent(): globalAndroid.content.Intent;
			}
			export class JobServiceEngineImpl implements com.onesignal.JobIntentService.CompatJobEngine {
				public static class: java.lang.Class<com.onesignal.JobIntentService.JobServiceEngineImpl>;
				public onStartJob(param0: any): boolean;
				public dequeueWork(): com.onesignal.JobIntentService.GenericWorkItem;
				public compatGetBinder(): globalAndroid.os.IBinder;
				public onStopJob(param0: any): boolean;
			}
			export module JobServiceEngineImpl {
				export class WrapperWorkItem extends com.onesignal.JobIntentService.GenericWorkItem {
					public static class: java.lang.Class<com.onesignal.JobIntentService.JobServiceEngineImpl.WrapperWorkItem>;
					public getIntent(): globalAndroid.content.Intent;
					public complete(): void;
				}
			}
			export class JobWorkEnqueuer extends com.onesignal.JobIntentService.WorkEnqueuer {
				public static class: java.lang.Class<com.onesignal.JobIntentService.JobWorkEnqueuer>;
			}
			export abstract class WorkEnqueuer {
				public static class: java.lang.Class<com.onesignal.JobIntentService.WorkEnqueuer>;
				public serviceProcessingFinished(): void;
				public serviceStartReceived(): void;
				public serviceProcessingStarted(): void;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class LocationGMS {
			public static class: java.lang.Class<com.onesignal.LocationGMS>;
			public static syncLock: any;
		}
		export module LocationGMS {
			export class CALLBACK_TYPE {
				public static class: java.lang.Class<com.onesignal.LocationGMS.CALLBACK_TYPE>;
				public static STARTUP: com.onesignal.LocationGMS.CALLBACK_TYPE;
				public static PROMPT_LOCATION: com.onesignal.LocationGMS.CALLBACK_TYPE;
				public static SYNC_SERVICE: com.onesignal.LocationGMS.CALLBACK_TYPE;
				public static values(): native.Array<com.onesignal.LocationGMS.CALLBACK_TYPE>;
				public static valueOf(param0: string): com.onesignal.LocationGMS.CALLBACK_TYPE;
			}
			export class FusedLocationApiWrapper {
				public static class: java.lang.Class<com.onesignal.LocationGMS.FusedLocationApiWrapper>;
			}
			export class GoogleApiClientListener {
				public static class: java.lang.Class<com.onesignal.LocationGMS.GoogleApiClientListener>;
				public onConnected(param0: globalAndroid.os.Bundle): void;
				public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
				public onConnectionSuspended(param0: number): void;
			}
			export class LocationHandler {
				public static class: java.lang.Class<com.onesignal.LocationGMS.LocationHandler>;
				/**
				 * Constructs a new instance of the com.onesignal.LocationGMS$LocationHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getType(): com.onesignal.LocationGMS.CALLBACK_TYPE;
					complete(param0: com.onesignal.LocationGMS.LocationPoint): void;
				});
				public constructor();
				public getType(): com.onesignal.LocationGMS.CALLBACK_TYPE;
				public complete(param0: com.onesignal.LocationGMS.LocationPoint): void;
			}
			export class LocationHandlerThread {
				public static class: java.lang.Class<com.onesignal.LocationGMS.LocationHandlerThread>;
			}
			export class LocationPoint {
				public static class: java.lang.Class<com.onesignal.LocationGMS.LocationPoint>;
			}
			export class LocationUpdateListener {
				public static class: java.lang.Class<com.onesignal.LocationGMS.LocationUpdateListener>;
				public onLocationChanged(param0: globalAndroid.location.Location): void;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class NotificationBundleProcessor {
			public static class: java.lang.Class<com.onesignal.NotificationBundleProcessor>;
		}
		export module NotificationBundleProcessor {
			export class ProcessedBundleResult {
				public static class: java.lang.Class<com.onesignal.NotificationBundleProcessor.ProcessedBundleResult>;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class NotificationChannelManager {
			public static class: java.lang.Class<com.onesignal.NotificationChannelManager>;
		}
	}
}

declare module com {
	export module onesignal {
		export abstract class NotificationExtenderService extends com.onesignal.JobIntentService {
			public static class: java.lang.Class<com.onesignal.NotificationExtenderService>;
			public onNotificationProcessing(param0: com.onesignal.OSNotificationReceivedResult): boolean;
			public onHandleWork(param0: globalAndroid.content.Intent): void;
			public displayNotification(param0: com.onesignal.NotificationExtenderService.OverrideSettings): com.onesignal.OSNotificationDisplayedResult;
			public constructor();
		}
		export module NotificationExtenderService {
			export class OverrideSettings {
				public static class: java.lang.Class<com.onesignal.NotificationExtenderService.OverrideSettings>;
				public extender: globalAndroid.support.v4.app.NotificationCompat.Extender;
				public androidNotificationId: java.lang.Integer;
				public constructor();
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class NotificationGenerationJob {
			public static class: java.lang.Class<com.onesignal.NotificationGenerationJob>;
		}
	}
}

declare module com {
	export module onesignal {
		export class NotificationLimitManager {
			public static class: java.lang.Class<com.onesignal.NotificationLimitManager>;
		}
	}
}

declare module com {
	export module onesignal {
		export class NotificationOpenedActivity {
			public static class: java.lang.Class<com.onesignal.NotificationOpenedActivity>;
			public onCreate(param0: globalAndroid.os.Bundle): void;
			public constructor();
			public onNewIntent(param0: globalAndroid.content.Intent): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class NotificationOpenedProcessor {
			public static class: java.lang.Class<com.onesignal.NotificationOpenedProcessor>;
		}
	}
}

declare module com {
	export module onesignal {
		export class NotificationOpenedReceiver {
			public static class: java.lang.Class<com.onesignal.NotificationOpenedReceiver>;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class NotificationRestoreService {
			public static class: java.lang.Class<com.onesignal.NotificationRestoreService>;
			public onHandleIntent(param0: globalAndroid.content.Intent): void;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class NotificationRestorer {
			public static class: java.lang.Class<com.onesignal.NotificationRestorer>;
			public static restored: boolean;
			public static restore(param0: globalAndroid.content.Context): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class NotificationSummaryManager {
			public static class: java.lang.Class<com.onesignal.NotificationSummaryManager>;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSDynamicTriggerController {
			public static class: java.lang.Class<com.onesignal.OSDynamicTriggerController>;
		}
		export module OSDynamicTriggerController {
			export class OSDynamicTriggerControllerObserver {
				public static class: java.lang.Class<com.onesignal.OSDynamicTriggerController.OSDynamicTriggerControllerObserver>;
				/**
				 * Constructs a new instance of the com.onesignal.OSDynamicTriggerController$OSDynamicTriggerControllerObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					messageTriggerConditionChanged(): void;
				});
				public constructor();
				public messageTriggerConditionChanged(): void;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OSDynamicTriggerTimer {
			public static class: java.lang.Class<com.onesignal.OSDynamicTriggerTimer>;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSEmailSubscriptionChangedInternalObserver {
			public static class: java.lang.Class<com.onesignal.OSEmailSubscriptionChangedInternalObserver>;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSEmailSubscriptionObserver {
			public static class: java.lang.Class<com.onesignal.OSEmailSubscriptionObserver>;
			/**
			 * Constructs a new instance of the com.onesignal.OSEmailSubscriptionObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onOSEmailSubscriptionChanged(param0: com.onesignal.OSEmailSubscriptionStateChanges): void;
			});
			public constructor();
			public onOSEmailSubscriptionChanged(param0: com.onesignal.OSEmailSubscriptionStateChanges): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSEmailSubscriptionState {
			public static class: java.lang.Class<com.onesignal.OSEmailSubscriptionState>;
			public getSubscribed(): boolean;
			public clone(): any;
			public toString(): string;
			public getEmailUserId(): string;
			public getEmailAddress(): string;
			public toJSONObject(): org.json.JSONObject;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSEmailSubscriptionStateChanges {
			public static class: java.lang.Class<com.onesignal.OSEmailSubscriptionStateChanges>;
			public toString(): string;
			public getTo(): com.onesignal.OSEmailSubscriptionState;
			public constructor();
			public getFrom(): com.onesignal.OSEmailSubscriptionState;
			public toJSONObject(): org.json.JSONObject;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSInAppMessage {
			public static class: java.lang.Class<com.onesignal.OSInAppMessage>;
			public messageId: string;
			public variants: java.util.HashMap<string,java.util.HashMap<string,string>>;
			public triggers: java.util.ArrayList<java.util.ArrayList<com.onesignal.OSTrigger>>;
			public toString(): string;
			public setDisplayDuration(param0: number): void;
			public getDisplayDuration(): number;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSInAppMessageAction {
			public static class: java.lang.Class<com.onesignal.OSInAppMessageAction>;
			public clickName: string;
			public urlTarget: com.onesignal.OSInAppMessageAction.OSInAppMessageActionUrlType;
			public clickUrl: string;
			public firstClick: boolean;
			public closesMessage: boolean;
			public toJSONObject(): org.json.JSONObject;
		}
		export module OSInAppMessageAction {
			export class OSInAppMessageActionUrlType {
				public static class: java.lang.Class<com.onesignal.OSInAppMessageAction.OSInAppMessageActionUrlType>;
				public static IN_APP_WEBVIEW: com.onesignal.OSInAppMessageAction.OSInAppMessageActionUrlType;
				public static BROWSER: com.onesignal.OSInAppMessageAction.OSInAppMessageActionUrlType;
				public static REPLACE_CONTENT: com.onesignal.OSInAppMessageAction.OSInAppMessageActionUrlType;
				public static values(): native.Array<com.onesignal.OSInAppMessageAction.OSInAppMessageActionUrlType>;
				public toJSONObject(): org.json.JSONObject;
				public toString(): string;
				public static fromString(param0: string): com.onesignal.OSInAppMessageAction.OSInAppMessageActionUrlType;
				public static valueOf(param0: string): com.onesignal.OSInAppMessageAction.OSInAppMessageActionUrlType;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OSInAppMessageController implements com.onesignal.OSDynamicTriggerController.OSDynamicTriggerControllerObserver, com.onesignal.OSSystemConditionController.OSSystemConditionObserver {
			public static class: java.lang.Class<com.onesignal.OSInAppMessageController>;
			public static IN_APP_MESSAGES_JSON_KEY: string;
			public messageTriggerConditionChanged(): void;
			public static getController(): com.onesignal.OSInAppMessageController;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class OSInAppMessageDummyController extends com.onesignal.OSInAppMessageController {
			public static class: java.lang.Class<com.onesignal.OSInAppMessageDummyController>;
			public messageTriggerConditionChanged(): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSNotification {
			public static class: java.lang.Class<com.onesignal.OSNotification>;
			public isAppInFocus: boolean;
			public shown: boolean;
			public androidNotificationId: number;
			public payload: com.onesignal.OSNotificationPayload;
			public displayType: com.onesignal.OSNotification.DisplayType;
			public groupedNotifications: java.util.List<com.onesignal.OSNotificationPayload>;
			public constructor(param0: org.json.JSONObject);
			public constructor();
			/** @deprecated */
			public stringify(): string;
			public toJSONObject(): org.json.JSONObject;
		}
		export module OSNotification {
			export class DisplayType {
				public static class: java.lang.Class<com.onesignal.OSNotification.DisplayType>;
				public static Notification: com.onesignal.OSNotification.DisplayType;
				public static InAppAlert: com.onesignal.OSNotification.DisplayType;
				public static None: com.onesignal.OSNotification.DisplayType;
				public static valueOf(param0: string): com.onesignal.OSNotification.DisplayType;
				public static values(): native.Array<com.onesignal.OSNotification.DisplayType>;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OSNotificationAction {
			public static class: java.lang.Class<com.onesignal.OSNotificationAction>;
			public type: com.onesignal.OSNotificationAction.ActionType;
			public actionID: string;
			public constructor();
		}
		export module OSNotificationAction {
			export class ActionType {
				public static class: java.lang.Class<com.onesignal.OSNotificationAction.ActionType>;
				public static Opened: com.onesignal.OSNotificationAction.ActionType;
				public static ActionTaken: com.onesignal.OSNotificationAction.ActionType;
				public static valueOf(param0: string): com.onesignal.OSNotificationAction.ActionType;
				public static values(): native.Array<com.onesignal.OSNotificationAction.ActionType>;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OSNotificationDisplayedResult {
			public static class: java.lang.Class<com.onesignal.OSNotificationDisplayedResult>;
			public androidNotificationId: number;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class OSNotificationOpenResult {
			public static class: java.lang.Class<com.onesignal.OSNotificationOpenResult>;
			public notification: com.onesignal.OSNotification;
			public action: com.onesignal.OSNotificationAction;
			public constructor();
			/** @deprecated */
			public stringify(): string;
			public toJSONObject(): org.json.JSONObject;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSNotificationPayload {
			public static class: java.lang.Class<com.onesignal.OSNotificationPayload>;
			public notificationID: string;
			public templateName: string;
			public templateId: string;
			public title: string;
			public body: string;
			public additionalData: org.json.JSONObject;
			public smallIcon: string;
			public largeIcon: string;
			public bigPicture: string;
			public smallIconAccentColor: string;
			public launchURL: string;
			public sound: string;
			public ledColor: string;
			public lockScreenVisibility: number;
			public groupKey: string;
			public groupMessage: string;
			public actionButtons: java.util.List<com.onesignal.OSNotificationPayload.ActionButton>;
			public fromProjectNumber: string;
			public backgroundImageLayout: com.onesignal.OSNotificationPayload.BackgroundImageLayout;
			public collapseId: string;
			public priority: number;
			public rawPayload: string;
			public constructor(param0: org.json.JSONObject);
			public constructor();
			public toJSONObject(): org.json.JSONObject;
		}
		export module OSNotificationPayload {
			export class ActionButton {
				public static class: java.lang.Class<com.onesignal.OSNotificationPayload.ActionButton>;
				public id: string;
				public text: string;
				public icon: string;
				public constructor(param0: org.json.JSONObject);
				public toJSONObject(): org.json.JSONObject;
				public constructor();
			}
			export class BackgroundImageLayout {
				public static class: java.lang.Class<com.onesignal.OSNotificationPayload.BackgroundImageLayout>;
				public image: string;
				public titleTextColor: string;
				public bodyTextColor: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OSNotificationReceivedResult {
			public static class: java.lang.Class<com.onesignal.OSNotificationReceivedResult>;
			public restoring: boolean;
			public isAppInFocus: boolean;
			public payload: com.onesignal.OSNotificationPayload;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class OSObservable<ObserverType, StateType>  extends java.lang.Object {
			public static class: java.lang.Class<com.onesignal.OSObservable<any,any>>;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSPermissionChangedInternalObserver {
			public static class: java.lang.Class<com.onesignal.OSPermissionChangedInternalObserver>;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSPermissionObserver {
			public static class: java.lang.Class<com.onesignal.OSPermissionObserver>;
			/**
			 * Constructs a new instance of the com.onesignal.OSPermissionObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onOSPermissionChanged(param0: com.onesignal.OSPermissionStateChanges): void;
			});
			public constructor();
			public onOSPermissionChanged(param0: com.onesignal.OSPermissionStateChanges): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSPermissionState {
			public static class: java.lang.Class<com.onesignal.OSPermissionState>;
			public clone(): any;
			public toString(): string;
			public getEnabled(): boolean;
			public toJSONObject(): org.json.JSONObject;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSPermissionStateChanges {
			public static class: java.lang.Class<com.onesignal.OSPermissionStateChanges>;
			public getFrom(): com.onesignal.OSPermissionState;
			public toString(): string;
			public getTo(): com.onesignal.OSPermissionState;
			public constructor();
			public toJSONObject(): org.json.JSONObject;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSPermissionSubscriptionState {
			public static class: java.lang.Class<com.onesignal.OSPermissionSubscriptionState>;
			public toString(): string;
			public getEmailSubscriptionStatus(): com.onesignal.OSEmailSubscriptionState;
			public constructor();
			public getPermissionStatus(): com.onesignal.OSPermissionState;
			public getSubscriptionStatus(): com.onesignal.OSSubscriptionState;
			public toJSONObject(): org.json.JSONObject;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSSubscriptionChangedInternalObserver {
			public static class: java.lang.Class<com.onesignal.OSSubscriptionChangedInternalObserver>;
			public changed(param0: com.onesignal.OSSubscriptionState): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSSubscriptionObserver {
			public static class: java.lang.Class<com.onesignal.OSSubscriptionObserver>;
			/**
			 * Constructs a new instance of the com.onesignal.OSSubscriptionObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onOSSubscriptionChanged(param0: com.onesignal.OSSubscriptionStateChanges): void;
			});
			public constructor();
			public onOSSubscriptionChanged(param0: com.onesignal.OSSubscriptionStateChanges): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSSubscriptionState {
			public static class: java.lang.Class<com.onesignal.OSSubscriptionState>;
			public getSubscribed(): boolean;
			public clone(): any;
			public toString(): string;
			public getPushToken(): string;
			public getUserSubscriptionSetting(): boolean;
			public getUserId(): string;
			public toJSONObject(): org.json.JSONObject;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSSubscriptionStateChanges {
			public static class: java.lang.Class<com.onesignal.OSSubscriptionStateChanges>;
			public getFrom(): com.onesignal.OSSubscriptionState;
			public getTo(): com.onesignal.OSSubscriptionState;
			public toString(): string;
			public constructor();
			public toJSONObject(): org.json.JSONObject;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSSystemConditionController {
			public static class: java.lang.Class<com.onesignal.OSSystemConditionController>;
		}
		export module OSSystemConditionController {
			export class OSSystemConditionObserver {
				public static class: java.lang.Class<com.onesignal.OSSystemConditionController.OSSystemConditionObserver>;
				/**
				 * Constructs a new instance of the com.onesignal.OSSystemConditionController$OSSystemConditionObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					messageTriggerConditionChanged(): void;
				});
				public constructor();
				public messageTriggerConditionChanged(): void;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OSTrigger {
			public static class: java.lang.Class<com.onesignal.OSTrigger>;
			public kind: com.onesignal.OSTrigger.OSTriggerKind;
			public property: string;
			public operatorType: com.onesignal.OSTrigger.OSTriggerOperator;
			public value: any;
			public toJSONObject(): org.json.JSONObject;
		}
		export module OSTrigger {
			export class OSTriggerKind {
				public static class: java.lang.Class<com.onesignal.OSTrigger.OSTriggerKind>;
				public static TIME_SINCE_LAST_IN_APP: com.onesignal.OSTrigger.OSTriggerKind;
				public static SESSION_TIME: com.onesignal.OSTrigger.OSTriggerKind;
				public static CUSTOM: com.onesignal.OSTrigger.OSTriggerKind;
				public static UNKNOWN: com.onesignal.OSTrigger.OSTriggerKind;
				public static valueOf(param0: string): com.onesignal.OSTrigger.OSTriggerKind;
				public static fromString(param0: string): com.onesignal.OSTrigger.OSTriggerKind;
				public toString(): string;
				public static values(): native.Array<com.onesignal.OSTrigger.OSTriggerKind>;
			}
			export class OSTriggerOperator {
				public static class: java.lang.Class<com.onesignal.OSTrigger.OSTriggerOperator>;
				public static GREATER_THAN: com.onesignal.OSTrigger.OSTriggerOperator;
				public static LESS_THAN: com.onesignal.OSTrigger.OSTriggerOperator;
				public static EQUAL_TO: com.onesignal.OSTrigger.OSTriggerOperator;
				public static NOT_EQUAL_TO: com.onesignal.OSTrigger.OSTriggerOperator;
				public static LESS_THAN_OR_EQUAL_TO: com.onesignal.OSTrigger.OSTriggerOperator;
				public static GREATER_THAN_OR_EQUAL_TO: com.onesignal.OSTrigger.OSTriggerOperator;
				public static EXISTS: com.onesignal.OSTrigger.OSTriggerOperator;
				public static NOT_EXISTS: com.onesignal.OSTrigger.OSTriggerOperator;
				public static CONTAINS: com.onesignal.OSTrigger.OSTriggerOperator;
				public static valueOf(param0: string): com.onesignal.OSTrigger.OSTriggerOperator;
				public checksEquality(): boolean;
				public static values(): native.Array<com.onesignal.OSTrigger.OSTriggerOperator>;
				public static fromString(param0: string): com.onesignal.OSTrigger.OSTriggerOperator;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OSTriggerController {
			public static class: java.lang.Class<com.onesignal.OSTriggerController>;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSUtils {
			public static class: java.lang.Class<com.onesignal.OSUtils>;
		}
		export module OSUtils {
			export class SchemaType {
				public static class: java.lang.Class<com.onesignal.OSUtils.SchemaType>;
				public static DATA: com.onesignal.OSUtils.SchemaType;
				public static HTTPS: com.onesignal.OSUtils.SchemaType;
				public static HTTP: com.onesignal.OSUtils.SchemaType;
				public static fromString(param0: string): com.onesignal.OSUtils.SchemaType;
				public static valueOf(param0: string): com.onesignal.OSUtils.SchemaType;
				public static values(): native.Array<com.onesignal.OSUtils.SchemaType>;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OSViewUtils {
			public static class: java.lang.Class<com.onesignal.OSViewUtils>;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSWebView {
			public static class: java.lang.Class<com.onesignal.OSWebView>;
			public computeScroll(): void;
			public scrollTo(param0: number, param1: number): void;
			public constructor(param0: globalAndroid.content.Context);
			public overScrollBy(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: boolean): boolean;
		}
	}
}

declare module com {
	export module onesignal {
		export class OneSignal {
			public static class: java.lang.Class<com.onesignal.OneSignal>;
			public static taskQueueWaitingForInit: java.util.concurrent.ConcurrentLinkedQueue<java.lang.Runnable>;
			public static VERSION: string;
			public static sdkType: string;
			public static addTriggersFromJsonString(param0: string): void;
			public static deleteTags(param0: string, param1: com.onesignal.OneSignal.ChangeTagsUpdateHandler): void;
			public static getCurrentOrNewInitBuilder(): com.onesignal.OneSignal.Builder;
			public static setInFocusDisplaying(param0: number): void;
			public static init(param0: globalAndroid.content.Context, param1: string, param2: string): void;
			public static init(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.onesignal.OneSignal.NotificationOpenedHandler): void;
			public static getPermissionSubscriptionState(): com.onesignal.OSPermissionSubscriptionState;
			public static logoutEmail(param0: com.onesignal.OneSignal.EmailUpdateHandler): void;
			public static currentInFocusDisplayOption(): com.onesignal.OneSignal.OSInFocusDisplayOption;
			public static removeNotificationReceivedHandler(): void;
			public static provideUserConsent(param0: boolean): void;
			public static removeExternalUserId(): void;
			public static sendTags(param0: org.json.JSONObject, param1: com.onesignal.OneSignal.ChangeTagsUpdateHandler): void;
			public static removeNotificationOpenedHandler(): void;
			public static promptLocation(): void;
			public static addTriggers(param0: java.util.Map<string,any>): void;
			public static setRequiresUserPrivacyConsent(param0: boolean): void;
			public static postNotification(param0: string, param1: com.onesignal.OneSignal.PostNotificationResponseHandler): void;
			public static removeTriggersForKeysFromJsonArrayString(param0: string): void;
			public static setLocationShared(param0: boolean): void;
			public constructor();
			public static enableVibrate(param0: boolean): void;
			public static removeEmailSubscriptionObserver(param0: com.onesignal.OSEmailSubscriptionObserver): void;
			public static removeInAppMessageClickHandler(): void;
			public static setInFocusDisplaying(param0: com.onesignal.OneSignal.OSInFocusDisplayOption): void;
			public static enableSound(param0: boolean): void;
			public static setAppContext(param0: globalAndroid.content.Context): void;
			public static getTags(param0: com.onesignal.OneSignal.GetTagsHandler): void;
			public static setLogLevel(param0: number, param1: number): void;
			public static sendTags(param0: org.json.JSONObject): void;
			public static requiresUserPrivacyConsent(): boolean;
			public static deleteTags(param0: string): void;
			public static removePermissionObserver(param0: com.onesignal.OSPermissionObserver): void;
			public static pauseInAppMessages(param0: boolean): void;
			public static userProvidedPrivacyConsent(): boolean;
			public static deleteTags(param0: java.util.Collection<string>): void;
			public static addTrigger(param0: string, param1: any): void;
			public static setEmail(param0: string): void;
			public static onesignalLog(param0: com.onesignal.OneSignal.LOG_LEVEL, param1: string): void;
			public static removeTriggersForKeys(param0: java.util.Collection<string>): void;
			public static deleteTag(param0: string): void;
			public static setLogLevel(param0: com.onesignal.OneSignal.LOG_LEVEL, param1: com.onesignal.OneSignal.LOG_LEVEL): void;
			public static addSubscriptionObserver(param0: com.onesignal.OSSubscriptionObserver): void;
			public static postNotification(param0: org.json.JSONObject, param1: com.onesignal.OneSignal.PostNotificationResponseHandler): void;
			public static sendTags(param0: string): void;
			public static addEmailSubscriptionObserver(param0: com.onesignal.OSEmailSubscriptionObserver): void;
			public static cancelGroupedNotifications(param0: string): void;
			/** @deprecated */
			public static syncHashedEmail(param0: string): void;
			public static getTriggerValueForKey(param0: string): any;
			public static removeSubscriptionObserver(param0: com.onesignal.OSSubscriptionObserver): void;
			public static setSubscription(param0: boolean): void;
			public static setEmail(param0: string, param1: string, param2: com.onesignal.OneSignal.EmailUpdateHandler): void;
			public static logoutEmail(): void;
			public static idsAvailable(param0: com.onesignal.OneSignal.IdsAvailableHandler): void;
			public static setEmail(param0: string, param1: string): void;
			public static deleteTag(param0: string, param1: com.onesignal.OneSignal.ChangeTagsUpdateHandler): void;
			public static init(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.onesignal.OneSignal.NotificationOpenedHandler, param4: com.onesignal.OneSignal.NotificationReceivedHandler): void;
			public static startInit(param0: globalAndroid.content.Context): com.onesignal.OneSignal.Builder;
			public static deleteTags(param0: java.util.Collection<string>, param1: com.onesignal.OneSignal.ChangeTagsUpdateHandler): void;
			public static addPermissionObserver(param0: com.onesignal.OSPermissionObserver): void;
			public static setEmail(param0: string, param1: com.onesignal.OneSignal.EmailUpdateHandler): void;
			public static sendTag(param0: string, param1: string): void;
			public static setExternalUserId(param0: string): void;
			public static clearOneSignalNotifications(): void;
			public static cancelNotification(param0: number): void;
			public static handleNotificationOpen(param0: globalAndroid.content.Context, param1: org.json.JSONArray, param2: boolean): void;
			public static removeTriggerForKey(param0: string): void;
		}
		export module OneSignal {
			export class Builder {
				public static class: java.lang.Class<com.onesignal.OneSignal.Builder>;
				public disableGmsMissingPrompt(param0: boolean): com.onesignal.OneSignal.Builder;
				public autoPromptLocation(param0: boolean): com.onesignal.OneSignal.Builder;
				public filterOtherGCMReceivers(param0: boolean): com.onesignal.OneSignal.Builder;
				public setInAppMessageClickHandler(param0: com.onesignal.OneSignal.InAppMessageClickHandler): com.onesignal.OneSignal.Builder;
				public setNotificationOpenedHandler(param0: com.onesignal.OneSignal.NotificationOpenedHandler): com.onesignal.OneSignal.Builder;
				public unsubscribeWhenNotificationsAreDisabled(param0: boolean): com.onesignal.OneSignal.Builder;
				public setNotificationReceivedHandler(param0: com.onesignal.OneSignal.NotificationReceivedHandler): com.onesignal.OneSignal.Builder;
				public inFocusDisplaying(param0: com.onesignal.OneSignal.OSInFocusDisplayOption): com.onesignal.OneSignal.Builder;
				public init(): void;
			}
			export class ChangeTagsUpdateHandler {
				public static class: java.lang.Class<com.onesignal.OneSignal.ChangeTagsUpdateHandler>;
				/**
				 * Constructs a new instance of the com.onesignal.OneSignal$ChangeTagsUpdateHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSuccess(param0: org.json.JSONObject): void;
					onFailure(param0: com.onesignal.OneSignal.SendTagsError): void;
				});
				public constructor();
				public onFailure(param0: com.onesignal.OneSignal.SendTagsError): void;
				public onSuccess(param0: org.json.JSONObject): void;
			}
			export class EmailErrorType {
				public static class: java.lang.Class<com.onesignal.OneSignal.EmailErrorType>;
				public static VALIDATION: com.onesignal.OneSignal.EmailErrorType;
				public static REQUIRES_EMAIL_AUTH: com.onesignal.OneSignal.EmailErrorType;
				public static INVALID_OPERATION: com.onesignal.OneSignal.EmailErrorType;
				public static NETWORK: com.onesignal.OneSignal.EmailErrorType;
				public static valueOf(param0: string): com.onesignal.OneSignal.EmailErrorType;
				public static values(): native.Array<com.onesignal.OneSignal.EmailErrorType>;
			}
			export class EmailUpdateError {
				public static class: java.lang.Class<com.onesignal.OneSignal.EmailUpdateError>;
				public getMessage(): string;
				public getType(): com.onesignal.OneSignal.EmailErrorType;
			}
			export class EmailUpdateHandler {
				public static class: java.lang.Class<com.onesignal.OneSignal.EmailUpdateHandler>;
				/**
				 * Constructs a new instance of the com.onesignal.OneSignal$EmailUpdateHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSuccess(): void;
					onFailure(param0: com.onesignal.OneSignal.EmailUpdateError): void;
				});
				public constructor();
				public onFailure(param0: com.onesignal.OneSignal.EmailUpdateError): void;
				public onSuccess(): void;
			}
			export class GetTagsHandler {
				public static class: java.lang.Class<com.onesignal.OneSignal.GetTagsHandler>;
				/**
				 * Constructs a new instance of the com.onesignal.OneSignal$GetTagsHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					tagsAvailable(param0: org.json.JSONObject): void;
				});
				public constructor();
				public tagsAvailable(param0: org.json.JSONObject): void;
			}
			export class IAPUpdateJob {
				public static class: java.lang.Class<com.onesignal.OneSignal.IAPUpdateJob>;
			}
			export class IdsAvailableHandler {
				public static class: java.lang.Class<com.onesignal.OneSignal.IdsAvailableHandler>;
				/**
				 * Constructs a new instance of the com.onesignal.OneSignal$IdsAvailableHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					idsAvailable(param0: string, param1: string): void;
				});
				public constructor();
				public idsAvailable(param0: string, param1: string): void;
			}
			export class InAppMessageClickHandler {
				public static class: java.lang.Class<com.onesignal.OneSignal.InAppMessageClickHandler>;
				/**
				 * Constructs a new instance of the com.onesignal.OneSignal$InAppMessageClickHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					inAppMessageClicked(param0: com.onesignal.OSInAppMessageAction): void;
				});
				public constructor();
				public inAppMessageClicked(param0: com.onesignal.OSInAppMessageAction): void;
			}
			export class LOG_LEVEL {
				public static class: java.lang.Class<com.onesignal.OneSignal.LOG_LEVEL>;
				public static NONE: com.onesignal.OneSignal.LOG_LEVEL;
				public static FATAL: com.onesignal.OneSignal.LOG_LEVEL;
				public static ERROR: com.onesignal.OneSignal.LOG_LEVEL;
				public static WARN: com.onesignal.OneSignal.LOG_LEVEL;
				public static INFO: com.onesignal.OneSignal.LOG_LEVEL;
				public static DEBUG: com.onesignal.OneSignal.LOG_LEVEL;
				public static VERBOSE: com.onesignal.OneSignal.LOG_LEVEL;
				public static values(): native.Array<com.onesignal.OneSignal.LOG_LEVEL>;
				public static valueOf(param0: string): com.onesignal.OneSignal.LOG_LEVEL;
			}
			export class NotificationOpenedHandler {
				public static class: java.lang.Class<com.onesignal.OneSignal.NotificationOpenedHandler>;
				/**
				 * Constructs a new instance of the com.onesignal.OneSignal$NotificationOpenedHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					notificationOpened(param0: com.onesignal.OSNotificationOpenResult): void;
				});
				public constructor();
				public notificationOpened(param0: com.onesignal.OSNotificationOpenResult): void;
			}
			export class NotificationReceivedHandler {
				public static class: java.lang.Class<com.onesignal.OneSignal.NotificationReceivedHandler>;
				/**
				 * Constructs a new instance of the com.onesignal.OneSignal$NotificationReceivedHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					notificationReceived(param0: com.onesignal.OSNotification): void;
				});
				public constructor();
				public notificationReceived(param0: com.onesignal.OSNotification): void;
			}
			export class OSInFocusDisplayOption {
				public static class: java.lang.Class<com.onesignal.OneSignal.OSInFocusDisplayOption>;
				public static None: com.onesignal.OneSignal.OSInFocusDisplayOption;
				public static InAppAlert: com.onesignal.OneSignal.OSInFocusDisplayOption;
				public static Notification: com.onesignal.OneSignal.OSInFocusDisplayOption;
				public static values(): native.Array<com.onesignal.OneSignal.OSInFocusDisplayOption>;
				public static valueOf(param0: string): com.onesignal.OneSignal.OSInFocusDisplayOption;
			}
			export class PendingTaskRunnable {
				public static class: java.lang.Class<com.onesignal.OneSignal.PendingTaskRunnable>;
				public run(): void;
			}
			export class PostNotificationResponseHandler {
				public static class: java.lang.Class<com.onesignal.OneSignal.PostNotificationResponseHandler>;
				/**
				 * Constructs a new instance of the com.onesignal.OneSignal$PostNotificationResponseHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSuccess(param0: org.json.JSONObject): void;
					onFailure(param0: org.json.JSONObject): void;
				});
				public constructor();
				public onFailure(param0: org.json.JSONObject): void;
				public onSuccess(param0: org.json.JSONObject): void;
			}
			export class SendTagsError {
				public static class: java.lang.Class<com.onesignal.OneSignal.SendTagsError>;
				public getCode(): number;
				public getMessage(): string;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OneSignalAnimate {
			public static class: java.lang.Class<com.onesignal.OneSignalAnimate>;
		}
	}
}

declare module com {
	export module onesignal {
		export class OneSignalBounceInterpolator {
			public static class: java.lang.Class<com.onesignal.OneSignalBounceInterpolator>;
			public getInterpolation(param0: number): number;
		}
	}
}

declare module com {
	export module onesignal {
		export class OneSignalChromeTab {
			public static class: java.lang.Class<com.onesignal.OneSignalChromeTab>;
			public static open(param0: string, param1: boolean): boolean;
		}
		export module OneSignalChromeTab {
			export class OneSignalCustomTabsServiceConnection {
				public static class: java.lang.Class<com.onesignal.OneSignalChromeTab.OneSignalCustomTabsServiceConnection>;
				public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
				public onCustomTabsServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.support.customtabs.CustomTabsClient): void;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OneSignalChromeTabAndroidFrame extends com.onesignal.OneSignalChromeTab {
			public static class: java.lang.Class<com.onesignal.OneSignalChromeTabAndroidFrame>;
		}
	}
}

declare module com {
	export module onesignal {
		export class OneSignalDbContract {
			public static class: java.lang.Class<com.onesignal.OneSignalDbContract>;
		}
		export module OneSignalDbContract {
			export abstract class NotificationTable {
				public static class: java.lang.Class<com.onesignal.OneSignalDbContract.NotificationTable>;
				public static TABLE_NAME: string;
				public static COLUMN_NAME_NOTIFICATION_ID: string;
				public static COLUMN_NAME_ANDROID_NOTIFICATION_ID: string;
				public static COLUMN_NAME_GROUP_ID: string;
				public static COLUMN_NAME_COLLAPSE_ID: string;
				public static COLUMN_NAME_IS_SUMMARY: string;
				public static COLUMN_NAME_OPENED: string;
				public static COLUMN_NAME_DISMISSED: string;
				public static COLUMN_NAME_TITLE: string;
				public static COLUMN_NAME_MESSAGE: string;
				public static COLUMN_NAME_CREATED_TIME: string;
				public static COLUMN_NAME_EXPIRE_TIME: string;
				public static COLUMN_NAME_FULL_DATA: string;
				public static INDEX_CREATE_NOTIFICATION_ID: string;
				public static INDEX_CREATE_ANDROID_NOTIFICATION_ID: string;
				public static INDEX_CREATE_GROUP_ID: string;
				public static INDEX_CREATE_COLLAPSE_ID: string;
				public static INDEX_CREATE_CREATED_TIME: string;
				public static INDEX_CREATE_EXPIRE_TIME: string;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OneSignalDbHelper {
			public static class: java.lang.Class<com.onesignal.OneSignalDbHelper>;
			public static getInstance(param0: globalAndroid.content.Context): com.onesignal.OneSignalDbHelper;
			public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
			public onDowngrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
			public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
		}
	}
}

declare module com {
	export module onesignal {
		export abstract class OneSignalJobServiceBase {
			public static class: java.lang.Class<com.onesignal.OneSignalJobServiceBase>;
			public onStopJob(param0: any): boolean;
			public onStartJob(param0: any): boolean;
		}
	}
}

declare module com {
	export module onesignal {
		export class OneSignalNotificationManager {
			public static class: java.lang.Class<com.onesignal.OneSignalNotificationManager>;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class OneSignalPrefs {
			public static class: java.lang.Class<com.onesignal.OneSignalPrefs>;
			public static PREFS_ONESIGNAL: string;
			public static PREFS_PLAYER_PURCHASES: string;
			public static PREFS_TRIGGERS: string;
			public static PREFS_OS_LAST_LOCATION_TIME: string;
			public static PREFS_GT_SOUND_ENABLED: string;
			public static PREFS_OS_LAST_SESSION_TIME: string;
			public static PREFS_GT_VIBRATE_ENABLED: string;
			public static PREFS_GT_FIREBASE_TRACKING_ENABLED: string;
			public static PREFS_OS_CLEAR_GROUP_SUMMARY_CLICK: string;
			public static PREFS_OS_RESTORE_TTL_FILTER: string;
			public static PREFS_OS_FILTER_OTHER_GCM_RECEIVERS: string;
			public static PREFS_GT_APP_ID: string;
			public static PREFS_GT_PLAYER_ID: string;
			public static PREFS_OS_EMAIL_ID: string;
			public static PREFS_GT_UNSENT_ACTIVE_TIME: string;
			public static PREFS_ONESIGNAL_USERSTATE_DEPENDVALYES_: string;
			public static PREFS_ONESIGNAL_USERSTATE_SYNCVALYES_: string;
			public static PREFS_ONESIGNAL_ACCEPTED_NOTIFICATION_LAST: string;
			public static PREFS_ONESIGNAL_SUBSCRIPTION_LAST: string;
			public static PREFS_ONESIGNAL_PLAYER_ID_LAST: string;
			public static PREFS_ONESIGNAL_PUSH_TOKEN_LAST: string;
			public static PREFS_ONESIGNAL_PERMISSION_ACCEPTED_LAST: string;
			public static PREFS_ONESIGNAL_EMAIL_ID_LAST: string;
			public static PREFS_ONESIGNAL_EMAIL_ADDRESS_LAST: string;
			public static PREFS_GT_DO_NOT_SHOW_MISSING_GPS: string;
			public static PREFS_ONESIGNAL_SUBSCRIPTION: string;
			public static PREFS_ONESIGNAL_SYNCED_SUBSCRIPTION: string;
			public static PREFS_GT_REGISTRATION_ID: string;
			public static PREFS_ONESIGNAL_USER_PROVIDED_CONSENT: string;
			public static PREFS_OS_ETAG_PREFIX: string;
			public static PREFS_OS_HTTP_CACHE_PREFIX: string;
			public static PREFS_OS_CACHED_IAMS: string;
			public static PREFS_OS_DISPLAYED_IAMS: string;
			public static PREFS_OS_IMPRESSIONED_IAMS: string;
			public static PREFS_OS_CLICKED_CLICK_IDS_IAMS: string;
			public static prefsHandler: com.onesignal.OneSignalPrefs.WritePrefHandlerThread;
			public static initializePool(): void;
			public static saveLong(param0: string, param1: string, param2: number): void;
			public static saveInt(param0: string, param1: string, param2: number): void;
			public static startDelayedWrite(): void;
			public static saveObject(param0: string, param1: string, param2: any): void;
			public static saveBool(param0: string, param1: string, param2: boolean): void;
			public static getStringSet(param0: string, param1: string, param2: java.util.Set<string>): java.util.Set<string>;
			public static saveString(param0: string, param1: string, param2: string): void;
			public static saveStringSet(param0: string, param1: string, param2: java.util.Set<string>): void;
		}
		export module OneSignalPrefs {
			export class WritePrefHandlerThread {
				public static class: java.lang.Class<com.onesignal.OneSignalPrefs.WritePrefHandlerThread>;
				public mHandler: globalAndroid.os.Handler;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OneSignalRemoteParams {
			public static class: java.lang.Class<com.onesignal.OneSignalRemoteParams>;
		}
		export module OneSignalRemoteParams {
			export class CallBack {
				public static class: java.lang.Class<com.onesignal.OneSignalRemoteParams.CallBack>;
				/**
				 * Constructs a new instance of the com.onesignal.OneSignalRemoteParams$CallBack interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					complete(param0: com.onesignal.OneSignalRemoteParams.Params): void;
				});
				public constructor();
				public complete(param0: com.onesignal.OneSignalRemoteParams.Params): void;
			}
			export class Params {
				public static class: java.lang.Class<com.onesignal.OneSignalRemoteParams.Params>;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OneSignalRestClient {
			public static class: java.lang.Class<com.onesignal.OneSignalRestClient>;
			public static getSync(param0: string, param1: com.onesignal.OneSignalRestClient.ResponseHandler, param2: string): void;
			public static putSync(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalRestClient.ResponseHandler): void;
			public static postSync(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalRestClient.ResponseHandler): void;
			public static get(param0: string, param1: com.onesignal.OneSignalRestClient.ResponseHandler, param2: string): void;
			public static put(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalRestClient.ResponseHandler): void;
			public static post(param0: string, param1: org.json.JSONObject, param2: com.onesignal.OneSignalRestClient.ResponseHandler): void;
		}
		export module OneSignalRestClient {
			export abstract class ResponseHandler {
				public static class: java.lang.Class<com.onesignal.OneSignalRestClient.ResponseHandler>;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OneSignalStateSynchronizer {
			public static class: java.lang.Class<com.onesignal.OneSignalStateSynchronizer>;
		}
	}
}

declare module com {
	export module onesignal {
		export class OneSignalSyncServiceUtils {
			public static class: java.lang.Class<com.onesignal.OneSignalSyncServiceUtils>;
		}
		export module OneSignalSyncServiceUtils {
			export class LegacySyncRunnable extends com.onesignal.OneSignalSyncServiceUtils.SyncRunnable {
				public static class: java.lang.Class<com.onesignal.OneSignalSyncServiceUtils.LegacySyncRunnable>;
				public stopSync(): void;
			}
			export class LollipopSyncRunnable extends com.onesignal.OneSignalSyncServiceUtils.SyncRunnable {
				public static class: java.lang.Class<com.onesignal.OneSignalSyncServiceUtils.LollipopSyncRunnable>;
				public stopSync(): void;
			}
			export abstract class SyncRunnable {
				public static class: java.lang.Class<com.onesignal.OneSignalSyncServiceUtils.SyncRunnable>;
				public run(): void;
				public stopSync(): void;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class PermissionsActivity {
			public static class: java.lang.Class<com.onesignal.PermissionsActivity>;
			public onCreate(param0: globalAndroid.os.Bundle): void;
			public constructor();
			public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
			public onNewIntent(param0: globalAndroid.content.Intent): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class PushRegistrator {
			public static class: java.lang.Class<com.onesignal.PushRegistrator>;
			/**
			 * Constructs a new instance of the com.onesignal.PushRegistrator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				registerForPush(param0: globalAndroid.content.Context, param1: string, param2: com.onesignal.PushRegistrator.RegisteredHandler): void;
			});
			public constructor();
			public registerForPush(param0: globalAndroid.content.Context, param1: string, param2: com.onesignal.PushRegistrator.RegisteredHandler): void;
		}
		export module PushRegistrator {
			export class RegisteredHandler {
				public static class: java.lang.Class<com.onesignal.PushRegistrator.RegisteredHandler>;
				/**
				 * Constructs a new instance of the com.onesignal.PushRegistrator$RegisteredHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					complete(param0: string, param1: number): void;
				});
				public constructor();
				public complete(param0: string, param1: number): void;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class PushRegistratorADM extends com.onesignal.PushRegistrator {
			public static class: java.lang.Class<com.onesignal.PushRegistratorADM>;
			public static fireCallback(param0: string): void;
			public constructor();
			public registerForPush(param0: globalAndroid.content.Context, param1: string, param2: com.onesignal.PushRegistrator.RegisteredHandler): void;
		}
	}
}

declare module com {
	export module onesignal {
		export abstract class PushRegistratorAbstractGoogle extends com.onesignal.PushRegistrator {
			public static class: java.lang.Class<com.onesignal.PushRegistratorAbstractGoogle>;
			public registerForPush(param0: globalAndroid.content.Context, param1: string, param2: com.onesignal.PushRegistrator.RegisteredHandler): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class PushRegistratorFCM extends com.onesignal.PushRegistratorAbstractGoogle {
			public static class: java.lang.Class<com.onesignal.PushRegistratorFCM>;
			public registerForPush(param0: globalAndroid.content.Context, param1: string, param2: com.onesignal.PushRegistrator.RegisteredHandler): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class PushRegistratorGCM extends com.onesignal.PushRegistratorAbstractGoogle {
			public static class: java.lang.Class<com.onesignal.PushRegistratorGCM>;
			public registerForPush(param0: globalAndroid.content.Context, param1: string, param2: com.onesignal.PushRegistrator.RegisteredHandler): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class RestoreJobService extends com.onesignal.JobIntentService {
			public static class: java.lang.Class<com.onesignal.RestoreJobService>;
			public onHandleWork(param0: globalAndroid.content.Intent): void;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class RestoreKickoffJobService extends com.onesignal.OneSignalJobServiceBase {
			public static class: java.lang.Class<com.onesignal.RestoreKickoffJobService>;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class RootToolsInternalMethods {
			public static class: java.lang.Class<com.onesignal.RootToolsInternalMethods>;
		}
	}
}

declare module com {
	export module onesignal {
		export class SyncJobService {
			public static class: java.lang.Class<com.onesignal.SyncJobService>;
			public onStopJob(param0: any): boolean;
			public onStartJob(param0: any): boolean;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class SyncService {
			public static class: java.lang.Class<com.onesignal.SyncService>;
			public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
			public constructor();
			public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
		}
	}
}

declare module com {
	export module onesignal {
		export class TrackAmazonPurchase {
			public static class: java.lang.Class<com.onesignal.TrackAmazonPurchase>;
		}
		export module TrackAmazonPurchase {
			export class OSPurchasingListener {
				public static class: java.lang.Class<com.onesignal.TrackAmazonPurchase.OSPurchasingListener>;
				public onUserDataResponse(param0: com.amazon.device.iap.model.UserDataResponse): void;
				public onPurchaseUpdatesResponse(param0: com.amazon.device.iap.model.PurchaseUpdatesResponse): void;
				public onProductDataResponse(param0: com.amazon.device.iap.model.ProductDataResponse): void;
				public onPurchaseResponse(param0: com.amazon.device.iap.model.PurchaseResponse): void;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class TrackFirebaseAnalytics {
			public static class: java.lang.Class<com.onesignal.TrackFirebaseAnalytics>;
		}
	}
}

declare module com {
	export module onesignal {
		export class TrackGooglePurchase {
			public static class: java.lang.Class<com.onesignal.TrackGooglePurchase>;
		}
	}
}

declare module com {
	export module onesignal {
		export class UpgradeReceiver {
			public static class: java.lang.Class<com.onesignal.UpgradeReceiver>;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export abstract class UserState {
			public static class: java.lang.Class<com.onesignal.UserState>;
			public addDependFields(): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class UserStateEmail extends com.onesignal.UserState {
			public static class: java.lang.Class<com.onesignal.UserStateEmail>;
			public addDependFields(): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class UserStateEmailSynchronizer extends com.onesignal.UserStateSynchronizer {
			public static class: java.lang.Class<com.onesignal.UserStateEmailSynchronizer>;
			public setPermission(param0: boolean): void;
			public scheduleSyncToServer(): void;
			public getId(): string;
			public addOnSessionOrCreateExtras(param0: org.json.JSONObject): void;
			public getUserSubscribePreference(): boolean;
			public newUserState(param0: string, param1: boolean): com.onesignal.UserState;
			public onSuccessfulSync(param0: org.json.JSONObject): void;
			public fireEventsForUpdateFailure(param0: org.json.JSONObject): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class UserStatePush extends com.onesignal.UserState {
			public static class: java.lang.Class<com.onesignal.UserStatePush>;
			public addDependFields(): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class UserStatePushSynchronizer extends com.onesignal.UserStateSynchronizer {
			public static class: java.lang.Class<com.onesignal.UserStatePushSynchronizer>;
			public scheduleSyncToServer(): void;
			public setPermission(param0: boolean): void;
			public getId(): string;
			public addOnSessionOrCreateExtras(param0: org.json.JSONObject): void;
			public getUserSubscribePreference(): boolean;
			public newUserState(param0: string, param1: boolean): com.onesignal.UserState;
			public onSuccessfulSync(param0: org.json.JSONObject): void;
			public fireEventsForUpdateFailure(param0: org.json.JSONObject): void;
		}
	}
}

declare module com {
	export module onesignal {
		export abstract class UserStateSynchronizer {
			public static class: java.lang.Class<com.onesignal.UserStateSynchronizer>;
			public syncLock: any;
			public waitingForSessionResponse: boolean;
			public currentUserState: com.onesignal.UserState;
			public toSyncUserState: com.onesignal.UserState;
			public scheduleSyncToServer(): void;
			public generateJsonDiff(param0: org.json.JSONObject, param1: org.json.JSONObject, param2: org.json.JSONObject, param3: java.util.Set<string>): org.json.JSONObject;
			public addOnSessionOrCreateExtras(param0: org.json.JSONObject): void;
			public newUserState(param0: string, param1: boolean): com.onesignal.UserState;
			public getNetworkHandlerThread(param0: java.lang.Integer): com.onesignal.UserStateSynchronizer.NetworkHandlerThread;
			public fireEventsForUpdateFailure(param0: org.json.JSONObject): void;
			public getCurrentUserState(): com.onesignal.UserState;
			public getId(): string;
			public setPermission(param0: boolean): void;
			public getToSyncUserState(): com.onesignal.UserState;
			public getUserSubscribePreference(): boolean;
			public onSuccessfulSync(param0: org.json.JSONObject): void;
			public getUserStateForModification(): com.onesignal.UserState;
		}
		export module UserStateSynchronizer {
			export class GetTagsResult {
				public static class: java.lang.Class<com.onesignal.UserStateSynchronizer.GetTagsResult>;
			}
			export class NetworkHandlerThread {
				public static class: java.lang.Class<com.onesignal.UserStateSynchronizer.NetworkHandlerThread>;
				public static NETWORK_HANDLER_USERSTATE: number;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class WebViewManager extends com.onesignal.ActivityLifecycleHandler.ActivityAvailableListener {
			public static class: java.lang.Class<com.onesignal.WebViewManager>;
		}
		export module WebViewManager {
			export class OSJavaScriptInterface {
				public static class: java.lang.Class<com.onesignal.WebViewManager.OSJavaScriptInterface>;
				public postMessage(param0: string): void;
			}
			export class OneSignalGenericCallback {
				public static class: java.lang.Class<com.onesignal.WebViewManager.OneSignalGenericCallback>;
				/**
				 * Constructs a new instance of the com.onesignal.WebViewManager$OneSignalGenericCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onComplete(): void;
				});
				public constructor();
				public onComplete(): void;
			}
			export class Position {
				public static class: java.lang.Class<com.onesignal.WebViewManager.Position>;
				public static TOP_BANNER: com.onesignal.WebViewManager.Position;
				public static BOTTOM_BANNER: com.onesignal.WebViewManager.Position;
				public static CENTER_MODAL: com.onesignal.WebViewManager.Position;
				public static FULL_SCREEN: com.onesignal.WebViewManager.Position;
				public static valueOf(param0: string): com.onesignal.WebViewManager.Position;
				public static values(): native.Array<com.onesignal.WebViewManager.Position>;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export class Badger {
				public static class: java.lang.Class<com.onesignal.shortcutbadger.Badger>;
				/**
				 * Constructs a new instance of the com.onesignal.shortcutbadger.Badger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					getSupportLaunchers(): java.util.List<string>;
				});
				public constructor();
				public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
				public getSupportLaunchers(): java.util.List<string>;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export class ShortcutBadgeException {
				public static class: java.lang.Class<com.onesignal.shortcutbadger.ShortcutBadgeException>;
				public constructor(param0: string, param1: java.lang.Exception);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export class ShortcutBadger {
				public static class: java.lang.Class<com.onesignal.shortcutbadger.ShortcutBadger>;
				public static applyNotification(param0: globalAndroid.content.Context, param1: globalAndroid.app.Notification, param2: number): void;
				public static removeCount(param0: globalAndroid.content.Context): boolean;
				public static isBadgeCounterSupported(param0: globalAndroid.content.Context): boolean;
				public static applyCount(param0: globalAndroid.content.Context, param1: number): boolean;
				public static removeCountOrThrow(param0: globalAndroid.content.Context): void;
				public static applyCountOrThrow(param0: globalAndroid.content.Context, param1: number): void;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class AdwHomeBadger extends com.onesignal.shortcutbadger.Badger {
					public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.AdwHomeBadger>;
					public static INTENT_UPDATE_COUNTER: string;
					public static PACKAGENAME: string;
					public static CLASSNAME: string;
					public static COUNT: string;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class ApexHomeBadger extends com.onesignal.shortcutbadger.Badger {
					public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.ApexHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class AsusHomeBadger extends com.onesignal.shortcutbadger.Badger {
					public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.AsusHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class DefaultBadger extends com.onesignal.shortcutbadger.Badger {
					public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.DefaultBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class EverythingMeHomeBadger extends com.onesignal.shortcutbadger.Badger {
					public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.EverythingMeHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class HuaweiHomeBadger extends com.onesignal.shortcutbadger.Badger {
					public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.HuaweiHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class LGHomeBadger extends com.onesignal.shortcutbadger.Badger {
					public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.LGHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class NewHtcHomeBadger extends com.onesignal.shortcutbadger.Badger {
					public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.NewHtcHomeBadger>;
					public static INTENT_UPDATE_SHORTCUT: string;
					public static INTENT_SET_NOTIFICATION: string;
					public static PACKAGENAME: string;
					public static COUNT: string;
					public static EXTRA_COMPONENT: string;
					public static EXTRA_COUNT: string;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class NovaHomeBadger extends com.onesignal.shortcutbadger.Badger {
					public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.NovaHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class OPPOHomeBader extends com.onesignal.shortcutbadger.Badger {
					public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.OPPOHomeBader>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class SamsungHomeBadger extends com.onesignal.shortcutbadger.Badger {
					public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.SamsungHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class SonyHomeBadger extends com.onesignal.shortcutbadger.Badger {
					public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.SonyHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class VivoHomeBadger extends com.onesignal.shortcutbadger.Badger {
					public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.VivoHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class XiaomiHomeBadger extends com.onesignal.shortcutbadger.Badger {
					public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.XiaomiHomeBadger>;
					public static INTENT_ACTION: string;
					public static EXTRA_UPDATE_APP_COMPONENT_NAME: string;
					public static EXTRA_UPDATE_APP_MSG_TEXT: string;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class ZukHomeBadger extends com.onesignal.shortcutbadger.Badger {
					public static class: java.lang.Class<com.onesignal.shortcutbadger.impl.ZukHomeBadger>;
					public constructor();
					public executeBadge(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module util {
				export class BroadcastHelper {
					public static class: java.lang.Class<com.onesignal.shortcutbadger.util.BroadcastHelper>;
					public constructor();
					public static canResolveBroadcast(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): boolean;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module util {
				export class CloseHelper {
					public static class: java.lang.Class<com.onesignal.shortcutbadger.util.CloseHelper>;
					public static close(param0: globalAndroid.database.Cursor): void;
					public constructor();
					public static closeQuietly(param0: java.io.Closeable): void;
				}
			}
		}
	}
}

//Generics information:
//com.onesignal.BundleCompat:1
//com.onesignal.OSObservable:2

