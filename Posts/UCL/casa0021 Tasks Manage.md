---
title: casa0021 Tasks Manage
date: 2026-02-01 04:37:20
tags: 
  - ESP32
  - Tailscale
  - P2P Networking
  - Embedded Systems
  - CASA0021
categories: 
pre: 
  A comprehensive technical roadmap for the "Cross-Border Butterfly" project. This document outlines a linear 45-day development cycle focusing on global connectivity (Tailscale/P2P), biomimetic actuation, and secure remote management using ESP32, specifically adapted for hardware integration starting mid-February.
img: 
---


#### 1. Core Actuation & Power Logic

* **PWM Actuation Library**: Develop a dedicated PWM control class to handle different motor/vibration prototypes (matching Prototype 1, 2, and 3).
* **Bio-mimicry Flapping Patterns**: Script variable frequency and duty-cycle profiles to simulate organic butterfly movement.
* **Battery Management System (BMS) Firmware**:
* Implement ADC voltage-divider reading for real-time battery level monitoring.
* Create a power-save state machine (switching between Active, Idle, and Deep Sleep).
* Code a "Safe-Shutdown" logic to preserve battery health during long-term installation.



#### 2. Networking & Global Connectivity (The Cross-Border System)

* **Tailscale Integration (Route A)**:
* Port and compile a lightweight WireGuard/Tailscale client for the ESP32 environment.
* Implement an automated authentication flow using pre-authorized Auth Keys.
* Monitor DERP relay latency to ensure cross-border responsiveness.


* **P2P Pathfinding (Route B)**:
* Develop a STUN client to discover public IP/Port mappings in different network environments.
* Implement a UDP hole-punching handshake protocol for direct peer-to-peer connection.


* **Failover Logic**: Write the "Path-Selection" algorithm that automatically switches between Tailscale and P2P based on link health.

#### 3. Onboarding & Device Management

* **SoftAP Provisioning System**:
* Develop the Captive Portal for Wi-Fi credential input (No-app-required onboarding).
* Implement NVS (Non-volatile Storage) handlers to store and recall Wi-Fi and Tailscale credentials.


* **Management Web Interface**:
* Build an embedded Web Server to host a local dashboard for each butterfly.
* Implement a WebSocket API for real-time "Butterfly Management" (triggering, status pings).


* **Global Telemetry Logging**: Create a remote debug bridge to capture system logs from overseas deployments for troubleshooting.

#### 4. System Integration & Scaling

* **Multi-Device Synchronization**: Script the logic to allow one "Master" butterfly/server to trigger "x amount" of butterflies simultaneously.
* **Firmware-over-the-Air (FOTA)**: Implement a remote update system to patch code across all butterflies once they are deployed in the cultural context.
* **Stress Testing**: Benchmark the ESP32's memory and CPU usage during sustained global network activity.
```mermaid
gantt
    title ESP32 Butterfly System: Linear Technical Roadmap (Feb 6 - Mar 22)
    dateFormat  YYYY-MM-DD
    axisFormat  %m-%d

    section Connectivity (Pre-Hardware)
    Tailscale & WireGuard Porting (6h)      :b1, 2026-02-06, 2026-02-11
    P2P STUN & Hole Punching Logic (6h)     :b2, 2026-02-12, 2026-02-16
    Failover Algorithm Development (5h)      :b3, 2026-02-17, 2026-02-19

    section User Interface (Pre-Hardware)
    SoftAP & Provisioning Web Server (6h)   :c1, 2026-02-20, 2026-02-22
    Management Web Dashboard UI (6h)         :c2, 2026-02-23, 2026-02-26
    Global Telemetry Logging (6h)            :c3, 2026-02-27, 2026-02-28

    section System Reliability (Pre-Hardware)
    Multi-Device Sync Simulation (6h)       :d1, 2026-03-01, 2026-03-03
    FOTA Remote Update System (6h)          :d2, 2026-03-04, 2026-03-08

    section Integration (Post-Hardware)
    PWM Actuation Lib Integration (6h)      :a1, 2026-03-09, 2026-03-11
    Bio-mimicry Patterns Tuning (6h)        :a2, 2026-03-12, 2026-03-15
    BMS & Power State Verification (6h)     :a3, 2026-03-16, 2026-03-18

    section Final Delivery
    Full System Stress Testing & Final Debug (6h)         :d3, 2026-03-19, 2026-03-22
```