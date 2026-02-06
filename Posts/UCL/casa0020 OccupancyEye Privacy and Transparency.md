---
title: casa0020 OccupancyEye Privacy and Transparency
date: 2026-02-06 14:20:32
tags: 
categories: 
pre: 
img: 
---

> The entire text revolves around “privacy” and “transparency.”
# Introduction

OccupEye is a workspace utilization solution that monitors real-time desk occupancy. It is marketed as a "non-intrusive" tool to help organizations reduce real estate costs—potentially saving up to $200,000 for every 1% improvement in utilization. Technically, it relies on Passive Infrared (PIR) sensors to detect heat and motion. Its standout feature is its "Network Independence," using Sub-GHz radio frequencies to operate entirely outside the corporate IT infrastructure, which the manufacturer claims ensures a "hassle-free" and secure deployment.



# Analysis

## Privacy

From a **Privacy** perspective, OccupEye functions in a gray area of "Technical vs. Contextual" identity. While the manufacturer claims privacy-by-design, the product fails almost every **"Must Have"** criterion in the Better IoT Framework regarding user control:

* **Access, Update, and Deletion**: The framework dictates that users must be allowed to access, update, and delete their collected data free of charge. In the OccupEye ecosystem, this is non-existent. The data is treated as "corporate property," trapped in a management-only dashboard. An employee has no way to see their own "desk-time" logs, let alone request the deletion of a specific day's data if they feel it unfairly represents their work habits.
* **The Right to Restrict and Opt-Out**: A core privacy requirement is the ability to restrict the use of data or opt out of automated decisions. Because the sensors are physically "hidden" and the system is mandatory for the office environment, employees have zero agency. They cannot "opt out" of being tracked without physically avoiding their assigned workspace, which has "significant consequences" for their employment.
* **The De-anonymization Trap**: Privacy is further compromised through data cross-referencing. A 2016 report from the **National Union of Journalists (NUJ)** highlighted that when sensors are fixed to assigned desks, the "anonymous" heat map becomes a high-fidelity record of an individual's private behavior. By filtering the Analytics Dashboard by site, building, and desk type, management can de-anonymize the PIR data, turning a simple "space sensor" into a tool for automated performance monitoring.

## Transparency
**Transparency** is the most significant failure point. The system's design priorities (ease of installation) directly contradict the framework’s transparency requirements:

* **Permission and Notification**: The framework requires companies to ask permission before changing terms of service and to make explicit the legal implications of changing device usage. In the infamous **Daily Telegraph case (2016)**, there was a total collapse of this principle. The usage shifted from "building management" to "staff monitoring" without any prior notification. Staff only realized they were being tracked after finding the physical devices, meaning the "Right to be Informed" was completely ignored.
* **Firmware and Terms Visibility**: Better IoT standards require informing users about firmware upgrades and the duration of terms. Because OccupEye is **"Network Independent"** (using Sub-GHz radio), it creates a "Silent Network." It bypasses the user’s ability to monitor data traffic or receive digital notifications. To the employee, the device is a "black box" with no expiration date on data storage and no clarity on who legally owns the data after a firmware update.
* **Purpose Creep**: The product's ability to detect **Noise, Light, and Air Quality** introduces a major transparency risk. Without a **"Transparency Notice"** displayed on the device or a shared portal, employees cannot audit what is being measured. The lack of explicit documentation on these "additional" sensors leads to a total breakdown of workplace trust.

---

# Reflection

## Privacy

Technical anonymity does not equal psychological privacy. In the case of OccupEye, we must reflect on how the **"Feeling of being watched"** impacts the human experience in the workspace.

* **Privacy as Freedom**: Even if the PIR sensor doesn't "see" a face, the knowledge that "presence" is being logged as a productivity metric creates a high-pressure environment. Privacy is not just about hiding information; it is the **psychological safety** to work without constant, invisible scrutiny. When a workplace turns behavior into data without user agency, it ruins the **Social Contract** between employer and employee.
* **The Myth of Anonymous Data**: We must reflect on how "Big Data" kills privacy through context. When management chooses to combine "anonymous" heat maps with seating charts, they are making an **organizational choice** to strip away the anonymity the technology promised. If the user cannot "Opt-out," the privacy promised by the manufacturer is merely an illusion used to justify surveillance.

## Transparency

Transparency is more than just a legal disclaimer; it is about the **balance of power**. The "Invisibility" of OccupEye is not just a design feature—it is a decision that prioritizes control over communication.

* **Trust is Fragile**: The *Daily Telegraph* incident proves that **Technical Legality  Social Legitimacy**. You can legally install a sensor, but if you do it in secret, you destroy the foundation of workplace trust. A "Silent Network" that bypasses IT scans isn't just "hassle-free"—it is a system designed to be unaccountable to the people it monitors.
* **From Spy to Service**: To be truly transparent, the system must provide **Bidirectional Value**. True transparency means that if you collect my data, you must show me how it helps *me*. If the data were shared via a dashboard to help employees find quiet zones or free meeting rooms, it would be a **"Service."** But by keeping the data hidden in a management-only portal, it remains a **"Spy Tool."** For IoT to be "Smart," it must move from a hidden infrastructure of control to a visible infrastructure of support.

---
# Simple Reference
https://www.sportsjournalists.co.uk/journalism-news/telegraph-removes-sensors-from-journalists-desks/
https://www.thedrum.com/news/daily-telegraph-removes-staff-tracking-devices-following-uproar