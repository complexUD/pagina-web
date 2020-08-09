module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    sourcemap: 'none',
                    style: 'compressed',
                },
                files: [
                    {
                        expand: true,
                        cwd: 'themes/complex-theme/source/scss',
                        src: ['*.scss'],
                        dest: 'themes/complex-theme/source/css',
                        ext: '.css'
                    }
                ]
            }
        },
        watch: {
            css: {
                files: 'themes/complex-theme/source/scss/**/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['watch']);
}
