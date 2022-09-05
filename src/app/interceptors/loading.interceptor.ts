import { LoadingService } from './../services/loading.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private activateRequests = 0;

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.activateRequests === 0) {
      this.loadingService.show();
    }

    this.activateRequests++;

    return next.handle(request).pipe(
      finalize(() => {
        this.activateRequests--

        if (this.activateRequests === 0) {
          this.loadingService.hide()
        }
      })
    );
  }
}
