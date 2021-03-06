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
import { BankClass } from './bankClass';
import { CategorieFournisseur } from './categorieFournisseur';
import { CategorieMember } from './categorieMember';
import { CategorieProduct } from './categorieProduct';
import { CategorieSociete } from './categorieSociete';


export interface Categorie { 
    bankClasses?: Array<BankClass>;
    categorieFournisseurs?: Array<CategorieFournisseur>;
    categorieMembers?: Array<CategorieMember>;
    categorieProducts?: Array<CategorieProduct>;
    categorieSocietes?: Array<CategorieSociete>;
    description?: string;
    entity?: number;
    label?: string;
    rowid?: number;
    type?: number;
    visible?: number;
}
