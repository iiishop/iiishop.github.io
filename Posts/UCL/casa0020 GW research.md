---
title: CASA0020 GW Research
date: 2026-02-01 04:11:53
tags: 
  - IoT Ethics
  - Workplace Surveillance
  - Occupeye
  - Privacy Research
  - CASA0020
categories: 
pre: 
  An in-depth analysis of the Occupeye (FM:Systems) sensor system through the 2016 Daily Telegraph controversy. This report evaluates the product using the 'Better IoT' framework, examining the delicate balance between energy efficiency and employee privacy.
img: 
---

> [(The Daily Telegraph) Daily Telegraph to withdraw devices monitoring time at desk after criticism](https://www.thedrum.com/news/daily-telegraph-removes-staff-tracking-devices-following-uproar)

---

# Research & Analysis Report: Occupeye (FM:Systems)

## Part 1: Key Controversy (The 2016 Daily Telegraph Case)

### Event Summary

* **Date**: January 11, 2016.
* **Situation**: Journalists at The Daily Telegraph in London arrived at work to find black boxes labeled "OccupEye" taped under their desks.
* **Employee Reaction**: Management provided **no prior notification**. Staff only discovered the device's purpose by searching the brand name online.
* **Official Excuse**: The company claimed the sensors were for "Energy Efficiency" (e.g., optimizing HVAC and lighting).
* **Backlash**: The National Union of Journalists (NUJ) condemned the move as "Big Brother-style surveillance."
* **Outcome**: Due to overwhelming pressure, the company withdrew the devices just **4 hours** after installation.

---

## Part 2: Detailed Analysis via Better IoT Framework

### 1. Privacy

* **Access**: [+/-] Management has full dashboard access, but monitored employees cannot view their own data.
* **Purpose**: [-] While PIR is technically anonymous, companies often fail to clarify if data is used for performance tracking.
* **Data Control**: [-] Employees cannot delete or migrate their own desk usage records.
* **Opt-out**: [-] Employees generally lack the right to refuse being monitored.

### 2. Transparency

* **Legal Implications**: [-] No public documentation on the legal consequences if data is used for redundancy or disciplinary decisions.
* **Consent**: [-] B2B scenario; terms are signed between vendor and company, bypassing individual employee consent.
* **Upgrades**: [-] Firmware updates are completely invisible to end-users (staff).

### 3. Ownership

* **Transferability**: [+] Hardware assets can be transferred during lease changes or corporate acquisitions.
* **Data Isolation**: [+] Sensors track spaces, not specific people; data stays with the desk during staff turnover.
* **Connection Control**: [-] Employees have no way to turn off the connection; only admins have control.

### 4. Openness

* **Source/Hardware**: [-] Completely closed-source. Users cannot audit if the device collects private data beyond heat signatures.

### 5. Security

* **By Design**: [+] Uses independent RF (Sub-GHz), avoiding corporate Wi-Fi and providing physical network isolation.
* **Threat Assessment**: [+] Uses encrypted protocols specific to proprietary frequencies.
* **Process**: [+] FM:Systems follows established enterprise-grade security management processes.

### 6. Lifecycle

* **Factory Reset**: [+] Supports resetting for redeployment.
* **Service Lifetime**: [+] Clear battery life and hardware maintenance cycles provided.
* **Repair/Spares**: [+] Comprehensive spare parts and maintenance services are provided for commercial clients.

### 7. Interoperability

* **Third-party Integration**: [+] Provides API interfaces for Building Management Systems (BMS).
* **Functional Equality**: [-] Third parties get raw data but lack access to official advanced analytics tools.
* **Direct Communication**: [-] Devices must communicate through a proprietary gateway; no local D2D communication supported.