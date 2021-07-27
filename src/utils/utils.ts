// 防抖
export function debounce(func: Function, delay: number) {
  let time: any = null;
  return function () {
    clearTimeout(time);
    time = setTimeout(() => {
      func(...arguments);
    }, delay);
  };
}

// 节流
export function throttle(func: Function, delay: number) {
  let run = false;
  return function () {
    if (run) return;
    run = true;
    setTimeout(() => {
      func(...arguments);
      run = false;
    }, delay);
  };
}
