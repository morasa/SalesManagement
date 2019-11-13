import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class httpInterceptor implements HttpInterceptor {
    constructor(){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token_id = localStorage.getItem("token-id");
        if (token_id) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization", token_id["token_id"])
            });
            return next.handle(cloned);
        }
        return next.handle(req);
    }
}