export declare type Reducer = (state: State, action: any) => State;
export declare type ReplaceReducer = (reducer: Reducer) => ReplaceReducer;
export interface Store {
    [x: string]: any;
    replaceReducer: ReplaceReducer;
}
export interface State {
    [reducerKey: string]: {
        cacheUntil?: number | null | undefined;
        [x: string]: any;
    };
}
export interface CacheEnhancerConfig {
    log?: boolean;
    cacheKey?: string;
}
declare type LogResult = (name: string, array: string[]) => void;
declare type LogGeneral = (message: string, ...data: string[]) => void;
/**
 * This fn will handle invalidating the reducers you specify. It returns the updated state with the cache
 * values set to null.
 *
 * @param reducersToInvalidate List of reducers to invalidate
 * @param currentState The current and already reduced state.
 * @param [config={}] Configuration options
 * @param [config.log=false] Whether or not to output log information. Useful for debugging.
 * @param [config.cacheKey=DEFAULT_KEY] The cache key to use instead of the DEFAULT_KEY
 */
export declare const buildUpdateState: (logResultFn: LogResult, logGeneralFn: LogGeneral) => (reducersToInvalidate: string[], currentState: State, config: CacheEnhancerConfig) => State;
export declare const updateState: (reducersToInvalidate: string[], currentState: State, config: CacheEnhancerConfig) => State;
export declare type LiftReducer = (reducer: Reducer, config: CacheEnhancerConfig) => (state: State, action: any) => State;
export declare const liftReducer: LiftReducer;
/**
 * This is the store enhancer that you will add when you configureStore.
 */
export declare const buildCacheEnhancer: (liftReducerFn: LiftReducer) => (config?: CacheEnhancerConfig) => (createStore: any) => (rootReducer: Reducer, initialState: State, enhancer: Function) => Store;
export declare const cacheEnhancer: (config?: CacheEnhancerConfig) => (createStore: any) => (rootReducer: Reducer, initialState: State, enhancer: Function) => Store;
export {};
