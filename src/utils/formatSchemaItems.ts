import { ItemInterface } from '../types/types.ts';

const formatSchemaItems = (array: ItemInterface[]): ItemInterface[] => {
  return array.reduce((acc: ItemInterface[], item) => {
    if (item.type === 'enum') {
      const existingIndex = acc.findIndex(obj => obj.type === 'enum');

      if (existingIndex !== -1) {
        if (!acc[existingIndex].radios) {
          acc[existingIndex].radios = [];
        }
        acc[existingIndex].radios!.push(item);
      } else {
        acc.push({
          label: 'Radio',
          type: 'enum',
          radios: [item],
        });
      }
    } else if (item.type === 'button') {
      const existingIndex = acc.findIndex(obj => obj.type === 'button');

      if (existingIndex !== -1) {
        if (!acc[existingIndex].buttons) {
          acc[existingIndex].buttons = [];
        }
        acc[existingIndex].buttons!.push(item);
      } else {
        acc.push({
          label: 'Button',
          type: 'button',
          buttons: [item],
        });
      }
    } else {
      acc.push(item);
    }

    return acc;
  }, []);
};

export default formatSchemaItems;