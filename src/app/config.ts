// export class Config {
//     apiUrl: string='';
//     apiKey: string='';
//     movieUrl: string='';
//     searchUrl: string='';
//     personUrl: string='';
//     params: string='';

//     imgPath: string='';
//     midImgPath: string='';
//     smallImgPath: string='';
//     bigBackPath: string='';
//     midBackPath: string='';
//     smallBackPath: string='';
// };

export interface Config {
    apiUrl: string;
    apiKey: string;
    movieUrl: string;
    searchUrl: string;
    personUrl: string;
    params: string;

    imgPath: string;
    midImgPath: string;
    smallImgPath: string;
    bigBackPath: string;
    midBackPath: string;
    smallBackPath: string;
};

export interface ConfigInterface {
    apiUrl: string;
    apiKey: string;
    movieUrl: string;
    searchUrl: string;
    personUrl: string;
    params: string;

    imgPath: string;
    midImgPath: string;
    smallImgPath: string;
    bigBackPath: string;
    midBackPath: string;
    smallBackPath: string;
}
export class ConfigService implements ConfigInterface {
    apiUrl = 'https://api.themoviedb.org/3';
    apiKey = '0994e7679a856150aadcecf7de489bce';
    movieUrl = 'https://api.themoviedb.org/3/movie';
    searchUrl = 'https://api.themoviedb.org/3/search';
    personUrl ='https://api.themoviedb.org/3/person';
    params = `&api_key=0994e7679a856150aadcecf7de489bce&language=ru-RU`;

    imgPath = 'https://image.tmdb.org/t/p';
    midImgPath = `https://image.tmdb.org/t/p/w500`;
    smallImgPath = `https://image.tmdb.org/t/p/w185`;
    bigBackPath = `https://image.tmdb.org/t/p/w1280`;
    midBackPath = `https://image.tmdb.org/t/p/w780`;
    smallBackPath = `https://image.tmdb.org/t/p/w300`;

}


