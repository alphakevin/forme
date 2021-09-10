import React, { useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Form, Input, Button, Radio } from 'antd';

type RequiredMark = boolean | 'optional';

interface CommonFieldEditorProps {
  data: any;
}

export function CommonFieldEditor(props: CommonFieldEditorProps) {
  const { data } = props;
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ requiredMarkValue: requiredMark }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
    >
      <Form.Item label="Label" required tooltip="This is a required field">
        <Input
          defaultValue={data.question}
          placeholder="Select all the structures that exist on your property"
        />
      </Form.Item>
      <Form.Item label="Placeholder">
        <Input defaultValue={data.description} placeholder="" />
      </Form.Item>
    </Form>
  );
}
