# Weather Plugin OpenAgents

## Introduction

A simple yet powerful weather plugin that provides current weather information for a specified location. This plugin fetches data from the [wttr.in](https://wttr.in/) API and presents it in an easy-to-read JSON format.

## Playground
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/yuzurushX/Weather-Plugin-OpenAgents)

## Provided Information 
- Location (Coordinate)
- Time (Local)
- Weather Description
- Current Temperature (Celsius and Fahrenheit)
- Humidity
- Wind (Direction and Speed)

You can customize the provided data by modifying the code, for more information about the wttr.in API check the [API documentation](https://github.com/chubin/wttr.in#json-output).

## Usage
```
extism call plugin.wasm run --wasi --allow-host="wttr.in" --input="City/Area"
```

## Example
![image](https://github.com/yuzurushX/Weather-Plugin-OpenAgents/assets/168862430/fd399bb4-1e07-4f38-8df5-99f3f02d7c55)
