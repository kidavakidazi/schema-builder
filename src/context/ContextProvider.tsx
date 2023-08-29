import { createContext, useState, FC } from 'react';
import { ContextType, FormSchema, ProviderTypes } from '../types/types.ts';

export const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider: FC<ProviderTypes> = ({ children }) => {
  const [schema, setSchema] = useState<FormSchema>({ items: [] });

  const contextValue: ContextType = {
    schema,
    setSchema,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
