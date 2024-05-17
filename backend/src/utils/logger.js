import clc from "cli-color";

class Logger {
  /**
   * 
   * @param {string} prefix 
   * @param {string} message 
   */
  static info(prefix, message) {
    console.log(`[${clc.cyan(prefix)}] ${message}`);
  }

  /**
   * 
   * @param {string} prefix 
   * @param {string} message 
   */
  static error(prefix, message) {
    console.log(`[${clc.red(prefix)}] ${message}`);
  }

  /**
   * 
   * @param {string} prefix 
   * @param {string} message 
   */
  static success(prefix, message) {
    console.log(`[${clc.green(prefix)}] ${message}`);
  }
}

export { Logger };
