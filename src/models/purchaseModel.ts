export interface RobeModel {
    id: number;
    price: number;
    label: string;
    description: string;
    size: string;
    image: string;
}

export interface PurchaseModel {
    id: number;
    robe: RobeModel;
    quantity: number;
    totalPrice: number;
}