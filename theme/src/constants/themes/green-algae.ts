import { Theme } from "../../interfaces/theme.interface";

const jsonTheme = `{
  "name": "greenAlgae",
  "title": "Green Algae",
  "description": "Green Algae",
  "colorPalettes": [
    {
      "name": "primary",
      "hue": 81,
      "saturation": 98,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(81, 98%, 10%)",
          "h": 81,
          "s": 98,
          "l": 10
        },
        {
          "name": "Darkest",
          "hsl": "hsl(81, 98%, 12%)",
          "h": 81,
          "s": 98,
          "l": 12
        },
        {
          "name": "Darker",
          "hsl": "hsl(81, 98%, 16%)",
          "h": 81,
          "s": 98,
          "l": 16
        },
        {
          "name": "Dark",
          "hsl": "hsl(81, 98%, 28%)",
          "h": 81,
          "s": 98,
          "l": 28
        },
        {
          "name": "Normal",
          "hsl": "hsl(81, 98%, 69%)",
          "h": 81,
          "s": 98,
          "l": 69
        },
        {
          "name": "Light",
          "hsl": "hsl(81, 98%, 75%)",
          "h": 81,
          "s": 98,
          "l": 75
        },
        {
          "name": "Lighter",
          "hsl": "hsl(81, 98%, 80%)",
          "h": 81,
          "s": 98,
          "l": 80
        },
        {
          "name": "Lightest",
          "hsl": "hsl(81, 98%, 86%)",
          "h": 81,
          "s": 98,
          "l": 86
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(81, 98%, 93%)",
          "h": 81,
          "s": 98,
          "l": 93
        }
      ]
    },
    {
      "name": "secondary",
      "hue": 132,
      "saturation": 75,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(132, 75%, 32%)",
          "h": 132,
          "s": 75,
          "l": 32
        },
        {
          "name": "Darkest",
          "hsl": "hsl(132, 75%, 43%)",
          "h": 132,
          "s": 75,
          "l": 43
        },
        {
          "name": "Darker",
          "hsl": "hsl(132, 75%, 53%)",
          "h": 132,
          "s": 75,
          "l": 53
        },
        {
          "name": "Dark",
          "hsl": "hsl(132, 75%, 61%)",
          "h": 132,
          "s": 75,
          "l": 61
        },
        {
          "name": "Normal",
          "hsl": "hsl(132, 75%, 70%)",
          "h": 132,
          "s": 75,
          "l": 70
        },
        {
          "name": "Light",
          "hsl": "hsl(132, 75%, 76%)",
          "h": 132,
          "s": 75,
          "l": 76
        },
        {
          "name": "Lighter",
          "hsl": "hsl(132, 75%, 80%)",
          "h": 132,
          "s": 75,
          "l": 80
        },
        {
          "name": "Lightest",
          "hsl": "hsl(132, 75%, 86%)",
          "h": 132,
          "s": 75,
          "l": 86
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(132, 75%, 95%)",
          "h": 132,
          "s": 75,
          "l": 95
        }
      ]
    },
    {
      "name": "accent",
      "hue": 0,
      "saturation": 0,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(0, 0%, 10%)",
          "h": 0,
          "s": 0,
          "l": 10
        },
        {
          "name": "Darkest",
          "hsl": "hsl(0, 0%, 16%)",
          "h": 0,
          "s": 0,
          "l": 16
        },
        {
          "name": "Darker",
          "hsl": "hsl(0, 0%, 20%)",
          "h": 0,
          "s": 0,
          "l": 20
        },
        {
          "name": "Dark",
          "hsl": "hsl(0, 0%, 23%)",
          "h": 0,
          "s": 0,
          "l": 23
        },
        {
          "name": "Normal",
          "hsl": "hsl(0, 0%, 28%)",
          "h": 0,
          "s": 0,
          "l": 28
        },
        {
          "name": "Light",
          "hsl": "hsl(0, 0%, 45%)",
          "h": 0,
          "s": 0,
          "l": 45
        },
        {
          "name": "Lighter",
          "hsl": "hsl(0, 0%, 60%)",
          "h": 0,
          "s": 0,
          "l": 60
        },
        {
          "name": "Lightest",
          "hsl": "hsl(0, 0%, 81%)",
          "h": 0,
          "s": 0,
          "l": 81
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(0, 0%, 100%)",
          "h": 0,
          "s": 0,
          "l": 100
        }
      ]
    }
  ],
  "typography": [
    {
      "name": "fontFamily",
      "value": "Roboto, sans-serif"
    },
    {
      "name": "fontSize",
      "value": "18px"
    },
    {
      "name": "spacing",
      "value": "1rem"
    },
    {
      "name": "borderRadius",
      "value": "0.3rem"
    },
    {
      "name": "siteWidth",
      "value": "1396px"
    },
    {
      "name": "lineHeight",
      "value": "2"
    },
    {
      "name": "letterSpacing",
      "value": "0.05rem"
    }
  ]
}`;
export const greenAlgae: Theme = JSON.parse(jsonTheme);
