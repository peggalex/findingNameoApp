import UserObject from './UserObject';
import axios from 'axios';
import {Rate} from './Ratings'

import { Dimensions } from 'react-native';
import React from 'react';

export var isMobile = () => {
    let dim = Dimensions.get('window');
    return dim.height >= dim.width;
};

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
export type Ref<T> = React.MutableRefObject<T>;
export type Dispatch<T> = React.Dispatch<T>;

export function arrayBufferToHex(arrayBuffer: ArrayBuffer){
    let intArray = new Uint8Array(arrayBuffer),
        hashArray = Array.from(intArray),
        hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
}

export async function hash(toHash: string){
    // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
    let hashEnc = new TextEncoder().encode(toHash),                        				  
        hashBuffer = await crypto.subtle.digest('SHA-512', hashEnc),
        keyHex = arrayBufferToHex(hashBuffer);

    return keyHex;
}

export async function waitForAjaxCall(method: 'post' | 'get' | 'put', url: string): Promise<any> {
	url = url.replace(/[ \t\n]/g, ''); // get rid of empty spaces and newlines

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

			var response = await axiosFunc(`${process.env.PUBLIC_URL}/${url}`);
			resolve(response.data);
		} catch (error) {
			console.log('axios error:', error);
			reject(error);
		}
	});
}

export function messageStrToJSON(messageStr: string){
	let message = JSON.parse(messageStr);
	if (message.error != null){
		throw new Error(message.error);
	}
	return message;
}

export const avg = (x1: any, x2: any) => {
    let x = ((parseFloat(x1)+parseFloat(x2))/2).toFixed(1);
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
        
    let {ratings, isMore}: {ratings: Rate[], isMore: boolean} = await waitForAjaxCall('get', `
        /ratings/${UserObject.getUsername()}
        /password/${UserObject.getPassword()}
        /filter/${filter.replace(/ /g, '')}
        /subFilter/${subFilter.replace(/ /g, '')}
        /range/${range}
        /rangeStart/${rangeStart}
        /search/${searchTerm}
    `);
    return {ratings: ratings, isMore: isMore}

}