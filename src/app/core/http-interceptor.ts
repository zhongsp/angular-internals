import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // console.log(req)
    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            console.log(event);
          }
        },
        err => {
          console.log(err);
        }
      )
    );
  }
}
