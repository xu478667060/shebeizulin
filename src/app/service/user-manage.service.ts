import {Injectable} from '@angular/core';
import {Api} from "../app.config";
import {Observable} from "rxjs/Observable";
import {Result} from "../model/Result";
import {CommonUtils} from "../utils/common.utils";
import {HttpClient} from "@angular/common/http";


const URL = Api
@Injectable()
export class UserManageService {

  constructor(private http:HttpClient) {
  }

  // 获取 商家管理列表
  getMerchantList(pageNo:number,obj?:any):Observable<Result>{

    let url = `${URL}/seller/page?pageSize=11&pageNo=${pageNo}`
    if(obj!==null){
      url += CommonUtils.concatParam(obj)
    }
    return this.http.get(url)
  }

  // 获取 获取用户管理列表
  getUserList(pageNo:number,obj?:any):Observable<Result>{

    let url = `${URL}/user/page?pageSize=7&pageNo=${pageNo}`
    if(obj!==null){
      url += CommonUtils.concatParam(obj)
    }
    return this.http.get(url)
  }

  // 用户状态更改
  changeUserStatus(id,status):Observable<Result>{
    let url = `${URL}/user/freeze?id=${id}&status=${status}`
    return this.http.get(url)
  }


}
