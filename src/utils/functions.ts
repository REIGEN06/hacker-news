export const UnixToLocaleTime = (initTime = 0)=>{
    return new Date(initTime *1000).toLocaleTimeString("ru-RU");
  }