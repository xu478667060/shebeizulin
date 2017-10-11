export class CommonUtils {
   static  stopBubble(e) {
    window.event ? e.cancelBubble = true : e.stopPropagation()
  }
}
