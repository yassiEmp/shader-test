// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;
    float pct = 0.0;

    // a. The DISTANCE from the pixel to the center
    pct = distance(st,vec2(0.5));
    vec3 color;
    color = vec3(smoothstep(pct,abs(sin(u_time*.2)*0.4),dot(st,st)),st);
    color = vec3(smoothstep(1.-pct,abs(sin(u_time*.3)*0.952),dot(st,st)),st);

	gl_FragColor = vec4( color, 1.0 );
}
