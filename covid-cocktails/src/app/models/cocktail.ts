export interface Cocktail {
    id: string;
    name: string;
    category: string;
    alcoholic: string;
    instructions?: string;
    measure1?: any;
    ingredient1?: string;
    measure2?: any;
    ingredient2?: string;
    measure3?: any;
    ingredient3?: string;
    measure4?: any;
    ingredient4?: string;
    measure5?: any;
    ingredient5?: string;
    measure6?: any;
    ingredient6?: string;
    measure7?: any;
    ingredient7?: string;
    measure8?: any;
    ingredient8?: string;
    measure9?: string;
    ingredient9?: string
    measure10?: string;
    ingredient10?: string
    measure11?: string;
    ingredient11?: string;
    measure12?: string;
    ingredient12?: string
    measure13?: string;
    ingredient13?: string;
    measure14?: string;
    ingredient14?: string;
    measure15?: string;
    ingredient15?: string
    glass?: string;
    image: string

}

export interface CocktailGroup {
  groupId: number;
  Cocktails: Cocktail[];
}