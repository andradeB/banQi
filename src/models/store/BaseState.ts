export interface BaseState<T> {
  error: boolean;
  loading: boolean;
  data?: T;
}
