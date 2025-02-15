import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChooseTopic from '../components/ChooseTopics';

describe('Testing de ChooseTopic', () => {
  it('Debe renderizarse correctamente', () => {
    const { baseElement } = render(<ChooseTopic />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Debe mostrar el título y subtítulo correctos', () => {
    const { getByText } = render(<ChooseTopic />);
    expect(getByText('Choose Topics')).toBeInTheDocument();
    expect(
      getByText('You can choose topics and we will suggest suitable products for you')
    ).toBeInTheDocument();
  });

  it('Debe mostrar todas las categorías de temas', () => {
    const { getByText } = render(<ChooseTopic />);
    const topics = ['Fruits', 'Meat', 'Healthy', 'Snack', 'Vegetable', 'Fish', 'Drink', 'Nuts', 'Medicine'];
    
    topics.forEach(topic => {
      expect(getByText(topic)).toBeInTheDocument();
    });
  });

  it('Debe mostrar las imágenes para cada tema', () => {
    const { getAllByRole } = render(<ChooseTopic />);
    const images = getAllByRole('img');
    expect(images).toHaveLength(9); 
    
    images.forEach(img => {
      expect(img).toBeInTheDocument();
    });
  });

  it('Debe tener un botón "Done" visible', () => {
    const { getByText } = render(<ChooseTopic />);
    const doneButton = getByText('Done');
    expect(doneButton).toBeInTheDocument();
    expect(doneButton.tagName).toBe('BUTTON');
  });
});