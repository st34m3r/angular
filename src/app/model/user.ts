/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Role } from './role';


export interface User { 
    email?: string;
    id?: number;
    password?: string;
    roles?: Array<Role>;
    tenantId?: string;
    username?: string;
}
