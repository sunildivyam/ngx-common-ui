export const categoryParams = {
  id: {
    type: 'string',
    controlType: 'text',
    disabled: true,
    hidden: true
  },
  uid: {
    type: 'string',
    controlType: 'text',
    disabled: true,
    hidden: true
  },
  title: {
    type: 'string',
    controlType: 'text',
    value: '',
    label: 'Title',
    placeholder: 'Title',
    helpText: '',
    syncValidators: [
      { name: 'required' },
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [100] }
    ],
    asyncValidators: [],
    list: [],
    disabled: false
  },
  description: {
    type: 'string',
    controlType: 'textarea',
    value: '',
    label: 'Description',
    placeholder: 'Description',
    helpText: '(optional)',
    syncValidators: [
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [300] }
    ],
    asyncValidators: [],
    list: [],
    disabled: false
  },
  parents: {
    type: 'Array',
    controlType: 'checkbox',
    value: [],
    label: 'Choose Parent categories',
    placeholder: '',
    helpText: '(All categories to whom this could belong to)',
    syncValidators: [],
    asyncValidators: [],
    list: [], // Sets dynamically with cat ids
    disabled: false
  },
  imageUrl: {
    type: 'string',
    controlType: 'text',
    value: '',
    label: 'Category Image',
    placeholder: 'Category Image',
    helpText: '(Url)',
    syncValidators: [
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [500] }
    ],
    asyncValidators: [],
    list: [],
    actionBtn: 'Change',
    readonly: true,
    disabled: false
  },
  imageUrlImage: {
    type: 'Object',
    controlType: 'image',
    value: null,
    label: 'Upload category Image',
    placeholder: 'Upload category Image',
    helpText: '',
    syncValidators: [],
    asyncValidators: [
      {
        name: 'ImageValidatorService',
        imageDimsName: 'categoryImageDimensions'
      }
    ],
    list: [],
    actionBtn: 'Upload',
    disabled: false,
    hidden: true
  },
  bannerUrl: {
    type: 'string',
    controlType: 'text',
    value: '',
    label: 'Banner Image',
    placeholder: 'Banner Image',
    helpText: '(Url)',
    syncValidators: [
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [500] }
    ],
    asyncValidators: [],
    list: [],
    actionBtn: 'Change',
    readonly: true,
    disabled: false
  },
  bannerUrlImage: {
    type: 'Object',
    controlType: 'image',
    value: null,
    label: 'Upload Banner Image',
    placeholder: 'Upload Banner Image',
    helpText: '',
    syncValidators: [],
    asyncValidators: [
      {
        name: 'ImageValidatorService',
        imageDimsName: 'bannerImageDimensions'
      }
    ],
    list: [],
    actionBtn: 'Upload',
    disabled: false,
    hidden: true
  },
  isLive: {
    type: 'boolean',
    controlType: 'checkbox',
    value: true,
    label: 'Make this category Live',
    placeholder: '',
    helpText: '(Mark to make it Live)',
    syncValidators: [],
    asyncValidators: [],
    list: [],
    disabled: false
  },
  level: {
    type: 'number',
    controlType: 'number',
    value: 1,
    disabled: false,
    hidden: true
  },
  createTime: {
    type: 'string',
    controlType: 'text',
    disabled: true,
    hidden: true
  },
  updateTime: {
    type: 'string',
    controlType: 'text',
    disabled: true,
    hidden: true
  }
};
