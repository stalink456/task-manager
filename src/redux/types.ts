export type TaskItems = {
  text: string;
  done: boolean;
  id: number;
};

export interface ItemsState {
  items: TaskItems[];
  loading: boolean;
  text: string;
}
