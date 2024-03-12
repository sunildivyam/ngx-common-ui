import { Theme } from "../../interfaces/theme.interface";

const jsonTheme = `{
  "name": "shadyGrey",
  "title": "Shady Grey",
  "description": "Shady Grey Theme",
  "colorPalettes": [
    {
      "name": "primary",
      "hue": 57,
      "saturation": 24,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(57, 24%, 44%)",
          "h": 57,
          "s": 24,
          "l": 44
        },
        {
          "name": "Darkest",
          "hsl": "hsl(57, 24%, 59%)",
          "h": 57,
          "s": 24,
          "l": 59
        },
        {
          "name": "Darker",
          "hsl": "hsl(57, 24%, 70%)",
          "h": 57,
          "s": 24,
          "l": 70
        },
        {
          "name": "Dark",
          "hsl": "hsl(57, 24%, 77%)",
          "h": 57,
          "s": 24,
          "l": 77
        },
        {
          "name": "Normal",
          "hsl": "hsl(57, 24%, 90%)",
          "h": 57,
          "s": 24,
          "l": 90
        },
        {
          "name": "Light",
          "hsl": "hsl(57, 24%, 92%)",
          "h": 57,
          "s": 24,
          "l": 92
        },
        {
          "name": "Lighter",
          "hsl": "hsl(57, 24%, 95%)",
          "h": 57,
          "s": 24,
          "l": 95
        },
        {
          "name": "Lightest",
          "hsl": "hsl(57, 24%, 98%)",
          "h": 57,
          "s": 24,
          "l": 98
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(57, 24%, 99%)",
          "h": 57,
          "s": 24,
          "l": 99
        }
      ]
    },
    {
      "name": "secondary",
      "hue": 23,
      "saturation": 79,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(23, 79%, 63%)",
          "h": 23,
          "s": 79,
          "l": 63
        },
        {
          "name": "Darkest",
          "hsl": "hsl(23, 79%, 68%)",
          "h": 23,
          "s": 79,
          "l": 68
        },
        {
          "name": "Darker",
          "hsl": "hsl(23, 79%, 74%)",
          "h": 23,
          "s": 79,
          "l": 74
        },
        {
          "name": "Dark",
          "hsl": "hsl(23, 79%, 76%)",
          "h": 23,
          "s": 79,
          "l": 76
        },
        {
          "name": "Normal",
          "hsl": "hsl(23, 79%, 80%)",
          "h": 23,
          "s": 79,
          "l": 80
        },
        {
          "name": "Light",
          "hsl": "hsl(23, 79%, 83%)",
          "h": 23,
          "s": 79,
          "l": 83
        },
        {
          "name": "Lighter",
          "hsl": "hsl(23, 79%, 86%)",
          "h": 23,
          "s": 79,
          "l": 86
        },
        {
          "name": "Lightest",
          "hsl": "hsl(23, 79%, 92%)",
          "h": 23,
          "s": 79,
          "l": 92
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(23, 79%, 96%)",
          "h": 23,
          "s": 79,
          "l": 96
        }
      ]
    },
    {
      "name": "accent",
      "hue": 17,
      "saturation": 0,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(17, 0%, 10%)",
          "h": 17,
          "s": 0,
          "l": 10
        },
        {
          "name": "Darkest",
          "hsl": "hsl(17, 0%, 21.125%)",
          "h": 17,
          "s": 0,
          "l": 21.125
        },
        {
          "name": "Darker",
          "hsl": "hsl(17, 0%, 32.25%)",
          "h": 17,
          "s": 0,
          "l": 32.25
        },
        {
          "name": "Dark",
          "hsl": "hsl(17, 0%, 37%)",
          "h": 17,
          "s": 0,
          "l": 37
        },
        {
          "name": "Normal",
          "hsl": "hsl(17, 0%, 43%)",
          "h": 17,
          "s": 0,
          "l": 43
        },
        {
          "name": "Light",
          "hsl": "hsl(17, 0%, 58%)",
          "h": 17,
          "s": 0,
          "l": 58
        },
        {
          "name": "Lighter",
          "hsl": "hsl(17, 0%, 72%)",
          "h": 17,
          "s": 0,
          "l": 72
        },
        {
          "name": "Lightest",
          "hsl": "hsl(17, 0%, 85%)",
          "h": 17,
          "s": 0,
          "l": 85
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(17, 0%, 98%)",
          "h": 17,
          "s": 0,
          "l": 98
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
      "value": "0.8rem"
    },
    {
      "name": "borderRadius",
      "value": "0.4rem"
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
export const shadyGrey: Theme = JSON.parse(jsonTheme);
