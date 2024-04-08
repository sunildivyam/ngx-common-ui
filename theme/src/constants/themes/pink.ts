import { Theme } from '../../interfaces/theme.interface';
//prettier-ignore
const jsonTheme = `{
  "name": "pink",
  "title": "Pink Theme",
  "description": "Pink Theme",
  "colorPalettes": [
    {
      "name": "primary",
      "hue": 355,
      "saturation": 100,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(355, 100%, 60%)",
          "h": 355,
          "s": 100,
          "l": 60
        },
        {
          "name": "Darkest",
          "hsl": "hsl(355, 100%, 64%)",
          "h": 355,
          "s": 100,
          "l": 64
        },
        {
          "name": "Darker",
          "hsl": "hsl(355, 100%, 68%)",
          "h": 355,
          "s": 100,
          "l": 68
        },
        {
          "name": "Dark",
          "hsl": "hsl(355, 100%, 70%)",
          "h": 355,
          "s": 100,
          "l": 70
        },
        {
          "name": "Normal",
          "hsl": "hsl(355, 100%, 81%)",
          "h": 355,
          "s": 100,
          "l": 81
        },
        {
          "name": "Light",
          "hsl": "hsl(355, 100%, 82%)",
          "h": 355,
          "s": 100,
          "l": 82
        },
        {
          "name": "Lighter",
          "hsl": "hsl(355, 100%, 84%)",
          "h": 355,
          "s": 100,
          "l": 84
        },
        {
          "name": "Lightest",
          "hsl": "hsl(355, 100%, 86%)",
          "h": 355,
          "s": 100,
          "l": 86
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(355, 100%, 99%)",
          "h": 355,
          "s": 100,
          "l": 99
        }
      ]
    },
    {
      "name": "secondary",
      "hue": 34,
      "saturation": 100,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(34, 100%, 47%)",
          "h": 34,
          "s": 100,
          "l": 47
        },
        {
          "name": "Darkest",
          "hsl": "hsl(34, 100%, 49%)",
          "h": 34,
          "s": 100,
          "l": 49
        },
        {
          "name": "Darker",
          "hsl": "hsl(34, 100%, 55%)",
          "h": 34,
          "s": 100,
          "l": 55
        },
        {
          "name": "Dark",
          "hsl": "hsl(34, 100%, 62%)",
          "h": 34,
          "s": 100,
          "l": 62
        },
        {
          "name": "Normal",
          "hsl": "hsl(34, 100%, 70%)",
          "h": 34,
          "s": 100,
          "l": 70
        },
        {
          "name": "Light",
          "hsl": "hsl(34, 100%, 73%)",
          "h": 34,
          "s": 100,
          "l": 73
        },
        {
          "name": "Lighter",
          "hsl": "hsl(34, 100%, 78%)",
          "h": 34,
          "s": 100,
          "l": 78
        },
        {
          "name": "Lightest",
          "hsl": "hsl(34, 100%, 84%)",
          "h": 34,
          "s": 100,
          "l": 84
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(34, 100%, 99%)",
          "h": 34,
          "s": 100,
          "l": 99
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
          "hsl": "hsl(0, 0%, 2%)",
          "h": 0,
          "s": 0,
          "l": 2
        },
        {
          "name": "Darkest",
          "hsl": "hsl(0, 0%, 21.125%)",
          "h": 0,
          "s": 0,
          "l": 21.125
        },
        {
          "name": "Darker",
          "hsl": "hsl(0, 0%, 32.25%)",
          "h": 0,
          "s": 0,
          "l": 32.25
        },
        {
          "name": "Dark",
          "hsl": "hsl(0, 0%, 42%)",
          "h": 0,
          "s": 0,
          "l": 42
        },
        {
          "name": "Normal",
          "hsl": "hsl(0, 0%, 48%)",
          "h": 0,
          "s": 0,
          "l": 48
        },
        {
          "name": "Light",
          "hsl": "hsl(0, 0%, 67%)",
          "h": 0,
          "s": 0,
          "l": 67
        },
        {
          "name": "Lighter",
          "hsl": "hsl(0, 0%, 84%)",
          "h": 0,
          "s": 0,
          "l": 84
        },
        {
          "name": "Lightest",
          "hsl": "hsl(0, 0%, 96%)",
          "h": 0,
          "s": 0,
          "l": 96
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
      "value": "2048px"
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

export const pink: Theme = JSON.parse(jsonTheme);
