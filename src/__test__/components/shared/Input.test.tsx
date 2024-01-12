import { render, screen } from '@testing-library/react';
import { Input, InputProps } from '../../../components/shared/Input';
import { FormProvider, useForm } from 'react-hook-form';

// Mock useForm
jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: jest.fn(() => ({
    register: jest.fn(),
    handleSubmit: jest.fn(),
    formState: {
      errors: {},
    },
  })),
}));

describe('Input', () => {
  test('should render data from props', () => {
    const data: InputProps = {
      type: 'text',
      label: 'test-label',
      name: 'test-name',
    };

    const formConditions = useForm();

    render(
      <FormProvider {...formConditions}>
        <Input type={data.type} label={data.label} name={data.name} />
      </FormProvider>
    );

    expect(screen.getByTestId('input')).toHaveAttribute('type', data.type);
    expect(screen.getByTestId('input-label')).toHaveTextContent(data.label);
  });
});
