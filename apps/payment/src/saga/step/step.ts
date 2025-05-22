export abstract class Step<T, R> {
  abstract name: string;
  abstract invoke(payload: T): Promise<R>;
  abstract rollback(payload: T): Promise<R>;
}
