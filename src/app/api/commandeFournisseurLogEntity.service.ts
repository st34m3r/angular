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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { CollectionModelCommandeFournisseurLog } from '../model/collectionModelCommandeFournisseurLog';
import { CommandeFournisseurLog } from '../model/commandeFournisseurLog';
import { EntityModelCanUser } from '../model/entityModelCanUser';
import { EntityModelCommande } from '../model/entityModelCommande';
import { EntityModelCommandeFournisseurLog } from '../model/entityModelCommandeFournisseurLog';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CommandeFournisseurLogEntityService {

    protected basePath = 'https://localhost:8005';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * commande_fournisseur_logCommande
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public commandeFournisseurLogCommandeUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public commandeFournisseurLogCommandeUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public commandeFournisseurLogCommandeUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public commandeFournisseurLogCommandeUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling commandeFournisseurLogCommandeUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/uri-list',
            'application/x-spring-data-compact+json'
        ];

        return this.httpClient.delete<any>(`${this.basePath}/commande_fournisseur_logs/${encodeURIComponent(String(id))}/commande`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * commande_fournisseur_logCommande
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public commandeFournisseurLogCommandeUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelCommande>;
    public commandeFournisseurLogCommandeUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelCommande>>;
    public commandeFournisseurLogCommandeUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelCommande>>;
    public commandeFournisseurLogCommandeUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling commandeFournisseurLogCommandeUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/hal+json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<EntityModelCommande>(`${this.basePath}/commande_fournisseur_logs/${encodeURIComponent(String(id))}/commande`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * commande_fournisseur_logCommande
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public commandeFournisseurLogCommandeUsingPATCH(body: string, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelCommande>;
    public commandeFournisseurLogCommandeUsingPATCH(body: string, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelCommande>>;
    public commandeFournisseurLogCommandeUsingPATCH(body: string, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelCommande>>;
    public commandeFournisseurLogCommandeUsingPATCH(body: string, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling commandeFournisseurLogCommandeUsingPATCH.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling commandeFournisseurLogCommandeUsingPATCH.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/uri-list',
            'application/x-spring-data-compact+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<EntityModelCommande>(`${this.basePath}/commande_fournisseur_logs/${encodeURIComponent(String(id))}/commande`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * commande_fournisseur_logCommande
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public commandeFournisseurLogCommandeUsingPOST(body: string, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelCommande>;
    public commandeFournisseurLogCommandeUsingPOST(body: string, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelCommande>>;
    public commandeFournisseurLogCommandeUsingPOST(body: string, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelCommande>>;
    public commandeFournisseurLogCommandeUsingPOST(body: string, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling commandeFournisseurLogCommandeUsingPOST.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling commandeFournisseurLogCommandeUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/uri-list',
            'application/x-spring-data-compact+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<EntityModelCommande>(`${this.basePath}/commande_fournisseur_logs/${encodeURIComponent(String(id))}/commande`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * commande_fournisseur_logCommande
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public commandeFournisseurLogCommandeUsingPUT(body: string, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelCommande>;
    public commandeFournisseurLogCommandeUsingPUT(body: string, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelCommande>>;
    public commandeFournisseurLogCommandeUsingPUT(body: string, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelCommande>>;
    public commandeFournisseurLogCommandeUsingPUT(body: string, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling commandeFournisseurLogCommandeUsingPUT.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling commandeFournisseurLogCommandeUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/uri-list',
            'application/x-spring-data-compact+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<EntityModelCommande>(`${this.basePath}/commande_fournisseur_logs/${encodeURIComponent(String(id))}/commande`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * commande_fournisseur_logUser
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public commandeFournisseurLogUserUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public commandeFournisseurLogUserUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public commandeFournisseurLogUserUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public commandeFournisseurLogUserUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling commandeFournisseurLogUserUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/uri-list',
            'application/x-spring-data-compact+json'
        ];

        return this.httpClient.delete<any>(`${this.basePath}/commande_fournisseur_logs/${encodeURIComponent(String(id))}/user`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * commande_fournisseur_logUser
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public commandeFournisseurLogUserUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelCanUser>;
    public commandeFournisseurLogUserUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelCanUser>>;
    public commandeFournisseurLogUserUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelCanUser>>;
    public commandeFournisseurLogUserUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling commandeFournisseurLogUserUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/hal+json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<EntityModelCanUser>(`${this.basePath}/commande_fournisseur_logs/${encodeURIComponent(String(id))}/user`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * commande_fournisseur_logUser
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public commandeFournisseurLogUserUsingPATCH(body: string, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelCanUser>;
    public commandeFournisseurLogUserUsingPATCH(body: string, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelCanUser>>;
    public commandeFournisseurLogUserUsingPATCH(body: string, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelCanUser>>;
    public commandeFournisseurLogUserUsingPATCH(body: string, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling commandeFournisseurLogUserUsingPATCH.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling commandeFournisseurLogUserUsingPATCH.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/uri-list',
            'application/x-spring-data-compact+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<EntityModelCanUser>(`${this.basePath}/commande_fournisseur_logs/${encodeURIComponent(String(id))}/user`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * commande_fournisseur_logUser
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public commandeFournisseurLogUserUsingPOST(body: string, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelCanUser>;
    public commandeFournisseurLogUserUsingPOST(body: string, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelCanUser>>;
    public commandeFournisseurLogUserUsingPOST(body: string, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelCanUser>>;
    public commandeFournisseurLogUserUsingPOST(body: string, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling commandeFournisseurLogUserUsingPOST.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling commandeFournisseurLogUserUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/uri-list',
            'application/x-spring-data-compact+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<EntityModelCanUser>(`${this.basePath}/commande_fournisseur_logs/${encodeURIComponent(String(id))}/user`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * commande_fournisseur_logUser
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public commandeFournisseurLogUserUsingPUT(body: string, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelCanUser>;
    public commandeFournisseurLogUserUsingPUT(body: string, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelCanUser>>;
    public commandeFournisseurLogUserUsingPUT(body: string, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelCanUser>>;
    public commandeFournisseurLogUserUsingPUT(body: string, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling commandeFournisseurLogUserUsingPUT.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling commandeFournisseurLogUserUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/uri-list',
            'application/x-spring-data-compact+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<EntityModelCanUser>(`${this.basePath}/commande_fournisseur_logs/${encodeURIComponent(String(id))}/user`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteCommande_fournisseur_log
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteCommandeFournisseurLogUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteCommandeFournisseurLogUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteCommandeFournisseurLogUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteCommandeFournisseurLogUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteCommandeFournisseurLogUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/commande_fournisseur_logs/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findAllCommande_fournisseur_log
     * 
     * @param page page
     * @param size size
     * @param sort sort
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findAllCommandeFournisseurLogUsingGET(page?: number, size?: number, sort?: string, observe?: 'body', reportProgress?: boolean): Observable<CollectionModelCommandeFournisseurLog>;
    public findAllCommandeFournisseurLogUsingGET(page?: number, size?: number, sort?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CollectionModelCommandeFournisseurLog>>;
    public findAllCommandeFournisseurLogUsingGET(page?: number, size?: number, sort?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CollectionModelCommandeFournisseurLog>>;
    public findAllCommandeFournisseurLogUsingGET(page?: number, size?: number, sort?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (sort !== undefined && sort !== null) {
            queryParameters = queryParameters.set('sort', <any>sort);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/hal+json',
            'application/json',
            'application/x-spring-data-compact+json',
            'text/uri-list'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<CollectionModelCommandeFournisseurLog>(`${this.basePath}/commande_fournisseur_logs`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findByIdCommande_fournisseur_log
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByIdCommandeFournisseurLogUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelCommandeFournisseurLog>;
    public findByIdCommandeFournisseurLogUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelCommandeFournisseurLog>>;
    public findByIdCommandeFournisseurLogUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelCommandeFournisseurLog>>;
    public findByIdCommandeFournisseurLogUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdCommandeFournisseurLogUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<EntityModelCommandeFournisseurLog>(`${this.basePath}/commande_fournisseur_logs/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * saveCommande_fournisseur_log
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveCommandeFournisseurLogUsingPATCH(body: CommandeFournisseurLog, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelCommandeFournisseurLog>;
    public saveCommandeFournisseurLogUsingPATCH(body: CommandeFournisseurLog, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelCommandeFournisseurLog>>;
    public saveCommandeFournisseurLogUsingPATCH(body: CommandeFournisseurLog, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelCommandeFournisseurLog>>;
    public saveCommandeFournisseurLogUsingPATCH(body: CommandeFournisseurLog, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling saveCommandeFournisseurLogUsingPATCH.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling saveCommandeFournisseurLogUsingPATCH.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<EntityModelCommandeFournisseurLog>(`${this.basePath}/commande_fournisseur_logs/${encodeURIComponent(String(id))}`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * saveCommande_fournisseur_log
     * 
     * @param body body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveCommandeFournisseurLogUsingPOST(body: CommandeFournisseurLog, observe?: 'body', reportProgress?: boolean): Observable<EntityModelCommandeFournisseurLog>;
    public saveCommandeFournisseurLogUsingPOST(body: CommandeFournisseurLog, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelCommandeFournisseurLog>>;
    public saveCommandeFournisseurLogUsingPOST(body: CommandeFournisseurLog, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelCommandeFournisseurLog>>;
    public saveCommandeFournisseurLogUsingPOST(body: CommandeFournisseurLog, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling saveCommandeFournisseurLogUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<EntityModelCommandeFournisseurLog>(`${this.basePath}/commande_fournisseur_logs`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * saveCommande_fournisseur_log
     * 
     * @param body body
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveCommandeFournisseurLogUsingPUT(body: CommandeFournisseurLog, id: number, observe?: 'body', reportProgress?: boolean): Observable<EntityModelCommandeFournisseurLog>;
    public saveCommandeFournisseurLogUsingPUT(body: CommandeFournisseurLog, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EntityModelCommandeFournisseurLog>>;
    public saveCommandeFournisseurLogUsingPUT(body: CommandeFournisseurLog, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EntityModelCommandeFournisseurLog>>;
    public saveCommandeFournisseurLogUsingPUT(body: CommandeFournisseurLog, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling saveCommandeFournisseurLogUsingPUT.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling saveCommandeFournisseurLogUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<EntityModelCommandeFournisseurLog>(`${this.basePath}/commande_fournisseur_logs/${encodeURIComponent(String(id))}`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
