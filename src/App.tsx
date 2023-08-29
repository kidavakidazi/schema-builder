import React, { useContext, useState } from 'react';
import './App.css'
import 'antd/dist/reset.css';
import { Alert, Button, Segmented, Space } from 'antd';
import { Context } from './context/ContextProvider.tsx';
import TextArea from 'antd/es/input/TextArea';
import { AlertInterface, FormSchema } from './types/types.ts';
import SchemaRender from './components/SchemaRender.tsx';

const App = () => {
  const contextValue = useContext(Context);
  const [tab, setTab] = useState<string | number>('Config');
  const [defaultSchema, setDefaultSchema] = useState<string>('');
  const [alert, setAlert] = useState<AlertInterface>({ type: undefined, message: '' });

  const schema = contextValue?.schema;
  const setSchema = contextValue?.setSchema as React.Dispatch<React.SetStateAction<FormSchema>>;
  const schemaItems = schema?.items ?? [];
  const title = schema?.title ?? '';

  const handleSchemaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDefaultSchema(e.target.value);
  };
  const handleApplyScheme = () => {
    setAlert({ type: undefined, message: ''})
    try {
      if (defaultSchema) {
        const parsedSchema = JSON.parse(defaultSchema);
        setSchema(parsedSchema);
      }
    } catch (error) {
      if (error instanceof SyntaxError) {
        setAlert({ type: 'error', message: error.message });
      } else {
        setAlert({ type: 'error', message: 'An error occurred while parsing JSON' });
      }
    }
  };

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <Segmented size="large" options={['Config', 'Result']} value={tab} onChange={setTab} />
      {tab === 'Config' ? (
        <>
          <TextArea
            rows={18}
            value={defaultSchema}
            placeholder="Build your form in JSON format"
            onChange={handleSchemaChange}
          />
          <Button
            onClick={handleApplyScheme}
            size="large"
            type="primary"
            className="bg-stone-900"
          >
            Apply
          </Button>
        </>
      ) : (
        <SchemaRender schema={schemaItems} setAlert={setAlert} title={title} />
      )}
      {alert.type && (
        <Alert message={alert.message} type={alert.type} />
      )}
    </Space>
  );
};

export default App
