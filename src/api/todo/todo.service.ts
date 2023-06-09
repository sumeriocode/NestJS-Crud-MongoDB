import { Injectable } from '@nestjs/common';
import { Todo } from './todo.scheme';
import { TodoDto } from './todo.dto';

import { ObjectId } from 'mongodb';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel, Model } from 'mongoose';


@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
        @InjectModel(Todo.name) private readonly paginateTodoModel: PaginateModel<Todo>,) { }

    public async getTodo(id: any): Promise<Todo> {
        return await this.todoModel.findOne({ where: { _id: new ObjectId(id) } });
    }

    public async getTodos(
        search: string,
        options: any,
    ): Promise<any> {

        const query = {
            name: { $regex: new RegExp(search, 'i') },
        };

        return this.paginateTodoModel.paginate(query, options);
    }

    public async createTodo(body: TodoDto): Promise<Todo> {
        const todo: Todo = new Todo();
        todo.name = body.name;
        return this.todoModel.create(todo);
    }

    public async updateTodo(
        id: number,
        body: TodoDto,
    ): Promise<Todo> {
        const todo = await this.todoModel.findOne({ where: { _id: new ObjectId(id) } });
        if (!todo) {
            throw new Error(`Todo with ID ${id} not found.`);
        }
        todo.name = body.name;
        // Actualizar otros campos según sea necesario
        return this.todoModel.create(todo);
    }

    public async deleteTodo(
        id: number,
    ): Promise<Todo> {
        const todo = await this.todoModel.findOne({ where: { _id: new ObjectId(id) } });
        if (!todo) {
            throw new Error(`Todo with ID ${id} not found.`);
        }
        return this.todoModel.findByIdAndRemove({ _id: id });
    }
}