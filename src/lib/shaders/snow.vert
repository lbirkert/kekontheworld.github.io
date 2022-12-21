/**                   
 * █▀ █▄░█ █▀█ █░█░█
 * ▄█ █░▀█ █▄█ ▀▄▀▄▀
 * 
 * https://github.com/KekOnTheWorld/kekontheworld.github.io/blob/main/LICENSE
 *
 * (c) 2022 KekOnTheWorld
 */

attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main()	{
    vUv = uv;

    gl_Position = vec4(position, 0, 1);

}
