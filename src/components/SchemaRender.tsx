import { Form, Space } from 'antd';
import SchemaForm from './SchemaForm.tsx';
import formatSchemaItems from '../utils/formatSchemaItems.ts';
import { FC } from 'react';
import { SchemaRenderProps } from '../types/types.ts';

const SchemaRender: FC<SchemaRenderProps> = ({ schema, setAlert, title }) => {
  const onFinish = (values: never) => {
    const jsonString = JSON.stringify(values, null, 2);
    setAlert({ type: 'success', message: jsonString});
  };

  const formattedSchema = formatSchemaItems(schema);

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      {title && <h1>{title}</h1>}
      <Form onFinish={onFinish} layout="vertical">
        {formattedSchema.map((item, idx) => {
          return (
            <SchemaForm key={idx} item={item} />
          )
        })}
      </Form>
    </Space>
  );
};

export default SchemaRender;
