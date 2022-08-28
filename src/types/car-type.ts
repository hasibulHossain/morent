import Category from "./category-type";

export default interface Car {
    id: string;
    name: string;
    price: number;
    offerPrice: number | null;
    description: string;
    photos: string[];
    mainPhoto: string;
    category: Category;
    review: string;
    specification: {
        carType: Category;
        capacity: string;
        steering: string;
        gasoline: string;  
    };
}