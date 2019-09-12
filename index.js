(function() {

    var canvas = document.getElementById("glcanvas");
    var gl = glUtils.checkWebGL(canvas);

    var vertexSourceCode =
        'void main() {\n' +
        'gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n' +
        'gl_PointSize = 100.0;\n' +
        '}';
    var fragmentSourceCode =
        'void main() {\n' +
        'gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);\n' +
        '}';

    var vertexShader = glUtils.getShader(gl, gl.VERTEX_SHADER, vertexSourceCode);
    var fragmenShader = glUtils.getShader(gl, gl.FRAGMENT_SHADER, fragmentSourceCode);
    var program = glUtils.createProgram(gl, vertexShader, fragmenShader);

    gl.useProgram(program);

    //bersihkan layar
    gl.clearColor(1.0, 0.0, 0.0, 1.0);

    //bersihkan buffer
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS, 0, 1);
})();