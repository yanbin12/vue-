export function print(content, code1,code2,code3,w = null, h = null) {
  // 火狐专用打印
  // Fixes dual-screen position                         Most browsers      Firefox
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

  const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  w = +w === 0 ? width : w;
  h = +h === 0 ? height : h;
  const left = ((width / 2) - (w / 2)) + dualScreenLeft;
  const top = ((height / 2) - (h / 2)) + dualScreenTop;
  var myWindow = window.open("", "打印", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=no, width=" + w + ", height=" + h + ", top=" + top + ", left=" + left);
  var style = '<style type="text/css">@page {size: auto;margin: 0mm;}</style>';
 
  
  myWindow.document.write(content + style);
  myWindow.focus();
  myWindow.document.close();     //关闭document的输出流, 显示选定的数据
  myWindow.print();   //打印当前窗口
  return myWindow;
}