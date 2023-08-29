import React from 'react';

export interface ContextType {
  schema: FormSchema;
  setSchema: React.Dispatch<React.SetStateAction<FormSchema>>;
}

export interface ProviderTypes {
  children?: React.ReactNode;
}

export interface ItemInterface {
  label: string;
  type: 'string' | 'numeric' | 'date' | 'boolean' | 'multi-line' | 'enum' | 'button';
  radios?: ItemInterface[] | undefined;
  buttons?: ItemInterface[] | undefined;
}

export interface FormSchema {
  title?: string;
  items: ItemInterface[];
}

export interface SchemaFormProps {
  item: ItemInterface;
}

export interface SchemaRenderProps {
  schema: ItemInterface[];
  setAlert: (alert: AlertInterface) => void;
  title?: string;
}

type AlertType = 'error' | 'success' | 'info' | 'warning';

export interface AlertInterface {
  type: AlertType | undefined;
  message: string;
}
