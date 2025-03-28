#ifdef GL_ES
precision mediump float ;
#endif

uniform vec2 u_resolution ; 

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy ;

    float tl = distance(st, vec2(0.5)) ;

    gl_FragColor = vec4(vec3(tl), 0.74) ;
}