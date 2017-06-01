var gulp            = require("gulp"),
    watch           = require("gulp-watch"),
    postcss         = require("gulp-postcss"),
    autoprefixer    = require("autoprefixer"),
    cssvars         = require("postcss-simple-vars"),
    nested          = require("postcss-nested"),
    cssImport       = require("postcss-import");


gulp.task("default", function(){
    console.log("Gulp default task is running...");
});

gulp.task("html", function(){
    console.log("There are some changes happend to your HTML file...");
});

gulp.task("styles", function(){
    return gulp.src("./app/assets/styles/styles.css")
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest("./app/temp/styles"));
});

gulp.task("watch", function(){

    //Watch html changes from index.html file
    watch("./app/index.html", function(){
        gulp.start("html");
    });

    //Watch css changes from any css files
    watch("./app/assets/styles/**/*.css", function(){
        gulp.start("styles");
    });
});
