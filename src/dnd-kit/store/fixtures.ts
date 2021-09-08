import { FormData } from './types';

let id = 1;

function getId(): string {
  id++;
  return 'id-' + id;
}

export const demoForm: FormData = {
  id: getId(),
  sections: [
    {
      id: getId(),
      title: 'Basic Information',
      terms: [
        {
          id: getId(),
          title: 'Name',
          components: [
            {
              id: getId(),
              type: 'ShortAnswer',
              question: 'First Name',
            },
            {
              id: getId(),
              type: 'ShortAnswer',
              question: 'Last Name',
            },
          ],
        },
        {
          id: getId(),
          title: 'Pet',
          components: [
            {
              id: getId(),
              type: 'SingleCheckbox',
              question: 'Do you have pets?',
              checkedOption: 'I have one or more pet',
              uncheckedOption: "I don't have any pet",
            },
          ],
        },
        {
          id: getId(),
          title: 'Other',
          components: [],
        },
      ],
    },
  ],
};
