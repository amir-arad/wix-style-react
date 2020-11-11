import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { listItemSelectDriverFactory } from '../ListItemSelect/ListItemSelect.uni.driver';

export const badgeSelectItemDriverFactory = base => {
  const listItemSelectDriver = listItemSelectDriverFactory(base);

  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets the badge select text
     * @return {Promise<string>} innerHTML content
     */
    getText: () => listItemSelectDriver.getTitle(),

    /**
     * Gets the badge select subtitle
     * @return {Promise<string>} innerHTML content
     */
    getSubtitleText: () => listItemSelectDriver.getSubtitle(),
  };
};
