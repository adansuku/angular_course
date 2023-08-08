About the Course Code / Code Snapshots

**Do you get some strange error? Are you stuck?** 

**Have a look at the source code of this course** - by comparing it to your code you should be able to quickly find out where your code deviates and what causes the issue!

You can find the source code of each section attached to the **last lecture of that section**!

Each ZIP file holds code files which you can use to compare your code to it.

**One important note**: All the course code will only work if you are **NOT using "strict mode"** see the "First App" lecture in this module. Strict mode forces you to write more verbose code in some places (especially when it comes to class properties). If you enabled it by accident, you can also disable it by setting `strict: false` in your `tsconfig.json` file.

\---

Due to dependency version mismatches, running the attachments might fail though - in that case, you can try the following:

1) Create a new project via `ng new my-project --strict false` (the `--strict false` part is important!)

2) Copy the content of the ZIP attachment `src/app` folder into the newly created project `src/app` folder.

3) Run your project (`my-project`) via `ng serve`

If you try to directly run my ZIP attachments, you must run `npm install` first.

If you're getting errors when running `npm install`, you can often solve them by running `npm install --legacy-peer-deps` instead of `npm install`.

\---

**Got any problems with the code** (e.g. error messages when running it or you don't know how to use it)? Check this thread created by Jost: [https://www.udemy.com/the-complete-guide-to-angular-2/learn/lecture/6709112#questions/8079942](https://www.udemy.com/the-complete-guide-to-angular-2/learn/lecture/6709112#questions/8079942)

Recursos de esta clase

*   first-app.zip
    
*   project-template.zip