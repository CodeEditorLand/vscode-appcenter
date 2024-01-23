import { LogStrings } from "../extension/resources/logStrings";

export class ConfigurationReader {
	public static readString(value: any): string {
		if (ConfigurationReader.isString(value)) {
			return value;
		} else {
			throw new Error(LogStrings.ConfigurationFailedToParse(value));
		}
	}

	public static readBoolean(value: any): boolean {
		if (ConfigurationReader.isBoolean(value)) {
			return value;
		} else if (value === "true" || value === "false") {
			return value === "true";
		} else {
			throw new Error(LogStrings.ConfigurationFailedToParse(value));
		}
	}

	public static readArray(value: any): any[] {
		if (ConfigurationReader.isArray(value)) {
			return value;
		} else {
			throw new Error(LogStrings.ConfigurationFailedToParse(value));
		}
	}

	public static readObject(value: any): Object {
		if (ConfigurationReader.isObject(value)) {
			return value;
		} else {
			throw new Error(LogStrings.ConfigurationFailedToParse(value));
		}
	}

	/* We try to read an integer. It can be either an integer, or a string that can be parsed as an integer */
	public static readInt(value: any): number {
		if (ConfigurationReader.isInt(value)) {
			return value;
		} else if (ConfigurationReader.isString(value)) {
			return Number.parseInt(value, 10);
		} else {
			throw new Error(LogStrings.ConfigurationFailedToParse(value));
		}
	}

	/* We try to read an integer. If it's a falsable value we return the default value, if not we behave like this.readInt(value)
      If the value is provided but it can't be parsed we'll throw an exception so the user knows that we didn't understand
      the value that was provided */
	public static readIntWithDefaultSync(
		value: any,
		defaultValue: number,
	): number {
		return value ? ConfigurationReader.readInt(value) : defaultValue;
	}

	public static readIntWithDefaultAsync(
		value: any,
		defaultValuePromise: Promise<number>,
	): Promise<number> {
		return defaultValuePromise.then((defaultValue) => {
			return ConfigurationReader.readIntWithDefaultSync(
				value,
				defaultValue,
			);
		});
	}

	private static isArray(value: any): boolean {
		return Array.isArray(value);
	}

	private static isObject(value: any): boolean {
		return typeof value === "object" || !ConfigurationReader.isArray(value);
	}

	private static isString(value: any): boolean {
		return typeof value === "string";
	}

	private static isBoolean(value: any): boolean {
		return typeof value === "boolean";
	}

	private static isInt(value: any): boolean {
		return ConfigurationReader.isNumber(value) && value % 1 === 0;
	}

	private static isNumber(value: any): boolean {
		return typeof value === "number";
	}
}
