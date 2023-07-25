import { Theme } from '../../interfaces/theme.interface';

const jsonTheme = `{
  "name": "pureGold",
  "title": "Pure Gold",
  "description": "Pure Gold",
  "colorPalettes": [
    {
      "name": "primary",
      "hue": 46,
      "saturation": 100,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(46, 100%, 22%)",
          "h": 46,
          "s": 100,
          "l": 22
        },
        {
          "name": "Darkest",
          "hsl": "hsl(46, 100%, 34%)",
          "h": 46,
          "s": 100,
          "l": 34
        },
        {
          "name": "Darker",
          "hsl": "hsl(46, 100%, 39%)",
          "h": 46,
          "s": 100,
          "l": 39
        },
        {
          "name": "Dark",
          "hsl": "hsl(46, 100%, 45%)",
          "h": 46,
          "s": 100,
          "l": 45
        },
        {
          "name": "Normal",
          "hsl": "hsl(46, 100%, 48%)",
          "h": 46,
          "s": 100,
          "l": 48
        },
        {
          "name": "Light",
          "hsl": "hsl(46, 100%, 61%)",
          "h": 46,
          "s": 100,
          "l": 61
        },
        {
          "name": "Lighter",
          "hsl": "hsl(46, 100%, 70%)",
          "h": 46,
          "s": 100,
          "l": 70
        },
        {
          "name": "Lightest",
          "hsl": "hsl(46, 100%, 76%)",
          "h": 46,
          "s": 100,
          "l": 76
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(46, 100%, 84%)",
          "h": 46,
          "s": 100,
          "l": 84
        }
      ]
    },
    {
      "name": "secondary",
      "hue": 126,
      "saturation": 69,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(126, 69%, 18%)",
          "h": 126,
          "s": 69,
          "l": 18
        },
        {
          "name": "Darkest",
          "hsl": "hsl(126, 69%, 28%)",
          "h": 126,
          "s": 69,
          "l": 28
        },
        {
          "name": "Darker",
          "hsl": "hsl(126, 69%, 38%)",
          "h": 126,
          "s": 69,
          "l": 38
        },
        {
          "name": "Dark",
          "hsl": "hsl(126, 69%, 53%)",
          "h": 126,
          "s": 69,
          "l": 53
        },
        {
          "name": "Normal",
          "hsl": "hsl(126, 69%, 61%)",
          "h": 126,
          "s": 69,
          "l": 61
        },
        {
          "name": "Light",
          "hsl": "hsl(126, 69%, 70%)",
          "h": 126,
          "s": 69,
          "l": 70
        },
        {
          "name": "Lighter",
          "hsl": "hsl(126, 69%, 74%)",
          "h": 126,
          "s": 69,
          "l": 74
        },
        {
          "name": "Lightest",
          "hsl": "hsl(126, 69%, 84%)",
          "h": 126,
          "s": 69,
          "l": 84
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(126, 69%, 92%)",
          "h": 126,
          "s": 69,
          "l": 92
        }
      ]
    },
    {
      "name": "accent",
      "hue": 80,
      "saturation": 0,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(80, 0%, 10%)",
          "h": 80,
          "s": 0,
          "l": 10
        },
        {
          "name": "Darkest",
          "hsl": "hsl(80, 0%, 21.125%)",
          "h": 80,
          "s": 0,
          "l": 21.125
        },
        {
          "name": "Darker",
          "hsl": "hsl(80, 0%, 32.25%)",
          "h": 80,
          "s": 0,
          "l": 32.25
        },
        {
          "name": "Dark",
          "hsl": "hsl(80, 0%, 38%)",
          "h": 80,
          "s": 0,
          "l": 38
        },
        {
          "name": "Normal",
          "hsl": "hsl(80, 0%, 44%)",
          "h": 80,
          "s": 0,
          "l": 44
        },
        {
          "name": "Light",
          "hsl": "hsl(80, 0%, 65.625%)",
          "h": 80,
          "s": 0,
          "l": 65.625
        },
        {
          "name": "Lighter",
          "hsl": "hsl(80, 0%, 76.75%)",
          "h": 80,
          "s": 0,
          "l": 76.75
        },
        {
          "name": "Lightest",
          "hsl": "hsl(80, 0%, 87.875%)",
          "h": 80,
          "s": 0,
          "l": 87.875
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(80, 0%, 99%)",
          "h": 80,
          "s": 0,
          "l": 99
        }
      ]
    },
    {
      "name": "background",
      "hue": 96,
      "saturation": 51,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(96, 51%, 10%)",
          "h": 96,
          "s": 51,
          "l": 10
        },
        {
          "name": "Darkest",
          "hsl": "hsl(96, 51%, 21.125%)",
          "h": 96,
          "s": 51,
          "l": 21.125
        },
        {
          "name": "Darker",
          "hsl": "hsl(96, 51%, 32.25%)",
          "h": 96,
          "s": 51,
          "l": 32.25
        },
        {
          "name": "Dark",
          "hsl": "hsl(96, 51%, 43.375%)",
          "h": 96,
          "s": 51,
          "l": 43.375
        },
        {
          "name": "Normal",
          "hsl": "hsl(96, 51%, 54.5%)",
          "h": 96,
          "s": 51,
          "l": 54.5
        },
        {
          "name": "Light",
          "hsl": "hsl(96, 51%, 65.625%)",
          "h": 96,
          "s": 51,
          "l": 65.625
        },
        {
          "name": "Lighter",
          "hsl": "hsl(96, 51%, 76.75%)",
          "h": 96,
          "s": 51,
          "l": 76.75
        },
        {
          "name": "Lightest",
          "hsl": "hsl(96, 51%, 87.875%)",
          "h": 96,
          "s": 51,
          "l": 87.875
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(96, 51%, 99%)",
          "h": 96,
          "s": 51,
          "l": 99
        }
      ]
    }
  ],
  "typography": [
    {
      "name": "fontFamily",
      "value": "Times new roman"
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
export const pureGold: Theme = JSON.parse(jsonTheme);
