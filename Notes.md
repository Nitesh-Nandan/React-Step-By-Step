# Phase 1

1. Use Production Script https://reactjs.org/docs/optimizing-performance.html#use-the-production-build
2. Oh Ho!! It doesn't understand the JSX what next ??? wait babel understand.
3. So download the babel and compile using babel, for that we need babel-cli
4. Let install it in globally, and run
``` .bash
    babel src/app.js --out-file=public/scripts/app.js
```
5. It also didn't work!! Very smart || it requires rules bro!!

6. So here you go  it worked!! 

7. Rules(presets) can be passed using command line argument or we can create ".babelrc" and pass

# Phase 2
## WebPacks

Read:: https://stackoverflow.com/questions/47721169/babel-vs-babel-core-vs-babel-loader-vs-babel-preset-2015-vs-babel-preset-react-v?rq=1

1. What was the problem till now::
- you have to repeat the command for each file.
- After converting you have to compress the file efficiently
- Now WebPack comes in picture.

Need: Babel-loader, babel-core (babel-cli), babel presets

2. How to procceds??
- You can downlaod webpacks as dev dependency
- Now we have to create webpack.config.js



