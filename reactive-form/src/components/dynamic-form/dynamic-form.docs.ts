// prettier-ignore
const formParams = {
  imageUrl: {
    value: '',
    type: 'string',
    controlType: 'text',
    label: 'Image Url',
    placeholder: 'Image Url...',
    syncValidators: [
      { name: 'required' },
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [200] }
    ],
    asyncValidators: [],
    readonly: true
  },
  imageUrlImage: {
    value: '',
    type: 'Object',
    controlType: 'image',
    label: 'Profile Image',
    placeholder: 'Profile Image...',
    syncValidators: [],
    asyncValidators: []
  },
  firstName: {
    value: '',
    type: 'string',
    controlType: 'text',
    label: 'First Name',
    placeholder: 'First Name...',
    syncValidators: [
      { name: 'required' },
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [70] }
    ],
    asyncValidators: []
  },
  bio: {
    value: '',
    type: 'string',
    controlType: 'textarea',
    label: 'Bio',
    placeholder: 'provide your profile overview or description...',
    syncValidators: [
      { name: 'required' },
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [300] }
    ],
    asyncValidators: []
  },
  productImageUrls: {
    value: '',
    type: 'Array',
    controlType: 'text',
    label: 'Product Images',
    placeholder: 'Product Images...',
    syncValidators: [
      { name: 'required' }
    ],
    asyncValidators: [],
    readonly: true
  },
  imageUrlsImage: {
    value: '',
    type: 'Array',
    controlType: 'image',
    label: 'Upload Product Images',
    placeholder: 'Upload Product Images...',
    syncValidators: [],
    asyncValidators: []
  },
  pincode: {
    value: '',
    type: 'string',
    controlType: 'text',
    label: 'Pincode',
    placeholder: 'Pincode...',
    syncValidators: [
      { name: 'required' },
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [6] },
      { name: 'minLength', params: [6] }
    ],
    asyncValidators: [
      // { name: 'PincodeValidatorService', url: '/api/addresses/pincode' }
    ]
  }
};

export const DynamicFormComponent: any = {
  projectionContent: '',
  inputPropsValues: {
    params: formParams
  }
};
