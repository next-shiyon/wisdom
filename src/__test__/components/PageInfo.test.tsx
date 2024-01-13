import { render, screen } from '@testing-library/react';
import PageInfo, { PageInfoProps } from '../../components/PageInfo';

describe('PageInfo', () => {
  test('should render data from props', () => {
    const data: PageInfoProps = {
      title: 'Test title',
      description: 'Test description',
    };
    render(<PageInfo title={data.title} description={data.description} />);

    expect(screen.getByText(data.title)).toBeInTheDocument();
    expect(screen.getByText(data.description)).toBeInTheDocument();
  });
});
