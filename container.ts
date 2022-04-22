import { Container } from "inversify";
import { Consumer } from "./consumer";
import { Baker } from "./model";

export const container = new Container()

container.bind<Baker>('WorkingBaker').to(Baker)
container.bind<Consumer>('Consumer').to(Consumer)
