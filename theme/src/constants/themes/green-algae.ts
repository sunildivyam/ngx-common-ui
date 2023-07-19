import { Theme } from '../../interfaces/theme.interface';

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
          "hsl": "hsl(81, 98%, 36%)",
          "h": 81,
          "s": 98,
          "l": 36
        },
        {
          "name": "Light",
          "hsl": "hsl(81, 98%, 58%)",
          "h": 81,
          "s": 98,
          "l": 58
        },
        {
          "name": "Lighter",
          "hsl": "hsl(81, 98%, 65%)",
          "h": 81,
          "s": 98,
          "l": 65
        },
        {
          "name": "Lightest",
          "hsl": "hsl(81, 98%, 73%)",
          "h": 81,
          "s": 98,
          "l": 73
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(81, 98%, 83%)",
          "h": 81,
          "s": 98,
          "l": 83
        }
      ]
    },
    {
      "name": "secondary",
      "hue": 48,
      "saturation": 75,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(48, 75%, 17%)",
          "h": 48,
          "s": 75,
          "l": 17
        },
        {
          "name": "Darkest",
          "hsl": "hsl(48, 75%, 21%)",
          "h": 48,
          "s": 75,
          "l": 21
        },
        {
          "name": "Darker",
          "hsl": "hsl(48, 75%, 27%)",
          "h": 48,
          "s": 75,
          "l": 27
        },
        {
          "name": "Dark",
          "hsl": "hsl(48, 75%, 37%)",
          "h": 48,
          "s": 75,
          "l": 37
        },
        {
          "name": "Normal",
          "hsl": "hsl(48, 75%, 44%)",
          "h": 48,
          "s": 75,
          "l": 44
        },
        {
          "name": "Light",
          "hsl": "hsl(48, 75%, 54%)",
          "h": 48,
          "s": 75,
          "l": 54
        },
        {
          "name": "Lighter",
          "hsl": "hsl(48, 75%, 61%)",
          "h": 48,
          "s": 75,
          "l": 61
        },
        {
          "name": "Lightest",
          "hsl": "hsl(48, 75%, 69%)",
          "h": 48,
          "s": 75,
          "l": 69
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(48, 75%, 85%)",
          "h": 48,
          "s": 75,
          "l": 85
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
          "hsl": "hsl(0, 0%, 7%)",
          "h": 0,
          "s": 0,
          "l": 7
        },
        {
          "name": "Darkest",
          "hsl": "hsl(0, 0%, 11%)",
          "h": 0,
          "s": 0,
          "l": 11
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
          "hsl": "hsl(0, 0%, 17%)",
          "h": 0,
          "s": 0,
          "l": 17
        },
        {
          "name": "Normal",
          "hsl": "hsl(0, 0%, 20%)",
          "h": 0,
          "s": 0,
          "l": 20
        },
        {
          "name": "Light",
          "hsl": "hsl(0, 0%, 54%)",
          "h": 0,
          "s": 0,
          "l": 54
        },
        {
          "name": "Lighter",
          "hsl": "hsl(0, 0%, 69%)",
          "h": 0,
          "s": 0,
          "l": 69
        },
        {
          "name": "Lightest",
          "hsl": "hsl(0, 0%, 82%)",
          "h": 0,
          "s": 0,
          "l": 82
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(0, 0%, 97%)",
          "h": 0,
          "s": 0,
          "l": 97
        }
      ]
    },
    {
      "name": "background",
      "hue": 95,
      "saturation": 74,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(95, 74%, 15%)",
          "h": 95,
          "s": 74,
          "l": 15
        },
        {
          "name": "Darkest",
          "hsl": "hsl(95, 74%, 24%)",
          "h": 95,
          "s": 74,
          "l": 24
        },
        {
          "name": "Darker",
          "hsl": "hsl(95, 74%, 34%)",
          "h": 95,
          "s": 74,
          "l": 34
        },
        {
          "name": "Dark",
          "hsl": "hsl(95, 74%, 49%)",
          "h": 95,
          "s": 74,
          "l": 49
        },
        {
          "name": "Normal",
          "hsl": "hsl(95, 74%, 60%)",
          "h": 95,
          "s": 74,
          "l": 60
        },
        {
          "name": "Light",
          "hsl": "hsl(95, 74%, 66%)",
          "h": 95,
          "s": 74,
          "l": 66
        },
        {
          "name": "Lighter",
          "hsl": "hsl(95, 74%, 72%)",
          "h": 95,
          "s": 74,
          "l": 72
        },
        {
          "name": "Lightest",
          "hsl": "hsl(95, 74%, 82%)",
          "h": 95,
          "s": 74,
          "l": 82
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(95, 74%, 92%)",
          "h": 95,
          "s": 74,
          "l": 92
        }
      ]
    }
  ],
  "typography": [
    {
      "name": "fontFamily",
      "value": "source-serif-pro, Georgia, Cambria, Times New Roman, Times, serif"
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
