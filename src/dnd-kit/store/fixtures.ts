import { FormBuilderData } from '../types/form-data';

let id = 1;

export function getId(): string {
  id++;
  return 'id-' + id;
}

export const demoForm: FormBuilderData = {
  id: getId(),
  type: 'Form',
  title: 'The Ultra Form',
  children: [
    {
      id: getId(),
      type: 'Section',
      title: 'Basic Information',
      children: [
        {
          id: getId(),
          type: 'Term',
          title: 'Name',
          children: [
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
            {
              id: getId(),
              type: 'ShortAnswer',
              question: 'Nick Name',
            },
          ],
        },
        {
          id: getId(),
          type: 'Term',
          title: 'Pet',
          children: [
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
          type: 'Term',
          title: 'Computer',
          children: [
            {
              id: getId(),
              type: 'SingleCheckbox',
              question: 'Do you have Mac?',
              checkedOption: 'I have Mac',
              uncheckedOption: "I don't Mac",
            },
            {
              id: getId(),
              type: 'SingleCheckbox',
              question: 'Do you have PC?',
              checkedOption: 'I have PC',
              uncheckedOption: "I don't PC",
            },
          ],
        },
      ],
    },
    {
      id: getId(),
      type: 'Section',
      title: 'Technical Information',
      children: [
        {
          id: getId(),
          type: 'Term',
          title: 'Language Level',
          children: [
            {
              id: getId(),
              type: 'ShortAnswer',
              question: 'Javascript',
            },
            {
              id: getId(),
              type: 'ShortAnswer',
              question: 'go lang',
            },
            {
              id: getId(),
              type: 'ShortAnswer',
              question: 'Python',
            },
          ],
        },
        {
          id: getId(),
          type: 'Term',
          title: 'Front End',
          children: [
            {
              id: getId(),
              type: 'SingleCheckbox',
              question: 'Do you have React experience?',
              checkedOption: 'Yes, I have',
              uncheckedOption: 'No, never heard of that',
            },
          ],
        },
        {
          id: getId(),
          type: 'Term',
          title: 'Other',
          children: [],
        },
      ],
    },
  ],
};
