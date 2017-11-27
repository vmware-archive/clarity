/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/**
 * This is an abstract class because we need it to still be a valid token for dependency injection after transpiling.
 * This does not mean you should extend it, simply implementing it is fine.
 */
export abstract class LoadingListener {
    abstract startLoading(): void;

    abstract doneLoading(): void;
}