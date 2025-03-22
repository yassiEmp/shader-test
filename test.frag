#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
void main(){
    vec2 position = gl_FragCoord.xy/u_resolution.xy ;
    gl_FragColor = vec4(vec3( ceil(position.x - 0.5), ceil(position.y - 0.5) , 0.0 ), 1.0);
}