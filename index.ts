import "reflect-metadata"
import { container } from "./container";
import { HungryCustomer } from "./types";

const consumer = container.get<HungryCustomer>('Consumer')
consumer.orderCake()