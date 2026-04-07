# 🛠️ Scripts & Automation

This directory contains tools and IoT firmware for **The Turtle Clan**.

## Contents
- **/iot-monitoring**: Firmware for ESP32/Arduino sensors (water temp, pH).
- `calorie_calc.py`: Simple CLI tool for calculating feeding ratios.
- `uvb_health_check.py`: Automated alert script for bulb replacement.

## 🚀 Usage
### Calorie Calculator
```bash
python scripts/calorie_calc.py --weight 450 --species "RES"
```

## 🔌 Hardware Standards
All IoT projects should use **ESP32** or **Arduino** with **WPA2-Enterprise** support where applicable. Wiring diagrams must be provided in the respective sub-directories.
