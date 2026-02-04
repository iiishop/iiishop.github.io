---
title: Dissertation Concept & Design
date: 2026-02-04 13:51:58
tags: 
categories: 
- EnglishBlog
- UCL
pre: 
img: 
---

# Mixed Reality Smart Home Interaction System: Concept & Design

## Core Project Vision

The goal of this project is to create an intuitive and efficient next-generation interface for smart home interaction. We aim to leverage the Mixed Reality capabilities of the Meta Quest 3 to transform the physical space itself into an operable smart canvas, enabling users to **see, understand, and directly control** IoT devices in their environment, thereby moving beyond reliance on traditional mobile apps or isolated voice commands.

## Expected Outcomes

1.  **Automated Spatial Awareness**: Upon wearing the headset, the system **automatically discovers** smart devices in the room and **accurately "locks" virtual controls onto the corresponding physical devices**, eliminating the need for manual, one-by-one configuration.
2.  **Dual-Mode Interaction Freedom**:
    *   **Embodied Manipulation**: Users can look at a smart bulb and slide a virtual slider next to it with a gesture to adjust brightness.
    *   **Voice Agent**: A user can say, "Make the lighting in the reading corner warmer," and an AI assistant will understand and execute this spatially-aware command.
3.  **Unified Context Management**: The system understands the concept of a "room," allowing users to turn off all lights in a room with one command or create scenarios like "Movie Mode" that involve multiple devices.
4.  **Seamless Physical-Virtual Fusion**: All interactions occur over the user's passthrough view of the real environment. Virtual information (controls, status) is precisely aligned with physical entities, providing an immersive control experience.

## System Architecture Design

To achieve the above vision, the project adopts a collaborative client-server architecture to balance performance, complexity, and development efficiency.

### Backend (Local Server)
**Role**: The "brain" of the system, responsible for device management, logical reasoning, and complex computations.

| Component | Functional Description | Technology Considerations |
| :--- | :--- | :--- |
| **Unified Device Gateway** | Acts as the **sole entry point** for all branded IoT devices (Mi Home, MQTT, etc.), providing standardized control APIs. | **Home Assistant**: Open-source, powerful ecosystem, supports hundreds of brands, the de facto standard for home automation platforms. |
| **Device Discovery Service** | Automatically scans the local network, generating a **logical device list** for the current environment by analyzing network traffic and device broadcast protocols. | Combines **nmap**, **mqtt-discovery**, and Home Assistant's built-in discovery for a more comprehensive device inventory. |
| **Voice Control Agent** | A **limited-domain** AI assistant. It focuses on understanding natural language related to space and device control, converting it into specific API call commands. | Based on a **Large Language Model** for command parsing. The key design is to **strictly confine its capabilities** to home control, providing it with context like device lists and locations to ensure accurate and safe command execution. |

### Frontend (Meta Quest 3)
**Role**: The "senses" and "hands" of the system, responsible for perceiving space, presenting the interface, and capturing user intent.

| Component | Functional Description | Technology Considerations |
| :--- | :--- | :--- |
| **Dual-Mode Mapping Engine** | Implements the core innovative **network discovery + visual confirmation** pipeline:<br>1. **List Acquisition**: Pulls the logical device list from the backend.<br>2. **Visual Recognition**: Utilizes the Quest 3 cameras and a locally-run lightweight CV model to recognize physical devices in the field of view in real-time.<br>3. **Spatial Association**: Matches visual recognition results with the logical list and uses Quest's **Spatial Anchors** system to create persistent virtual control points at the device's **real-world 3D location**. | **MediaPipe** or a **lightweight YOLO** for object detection. **Meta Spatial Anchors** SDK for persistent positioning. The core challenge lies in the accuracy and real-time performance of the matching algorithm. |
| **Mixed Reality Interaction Interface** | Provides two parallel interaction interfaces on the fused physical-virtual canvas:<br>1. **AR Control Layer**: Renders virtual switches, sliders, color pickers, etc., next to mapped devices, supporting **gesture** and **controller ray** interaction.<br>2. **Voice Channel**: Provides a global voice input trigger mechanism, sending the audio stream to the backend agent. | Developed using **Unity XR Interaction Toolkit** and **Meta Presence Platform** SDKs. UI design must follow MR interaction principles to ensure clarity, operability, and non-occlusion of the real world. |
| **Communication & State Sync Module** | Acts as the bridge between frontend and backend via Wi-Fi:<br>- Sends control commands (from gestures or parsed voice) to the backend gateway.<br>- Receives device state updates from the backend and refreshes the visual feedback in the AR interface in real-time. | Uses **WebSocket** or **MQTT over WebSockets** for low-latency bidirectional communication, ensuring real-time synchronization between virtual control states and physical devices. |

## Summary

The innovation of this proposed system lies in its **"network discovery first, visual positioning anchors"** dual-mode mapping strategy, upon which a Mixed Reality interaction paradigm of **"embodied direct manipulation" and "spatially-aware voice semantics"** is built. Through the client-server architecture, the system cleverly separates computationally intensive tasks (AI inference, device management) from latency-sensitive interactive tasks (image processing, rendering), aiming to ultimately deliver an **intelligent and fluid** immersive environment control experience.