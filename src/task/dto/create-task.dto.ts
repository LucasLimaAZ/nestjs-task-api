export class CreateTaskDto {
  id: number;
  userId: number;
  title: string;
  description: string;
  completed: boolean;
}
