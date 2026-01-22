---
title: The basic frame of OpenGL
date: 2023-08-29 21:42:25
tags:
- 笔记
- Computer graphics
- OpenGL
categories:
- EnglishBlog
- Computer Graphics
- OpenGL
pre: 
img: 
---
## Introduction
- OpenGL(Open Graphics Library) is a polyglot and cross-platform programming GUI. It will abstract computer resources into OpenGL objects and then abstract operations on resources to OpenGL instructions.

- OpenGL_ES(OpenGL for Embedded System) is a subset about 3D graphics APIs.

## OpenGL Context
- OpenGL Context is a very large state machine that holds various states of  OpenGL, and it is the basis for the execution of OpenGL instructions.

- Regardless of the programming language, the functions of OpenGL are procedure-oriented. They are executed to manipulate a state or object of OpenGL Context.

- Because the OpenGL Context is a very large state machine, switching contexts tends to incur a large overhead. For different plotting modules, the needed context might be different. Thus, we can create multiple OpenGL Contexts for different threads sharing buffers and texture, etc. to make it more rational and efficient.

## Frame Buffer

- ### Attachment

## Texture and Render Buffer
## Vertex Array and Vertex Buffer
## Element Array and Element Buffer
## Shader

- ### Vertex Shader
- ### Fragment Shader

## Per-Fragment Operation

- ### Test
- ### Blending
- ### Dithering

## Render to Texture
## Swap Buffer