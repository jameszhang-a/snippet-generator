import { Accordion, MediaQuery } from '@mantine/core';
import { faqInfo } from './faqInfo';

const FAQ = () => {
  return (
    <MediaQuery largerThan='md' styles={{ width: '50vw' }}>
      <Accordion multiple sx={{ width: '80vw', paddingTop: '20px' }}>
        {faqInfo.map((item: any) => (
          <Accordion.Item key={item.title} label={item.title}>
            {item.text}
          </Accordion.Item>
        ))}
      </Accordion>
    </MediaQuery>
  );
};

export default FAQ;
