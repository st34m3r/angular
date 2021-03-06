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
import { EmbeddedCollectionFactureFournDet } from './embeddedCollectionFactureFournDet';
import { Link } from './link';


/**
 * Resources of Facture_fourn_det
 */
export interface CollectionModelFactureFournDet { 
    embedded: EmbeddedCollectionFactureFournDet;
    /**
     * Link collection
     */
    links: { [key: string]: Link; };
}
