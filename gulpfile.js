const gulp = require('gulp')
const pump = require('pump')
const rename = require('gulp-rename')
const babel = require('gulp-babel')
gulp.task('default', ['babel'], cb => {
    gulp.watch('./app.js', ['default']).on('change', () => {
        console.log('file is changed')
    })
})

gulp.task('babel', cb => {
    pump([
            gulp.src(['src/**/*.es', 'src/*.es', '!src/public/*.js', '!src/views/*.es']),
            babel(),
            gulp.dest('./build')
        ],
        cb
    )
})