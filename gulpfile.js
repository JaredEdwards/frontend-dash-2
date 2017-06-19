const gulp = require('gulp');
const del = require('del');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const csv = require('fast-csv');
const fs = require('fs');

/*

gulp.task('default', function(){
  var stream = fs.createReadStream("stock_photo_coolness.csv");
  
  var csvStream = csv({headers: true, objectMode: true})
  .on("data", function(data){
    console.log(data);
  })
  .on("end", function(){
    console.log("done");
  });
  
  stream.pipe(csvStream);
})
*/

// icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);


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
  var csvStream = csv({headers: true})
              .on('data', function(data){
                console.log(data)
                gulp.src('views/layout.pug')
                          .pipe(pug( {
                            data: {
                              demographic: data.Demographic, 
                              veryCool: data['Very cool'],
                              cool: data['Cool'],
                              notSoCool: data['Not so cool'],
                              dontKnow: data['Dont Know / No Opinion']
                            }
                          }
                        ))
                          .pipe(rename(`${data.Demographic}.html`))
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
