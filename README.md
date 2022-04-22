## Inversify type enforcement

This repo demonstrates a suspected limitation of the design of the Inversify.js library.

To test, run:

```
$ yarn
$ yarn bake
```

Note that the TypeScript compiles, but gives a runtime error:

```
➜  inversify-test git:(master) yarn bake                                
yarn run v1.22.17
$ ts-node --project tsconfig.json index.ts
/Users/davidgolightly/dev/inversify-test/consumer.ts:12
    console.log(`Got a delicious ${this.model.bake().flavor} cake`)
                                              ^
TypeError: this.model.bake is not a function
```

This is because the `Consumer` model has an intentional bug, where its assumptions about the type of
the 'WorkingBaker' injection is not consistent with what's declared in the container.

I would like to understand if there's a way to have a more strict enforcement of contracts at the 
type level so that runtime errors like this can be avoided.