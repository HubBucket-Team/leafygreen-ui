import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { Tab, Tabs } from './index';

function ControlledTabs() {
  const [activeTab, setActiveTab] = useState<any>('test1');

  const changeHandler = (e: React.SyntheticEvent<Element, MouseEvent>) => {
    setActiveTab((e.target as HTMLLIElement).getAttribute('data-tab-id'));
  };

  return (
    <div>
      <Tabs onChange={changeHandler} selected={activeTab}>
        <Tab value="test1" title={text('title', 'Title 1')}>
          {text('Tab Content', 'Hello 1')}
        </Tab>
        <Tab value="test2" title="Title 2">
          Hello 2
        </Tab>
        <Tab value="test3" title="Title 3">
          Hello 3
        </Tab>
      </Tabs>
    </div>
  );
}

storiesOf('Tabs', module)
  .add('Uncontrolled', () => (
    <Tabs>
      <Tab
        default={boolean('default', true)}
        value="test1"
        title={text('title', 'Title 1')}
      >
        {text('Tab Content', 'Hello 1')}
      </Tab>
      <Tab disabled={boolean('disabled', true)} value="test2" title="Title 2">
        Hello 2
      </Tab>
      <Tab value="test3" title="Title 3">
        Hello 3
      </Tab>
    </Tabs>
  ))
  .add('Controlled', () => <ControlledTabs />);
