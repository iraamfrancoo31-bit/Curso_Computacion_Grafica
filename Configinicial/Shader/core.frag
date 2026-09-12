#version 330 core

in vec3 ourColor;

out vec4 color;

uniform vec3 objectColor;
uniform bool useObjectColor;

void main()
{
    if (useObjectColor)
        color = vec4(objectColor, 1.0f);
    else
        color = vec4(ourColor, 1.0f);
}