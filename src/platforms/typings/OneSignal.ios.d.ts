
declare var ONESIGNAL_VERSION: string;

declare const enum ONE_S_LOG_LEVEL {

	L_NONE = 0,

	L_FATAL = 1,

	L_ERROR = 2,

	L_WARN = 3,

	L_INFO = 4,

	L_DEBUG = 5,

	L_VERBOSE = 6
}

interface OSEmailSubscriptionObserver extends NSObjectProtocol {

	onOSEmailSubscriptionChanged(stateChanges: OSEmailSubscriptionStateChanges): void;
}
declare var OSEmailSubscriptionObserver: {

	prototype: OSEmailSubscriptionObserver;
};

declare class OSEmailSubscriptionState extends NSObject {

	static alloc(): OSEmailSubscriptionState; // inherited from NSObject

	static new(): OSEmailSubscriptionState; // inherited from NSObject

	readonly emailAddress: string;

	readonly emailUserId: string;

	readonly subscribed: boolean;

	toDictionary(): NSDictionary<any, any>;
}

declare class OSEmailSubscriptionStateChanges extends NSObject {

	static alloc(): OSEmailSubscriptionStateChanges; // inherited from NSObject

	static new(): OSEmailSubscriptionStateChanges; // inherited from NSObject

	readonly from: OSEmailSubscriptionState;

	readonly to: OSEmailSubscriptionState;

	toDictionary(): NSDictionary<any, any>;
}

declare class OSNotification extends NSObject {

	static alloc(): OSNotification; // inherited from NSObject

	static new(): OSNotification; // inherited from NSObject

	readonly displayType: OSNotificationDisplayType;

	readonly isAppInFocus: boolean;

	readonly mutableContent: boolean;

	readonly payload: OSNotificationPayload;

	readonly shown: boolean;

	readonly silentNotification: boolean;

	stringify(): string;
}

declare class OSNotificationAction extends NSObject {

	static alloc(): OSNotificationAction; // inherited from NSObject

	static new(): OSNotificationAction; // inherited from NSObject

	readonly actionID: string;

	readonly type: OSNotificationActionType;
}

declare const enum OSNotificationActionType {

	Opened = 0,

	ActionTaken = 1
}

declare const enum OSNotificationDisplayType {

	None = 0,

	InAppAlert = 1,

	Notification = 2
}

interface OSNotificationDisplayTypeDelegate extends NSObjectProtocol {

	willPresentInFocusNotificationWithPayloadWithCompletion(payload: OSNotificationPayload, completion: (p1: OSNotificationDisplayType) => void): void;
}
declare var OSNotificationDisplayTypeDelegate: {

	prototype: OSNotificationDisplayTypeDelegate;
};

declare class OSNotificationOpenedResult extends NSObject {

	static alloc(): OSNotificationOpenedResult; // inherited from NSObject

	static new(): OSNotificationOpenedResult; // inherited from NSObject

	readonly action: OSNotificationAction;

	readonly notification: OSNotification;

	stringify(): string;
}

declare class OSNotificationPayload extends NSObject {

	static alloc(): OSNotificationPayload; // inherited from NSObject

	static new(): OSNotificationPayload; // inherited from NSObject

	static parseWithApns(message: NSDictionary<any, any>): OSNotificationPayload;

	readonly actionButtons: NSArray<any>;

	readonly additionalData: NSDictionary<any, any>;

	readonly attachments: NSDictionary<any, any>;

	readonly badge: number;

	readonly badgeIncrement: number;

	readonly body: string;

	readonly category: string;

	readonly contentAvailable: boolean;

	readonly launchURL: string;

	readonly mutableContent: boolean;

	readonly notificationID: string;

	readonly rawPayload: NSDictionary<any, any>;

	readonly sound: string;

	readonly subtitle: string;

	readonly templateID: string;

	readonly templateName: string;

	readonly threadId: string;

	readonly title: string;
}

declare const enum OSNotificationPermission {

	NotDetermined = 0,

	Denied = 1,

	Authorized = 2,

	Provisional = 3
}

interface OSPermissionObserver extends NSObjectProtocol {

	onOSPermissionChanged(stateChanges: OSPermissionStateChanges): void;
}
declare var OSPermissionObserver: {

	prototype: OSPermissionObserver;
};

declare class OSPermissionState extends NSObject {

	static alloc(): OSPermissionState; // inherited from NSObject

	static new(): OSPermissionState; // inherited from NSObject

	readonly hasPrompted: boolean;

	readonly providesAppNotificationSettings: boolean;

	readonly reachable: boolean;

	readonly status: OSNotificationPermission;

	toDictionary(): NSDictionary<any, any>;
}

declare class OSPermissionStateChanges extends NSObject {

	static alloc(): OSPermissionStateChanges; // inherited from NSObject

	static new(): OSPermissionStateChanges; // inherited from NSObject

	readonly from: OSPermissionState;

	readonly to: OSPermissionState;

	toDictionary(): NSDictionary<any, any>;
}

declare class OSPermissionSubscriptionState extends NSObject {

	static alloc(): OSPermissionSubscriptionState; // inherited from NSObject

	static new(): OSPermissionSubscriptionState; // inherited from NSObject

	readonly emailSubscriptionStatus: OSEmailSubscriptionState;

	readonly permissionStatus: OSPermissionState;

	readonly subscriptionStatus: OSSubscriptionState;

	toDictionary(): NSDictionary<any, any>;
}

interface OSSubscriptionObserver extends NSObjectProtocol {

	onOSSubscriptionChanged(stateChanges: OSSubscriptionStateChanges): void;
}
declare var OSSubscriptionObserver: {

	prototype: OSSubscriptionObserver;
};

declare class OSSubscriptionState extends NSObject {

	static alloc(): OSSubscriptionState; // inherited from NSObject

	static new(): OSSubscriptionState; // inherited from NSObject

	readonly pushToken: string;

	readonly subscribed: boolean;

	readonly userId: string;

	readonly userSubscriptionSetting: boolean;

	toDictionary(): NSDictionary<any, any>;
}

declare class OSSubscriptionStateChanges extends NSObject {

	static alloc(): OSSubscriptionStateChanges; // inherited from NSObject

	static new(): OSSubscriptionStateChanges; // inherited from NSObject

	readonly from: OSSubscriptionState;

	readonly to: OSSubscriptionState;

	toDictionary(): NSDictionary<any, any>;
}

declare class OneSignal extends NSObject {

	static IdsAvailable(idsAvailableBlock: (p1: string, p2: string) => void): void;

	static addEmailSubscriptionObserver(observer: NSObject): void;

	static addPermissionObserver(observer: NSObject): void;

	static addSubscriptionObserver(observer: NSObject): void;

	static alloc(): OneSignal; // inherited from NSObject

	static app_id(): string;

	static consentGranted(granted: boolean): void;

	static deleteTag(key: string): void;

	static deleteTagOnSuccessOnFailure(key: string, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

	static deleteTags(keys: NSArray<any> | any[]): void;

	static deleteTagsOnSuccessOnFailure(keys: NSArray<any> | any[], successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

	static deleteTagsWithJsonString(jsonString: string): void;

	static didReceiveNotificationExtensionRequestWithMutableNotificationContent(request: UNNotificationRequest, replacementContent: UNMutableNotificationContent): UNMutableNotificationContent;

	static getPermissionSubscriptionState(): OSPermissionSubscriptionState;

	static getTags(successBlock: (p1: NSDictionary<any, any>) => void): void;

	static getTagsOnFailure(successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

	static initWithLaunchOptionsAppId(launchOptions: NSDictionary<any, any>, appId: string): any;

	static initWithLaunchOptionsAppIdHandleNotificationAction(launchOptions: NSDictionary<any, any>, appId: string, actionCallback: (p1: OSNotificationOpenedResult) => void): any;

	static initWithLaunchOptionsAppIdHandleNotificationActionSettings(launchOptions: NSDictionary<any, any>, appId: string, actionCallback: (p1: OSNotificationOpenedResult) => void, settings: NSDictionary<any, any>): any;

	static initWithLaunchOptionsAppIdHandleNotificationReceivedHandleNotificationActionSettings(launchOptions: NSDictionary<any, any>, appId: string, receivedCallback: (p1: OSNotification) => void, actionCallback: (p1: OSNotificationOpenedResult) => void, settings: NSDictionary<any, any>): any;

	static logoutEmail(): void;

	static logoutEmailWithSuccessWithFailure(successBlock: () => void, failureBlock: (p1: NSError) => void): void;

	static new(): OneSignal; // inherited from NSObject

	static onesignal_LogMessage(logLevel: ONE_S_LOG_LEVEL, message: string): void;

	static parseNSErrorAsJsonString(error: NSError): string;

	static postNotification(jsonData: NSDictionary<any, any>): void;

	static postNotificationOnSuccessOnFailure(jsonData: NSDictionary<any, any>, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

	static postNotificationWithJsonStringOnSuccessOnFailure(jsonData: string, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

	static presentAppSettings(): void;

	static promptForPushNotificationsWithUserResponse(completionHandler: (p1: boolean) => void): void;

	static promptForPushNotificationsWithUserResponseFallbackToSettings(completionHandler: (p1: boolean) => void, fallback: boolean): void;

	static promptLocation(): void;

	static registerForProvisionalAuthorization(completionHandler: (p1: boolean) => void): void;

	static registerForPushNotifications(): void;

	static removeEmailSubscriptionObserver(observer: NSObject): void;

	static removeExternalUserId(): void;

	static removePermissionObserver(observer: NSObject): void;

	static removeSubscriptionObserver(observer: NSObject): void;

	static requiresUserPrivacyConsent(): boolean;

	static sdk_semantic_version(): string;

	static sdk_version_raw(): string;

	static sendTagValue(key: string, value: string): void;

	static sendTagValueOnSuccessOnFailure(key: string, value: string, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

	static sendTags(keyValuePair: NSDictionary<any, any>): void;

	static sendTagsOnSuccessOnFailure(keyValuePair: NSDictionary<any, any>, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

	static sendTagsWithJsonString(jsonString: string): void;

	static serviceExtensionTimeWillExpireRequestWithMutableNotificationContent(request: UNNotificationRequest, replacementContent: UNMutableNotificationContent): UNMutableNotificationContent;

	static setEmail(email: string): void;

	static setEmailWithEmailAuthHashToken(email: string, hashToken: string): void;

	static setEmailWithEmailAuthHashTokenWithSuccessWithFailure(email: string, hashToken: string, successBlock: () => void, failureBlock: (p1: NSError) => void): void;

	static setEmailWithSuccessWithFailure(email: string, successBlock: () => void, failureBlock: (p1: NSError) => void): void;

	static setExternalUserId(externalId: string): void;

	static setLocationShared(enable: boolean): void;

	static setLogLevelVisualLevel(logLevel: ONE_S_LOG_LEVEL, visualLogLevel: ONE_S_LOG_LEVEL): void;

	static setMSDKType(type: string): void;

	static setNotificationDisplayTypeDelegate(delegate: NSObject): void;

	static setRequiresUserPrivacyConsent(required: boolean): void;

	static setSubscription(enable: boolean): void;

	static syncHashedEmail(email: string): void;

	static inFocusDisplayType: OSNotificationDisplayType;
}

declare var kOSSSettingsKeyPromptBeforeOpeningPushURL: string;

declare var kOSSettingsKeyAutoPrompt: string;

declare var kOSSettingsKeyInAppAlerts: string;

declare var kOSSettingsKeyInAppLaunchURL: string;

declare var kOSSettingsKeyInFocusDisplayOption: string;

declare var kOSSettingsKeyProvidesAppNotificationSettings: string;
