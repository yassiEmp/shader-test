#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 colorB = vec3(0.149,0.141,0.912);
vec3 colorA = vec3(1.000,0.833,0.224);
vec3 colorC = vec3(0.720,0.361,0.121) ;

float plot (vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y) -
          smoothstep( pct, pct+0.01, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    vec3 pct = vec3(st.y+sin(u_time));

    // pct.r = smoothstep(0.0,1.0, st.x);
    // pct.g = sin(st.x*PI);
    // pct.b = pow(st.x,0.5);
	
    float yCenter = -0.772 ;
    
    color = mix(colorA, colorB, pct);
    color = mix(colorB, color, pow(pct - vec3(yCenter), vec3(4.0)));
    
    color = mix(color,colorC,vec3(st.x,st.y,st.x)) ;
    
    gl_FragColor = vec4(color,1.0);
}
