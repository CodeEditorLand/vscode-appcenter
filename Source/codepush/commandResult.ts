export type CommandResult = CommandSucceededResult | CommandFailedResult;

export interface CommandSucceededResult {
	succeeded: boolean;
	result?: any;
}

export interface CommandFailedResult {
	succeeded: boolean;
	errorCode: number;
	errorMessage: string;
	exception?: Error;
}

export function success(res: any): CommandResult {
	return {
		succeeded: true,
		result: res,
	};
}

// Used when there's a failure otherwise
export function failure(
	errorCode: number,
	errorMessage: string,
): CommandResult {
	return {
		succeeded: false,
		errorCode,
		errorMessage,
	};
}

export enum ErrorCodes {
	Succeeded = 0,
	// Command given contained illegal characters/names
	IllegalCommand = 1,
	// Command was legal, but not found
	NoSuchCommand = 2,
	// Unhandled exception occurred
	Exception = 3,
	// A parameter is invalid
	InvalidParameter = 4,
	// Command requires logged in user
	NotLoggedIn = 5,
	// The requested resource was not found
	NotFound = 6,
}
