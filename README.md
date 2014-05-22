# gulp-nop [![Build Status](https://travis-ci.org/hoho/gulp-nop.svg?branch=master)](https://travis-ci.org/hoho/gulp-nop)

«No operation». Useful when you want primitive conditional execution in a long 
pipeline.

Install:

```sh
npm install gulp-nop --save-dev
```


Example:

```js
var nop = require('gulp-nop');

gulp.task('some-task', function() {
    return gulp.src(['some files'])
        .pipe(some())
        .pipe(tasks())
        .pipe(along())
        .pipe(isBeautiful ? beautiful() : nop())
        .pipe(pipeline())
        .pipe(gulp.dest('./build'));
});
```
