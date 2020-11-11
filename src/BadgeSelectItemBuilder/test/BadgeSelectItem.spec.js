import React from 'react';
import BadgeOption from '../BadgeSelectItemBuilder';
import { SKINS } from '../constants';
import { cleanup, createRendererWithUniDriver } from '../../../test/utils/unit';

import { badgeSelectItemDriverFactory } from '../BadgeSelectItem.uni.driver';

describe('BadgeSelect', () => {
  const render = createRendererWithUniDriver(badgeSelectItemDriverFactory);

  const requiredProps = {
    id: 0,
    skin: SKINS.success,
    text: 'text',
  };

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<BadgeOption {...requiredProps} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should render text', async () => {
    const { driver } = render(<BadgeOption {...requiredProps} />);
    expect(await driver.getText()).toBe(requiredProps.text);
  });

  it('should render subtitle', async () => {
    const subtitle = 'subtitle';
    const { driver } = render(
      <BadgeOption {...requiredProps} subtitle={subtitle} />,
    );
    expect(await driver.getSubtitleText()).toBe(subtitle);
  });
});
