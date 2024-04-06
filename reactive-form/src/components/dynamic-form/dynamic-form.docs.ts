// prettier-ignore
const formParams = {
  "firstName": {
    "value": "",
    "type": "string",
    "controlType": "text",
    "label": "First Name",
    "placeholder": "First Name...",
    "syncValidators": [
      { "name": "required" },
      { "name": "trimSpacesValidator" },
      { "name": "maxLength", "params": [70] }
    ],
    "asyncValidators": []
  },
  "bio": {
    "value": "",
    "type": "string",
    "controlType": "textarea",
    "label": "Bio",
    "placeholder": "provide your profile overview or description...",
    "syncValidators": [
      { "name": "required" },
      { "name": "trimSpacesValidator" },
      { "name": "maxLength", "params": [300] }
    ],
    "asyncValidators": []
  },
  "pincode": {
    "value": "",
    "type": "string",
    "controlType": "text",
    "label": "Pincode",
    "placeholder": "Pincode...",
    "syncValidators": [
      { "name": "required" },
      { "name": "trimSpacesValidator" },
      { "name": "maxLength", "params": [6] },
      { "name": "minLength", "params": [6] }
    ],
    "asyncValidators": [
      { "name": "PincodeValidatorService", "url": "/api/addresses/pincode" }
    ]
  }
};

export const DynamicFormComponent: any = {
  projectionContent: '',
  inputPropsValues: {
    value: formParams
  }
};
