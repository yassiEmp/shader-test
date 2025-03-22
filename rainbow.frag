#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    float t = 1.-st.y;

    vec3 color = vec3(0.0);
    color = mix(color, vec3(1.0, 0.0, 0.0), smoothstep(0.0, 0.2, t)); // Red
    color = mix(color, vec3(1.0, 0.5, 0.0), smoothstep(0.2, 0.4, t)); // Orange
    color = mix(color, vec3(1.0, 1.0, 0.0), smoothstep(0.4, 0.6, t)); // Yellow
    color = mix(color, vec3(0.0, 1.0, 0.0), smoothstep(0.6, 0.8, t)); // Green
    color = mix(color, vec3(0.0, 0.0, 1.0), smoothstep(0.8, 1.0, t)); // Blue
    color = mix(color, vec3(0.5, 0.0, 1.0), smoothstep(1.0, 1.2, t)); // Indigo
    color = mix(color, vec3(0.8, 0.0, 1.0), smoothstep(1.2, 1.4, t)); // Violet

    gl_FragColor = vec4(color, 1.0);
}