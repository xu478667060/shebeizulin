import {Injectable} from '@angular/core';
import {Api} from "../app.config";
import {HttpClient} from "@angular/common/http";
import {CommonUtils} from "../utils/common.utils";
import {Observable} from "rxjs/Observable";
import {Result} from "../model/Result";


const URL = Api
@Injectable()
export class DeviceManageService {

  constructor(private http:HttpClient) {
  }

  // 获取gps列表
  getGpsList(pageNo:number,obj?:any):Observable<Result>{
    let url = `${URL}/gps/page?pageSize=11&pageNo=${pageNo}`
    if(obj!==null){
      url += CommonUtils.concatParam(obj)
    }
    return this.http.get(url)
  }

  // 获取版本列表
  getVersionList(pageNo:number,obj?:any):Observable<Result>{
    let url = `${URL}/version/page?pageSize=11&pageNo=${pageNo}`
    if(obj!==null){
      url += CommonUtils.concatParam(obj)
    }
    return this.http.get(url)
  }

  // 获取终端列表
  getTerminalList(pageNo:number,obj?:any):Observable<Result>{
    let url = `${URL}/terminal/page?pageSize=11&pageNo=${pageNo}`
    if(obj!==null){
      url += CommonUtils.concatParam(obj)
    }
    return this.http.get(url)
  }

}
