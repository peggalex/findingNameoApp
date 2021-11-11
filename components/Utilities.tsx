import UserObject from './UserObject';
import axios from 'axios';
import {Rate} from './Ratings'
import { JSHash, CONSTANTS } from "react-native-hash"; 

import { Dimensions } from 'react-native';
import React from 'react';

const isDev = false;

export const serverUrl = (isDev) ? "localhost:3000" : "https://alexpegg.com/findingNameo";

export const isAlphaNumeric = (str: string): boolean => RegExp(/^[\da-z]*$/i).test(str);
export const isMaxLength = (str: string, len: number): boolean => str.length <= len;
export const isNotEmpty = (str: string): boolean => str !== "";

export var isMobile = (): boolean => {
    let dim = Dimensions.get('window');
    return dim.height >= dim.width;
};

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
export type Ref<T> = React.MutableRefObject<T>;
export type Dispatch<T> = React.Dispatch<T>;

export const hash = async (toHash: string): Promise<string> => await JSHash(
    toHash, CONSTANTS.HashAlgorithms.sha512
);
/*
export async function waitForAjaxCall(method: 'post' | 'get' | 'put', url: string): Promise<any> {
	url = url.replace(/[ \t\n]/g, ''); // get rid of empty spaces and newlines
    var fullUrl = `${serverUrl}${url}`;
	return new Promise(async (resolve, reject) =>{
		try {
            let axiosFunc: (url: string) => any;
            switch(method){
                case 'post':
                    axiosFunc = axios.post;
                    break;
                case 'get':
                    axiosFunc = axios.get;
                    break;
                case 'put':
                    axiosFunc = axios.put;
                    break;
            }

            //var response = await axiosFunc(fullUrl);
			//resolve(response.data);
            let response = await fetch(fullUrl, {
                method: method.toUpperCase(),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) reject(`${response.status} | ${response.statusText} | url: ${fullUrl}`);
            resolve(response.json);
		} catch (error) {
			console.log('fetch error:', error, ` | url: ${fullUrl}`);
			reject(error);
		}
	});
}
*/

export enum RestfulType {
    POST,
    GET,
    PUT
}

export function CallAPI(
    url: string, 
    method: RestfulType, 
    body: any = null,
    headers: any = {}
): Promise<Response> {
	url = url.replace(/[ \t\n]/g, ''); // get rid of empty spaces and newlines
    var fullUrl = `${serverUrl}/${url}`;
	return fetch(fullUrl, {
        method: RestfulType[method],
        body: body,
        headers: headers
	});
}

export const CallAPIToJson = async (
    url: string,
    method: RestfulType,
    body?: Object
): Promise<any> => new Promise((resolve, reject) => 
    CallAPI(
        url, 
        method, 
        JSON.stringify(body),
        {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    ).then(async (response) => {
        if (!response.ok){
            reject(await response.json());
        } else {
            resolve(await response.json());
        }
    }).catch((reason) => {alert(reason)})
);

export function messageStrToJSON(messageStr: string): object{
	let message = JSON.parse(messageStr);
	if (message.error != null){
		throw new Error(message.error);
	}
	return message;
}

export const avg = (x1: any, x2: any): string => {
    let x = ((parseFloat(x1) + parseFloat(x2))/2).toFixed(1);
    return isNaN(x as any) ? "?" : x;
};


export interface PageState {
    pageName: string;
    element: JSX.Element|null;
}

export interface PageAction{
    type: string;
    pageName: string;
    element?: JSX.Element
}

export const hasAttributes = (obj: Object, attrs: string[]): boolean => {
    return attrs.every((a) => (obj as {[key: string]: any})[a] != undefined);
}


export const getRatingsGetIsMore = async (filter: string, subFilter: string, range: number, rangeStart: number, searchTerm: string): Promise<{ratings: Rate[], isMore: boolean}> => {
        
    let {ratings, isMore}: {ratings: Rate[], isMore: boolean} = await CallAPIToJson(`
        /ratings/${UserObject.getUsername()}
        /password/${UserObject.getPassword()}
        /filter/${filter.replace(/ /g, '')}
        /subFilter/${subFilter.replace(/ /g, '')}
        /range/${range}
        /rangeStart/${rangeStart}
        /search/${searchTerm}
    `, RestfulType.GET);
    console.table(ratings);
    console.log("isMore:", isMore);
    return {ratings: ratings, isMore: isMore}

}