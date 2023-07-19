import { Theme } from '../../interfaces/theme.interface';

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
          "hsl": "hsl(57, 24%, 10%)",
          "h": 57,
          "s": 24,
          "l": 10
        },
        {
          "name": "Darkest",
          "hsl": "hsl(57, 24%, 21.125%)",
          "h": 57,
          "s": 24,
          "l": 21.125
        },
        {
          "name": "Darker",
          "hsl": "hsl(57, 24%, 32.25%)",
          "h": 57,
          "s": 24,
          "l": 32.25
        },
        {
          "name": "Dark",
          "hsl": "hsl(57, 24%, 43.375%)",
          "h": 57,
          "s": 24,
          "l": 43.375
        },
        {
          "name": "Normal",
          "hsl": "hsl(57, 24%, 50%)",
          "h": 57,
          "s": 24,
          "l": 50
        },
        {
          "name": "Light",
          "hsl": "hsl(57, 24%, 56%)",
          "h": 57,
          "s": 24,
          "l": 56
        },
        {
          "name": "Lighter",
          "hsl": "hsl(57, 24%, 64%)",
          "h": 57,
          "s": 24,
          "l": 64
        },
        {
          "name": "Lightest",
          "hsl": "hsl(57, 24%, 74%)",
          "h": 57,
          "s": 24,
          "l": 74
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(57, 24%, 85%)",
          "h": 57,
          "s": 24,
          "l": 85
        }
      ]
    },
    {
      "name": "secondary",
      "hue": 36,
      "saturation": 62,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(36, 62%, 10%)",
          "h": 36,
          "s": 62,
          "l": 10
        },
        {
          "name": "Darkest",
          "hsl": "hsl(36, 62%, 21.125%)",
          "h": 36,
          "s": 62,
          "l": 21.125
        },
        {
          "name": "Darker",
          "hsl": "hsl(36, 62%, 32.25%)",
          "h": 36,
          "s": 62,
          "l": 32.25
        },
        {
          "name": "Dark",
          "hsl": "hsl(36, 62%, 43.375%)",
          "h": 36,
          "s": 62,
          "l": 43.375
        },
        {
          "name": "Normal",
          "hsl": "hsl(36, 62%, 55%)",
          "h": 36,
          "s": 62,
          "l": 55
        },
        {
          "name": "Light",
          "hsl": "hsl(36, 62%, 65.625%)",
          "h": 36,
          "s": 62,
          "l": 65.625
        },
        {
          "name": "Lighter",
          "hsl": "hsl(36, 62%, 72%)",
          "h": 36,
          "s": 62,
          "l": 72
        },
        {
          "name": "Lightest",
          "hsl": "hsl(36, 62%, 82%)",
          "h": 36,
          "s": 62,
          "l": 82
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(36, 62%, 88%)",
          "h": 36,
          "s": 62,
          "l": 88
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
          "hsl": "hsl(17, 0%, 38%)",
          "h": 17,
          "s": 0,
          "l": 38
        },
        {
          "name": "Normal",
          "hsl": "hsl(17, 0%, 46%)",
          "h": 17,
          "s": 0,
          "l": 46
        },
        {
          "name": "Light",
          "hsl": "hsl(17, 0%, 65.625%)",
          "h": 17,
          "s": 0,
          "l": 65.625
        },
        {
          "name": "Lighter",
          "hsl": "hsl(17, 0%, 76.75%)",
          "h": 17,
          "s": 0,
          "l": 76.75
        },
        {
          "name": "Lightest",
          "hsl": "hsl(17, 0%, 87.875%)",
          "h": 17,
          "s": 0,
          "l": 87.875
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(17, 0%, 99%)",
          "h": 17,
          "s": 0,
          "l": 99
        }
      ]
    },
    {
      "name": "background",
      "hue": 225,
      "saturation": 100,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(225, 100%, 10%)",
          "h": 225,
          "s": 100,
          "l": 10
        },
        {
          "name": "Darkest",
          "hsl": "hsl(225, 100%, 21.125%)",
          "h": 225,
          "s": 100,
          "l": 21.125
        },
        {
          "name": "Darker",
          "hsl": "hsl(225, 100%, 32.25%)",
          "h": 225,
          "s": 100,
          "l": 32.25
        },
        {
          "name": "Dark",
          "hsl": "hsl(225, 100%, 43.375%)",
          "h": 225,
          "s": 100,
          "l": 43.375
        },
        {
          "name": "Normal",
          "hsl": "hsl(225, 100%, 54.5%)",
          "h": 225,
          "s": 100,
          "l": 54.5
        },
        {
          "name": "Light",
          "hsl": "hsl(225, 100%, 65.625%)",
          "h": 225,
          "s": 100,
          "l": 65.625
        },
        {
          "name": "Lighter",
          "hsl": "hsl(225, 100%, 76.75%)",
          "h": 225,
          "s": 100,
          "l": 76.75
        },
        {
          "name": "Lightest",
          "hsl": "hsl(225, 100%, 87.875%)",
          "h": 225,
          "s": 100,
          "l": 87.875
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(225, 100%, 99%)",
          "h": 225,
          "s": 100,
          "l": 99
        }
      ]
    }
  ],
  "typography": [
    {
      "name": "fontFamily",
      "value": "Open Sans"
    },
    {
      "name": "fontSize",
      "value": "16px"
    },
    {
      "name": "spacing",
      "value": "0.8rem"
    },
    {
      "name": "borderRadius",
      "value": "0.3rem"
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
