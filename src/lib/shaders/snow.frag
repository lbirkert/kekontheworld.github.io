/**                   
 * █▀ █▄░█ █▀█ █░█░█
 * ▄█ █░▀█ █▄█ ▀▄▀▄▀
 * 
 * https://github.com/KekOnTheWorld/kekontheworld.github.io/blob/main/LICENSE
 *
 * (c) 2022 KekOnTheWorld
 */

precision highp float;

varying vec2 vUv;

uniform float time;
uniform vec2 resolution;

vec4 snow(vec2 weight, vec2 coord) {
    return vec4(coord, weight);
}

void main() {
    float biggest = max(resolution.x, resolution.y);
    vec2 weight = resolution / biggest;
    vec2 coord = vUv * weight;
    gl_FragColor = snow(weight, coord);
}
