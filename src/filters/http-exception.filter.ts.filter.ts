import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { request } from 'http';
import path from 'path';

@Catch()
export class HttpExceptionFilterTsFilter<T> implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    
    const status = exception.status || 500;
    const message = exception.message || 'Erreur';
    
    response.status(status).json({
      error: message,
      status: status,
      timestamp: new Date().toISOString(),
    });
  
  }
}
