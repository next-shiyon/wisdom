import { render, screen } from '@testing-library/react';
import { Input, InputProps } from '../../../components/shared/Input';

describe('Input', () => {
  test('should render data from props', () => {
    const data: InputProps = {
      type: 'text',
      label: 'test',
    };
    render(<Input type={data.type} label={data.label} />);

    expect(screen.getByTestId('input')).toHaveAttribute('type', data.type);
    expect(screen.getByTestId('input-label')).toHaveTextContent(data.label);
  });
});
