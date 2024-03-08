import { Theme } from "../../interfaces/theme.interface";

const jsonTheme = `{
  "name": "skyBlue",
  "title": "Sky Blue",
  "description": "Sky Blue",
  "colorPalettes": [
    {
      "name": "primary",
      "hue": 199,
      "saturation": 92,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(199, 92%, 40%)",
          "h": 199,
          "s": 92,
          "l": 40
        },
        {
          "name": "Darkest",
          "hsl": "hsl(199, 92%, 46%)",
          "h": 199,
          "s": 92,
          "l": 46
        },
        {
          "name": "Darker",
          "hsl": "hsl(199, 92%, 51%)",
          "h": 199,
          "s": 92,
          "l": 51
        },
        {
          "name": "Dark",
          "hsl": "hsl(199, 92%, 59%)",
          "h": 199,
          "s": 92,
          "l": 59
        },
        {
          "name": "Normal",
          "hsl": "hsl(199, 92%, 65%)",
          "h": 199,
          "s": 92,
          "l": 65
        },
        {
          "name": "Light",
          "hsl": "hsl(199, 92%, 69%)",
          "h": 199,
          "s": 92,
          "l": 69
        },
        {
          "name": "Lighter",
          "hsl": "hsl(199, 92%, 74%)",
          "h": 199,
          "s": 92,
          "l": 74
        },
        {
          "name": "Lightest",
          "hsl": "hsl(199, 92%, 79%)",
          "h": 199,
          "s": 92,
          "l": 79
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(199, 92%, 84%)",
          "h": 199,
          "s": 92,
          "l": 84
        }
      ]
    },
    {
      "name": "secondary",
      "hue": 185,
      "saturation": 74,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(185, 74%, 30%)",
          "h": 185,
          "s": 74,
          "l": 30
        },
        {
          "name": "Darkest",
          "hsl": "hsl(185, 74%, 37%)",
          "h": 185,
          "s": 74,
          "l": 37
        },
        {
          "name": "Darker",
          "hsl": "hsl(185, 74%, 42%)",
          "h": 185,
          "s": 74,
          "l": 42
        },
        {
          "name": "Dark",
          "hsl": "hsl(185, 74%, 49%)",
          "h": 185,
          "s": 74,
          "l": 49
        },
        {
          "name": "Normal",
          "hsl": "hsl(185, 74%, 56%)",
          "h": 185,
          "s": 74,
          "l": 56
        },
        {
          "name": "Light",
          "hsl": "hsl(185, 74%, 65%)",
          "h": 185,
          "s": 74,
          "l": 65
        },
        {
          "name": "Lighter",
          "hsl": "hsl(185, 74%, 71%)",
          "h": 185,
          "s": 74,
          "l": 71
        },
        {
          "name": "Lightest",
          "hsl": "hsl(185, 74%, 80%)",
          "h": 185,
          "s": 74,
          "l": 80
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(185, 74%, 87%)",
          "h": 185,
          "s": 74,
          "l": 87
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
          "hsl": "hsl(0, 0%, 4%)",
          "h": 0,
          "s": 0,
          "l": 4
        },
        {
          "name": "Darkest",
          "hsl": "hsl(0, 0%, 10%)",
          "h": 0,
          "s": 0,
          "l": 10
        },
        {
          "name": "Darker",
          "hsl": "hsl(0, 0%, 14%)",
          "h": 0,
          "s": 0,
          "l": 14
        },
        {
          "name": "Dark",
          "hsl": "hsl(0, 0%, 19%)",
          "h": 0,
          "s": 0,
          "l": 19
        },
        {
          "name": "Normal",
          "hsl": "hsl(0, 0%, 27%)",
          "h": 0,
          "s": 0,
          "l": 27
        },
        {
          "name": "Light",
          "hsl": "hsl(0, 0%, 35%)",
          "h": 0,
          "s": 0,
          "l": 35
        },
        {
          "name": "Lighter",
          "hsl": "hsl(0, 0%, 43%)",
          "h": 0,
          "s": 0,
          "l": 43
        },
        {
          "name": "Lightest",
          "hsl": "hsl(0, 0%, 51%)",
          "h": 0,
          "s": 0,
          "l": 51
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(0, 0%, 98%)",
          "h": 0,
          "s": 0,
          "l": 98
        }
      ]
    }
  ],
  "typography": [
    {
      "name": "fontFamily",
      "value": "Roboto, sans-serif, Helvetica Neue, Helvetica, Arial"
    },
    {
      "name": "fontSize",
      "value": "16px"
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
export const skyBlue: Theme = JSON.parse(jsonTheme);
