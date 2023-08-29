import { FC } from 'react';
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { SchemaFormProps } from '../types/types.ts';

const SchemaForm: FC<SchemaFormProps> = ({ item }) => {
  switch (item.type) {
    case 'string':
      return  (
        <Form.Item name={['form', item.label]} label={item.label}>
          <Input />
        </Form.Item>
      );
    case 'numeric':
      return  (
        <Form.Item name={['form', item.label]} label={item.label}>
          <InputNumber />
        </Form.Item>
      );
    case 'date':
      return (
        <Form.Item name={['form', item.label]} label={item.label}>
          <DatePicker />
        </Form.Item>
      );
    case 'boolean':
      return (
        <Form.Item
          valuePropName="checked"
          name={['form', item.label]}
          label={item.label}
        >
          <Checkbox />
        </Form.Item>
      )
    case 'multi-line':
      return (
        <Form.Item name={['form', item.label]} label={item.label}>
          <TextArea rows={4} />
        </Form.Item>
      )
    case 'enum':
      return (
        <Form.Item name={['form', item.label]} label={item.label}>
          <Radio.Group>
            {(item.radios ?? []).map((item, idx) => {
              return (
                <Radio key={item.label} value={idx + 1}>
                  {item.label}
                </Radio>
              )
            })}
          </Radio.Group>
        </Form.Item>
      )
    case 'button':
      return (
        <div className="flex justify-end">
          {(item.buttons ?? []).map((item, idx) => {
            return (
              <Button
                key={idx}
                size="large"
                type="primary"
                htmlType={item.label === 'Save' || item.label === 'Apply' ? 'submit' : 'reset'}
                className="ml-2 bg-stone-900"
              >
                {item.label}
              </Button>
            )
          })}
        </div>
      )
    default:
      return null;
  }
};

export default SchemaForm;
