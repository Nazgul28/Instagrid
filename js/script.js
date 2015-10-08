var gulp=require("gulp"),uglify=require("gulp-uglify");gulp.task("default",function(){gulp.src("JS/*.js").pipe(uglify()).pipe(gulp.dest("js"))});



console.log("hello");