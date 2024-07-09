export class Order {

    constructor (
        public totalQuantity: number,
                 public totalPrice: number,
                 public id?: string,
                 public orderTrackingNumber?: string
                ) { }

}
