import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TodoDto } from './todo.dto';
import { Todo } from './todo.scheme';
import { TodoService } from './todo.service';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';

@Controller('todo')
@ApiTags('Todo')
export class TodoController {
  @Inject(TodoService)
  private readonly service: TodoService;

  @Get()
  @ApiOperation({ summary: 'obtain all todos' })
  @ApiResponse({ status: 200, description: 'get all todos', type: Todo })
  @ApiQuery({
    name: 'search',
    description: 'search data',
    required: false,
    type: String
  })
  @ApiQuery({
    name: 'page',
    description: 'pagination page',
    required: false
  })
  @ApiQuery({
    name: 'limit',
    description: 'pagination limit',
    required: false
  })
  public getTodos(
    @Query('search') search = '',
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ): Promise<Todo[]> {
    limit = limit > 100 ? 100 : limit;
    return this.service.getTodos(search, {
      page,
      limit,
      route: 'http://localhost:3000/todo',
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'obtain todo by id' })
  @ApiResponse({ status: 200, description: 'Than todo get id', type: Todo })
  public getTodo(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
    return this.service.getTodo(id);
  }

  @Post()
  @ApiOperation({ summary: 'create todo' })
  @ApiResponse({ status: 200, description: 'Than todo create', type: Todo })
  public createTodo(@Body() body: TodoDto): Promise<Todo> {
    return this.service.createTodo(body);
  }
  @Put(':id')
  @ApiOperation({ summary: 'Update todo by ID' })
  @ApiResponse({ status: 200, description: 'Todo updated', type: Todo })
  public updateTodo(@Param('id') id: string, @Body() body: TodoDto): Promise<Todo> {
    return this.service.updateTodo(Number(id), body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete todo by id' })
  @ApiResponse({ status: 200, description: 'Than todo delete by id', type: Todo })
  public deleteTodo(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
    return this.service.deleteTodo(id);
  }
}