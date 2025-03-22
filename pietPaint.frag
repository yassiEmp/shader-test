// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 drawBox(
    vec2 position,float width,float height,vec3 color, vec2 canvas,vec3 boxColor
){
    float x = position.x ;
    float y = position.y ;
    float x2 = x + width ;
    float y2 = y + height ;
    float inside = step(x,canvas.x)*step(y,canvas.y)*step(canvas.x,x2)*step(canvas.y,y2) ;
    color = mix(color,boxColor,inside);
    return color ; 
}
vec3 drawLine(vec2 canvas, float y, vec3 color,float width){
    color = mix(vec3(0.),color,step(width,distance(y,canvas.y))) ;
    return color ;
}
vec3 drawColumn(vec2 canvas, float x, vec3 color,float width){
    color = mix(vec3(0.),color,step(width,distance(x,canvas.x))) ;
    return color ;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    // bottom-left
    vec2 bl = step(vec2(0.1),st);
    float pct = bl.x * bl.y;
    // top-right
    // vec2 tr = step(vec2(0.1),1.0-st);
    // pct *= tr.x * tr.y;
	
	color = vec3(1.000,0.970,0.772);
    //drawing the red box
    color = drawBox(vec2(0.000,0.640),0.176,0.556,color,st,vec3(1.,0.,0.));
    //drawing the yellow box
	color = drawBox(vec2(0.830,0.640),0.176,0.556,color,st,vec3(1.000,1.0,0.000)) ;
    //drawing the blue box
    color = drawBox(vec2(0.630,0.000),0.439,0.116,color,st,vec3(.0,.0,1.)) ;
    //drawing the black lines 
    color = drawLine(st,0.628,color,0.015) ;
    color = drawLine(st,0.812,color,0.015) ;
    color = drawColumn(st,0.844,color,0.015) ;
    color = drawColumn(st,0.180,color,0.015) ;
    color = drawColumn(st,0.644,color,0.015) ;
    color = drawBox(vec2(0.050,0.640),0.029,0.556,color,st,vec3(0.,0.,0.));
    color = drawBox(vec2(0.180,0.110),0.916,0.020,color,st,vec3(0.,0.,0.));
    gl_FragColor = vec4(color,1.0);
}
