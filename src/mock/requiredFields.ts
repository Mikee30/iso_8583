import { RequiredFieldSchemaT } from './../t';

export const requiredFieldsSchema: any = [
  {
    processing_code: '888888',
    required_fields: [
      {
        '0000': [1, 2],
        '0100': [3, 4],
        '9999': [3, 4],
      },
    ],
    required_echo: [4],
  },
];