import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

export type TodoDocument = HydratedDocument<Todo>;

@Schema()
export class Todo {

  @Prop()
  name: string;
  @Prop()
  isActive: boolean;
  @Prop()
  createdAt: Date;
  @Prop()
  updatedAt: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
TodoSchema.plugin(mongoosePaginate);
