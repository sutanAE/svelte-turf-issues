# Update: Problem Solved

changed the `moduleResolution` to `bundler`.

using ```npm i @turf/area@7.0.0-alpha.110```, and have ```turf``` imported as following:

```typescript
import * as turf from '@turf/turf'

const point = turf.helpers.point([-75.343, 39.984]);
const buffer = turf.buffer(point, 1000, {
	units: 'meters'
});
```

check `./src/routes/+page.server.ts`

---

# Replication

1. git clone this repo
2. npm install
3. check the ```./src/routes/+page.server.ts```
4. Notice that you can't import ```turf```.

# Turf type problem in Svelte

Issues: cannot import `import turf from @turf/turf` in Svelte Typescript app if ```tsconfig.json``` configuration ```moduleResolution``` is set to ```Bundler```.

Check out the following file:

```typescript
// src/routes/+page.server.ts

import turf from '@turf/turf' // you cannot import turf
// 'turf' is declared but its value is never read.ts(6133)

export function load(){
    return{}
}
```

There is a resolution that (I think) is not ideal.

First, change the `tsconfig.json` file. Change the `moduleResolution` value to `node`. However, this is not recommended by the SvelteKit team in [their documentation](https://kit.svelte.dev/docs/migrating-to-sveltekit-2#updated-dependency-requirements).

```typescript
// tsconfig.json
{
	"extends": "./.svelte-kit/tsconfig.json",
	"compilerOptions": {
		...
		"moduleResolution": "node" // instead of bundler
	}
}
```

Furthermore, [typescript documentation](https://www.typescriptlang.org/tsconfig#moduleResolution) recommends us to use ```bundler```.



# Error Message

```markdown
'turf' is declared but its value is never read.ts(6133)

Could not find a declaration file for module '@turf/turf'. '/projectPath/node_modules/@turf/turf/dist/es/index.js' implicitly has an 'any' type.
  There are types at '/projectPath/node_modules/@turf/turf/index.d.ts', but this result could not be resolved when respecting package.json "exports". The '@turf/turf' library may need to update its package.json or typings.ts(7016)
```


# Question

why can't we import `turf` in a SvelteKit project?

why do we need to change `tsconfig.json` so that the project recognises `turf`?