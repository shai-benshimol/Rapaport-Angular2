export interface OnHttpResult {
    httpProgress(request: string): void;
    httpSuccess(request: string, result: JSON): void;
    httpError(request: string, message: string): void;
}