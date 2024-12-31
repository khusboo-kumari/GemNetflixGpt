// export const photoURL = "https://avatars.githubusercontent.com/u/116819942?v=4";
export const photoURL = "https://occ-0-3270-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" ;

export const API_OPTIONS = {
    method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY , 
  },
}; 

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w400" ; 

export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg'   ;

export const SUPPORTED_LANGUAGES = [
  {identifier:"en", name:"English"} ,
  {identifier:"hindi", name:"Hindi"} ,
  {identifier:"spanish", name:"Spanish"} , 

] ; 

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY ; 
