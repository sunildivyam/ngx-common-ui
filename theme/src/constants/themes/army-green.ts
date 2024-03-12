import { Theme } from "../../interfaces/theme.interface";

const jsonTheme = `{
  "name": "armyGreen",
  "title": "Army Green",
  "description": "Army Green Theme",
  "colorPalettes": [
    {
      "name": "primary",
      "hue": 96,
      "saturation": 71,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(96, 71%, 61%)",
          "h": 96,
          "s": 71,
          "l": 61
        },
        {
          "name": "Darkest",
          "hsl": "hsl(96, 71%, 69%)",
          "h": 96,
          "s": 71,
          "l": 69
        },
        {
          "name": "Darker",
          "hsl": "hsl(96, 71%, 76%)",
          "h": 96,
          "s": 71,
          "l": 76
        },
        {
          "name": "Dark",
          "hsl": "hsl(96, 71%, 85%)",
          "h": 96,
          "s": 71,
          "l": 85
        },
        {
          "name": "Normal",
          "hsl": "hsl(96, 71%, 89%)",
          "h": 96,
          "s": 71,
          "l": 89
        },
        {
          "name": "Light",
          "hsl": "hsl(96, 71%, 97%)",
          "h": 96,
          "s": 71,
          "l": 97
        },
        {
          "name": "Lighter",
          "hsl": "hsl(96, 71%, 98%)",
          "h": 96,
          "s": 71,
          "l": 98
        },
        {
          "name": "Lightest",
          "hsl": "hsl(96, 71%, 100%)",
          "h": 96,
          "s": 71,
          "l": 100
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(96, 71%, 100%)",
          "h": 96,
          "s": 71,
          "l": 100
        }
      ]
    },
    {
      "name": "secondary",
      "hue": 180,
      "saturation": 74,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(180, 74%, 10%)",
          "h": 180,
          "s": 74,
          "l": 10
        },
        {
          "name": "Darkest",
          "hsl": "hsl(180, 74%, 21.125%)",
          "h": 180,
          "s": 74,
          "l": 21.125
        },
        {
          "name": "Darker",
          "hsl": "hsl(180, 74%, 32.25%)",
          "h": 180,
          "s": 74,
          "l": 32.25
        },
        {
          "name": "Dark",
          "hsl": "hsl(180, 74%, 43.375%)",
          "h": 180,
          "s": 74,
          "l": 43.375
        },
        {
          "name": "Normal",
          "hsl": "hsl(180, 74%, 48%)",
          "h": 180,
          "s": 74,
          "l": 48
        },
        {
          "name": "Light",
          "hsl": "hsl(180, 74%, 60%)",
          "h": 180,
          "s": 74,
          "l": 60
        },
        {
          "name": "Lighter",
          "hsl": "hsl(180, 74%, 70%)",
          "h": 180,
          "s": 74,
          "l": 70
        },
        {
          "name": "Lightest",
          "hsl": "hsl(180, 74%, 78%)",
          "h": 180,
          "s": 74,
          "l": 78
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(180, 74%, 88%)",
          "h": 180,
          "s": 74,
          "l": 88
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
          "hsl": "hsl(0, 0%, 0%)",
          "h": 0,
          "s": 0,
          "l": 0
        },
        {
          "name": "Darkest",
          "hsl": "hsl(0, 0%, 15%)",
          "h": 0,
          "s": 0,
          "l": 15
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
          "hsl": "hsl(0, 0%, 24%)",
          "h": 0,
          "s": 0,
          "l": 24
        },
        {
          "name": "Normal",
          "hsl": "hsl(0, 0%, 32%)",
          "h": 0,
          "s": 0,
          "l": 32
        },
        {
          "name": "Light",
          "hsl": "hsl(0, 0%, 51%)",
          "h": 0,
          "s": 0,
          "l": 51
        },
        {
          "name": "Lighter",
          "hsl": "hsl(0, 0%, 77%)",
          "h": 0,
          "s": 0,
          "l": 77
        },
        {
          "name": "Lightest",
          "hsl": "hsl(0, 0%, 91%)",
          "h": 0,
          "s": 0,
          "l": 91
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(0, 0%, 99%)",
          "h": 0,
          "s": 0,
          "l": 99
        }
      ]
    }
  ],
  "typography": [
    {
      "name": "fontFamily",
      "value": "Arial"
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
      "value": "0.5rem"
    },
    {
      "name": "siteWidth",
      "value": "1369px"
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

export const armyGreen: Theme = JSON.parse(jsonTheme);
