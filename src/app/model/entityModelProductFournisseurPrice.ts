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
import { CanUser } from './canUser';
import { Links } from './links';


export interface EntityModelProductFournisseurPrice { 
    datec?: Date;
    links?: Links;
    price?: number;
    quantity?: number;
    rowid?: number;
    tms?: Date;
    unitprice?: number;
    user?: CanUser;
}
