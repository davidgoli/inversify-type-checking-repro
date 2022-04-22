import { inject, injectable } from "inversify";
import { WorkingBaker } from "./types";

@injectable()
export class Consumer {
  constructor(
    @inject('WorkingBaker')
    private model: WorkingBaker
  ) {}

  orderCake() {
    console.log(`Got a delicious ${this.model.bake().flavor} cake`)
  }
}