/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<div class="login-wrapper">
    <form class="login">
        <section class="title">
            <h3 class="welcome">Welcome to</h3>
            Company Product Name
            <h5 class="hint">Use your Company ID to sign in or create one now</h5>
        </section>
        <div class="login-group">
            <clr-select-container>
                <select clrSelect name="type" [(ngModel)]="form.type">
                    <option value="local">Local Users</option>
                    <option value="admin">Administrator</option>
                </select>
            </clr-select-container>
            <clr-input-container>
                <input type="text" name="username" clrInput placeholder="Username" [(ngModel)]="form.username"/>
            </clr-input-container>
            <clr-password-container>
                <input type="password" name="password" clrPassword placeholder="Password" [(ngModel)]="form.password"/>
            </clr-password-container>
            <clr-checkbox-wrapper>
                <label>Remember me</label>
                <input type="checkbox" name="rememberMe" clrCheckbox [(ngModel)]="form.rememberMe"/>
            </clr-checkbox-wrapper>
            <div class="error active">
                Invalid user name or password
            </div>
            <button type="submit" class="btn btn-primary">NEXT</button>
            <a href="javascript://" class="signup">Sign up for a Company ID</a>
        </div>
    </form>
</div>
`;

@Component({
	selector: "clr-login-example-demo",
	templateUrl: "./login-example.demo.html"
})
export class LoginExampleDemo {
	example = EXAMPLE;
	form = {
		type: "local",
		username: "",
		password: "",
		rememberMe: false
	};
}
