import { httpGet } from './client';

export async function fetchTasks() {
  const data = await httpGet('/todos');
  return data.todos;
}