---
title: Updating IsaacScript
---

IsaacScript is occasionally updated with new TypeScript definitions, new helper functions, new linting rules, and so on. However, these new updates are not automatically pushed to your mod.

In a TypeScript project, you can see your project dependencies and their current versions by looking at the `package.json` file. More information can be found in the [package.json documentation](directory-structure.md#packagejson). You can upgrade the dependencies in your IsaacScript mod in the same way that you would upgrade the dependencies for any other TypeScript program. <!-- cspell:ignore packagejson -->

A helper script called `update.sh` is included in IsaacScript projects to help you update your dependencies. You can run it in a Git Bash shell like this:

```sh
./update.sh
```

The helper script will automatically update the versions in your `package.json` file and tell the package manager to install the new versions, if necessary.

If you don't want to use the helper script, then you can run the [`npm-check-updates`](https://www.npmjs.com/package/npm-check-updates) tool yourself:

```sh
npx npm-check-updates --upgrade --packageFile "package.json" --filterVersion "^*"
```

Or, if you don't want to use the `npm-check-updates` tool, you can just manually change the versions in your `package.json` file yourself. For more information, check out [this blog](https://www.netwoven.com/2017/03/21/how-to-update-node-js-modules-to-latest-versions/), which goes over this process in more detail.

The latest version of the IsaacScript tool can always be found [on the npm page](https://www.npmjs.com/package/isaacscript).
