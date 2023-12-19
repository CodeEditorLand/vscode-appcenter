import { Command } from "./command";

// For testing, command that do literally nothing
export default class NullCommand extends Command {
	public async runNoClient(): Promise<void> {
		super.runNoClient();
		this.logger.info("Null cmd executed!");
	}
}
