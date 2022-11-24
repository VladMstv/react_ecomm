import Product from '../../../shared/models/product.model';

export interface CartItem {
	product: Product
	quantity: number
}
