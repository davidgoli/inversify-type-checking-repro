export interface Cake {
  flavor: 'chocolate' | 'carrot' | 'angel food'
}

export interface WorkingBaker {
  bake(): Cake
}

export interface HungryCustomer {
  orderCake(): void
}