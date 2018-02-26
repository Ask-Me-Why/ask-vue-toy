/*
* @Author: askMeWhy
* @Date:   2018-01-15 15:26:22
* @Last Modified by:   bigWave
* @Last Modified time: 2018-01-15 15:31:07
*/
import {
	ajax,
	askDialogToast,
	merge
} from '@/utils';

import * as config from '@/config.js';

const baseURL = config.BASE_URL;

export class Toy{
	all(){
		return this._ajax('get',{});
	}
	_ajax(method,options){
		options = options||{};
		return ajax({
			method: method,
			url: baseURL+'./static/toy.json',
			data: options
		})
	}
}