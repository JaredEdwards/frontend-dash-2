const gulp = require('gulp');
const del = require('del');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const csv = require('fast-csv');
const fs = require('fs');

 
gulp.task('processIndex', function() {
  // place code for your default task here
  gulp.src('views/layout.pug')
    .pipe(pug())
    .pipe(rename(`index.html`))
    // .pipe(minify())
    
    .pipe(gulp.dest('dist/'));
});

gulp.task('processStates', function(){
  var input = fs.createReadStream('./stock_photo_coolness.csv');
  var csvStream = csv({objectMode: true})
              .on('data', function(data){
                gulp.src('views/layout.pug')
                          .pipe(pug({data: {data: data}}))
                          .pipe(rename(`${data[0]}.html`))
                          .pipe(gulp.dest(`dist/`));
              })
              .on('end', function(){
                console.log('done');
              })  
            input.pipe(csvStream);
})

gulp.task('clean', function(){
  del('dist')
})

gulp.task('default', ['processIndex', 'processStates']);
