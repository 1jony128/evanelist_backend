import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException
} from "@nestjs/common";
import {Observable} from "rxjs";
import {JwtService} from "@nestjs/jwt";
import {Reflector} from "@nestjs/core";
import {ROLES_KEY} from "./roles-auth.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private jwtService: JwtService,
                private reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        try {
            const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
                context.getHandler(),
                context.getClass(),
            ])
            console.log(requiredRoles)
            console.log('dassssssssssssssssssssssssssssssssssssssssssssssssssssssss')
            if (!requiredRoles) {
                return true;
            }
            const req = context.switchToHttp().getRequest();

            console.log('req.headers: ', req.headers)
            console.log('\x1b[33m%s\x1b[0m', req.headers)
            
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0]
            const token = authHeader.split(' ')[1]
            

            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException({message: 'Пользователь не авторизован'})
            }

            const user = this.jwtService.verify(token);
            req.user = user;
            return user.roles.some(role => requiredRoles.includes(role.value));
        } catch (e) {
            console.log(e)
            throw new HttpException( 'Нет доступа', HttpStatus.FORBIDDEN)
        }
    }

}
