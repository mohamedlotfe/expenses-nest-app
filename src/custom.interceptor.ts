import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs';

export class CustomInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    console.log('This is a custom intercepting the request!');

    return next.handle().pipe(
      map((data) => {
        console.log('This is a custom intercepting the response!');
        const response = {
          ...data,
          createdAt: data.created_at,
        };
        delete response.created_at;
        delete response.updated_at;
        return response;
      }),
    );
  }
}
