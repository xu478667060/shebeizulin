export class CommonUtils {

   static  stopBubble(e) {
    window.event ? e.cancelBubble = true : e.stopPropagation()
  }

  /*
  * 连接路由参数
  * */
  static concatParam(obj:any):string{
     let result = ""
     for (let key in obj){
        result+= "&"+key+"="+obj[key]
     }
     return result
  }

}
