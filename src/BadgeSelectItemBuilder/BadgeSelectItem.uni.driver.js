import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { textUniDriverFactory } from '../Text/Text.uni.driver';
import { dataHooks } from './constants';

export const badgeSelectItemDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets the badge select text
     * @return {Promise<string>} innerHTML content
     */
    getText: () => {
      const textDriver = textUniDriverFactory(findByHook(base, dataHooks.text));
      return textDriver.getText();
    },

    /**
     * Gets the badge select subtitle
     * @return {Promise<string>} innerHTML content
     */
    getSubtitle: () => {
      const textDriver = textUniDriverFactory(
        findByHook(base, dataHooks.subtitle),
      );
      return textDriver.getText();
    },
  };
};
