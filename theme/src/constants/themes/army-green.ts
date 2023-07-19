import { Theme } from '../../interfaces/theme.interface';

const jsonTheme = `
{
  "name": "armyGreen",
  "title": "Army Green",
  "description": "Army Green Theme",
  "colorPalettes": [
    {
      "name": "primary",
      "hue": 119,
      "saturation": 71,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(119, 71%, 18%)",
          "h": 119,
          "s": 71,
          "l": 18
        },
        {
          "name": "Darkest",
          "hsl": "hsl(119, 71%, 23%)",
          "h": 119,
          "s": 71,
          "l": 23
        },
        {
          "name": "Darker",
          "hsl": "hsl(119, 71%, 28%)",
          "h": 119,
          "s": 71,
          "l": 28
        },
        {
          "name": "Dark",
          "hsl": "hsl(119, 71%, 34%)",
          "h": 119,
          "s": 71,
          "l": 34
        },
        {
          "name": "Normal",
          "hsl": "hsl(119, 71%, 39%)",
          "h": 119,
          "s": 71,
          "l": 39
        },
        {
          "name": "Light",
          "hsl": "hsl(119, 71%, 56%)",
          "h": 119,
          "s": 71,
          "l": 56
        },
        {
          "name": "Lighter",
          "hsl": "hsl(119, 71%, 62%)",
          "h": 119,
          "s": 71,
          "l": 62
        },
        {
          "name": "Lightest",
          "hsl": "hsl(119, 71%, 71%)",
          "h": 119,
          "s": 71,
          "l": 71
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(119, 71%, 81%)",
          "h": 119,
          "s": 71,
          "l": 81
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
          "hsl": "hsl(0, 0%, 10%)",
          "h": 0,
          "s": 0,
          "l": 10
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
          "hsl": "hsl(0, 0%, 43.375%)",
          "h": 0,
          "s": 0,
          "l": 43.375
        },
        {
          "name": "Normal",
          "hsl": "hsl(0, 0%, 55%)",
          "h": 0,
          "s": 0,
          "l": 55
        },
        {
          "name": "Light",
          "hsl": "hsl(0, 0%, 66%)",
          "h": 0,
          "s": 0,
          "l": 66
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
    },
    {
      "name": "background",
      "hue": 222,
      "saturation": 66,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(222, 66%, 10%)",
          "h": 222,
          "s": 66,
          "l": 10
        },
        {
          "name": "Darkest",
          "hsl": "hsl(222, 66%, 21.125%)",
          "h": 222,
          "s": 66,
          "l": 21.125
        },
        {
          "name": "Darker",
          "hsl": "hsl(222, 66%, 32.25%)",
          "h": 222,
          "s": 66,
          "l": 32.25
        },
        {
          "name": "Dark",
          "hsl": "hsl(222, 66%, 43.375%)",
          "h": 222,
          "s": 66,
          "l": 43.375
        },
        {
          "name": "Normal",
          "hsl": "hsl(222, 66%, 54.5%)",
          "h": 222,
          "s": 66,
          "l": 54.5
        },
        {
          "name": "Light",
          "hsl": "hsl(222, 66%, 65.625%)",
          "h": 222,
          "s": 66,
          "l": 65.625
        },
        {
          "name": "Lighter",
          "hsl": "hsl(222, 66%, 76.75%)",
          "h": 222,
          "s": 66,
          "l": 76.75
        },
        {
          "name": "Lightest",
          "hsl": "hsl(222, 66%, 87.875%)",
          "h": 222,
          "s": 66,
          "l": 87.875
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(222, 66%, 99%)",
          "h": 222,
          "s": 66,
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
      "value": "14px"
    },
    {
      "name": "spacing",
      "value": "1rem"
    },
    {
      "name": "borderRadius",
      "value": "1rem"
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
