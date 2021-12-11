/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import ISfdmuRunModuleArgs from "./ISfdmuRunModuleArgs";
import SfdmuRunApp from "./sfdmuRunApp";


export class SfdmuRunModule {

    public static async runCommand(args: ISfdmuRunModuleArgs) {
        args.runProcess = new SfdmuRunApp(args.argv);
        await args.runProcess.runCommand();
    }

}